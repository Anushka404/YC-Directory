import { defineType, defineField } from 'sanity';
import { UserIcon } from 'lucide-react';

//schema definition
export const author = defineType({
    name:'author',
    title: 'Author',
    type: 'document',
    icon: UserIcon,
    fields: [
        defineField({
            name: 'id',
            type:'number',
        }),
        defineField({
            name: 'name',
            type:'string',
        }),
        defineField({
            name: 'username',
            type:'string',
        }),
        defineField({
            name: 'email',
            type:'string',
        }),
        defineField({
            name: 'image',
            type:'url',
        }),
        defineField({
            name: 'bio',
            type:'text',
        }),
    ],
    preview:{
        select:{ //allows to select the author by name
            title:'name'
        }
    }
})