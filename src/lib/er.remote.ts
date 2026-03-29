import { form, query } from "$app/server";
import { z } from "zod";

const schema = z.object({
	id: z.number(),
	title: z.string(),
});

const dataDb: z.infer<typeof schema>[] = [
	{
		id: 1,
		title: "test",
	},
	{
		id: 2,
		title: "test2",
	},
	{
		id: 3,
		title: "test3",
	},
];

export const getData = query(schema.pick({ id: true }), async ({ id }) => {
	return dataDb.find((item) => item.id === id);
});

export const getAllData = query(async () => {
	return dataDb;
});
export const updateData = form(schema, async ({ id, title }) => {
	const item = dataDb.find((item) => item.id === id);
	if (item) {
		item.title = title;
	}
	return dataDb;
});
