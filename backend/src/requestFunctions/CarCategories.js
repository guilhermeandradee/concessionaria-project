import { CarroDB } from "../../models/carro.js"


export const carForCategories = async (req, res) => {

    const body = req.body
    const categoryParam = req.params.category

    console.log(categoryParam)

    if(categoryParam === undefined || !categoryParam) {
        const qtdCarros = await CarroDB.count()

        const carros = await CarroDB.findAll()


           return res.status(200).json({
                qtdCarros: qtdCarros,
                carros: carros
            })

    }

    const qtdCarros = await CarroDB.count({
        where: {
            carroceria: `${categoryParam}`.toUpperCase()
        }
    })
    const carros = await CarroDB.findAll({
        where: {
            carroceria: `${categoryParam}`
        }
    })

    return res.status(200).json({
        qtdCarros: qtdCarros,
        carros: carros
    })
}