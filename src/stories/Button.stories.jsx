import Button from '../components/Button';

export default {
    component : Button
};

export const Primary = {
    args: {
        label: 'Button',
        primary: true,
      },
}

export const Secondary = {
    args : {
        ...Primary.args,
        primary :false
    }
}
