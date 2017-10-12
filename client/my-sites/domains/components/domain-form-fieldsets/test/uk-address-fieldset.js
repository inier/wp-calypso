/**
 * @format
 * @jest-environment jsdom
 */

/**
 * External dependencies
 */
import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

/**
 * Internal dependencies
 */
import UkAddressFieldset from '../uk-address-fieldset';

jest.mock( 'i18n-calypso', () => ( {
	localize: x => x,
} ) );

describe( 'UK Address Fieldset', () => {
	const defaultProps = {
		getFieldProps: name => ( { name, value: '' } ),
	};

	test( 'should render correctly with default props', () => {
		const wrapper = shallow( <UkAddressFieldset { ...defaultProps } /> );
		expect( wrapper.find( '.uk-address-fieldset' ) ).to.have.length( 1 );
	} );

	test( 'should render expected input components', () => {
		const wrapper = shallow( <UkAddressFieldset { ...defaultProps } /> );
		expect( wrapper.find( '[name="address-1"]' ) ).to.have.length( 1 );
		expect( wrapper.find( '[name="address-2"]' ) ).to.have.length( 1 );
		expect( wrapper.find( '[name="city"]' ) ).to.have.length( 1 );
		expect( wrapper.find( '[name="postal-code"]' ) ).to.have.length( 1 );
	} );
} );
