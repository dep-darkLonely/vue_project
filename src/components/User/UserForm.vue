/**
 * Description: user information form.
 * Date: 2019-03-18
 * Author: huan7
 */
<template>
    <Form  ref="userItem" :model="userItem" :label-width="80" :rules="userItemValidate">
        <Alert class="error-message" hidden show-icon closable type='error'>error information</Alert>
        <FormItem label="Name" prop="name">
            <Input v-model="userItem.name" placeholder="user name"></Input>
        </FormItem>
        <FormItem label="Birthday" prop="birthday" >
            <DatePicker type="date" placeholder="Select Birthday"  v-model="userItem.birthday"></DatePicker>
        </FormItem>
        <FormItem label="Gender" prop="gender">
            <RadioGroup v-model="userItem.gender">
                <Radio label="Male">Male</Radio>
                <Radio label="Female">Female</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="Address">
            <Input v-model="userItem.address" placeholder="user address"></Input>
        </FormItem>
        <FormItem label="Description">
            <Input type="textarea" v-model="userItem.description" placeholder="user information descrition" :autosize="{minRows: 5, maxRows: 5}"></Input>
        </FormItem>
    </Form>
</template>

<script>
export default {
    data () {
        return {
            userItem: {
                name: '',
                birthday: '',
                gender: 'Male',
                address: '',
                description: ''
            },
            userItemValidate: {
                name: [
                    { required: true, message: 'The name can not empty', trigger: 'blur'},
                    { type: 'string', max: 64, message: 'Name no more than 64 words', trigger: 'blur'}
                ],
                birthday: [
                    { required: true, type:'date', message: 'Please select the date', trigger: 'change'}
                ],
                gender: [
                    { required: true, message: 'The gender can not empty', trigger: 'change'}
                ]
            }
        };
    },
    methods: {
        ValidateForm: function (formName) {
            this.$refs[formName].validate((valid) => {
                if (!valid) {
                    $('.error-message').removeAttr("hidden");
                }
                console.log('valid:' + valid);
                this.$emit("listenToValidResult", valid);
            })
        }
    }
};
</script>
<style>
</style>
