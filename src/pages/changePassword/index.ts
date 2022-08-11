import avatarIcon from '../../../static/images/avatar-png-icon.png';
import ChangePassword from './changePassword';
import ArrowButton from '../../components/arrowButton/arrowButton';
import InputLabel from '../../components/inputLabel/inputLabel';
import Button from '../../components/button/button';

const arrowButton = new ArrowButton(
    'div',
    {
        events: {
            click: (e: Event) => {
                e.preventDefault();
                console.log('arrBtn');
            },
        },
    },
);

const inputOldPass = new InputLabel(
    'li',
    {
        label: 'previous password',
        inputType: 'password',
        inputId: 'old',
        events:
            {
                keydown: (e: Event) => {
                    console.log(e.target);
                },
            },
    },
);

const inputPassword = new InputLabel(
    'li',
    {
        label: 'new password',
        inputType: 'password',
        inputId: 'new',
        inputName: "password",
        events:
            {
                keydown: (e: Event) => {
                    console.log(e.target);
                },
            },
    },
);

const inputPasswordScd = new InputLabel(
    'li',
    {
        label: 'repeat password',
        inputType: 'password',
        inputId: 'repeat',
        inputName: "password",
        events:
            {
                keydown: (e: Event) => {
                    console.log(e.target);
                },
            },
    },
);

const buttonSave = new Button(
    'div',
    {
        buttonType: 'button-save',
        btnValue: 'Save',
        events: {
            click: (e: Event) => {
                e.preventDefault();
                console.log(document.querySelectorAll('.inputLabel-wrapper input'));
            },
        },
        attr: {
            class: 'box-profile-bottom',
        },
    },
);

const data = {
    avatarIcon: avatarIcon,
    arrowButton: arrowButton,
    profile: false,
    inputOldPass: inputOldPass,
    inputPassword: inputPassword,
    inputPasswordScd: inputPasswordScd,
    buttons: true,
    button: buttonSave,
};

const changePassword = new ChangePassword(data);

export default changePassword;
