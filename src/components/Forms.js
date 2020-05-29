import 'date-fns';
import React, { Component } from 'react'
import { Card, withStyles, TextField, FormControl } from '@material-ui/core'
import PropTypes from 'prop-types'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import { shippingData, billingData } from '../json-data/form-data'
import billingStyles from '../styles/formStyle'

const styles = billingStyles

export class Forms extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            selectedDate: this.props.bill ? billingData.orderDate : shippingData.orderDate
        }
    }

    handleDateChange = (date) => {
        this.setState({
            selectedDate: date
        })
    }
    
    render() {
        const { classes } = this.props
        const billDetails = []
        Object.keys(billingData).forEach((key) => billDetails.push(billingData[key]))
        return (
            <div>
                <Card className={classes.block}>
                    <div className="heading">
                        {
                            this.props.bill ? <h2>Billing Address</h2>
                            : <h2>Shipping Address</h2>
                        }
                    </div>
                    <div className="form">
                        <form className={classes.form} >
                            {
                                this.props.bill ? 
                                    Object.keys(billingData).map(type => 
                                        {if (type !== "orderDate") {
                                            return (
                                                <FormControl variant="outlined" className={classes.formControl}>
                                                    <TextField
                                                        id="outlined-primary"
                                                        label={type}
                                                        value={billingData[type]}
                                                        variant="outlined"
                                                        color="primary"
                                                        className={classes.textBox}
                                                        size="small"
                                                    />
                                                </FormControl>
                                            )
                                        }
                                    }   
                                )

                                :
                                    Object.keys(shippingData).map(type => 
                                        {if (type !== "orderDate") {
                                            return (
                                                <FormControl variant="outlined" className={classes.formControl}>
                                                    <TextField
                                                        id="outlined-primary"
                                                        label={type}
                                                        value={shippingData[type]}
                                                        variant="outlined"
                                                        color="primary"
                                                        className={classes.textBox}
                                                        size="small"
                                                    />
                                                </FormControl>
                                            )
                                        }
                                    }   
                                )
                            }
                            <MuiPickersUtilsProvider utils={DateFnsUtils} className={classes.date}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Order Date"
                                    value={this.state.selectedDate}
                                    onChange={this.handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </form>
                    </div>
                </Card>
            </div>
        )
    }
}

Forms.propTypes = {
    classes: PropTypes.object.isRequired
};
  
export default withStyles(styles)(Forms);
