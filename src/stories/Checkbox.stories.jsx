import {useArgs} from '@storybook/preview-api';
import Checkbox from '../components/Checkbox';

export default {
    title : "Inputs/Checkbox",
    component : Checkbox
}

export const Example = {
    args : {
        isChecked : false,
        label : 'Try Me!'
    },

    render : function Render(args){
        const [{isChecked}, updateArgs] = useArgs();

        const onChange  = () =>{
            updateArgs({isChecked : !isChecked})
        }

        return <Checkbox {...args} onChange = {onChange} isChecked = {isChecked}/>
    }
}