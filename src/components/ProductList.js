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
import SaveIcon from '@material-ui/icons/Save';
import productStyles from '../styles/productListStyle'
import PropTypes from 'prop-types'
import productData from '../json-data/product-data'

const styles = productStyles

export class ProductList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            productList: productData,
            productId: "",
            productName: "",
            qty: 0,
            unitPrice: 0
        }
    }

    handleAdd = () => {
        const newObj = {
            "productId": "",
            "productName": "",
            "qty": 0,
            "unitPrice": 0
        }
        const pList = this.state.productList
        pList.push(newObj)
        this.setState({
            productList: pList
        })
    }

    handleEdit = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSave = () => {
        const pList = this.state.productList
        const len = pList.length
        pList[len-1].productId = this.state.productId
        pList[len-1].productName = this.state.productName
        pList[len-1].qty = this.state.qty
        pList[len-1].unitPrice = this.state.unitPrice
        this.setState({
            productList: pList
        })
        console.log(productData)
    }

    handleDelete = (index) => {
        this.setState({
            productList: this.state.productList.filter(item => item.productId !== index)
        })
    }
    
    render() {
        const { classes } = this.props
        return (
            <div>
                <Card className={classes.productCard}>
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
                                                name="productId"
                                                defaultValue={row.productId}
                                                variant="outlined"
                                                color="primary"
                                                className={classes.textBox}
                                                onChange={this.handleEdit}
                                                size="small"
                                            />
                                        </TableCell>
                                        <TableCell align="right">
                                            <TextField
                                                id="outlined-primary"
                                                name="productName"
                                                defaultValue={row.productName}
                                                variant="outlined"
                                                color="primary"
                                                className={classes.textBox}
                                                onChange={this.handleEdit}
                                                size="small"
                                            />
                                        </TableCell>
                                        <TableCell align="right">
                                            <TextField
                                                id="outlined-primary"
                                                name="qty"
                                                defaultValue={row.qty}
                                                variant="outlined"
                                                color="primary"
                                                className={classes.textBox}
                                                onChange={this.handleEdit}
                                                size="small"
                                            />
                                        </TableCell>
                                        <TableCell align="right">
                                            <TextField
                                                id="outlined-primary"
                                                name="unitPrice"
                                                defaultValue={row.unitPrice}
                                                variant="outlined"
                                                color="primary"
                                                className={classes.textBox}
                                                onChange={this.handleEdit}
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
                                                InputProps={{
                                                    readOnly: true,
                                                }}
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
                                                onClick={() => this.handleDelete(row.productId)}
                                            >
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <div classname={classes.outerDiv}>
                        <div className={classes.addiv}>
                            <Button 
                                variant="contained" 
                                size="small"
                                className={classes.addbtn} 
                                color="primary" 
                                onClick={this.handleAdd}
                            >
                                ADD PRODUCT
                            </Button>
                        </div>
                        <div className={classes.savediv}>
                            <Button 
                                variant="contained" 
                                startIcon={<SaveIcon />}
                                size="small" 
                                className={classes.savebtn}
                                color="primary"
                                onClick={this.handleSave}  
                            >
                                SAVE
                            </Button>
                        </div>
                        </div>
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

