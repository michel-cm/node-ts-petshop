import { Request, Response } from 'express';

import { createActiveMenuObject } from '../helpers/createActiveMenuObject';

export const home = (req: Request, res: Response) => {

    res.render('pages/page', {
        menu: createActiveMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        }
    });

}

export const dogs = (req: Request, res: Response) => {

    res.render('pages/page', {
        menu: createActiveMenuObject('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        }
    });

}

export const cats = (req: Request, res: Response) => {

    res.render('pages/page', {
        menu: createActiveMenuObject('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        }
    });

}

export const fishes = (req: Request, res: Response) => {

    res.render('pages/page', {
        menu: createActiveMenuObject('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        }
    });

}