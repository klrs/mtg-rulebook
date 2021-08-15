import React from 'react';

class PasteView extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
          rawRuleData: "Please paste the rules here"
        }
      }

    render() {
        return (
            <div id='paster'>
                <form>
                    <label>
                        <input
                        type="text" name="name" value={this.state.rawRuleData}
                        onChange={(event) => {
                            console.log(event.target.value); this.props.handleRawData(event.target.value)}
                        }
                        />
                    </label>
                </form>
            </div>
        )
    }
}

export default PasteView