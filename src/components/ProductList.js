import React, { Component } from 'react'
import { 
    Card,
    withStyles, 
    Table, TableBody, 
    TableCell, TableContainer, 
    TableHead, 
    TableRow, 
    Paper,
    TextField,
    Button,
    TextareaAutosize} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import productStyles from '../styles/productListStyle'
import PropTypes from 'prop-types'

const styles = productStyles
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export class ProductList extends Component {
    render() {
        const { classes } = this.props
        return (
            <div>
                <Card>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell aligb="left">Product ID</TableCell>
                                    <TableCell align="left">Product Name</TableCell>
                                    <TableCell align="left">QTY</TableCell>
                                    <TableCell align="left">Unit Price</TableCell>
                                    <TableCell align="left">Total Price</TableCell>
                                    <TableCell align="left">Notes</TableCell>
                                    <TableCell align="left"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            <TextField
                                                id="outlined-primary"
                                                label=""
                                                value="Decolom Sheet"
                                                variant="outlined"
                                                color="primary"
                                                className={classes.textBox}
                                                size="small"
                                            />
                                        </TableCell>
                                        <TableCell align="right">
                                            <TextField
                                                id="outlined-primary"
                                                label=""
                                                value="Decolom Sheet"
                                                variant="outlined"
                                                color="primary"
                                                className={classes.textBox}
                                                size="small"
                                            />
                                        </TableCell>
                                        <TableCell align="right">
                                            <TextField
                                                id="outlined-primary"
                                                label=""
                                                value="Decolom Sheet"
                                                variant="outlined"
                                                color="primary"
                                                className={classes.textBox}
                                                size="small"
                                            />
                                        </TableCell>
                                        <TableCell align="right">
                                            <TextField
                                                id="outlined-primary"
                                                label=""
                                                value="Decolom Sheet"
                                                variant="outlined"
                                                color="primary"
                                                className={classes.textBox}
                                                size="small"
                                            />
                                        </TableCell>
                                        <TableCell align="right">
                                            <TextField
                                                id="outlined-primary"
                                                label=""
                                                value="Decolom Sheet"
                                                variant="outlined"
                                                color="primary"
                                                className={classes.textBox}
                                                size="small"
                                            />
                                        </TableCell>
                                        <TableCell align="right">
                                            <TextareaAutosize aria-label="minimum height" rowsMin={2} placeholder="Additional Information" />
                                        </TableCell>
                                        <TableCell align="right">
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                className={classes.button}
                                                startIcon={<DeleteIcon />}
                                            >
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Card>
            </div>
        )
    }
}

ProductList.propTypes = {
    classes: PropTypes.object.isRequired
};
  
export default withStyles(styles)(ProductList);

