import {z, defineCollection} from 'astro:content';

const menuCollection = defineCollection({
  type: 'content',
  schema: z.object({
    mainTitle: z.string(),
    mainTitleEN: z.string(),
    order: z.number(),
    items: z.array(
      z.object({
        id: z.number(),
        title: z.string(),
        titleEN: z.string(),
        price: z.string(),
        description: z.string(),
        descriptionEN: z.string(),
      })
    ),
  }),
});

const allergenCollection = defineCollection({
  type: 'content',
  schema: z.object({
    items: z.array(
      z.object({
        id: z.number(),
        title: z.string(),
        icon: z.string(),
      })
    ),
  }),
});

export const collections = {
  menu: menuCollection,
  allergenIcons: allergenCollection,
};
