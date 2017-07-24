import React from 'react'

class CategoryForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.category ? props.category.name : '',
      budget: props.category ? props.category.budget : 0,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    let { name, value, type } = e.target

    if (type === 'number') {
      try {
        this.setState({
          [name]: parseInt(value),
        })
      } catch (err) {
        console.error(err)
      }
    } else {
      this.setState({
        [name]: value,
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onComplete(Object.assign({}, this.state))
  }

  render() {
    return (
      <div className="category-form">
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            name="budget"
            type="number"
            placeholder="budget"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit">
            {this.props.buttonLabel}
          </button>
        </form>
      </div>
    )
  }
}

export default CategoryForm