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
import productData from '../json-data/product-data'

const styles = productStyles
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

export class ProductList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            productList: productData
        }
    }
    
    render() {
        const { classes } = this.props
        console.log(this.state.productList)
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
                                {this.state.productList.map((row, i) => (
                                    <TableRow key={i}>
                                        <TableCell component="th" scope="row">
                                            <TextField
                                                id="outlined-primary"
                                                label=""
                                                value={row.productId}
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
                                                value={row.productName}
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
                                                value={row.qty}
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
                                                value={row.unitPrice}
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
                                                value={row.qty*row.unitPrice}
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

