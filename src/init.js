import { nanoid } from "nanoid";

const initProducts = [
	{
		unix: '1652907600', 
    id: nanoid(),
		fields: [
			{prop: 'name', value: 'Автобус', isEdit: false},
			{prop: 'category', value: 'Транспорт', isEdit: false},
			{prop: 'cost', value: '35', isEdit: false}
		]
	},
	{
		unix: '1652821200', 
    id: nanoid(),
		fields: [
			{prop: 'name', value: 'Молоко', isEdit: false},
			{prop: 'category', value: 'Продукты', isEdit: false},
			{prop: 'cost', value: '70', isEdit: false}
		]
	},
	{
		unix: '1652994000', 
    id: nanoid(),
		fields: [
			{prop: 'name', value: 'Хлебушек', isEdit: false},
			{prop: 'category', value: 'Продукты', isEdit: false},
			{prop: 'cost', value: '100', isEdit: false}
		]
	},
	{
		unix: '1652994000', 
    id: nanoid(),
		fields: [
			{prop: 'name', value: 'Ноутбук', isEdit: false},
			{prop: 'category', value: 'Кредиты', isEdit: false},
			{prop: 'cost', value: '5000', isEdit: false}
		]
	},
	{
		unix: '1652389200', 
    id: nanoid(),
		fields: [
			{prop: 'name', value: 'Коммуналка', isEdit: false},
			{prop: 'category', value: 'Дом', isEdit: false},
			{prop: 'cost', value: '6000', isEdit: false}
		]
	},
	{
		unix: '1618434000', 
    id: nanoid(),
		fields: [
			{prop: 'name', value: 'Корм', isEdit: false},
			{prop: 'category', value: 'Животные', isEdit: false},
			{prop: 'cost', value: '5000', isEdit: false}
		]
	},
	{
		unix: '1657400400', 
    id: nanoid(),
		fields: [
			{prop: 'name', value: 'Сок', isEdit: false},
			{prop: 'category', value: 'Продукты', isEdit: false},
			{prop: 'cost', value: '100', isEdit: false}
		]
	},
	{
		unix: '1657400400', 
    id: nanoid(),
		fields: [
			{prop: 'name', value: 'Яйца', isEdit: false},
			{prop: 'category', value: 'Продукты', isEdit: false},
			{prop: 'cost', value: '78', isEdit: false}
		]
	},
	{
		unix: '1657400400', 
    id: nanoid(),
		fields: [
			{prop: 'name', value: 'Конфеты', isEdit: false},
			{prop: 'category', value: 'Продукты', isEdit: false},
			{prop: 'cost', value: '254', isEdit: false}
		]
	},
	{
		unix: '1657400400', 
    id: nanoid(),
		fields: [
			{prop: 'name', value: 'Вкусняшка', isEdit: false},
			{prop: 'category', value: 'Животные', isEdit: false},
			{prop: 'cost', value: '300', isEdit: false}
		]
	},
	{
		unix: '1657400400', 
    id: nanoid(),
		fields: [
			{prop: 'name', value: 'Такси', isEdit: false},
			{prop: 'category', value: 'Транспорт', isEdit: false},
			{prop: 'cost', value: '234', isEdit: false}
		]
	},
];

export default initProducts;