import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, HeaderButton, platform, IOS, FormLayout, FormLayoutGroup, Select, Radio, Checkbox, Button, Input, Textarea, Link} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osname = platform();

const TestPanel = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="home">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
		</PanelHeader>
    <FormLayout>
      <Input type="email" top="E-mail" />
      <FormLayoutGroup top="Пароль" bottom="Пароль может содержать только латинские буквы и цифры.">
        <Input type="password"  placeholder="Введите пароль" />
        <Input type="password" placeholder="Повторите пароль" />
      </FormLayoutGroup>
      <Input top="Имя" />
      <Input top="Фамилия" />
      <Select top="Пол" placeholder="Выберите пол">
        <option value="m">Мужской</option>
        <option value="f">Женский</option>
      </Select>
      <div top="Тип документа">
        <Radio name="type">Паспорт</Radio>
        <Radio name="type">Загран</Radio>
      </div>
      <Textarea top="О себе" />
      <FormLayoutGroup>
        <Checkbox>Согласен со всем <Link>этим</Link></Checkbox>
        <div>
          <Button type="cell">Зарегистрироваться</Button>
        </div>
      </FormLayoutGroup>
    </FormLayout>
	</Panel>
);

TestPanel.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default TestPanel;
