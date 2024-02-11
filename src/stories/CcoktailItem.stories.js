import CocktailItem from "@/components/CocktailItem.vue";


export default {
    title: 'CocktailItem',
    component: CocktailItem,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    render: (args) => ({
        // Components used in your story `template` are defined in the `components` object
        components: {
            CocktailItem,
        },
        // The story's `args` need to be mapped into the template through the `setup()` method
        setup() {
            // Story args can be spread into the returned object
            return {
                ...args,
            };
        },
        // Then, the spread values can be accessed directly in the template
        template: '<CocktailItem :cocktail="cocktail" />',
    }),
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
};

export const ItemWithProps = {
    args: {
        cocktail: {
            idDrink: 10000,
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg',
            strDrink: 'Gin',

        },
    },
};
