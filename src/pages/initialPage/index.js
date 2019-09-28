import React, { Component } from 'react'
import { Container } from './style'
import InfiniteScroll from 'react-infinite-scroll-component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Creators as GetListActions } from '../../store/ducks/getList'

import Loader from '../../components/loader'
import Preview from '../../components/previewComponent'
import SearchIcon from '../../components/icons/searchIcon'

class InitialPage extends Component {
  state = {
    items: Array.from({ length: 8 }),
    hasMore: true,
    data: false,
    query: ''
  }
  fetchMoreData = () => {
    this.props.addList({ query: this.state.query, nextPage: this.props.list.data.nextPageToken })
  }

  render() {
    let data = this.props.list.data

    return (
      <Container>
        <form
          className={data.items ? 'input animate' : 'input'}
          onSubmit={e => {
            e.preventDefault()
            this.setState({
              data: true
            })
            this.props.getList({ query: this.state.query })
          }}
        >
          <input
            type="text"
            placeholder="Pesquise pelo Vídeo"
            required
            onChange={e => this.setState({ query: e.target.value })}
          />
          <button>
            <SearchIcon width={'25px'} height={'25px'} color={'#000'} />
          </button>
        </form>
        {this.props.list.query === 'não encontrado' ? (
          <div>Não encontrado</div>
        ) : data.items ? (
          <div className="infinite">
            <InfiniteScroll
              dataLength={data.items ? data.items.length : null}
              hasMore={this.state.hasMore}
              loader={
                <div className="template">
                  {this.state.items.map(value => (
                    <Loader />
                  ))}
                </div>
              }
              height={500}
              endMessage={
                <p style={{ textAlign: 'center' }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
              <div className="template">
                {data.items.map(value => (
                  <Preview
                    img={value.snippet.thumbnails.high.url}
                    title={value.snippet.title}
                    description={value.snippet.description}
                    subtitle={value.snippet.channelTitle}
                    link={`/detalhes/${value.id.videoId}`}
                  />
                ))}
              </div>
            </InfiniteScroll>
          </div>
        ) : null}
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  list: state.list
})

const mapDispatchToProps = dispatch => bindActionCreators(GetListActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InitialPage)
