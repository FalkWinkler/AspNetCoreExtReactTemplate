import * as React from 'react'
import { Panel } from '@extjs/reactor/modern';
import { renderWhenReady } from '@extjs/reactor';

class Layout extends React.Component {
    render() {
        return (
            <Panel title="Ext JS">Hello World!</Panel>
        )
    }
}

export default renderWhenReady(Layout);