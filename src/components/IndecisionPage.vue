<script>
    export default {
        data() {
            return {
                question: '',
                answer: null,
                image: '',
                isValidQuestion: false,
            }
        },
        methods: {
            async getAnswer() {
                this.answer = 'Thinking...'
                try {
                    const { answer, image } = await fetch('https://yesno.wtf/api').then((res) => res.json());
                    this.answer = answer;
                    this.image = image;
                } catch (error) {
                    this.answer = 'Ask later'
                    this.image = null;
                }
            }
        },
        watch: {
            question(value) {
                console.log({ value });

                this.isValidQuestion = false;
                if (!value.endsWith('?')) return;
                this.isValidQuestion = true;

                if (this.question.toLocaleLowerCase().includes('enrique') || this.question.toLocaleLowerCase().includes('judio')) {
                    this.image = 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2013/01/24/12/v2-cute-cat-picture.jpg?width=1200';
                    this.answer = 'No matter what did you ask, he always love you darling';
                } else if (this.question.toLocaleLowerCase().includes('daniel')) {
                    this.answer = 'He don\'t deserve you darling'
                } else if (this.question.toLocaleLowerCase().includes('yo')) {
                    this.image = 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2013/01/24/12/v2-cute-cat-picture.jpg?width=1200';
                    this.answer = 'You are the prettiest girl that i\'ve seen';
                } else {
                    this.getAnswer();
                }

            }
        },
    }
</script>

<template>
    <img v-if="image" :src="image" alt="background meme" />
    <div class="bg-dark"></div>

    <div class="indecision-container">
        <input type="text" placeholder="Ask me a question" v-model="question" />
        <p>You must end with the (?) symbol</p>

        <div v-if="isValidQuestion">
            <h2>{{ question }}</h2>
            <p>{{ answer }}</p>
        </div>

    </div>
</template>

<style scoped>
    img, .bg-dark {
        height: 100vh;
        left: 0px;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        top: 0px;
        width: 100vw;
    }

    .bg-dark {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .indecision-container {
        position: relative;
        z-index: 99;
    }
    
    input {
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 20px;
        margin-top: 0px;
    }

    h1, h2 {
        color: white;
    }
    
    h2 {
        margin-top: 150px;
    }

</style>
