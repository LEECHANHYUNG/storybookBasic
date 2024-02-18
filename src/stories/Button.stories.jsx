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

export const PrimaryLongName = {
    args : {
        ...Primary.args,
        label : 'Primary with a really long name',
    }
}