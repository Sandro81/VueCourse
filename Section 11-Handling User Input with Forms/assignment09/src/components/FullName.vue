<template>
    <div>
        <div class="form-group">
            <label for="firstName">First name</label>
            <input type="text"
                   class="form-control"
                   id="firstName"
                   placeholder="First name"
                   :value="firstName"
                   @input="nameChanged(true, $event)">
        </div>
        <div class="form-group">
            <label for="lastName">Last name</label>
            <input type="text"
                   class="form-control"
                   id="lastName"
                   placeholder="Last name"
                   :value="lastName"
                   @input="nameChanged(false, $event)">
        </div>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        methods: {
            nameChanged(isFirst, event) {
                let name = '';
                if(isFirst) {
                    name = event.target.value + ' ' + this.lastName;
                } else {
                    name = this.firstName + ' ' + event.target.value;
                }
                this.value = name;
                this.$emit('input', this.value);
            }
        },
        computed: {
            firstName() {
                return this.value.split(" ")[0];
            },
            lastName() {
                return this.value.split(" ")[1];
            }
        }
    }
</script>

<style scoped>

</style>
