<script>
    export default {
        props: {
            title: {
                type: String,
                required: false,
            },
            start: {
                type: Number,
                default: 1,
                required: false,
                validator: (value) => value >= 0,
            },
        },
        data() {
            return {
                counter: this.start
            }
        },
        methods: {
            decrease() {
                this.counter -= 1;
            },
            increase() {
                this.counter += 1;
            }
        },
        computed: {
            getTitle() {
                return this.title ?? 'Counter';
            },
            squareCounter() {
                console.log(`SquareCounter`);
                return this.counter * this.counter;
            }
        }
    }
</script>

<template>
    <h2>{{ getTitle }}</h2>
    <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>

    <div>
        <button @click="decrease">-1</button>
        <button @click="increase">+1</button>
    </div>
</template>

<style scoped>
    button {
        background-color: #64BB87;
        border: none;
        border-radius: 5px;
        color: white;
        cursor: pointer;
        margin: 0 5px;
        padding: 5px 15px;
        transition: 0.3s ease-in-out;

        &:hover {
            background-color: #5aa67b;
            transition: 0.3s ease-in-out;
        }
    }
</style>
