import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getHomeActive } from '../reducers'
import Buttons from './Buttons'

const AppContainer = ({ active }) => (
    <div className={active > 0 ? 'appHome' : 'hide'}>
        <div className="flex">
            <div className="flex flex-grow margin-left-small detail">
                <h2>A react shopping cart based on salesforce product data.</h2>
            </div>
            <div className="margin-right-small margin-top-small"><Buttons /></div>
        </div>
    </div>
)

AppContainer.propTypes = {
    active: PropTypes.number.isRequired,
}

const mapStateToProps = (state) => ({
    active: getHomeActive(state)
})

export default connect(
    mapStateToProps,
    {}
)(AppContainer)
