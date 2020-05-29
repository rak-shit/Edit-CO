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
import { v4 as uuidv4 } from 'uuid'
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
            notes: "",
            qty: 0,
            unitPrice: 0,
            changes: [],
            add: false
        }
    }

    handleAdd = () => {
        const newObj = {
            "productId": "",
            "productName": "",
            "qty": 0,
            "unitPrice": 0,
            "notes": "",
            "index": null
        }
        const pList = this.state.productList
        pList.push(newObj)
        this.setState({
            productList: pList,
            add: true
        })
    }

    handleChange = (event, index, i) => {
        if (this.state.add === true) {
            this.setState({
                [event.target.name]: event.target.value
            })
        } else {
            const item = {
                "index": i,
                "col": event.target.name,
                "val": event.target.value
            }
            var changes = this.state.changes
            changes.push(item)
            this.setState({
                changes: changes
            })
        }
    }

    handleSave = () => {
        if (this.state.add === true) {
            const pList = this.state.productList
            const len = pList.length
            pList[len-1].productId = this.state.productId
            pList[len-1].productName = this.state.productName
            pList[len-1].qty = this.state.qty
            pList[len-1].unitPrice = this.state.unitPrice
            pList[len-1].notes = this.state.notes
            pList[len-1].index = uuidv4()
            this.setState({
                productList: pList,
                add: false
            })
            console.log(productData)
        } else {
            const pList = this.state.productList
            const changes = this.state.changes
            changes.map(item => {
                if (item.col === "unitPrice") {
                    pList[item.index].unitPrice = item.val
                } else if(item.col === "qty") {
                    pList[item.index].qty = item.val
                } else {
                    pList[item.index].notes = item.val
                }
            })
            this.setState({
                productList: pList,
                changes: []
            })
            console.log(productData)
        }
    }

   handleDelete = (index, i) => {
       this.setState({
           productList: this.state.productList.filter(item => item.index !== index)
       })
       productData.splice(i, 1)
       console.log(productData)
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
                                    <TableCell aligb="left" className={classes.tableHead}>Product ID</TableCell>
                                    <TableCell align="left" className={classes.tableHead}>Product Name</TableCell>
                                    <TableCell align="left" className={classes.tableHead}>QTY</TableCell>
                                    <TableCell align="left" className={classes.tableHead}>Unit Price</TableCell>
                                    <TableCell align="left" className={classes.tableHead}>Total Price</TableCell>
                                    <TableCell align="left" className={classes.tableHead}>Notes</TableCell>
                                    <TableCell align="left" className={classes.tableHead}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.productList.map((row, i) => (
                                    <TableRow key={row.index}>
                                        <TableCell align="right">
                                            <TextField
                                                id="outlined-primary"
                                                name="productId"
                                                defaultValue={row.productId}
                                                onChange={(event) => this.handleChange(event, row.index, i)}
                                                variant="outlined"
                                                color="primary"
                                                className={classes.textBox}
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
                                                onChange={(event) => this.handleChange(event, row.index, i)}
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
                                                onChange={(event) => this.handleChange(event, row.index, i)}
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
                                                onChange={(event) => this.handleChange(event, row.index, i)}
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
                                            <TextareaAutosize 
                                                aria-label="minimum height" 
                                                rowsMin={2}
                                                name="notes"
                                                value={row.notes} 
                                                placeholder="Additional Information" />
                                        </TableCell>
                                        <TableCell align="right">
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                className={classes.delbtn}
                                                startIcon={<DeleteIcon />}
                                                onClick={() => this.handleDelete(row.index, i)}
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

