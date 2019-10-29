<template>
    <div class="container">
        <form>
            <div class="row" v-if="!submitted">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <form>
                        <!-- Exercise 3 -->
                        <!-- Edit the Example from above and create a custom "Full Name" Control -->
                        <!-- which still holds the First Name and Last Name Input Field -->

                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email"
                                   class="form-control"
                                   id="exampleInputEmail1"
                                   aria-describedby="emailHelp"
                                   placeholder="Enter email"
                                   v-model="email">
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password"
                                   class="form-control"
                                   id="exampleInputPassword1"
                                   placeholder="Password"
                                   v-model="password">
                        </div>
                        <div class="form-group form-radio">
                            <input type="radio"
                                   class="form-radio-input"
                                   id="Yes"
                                   value="Yes"
                                   v-model="storeData">
                            <label class="form-check-label" for="Yes" > Yes </label>
                        </div>
                        <div class="form-group form-radio">
                            <input type="radio"
                                   class="form-radio-input"
                                   id="No"
                                   value="No"
                                   v-model="storeData">
                            <label class="form-check-label" for="No"> No</label>
                        </div>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                        <button type="submit"
                                class="btn btn-dark"
                                @click.prevent="submitted = true">Submit</button>
                    </form>

                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="submitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{firstName}} {{lastName}}</p>
                        <p>Mail: {{email}}</p>
                        <p>Password: {{password}}</p>
                        <p>Store in Database?: {{storeData}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                storeData: 'Yes',
                submitted: false
            }
        }
    }
</script>

<style>
</style>
