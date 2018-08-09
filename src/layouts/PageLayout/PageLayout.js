import React from 'react'
//  import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.sass'
import Header from '../../components/Header'

export const PageLayout = ({ children }) => (
  <div className='container'>
    <Header data='Çorluda seri katil' user='A.Ş. azılı çıktı.' />
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
