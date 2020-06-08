/**
 *
 * CategoryShop
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import actions from '../../actions';

import ProductList from '../../components/ProductList';
import NotFound from '../../components/NotFound';
import LoadingIndicator from '../../components/LoadingIndicator';

class CategoryShop extends React.PureComponent {
  componentDidMount() {
    const slug = this.props.match.params.slug;
    this.props.fetchCategoryProducts(slug);
  }

  render() {
    const { products, isLoading } = this.props;

    return (
      <div className='category-shop'>
        {isLoading ? (
          <LoadingIndicator />
        ) : products.length > 0 ? (
          <ProductList products={products} />
        ) : (
          <NotFound message='no products found.' />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.product.products,
    isLoading: state.product.isLoading
  };
};

export default connect(mapStateToProps, actions)(CategoryShop);
