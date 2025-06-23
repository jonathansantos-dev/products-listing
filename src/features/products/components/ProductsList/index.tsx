import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/GridLegacy';

import Stack from '@mui/material/Stack';

import { useProductsStore } from '../../store/product.store';
import { useGetProducts } from '../../hook/products.hook';

const ProductsList: React.FC = () => {
    const [categories, setCategories] = useState<any[]>([]);
    const { data, error, isFetching } = useGetProducts();
    const { typeView, products, setProducts, setTypeView, filter, searchTerm, setFilter } = useProductsStore();

    useEffect(() => {
        if (data?.length) {
            const categoriesFiltered: any[] = [...new Set(data?.map((item: any) => item.category))];

            console.log(categoriesFiltered)
            setCategories(categoriesFiltered);
            setProducts(data)
        }
    }, [data])


    useEffect(() => {
        if (filter) {
            setProducts(data?.filter((item: any) => item.category === filter))
        } else {
            setProducts(data)
        }
    }, [filter])


    useEffect(() => {
        if (searchTerm) {
            setProducts(data?.filter((item: any) => item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase())))
        } else {
            setProducts(data)
        }
    }, [searchTerm])

    if (isFetching) {
        return <>Carregando...</>
    }

    if (error) {
        return <>Deu Ruim</>
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: (theme.vars ?? theme).palette.text.secondary,
        ...theme.applyStyles('dark', {
            backgroundColor: '#1A2027',
        }),
    }));

    return (
        <Container maxWidth="lg">
            <button onClick={() => setTypeView('grid')}>grid</button>
            <button onClick={() => setTypeView('list')}>list</button>

            <div>
                {categories?.length && categories.map((item: any, key: any) => (
                    <button key={key} onClick={() => setFilter(item)}>{item}</button>
                ))}
            </div>

            {typeView === 'grid' ? (
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            {products?.length && products.map((item, index) => (
                                <Item><Card key={index} sx={{ minWidth: 100, maxWidth: 200, minHeight: 100, maxHeight: 200 }}>
                                    <CardContent >
                                        <img src={item.image} style={{ width: 100, height: 100 }} />

                                        <Typography variant="body2">{item.title}
                                        </Typography>
                                    </CardContent>
                                </Card></Item>

                            ))}
                        </Grid>
                    </Grid>
                </Box>
            ) : (
                <Stack direction='row' spacing={1} alignItems="center">
                    {products?.length && products.map((item, index) => (
                        <Item key={index}>{item.title}</Item>
                    ))}
                </Stack>)}

        </Container>
    );
}

export default ProductsList;