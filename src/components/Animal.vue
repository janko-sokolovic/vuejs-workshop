<template>
    <router-link :to="`/animal/${animal.name}`" class="animal">
        <div class="animal-name">{{animal.name}}</div>
        <div class="animal-type">Type: {{animal.type}}</div>
        <div class="animal-habitat">Habitat: {{animal.habitat}}</div>
    </router-link>
</template>

<script>
    export default {
        name: "AnimalList",
        props: {
            animal: {type: Object, required: true}
        }
    };
</script>

<style scoped lang="scss">
    .animal {
        width: 115px;
        display: inline-block;
        background: #fafafa;
        margin: 5px;
        padding: 10px;
        border-bottom: 3px solid #aaa;
        cursor: pointer;
        color: #222;

        &:hover {
            background-color: #efefef;
            border-bottom: 3px solid #6a6;
        }

        .animal-name {
            font-size: 22px;
            margin-bottom: 10px;
            text-align: center;
            border-bottom: 1px solid #ccc;
            padding: 3px;
        }

        .animal-type {
            margin-bottom: 3px;
        }
    }
</style>