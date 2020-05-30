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
            selectedDate: this.props.bill ? billingData.orderDate : shippingData.orderDate,
            formData: this.props.bill ? billingData : shippingData
        }
    }

    handleDateChange = (date) => {
        this.setState({
            selectedDate: date
        })
    }

    handleChange = (event) => {
        if (this.props.bill === true) {
            const data = this.state.formData
            Object.keys(data).map(type => {
                if (event.target.name === type) {
                    data[type] = event.target.value
                }
            })
            this.setState({
                formData: data
            })
        }
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
                                Object.keys(this.state.formData).map(type => 
                                {
                                    if (type !== "orderDate") {
                                        return (    
                                            <FormControl variant="outlined" className={classes.formControl}>
                                                 {
                                                    this.props.bill ? 
                                                        <TextField
                                                            id="outlined-primary"
                                                            label={type}
                                                            name={type}
                                                            defaultValue={this.state.formData[type]}
                                                            variant="outlined"
                                                            color="primary"
                                                            className={classes.textBox}
                                                            onChange={this.handleChange}
                                                            size="small"
                                                        />

                                                    : 
                                                    
                                                    <TextField
                                                        id="outlined-primary"
                                                        label={type}
                                                        name={type}
                                                        value={this.state.formData[type]}
                                                        variant="outlined"
                                                        color="primary"
                                                        className={classes.textBox}
                                                        size="small"
                                                    />

                                                }
                                            </FormControl>
                                        )
                                    }
                                })
                            }
                            <FormControl className={classes.formControl}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="Order Date"
                                        value={this.state.selectedDate}
                                        className={classes.date}
                                        onChange={this.handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
                            </FormControl>
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
