<template>
    <div class="animal-details">
        <div class="animal-name">{{ theAnimal().name }}?</div>
        <div class="animal-description">Fantastic animal. Love it. So great. Trust me. Ask anyone.</div>
    </div>
</template>

<script>
    import ANIMALS from '../animals.mock';
    import _ from 'lodash';

    export default {
        name: "AnimalDetails",

        computed: {
            animalName() {
                return this.$route.params.name;
            }
        },

        methods: {
            theAnimal() {
                return _.find(ANIMALS, a => a.name === this.$route.params.name);
            }
        }
    };
</script>

<style scoped lang="scss">
    .animal-details {
        width: 500px;
        margin: 40px auto;
        background-color: #fff;
        text-align: center;
        font-size: 18px;

        .animal-name {
            font-size: 30px;
            padding: 10px;
        }

        .animal-description {
            padding: 10px;
        }
    }
</style>