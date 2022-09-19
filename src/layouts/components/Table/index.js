import React, { useEffect, useState, createRef } from 'react';
import { Card, CardContent, Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../../features/data/dataSlice';

export const Table = (props) => {
  const data = useSelector((state) => state.data.value);
  const dispatch = useDispatch();

  const [sales, setSales] = useState([]);
  const table_component = createRef();

  const columns = [
    { field: 'id', headerName: 'ID', width: 30 },
    { field: 'weekEnding', headerName: 'Week Ending', width: 160 },
    { field: 'retailSales', headerName: 'Retail Sales', width: 160 },
    { field: 'wholesaleSales', headerName: 'Wholesale Sales', width: 160 },
    { field: 'unitsSold', headerName: 'Units Sold', width: 160 },
    { field: 'retailerMargin', headerName: 'Retailer Margin', width: 160 },
  ];

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  useEffect(() => {
    if (data.sales) {
      let idx = 1;
      let new_sales = [];
      data.sales.map((sale) => {
        let new_sale = {};
        new_sale.id = idx;
        new_sale.weekEnding = sale.weekEnding;
        new_sale.retailSales = sale.retailSales;
        new_sale.wholesaleSales = sale.wholesaleSales;
        new_sale.unitsSold = sale.unitsSold;
        new_sale.retailerMargin = sale.retailerMargin;
        idx++;
        new_sales.push(new_sale);
      });
      setSales(new_sales);
    }
  }, [data])

  return (
    <Card
      sx={{ height: '100%' }}
      {...props}
      ref={table_component}
    >
      <CardContent sx={{ height: '100%' }}>
        <Grid
          container
          sx={{ overflow: 'scroll', height: '95%', width: '100%' }}
        >
          {sales ? 
            <DataGrid
              rows={sales}
              columns={columns}
              autoPageSize
            /> : <></>}
        </Grid>
      </CardContent>
    </Card>
  )
};