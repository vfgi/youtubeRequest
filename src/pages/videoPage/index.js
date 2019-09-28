import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Creators as GetVideoActions } from '../../store/ducks/getVideo'

import { Container } from './style'

import Like from '../../components/icons/like'
import DisLike from '../../components/icons/disLike'
import EyeIcon from '../../components/icons/eyeIcon'

class Detail extends Component {
  componentDidMount() {
    this.props.getVideo({ id: this.props.match.params.id })
  }
  render() {
    let data = this.props.video.data
    return data.items
      ? data.items.map(value => (
          <Container>
            <div className="title">
              <span>{value.snippet.title}</span>
            </div>

            <div className="videoFrame">
              <iframe
                title="title"
                width="760"
                height="315"
                src={`https://www.youtube.com/embed/${this.props.match.params.id}`}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="subtitle">
              <span>{value.snippet.channelTitle}</span>
              <div className="action">
                <Like />
                {value.statistics.likeCount}
              </div>
              <div className="action">
                <DisLike />
                {value.statistics.dislikeCount}
              </div>
            </div>
            <div className="content">{value.snippet.description}</div>
            <div className="views">
              <EyeIcon />
              <span>{value.statistics.viewCount}</span>
            </div>
          </Container>
        ))
      : null
  }
}

const mapStateToProps = state => ({
  video: state.video
})

const mapDispatchToProps = dispatch => bindActionCreators(GetVideoActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail)
