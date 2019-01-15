<template>
    <div>
        <div class="input-field-wrapper">
            <input type="text" v-model="searchQuery" class="search-field" placeholder="Filter animals..."/>
        </div>
        <div class="list-container">
            <animal v-for="(animal, i) in filteredAnimals" :key="i" :animal="animal"/>
        </div>
    </div>
</template>

<script>
    import ANIMALS from '../animals.mock';
    import Animal from './Animal';

    export default {
        name: "AnimalList",
        components: {Animal},

        data: () => {
            return {
                animals: ANIMALS,
                searchQuery: ''
            };
        },

        computed: {
            filteredAnimals() {
                if (!this.searchQuery) {return ANIMALS;}
                const sq = this.searchQuery.toLowerCase();
                return ANIMALS
                    .filter(a => a.name.toLowerCase().indexOf(sq) > -1);
            }
        }
    };
</script>

<style scoped lang="scss">
    .list-container {
        width: 900px;
        margin: 40px auto;
    }

    .input-field-wrapper {
        margin: 30px auto;
        width: 200px;

        .search-field {
            width: 100%;
            border: none;
            padding: 8px 14px;
            border-radius: 5px;
            border-bottom: 3px solid #aaa;
            font-size: 18px;
            color: #666;

            &:focus {
                border: none;
                outline: none;
                border-bottom: 3px solid #6a6;
            }
        }
    }
</style>