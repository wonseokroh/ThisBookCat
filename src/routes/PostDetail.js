import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import axios from 'axios';
import Nav1 from '../components/Nav1';
import Reply from '../components/PostDetail/Reply';
import "../components/PostDetail/PostDetail.css";
import BookInfoModal from '../components/PostDetail/BookInfoModal';

class PostDetail extends Component {
  
  mockData = 
    {
      username : '제니퍼 로렌스',
      userimg : 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQzMjgyNDgwNjIxODIzNTU5/jennifer-lawrence_gettyimages-626382596jpg.jpg',
      thumbnail : 'https://s2982.pcdn.co/wp-content/uploads/2014/08/HP_hc_new_1.jpeg',
      title : 'Harry Potter and Philosopher\'s Stone',
      content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor possimus laboriosam porro obcaecati minus ipsa hic, alias eveniet explicabo id, quaerat et, expedita voluptatibus vitae ex perferendis similique illum blanditiis velit? Voluptate molestiae hic ipsam est tempora sapiente dolore suscipit. Quia sunt voluptates, est, at placeat aliquam soluta voluptas sequi architecto quas dolorum saepe. Assumenda blanditiis iste, modi aliquid voluptatum doloribus sequi saepe dolores atque alias fuga quasi nesciunt magnam qui, aspernatur eum, est perspiciatis mollitia. Earum in culpa qui eos quia alias corporis libero, labore, ipsa quam, suscipit iure veritatis velit dolor error. Adipisci cumque provident vero cum hic aspernatur molestiae beatae nulla recusandae pariatur, sed, ipsum eaque nobis id at. Esse expedita numquam accusantium ut recusandae sint explicabo est rerum nobis minima tenetur possimus, labore modi culpa consectetur dolorum, atque tempora, odio dolore repellat rem distinctio vitae totam eum? Maiores facere, sapiente numquam, culpa commodi perspiciatis dolore ab aliquid optio quaerat mollitia nobis harum doloremque distinctio. Illo quia atque harum unde deleniti quas. Quis possimus, harum quod, ducimus itaque dolorum quidem aut nisi quae labore facere est consequuntur, ex laborum? Delectus tempora incidunt quae amet facilis aut velit fuga sed dolore dignissimos dicta odio quo dolorem iste consequatur deleniti quam iusto quibusdam facere blanditiis accusantium, quia est dolor illum! Suscipit fuga maxime eaque incidunt beatae odit et animi officiis alias officia aperiam ipsum natus sed hic, in quidem magnam quibusdam harum omnis exercitationem dolore eum at pariatur sapiente! Quidem dolores, molestias itaque, soluta distinctio illum a ipsam ipsa deleniti officiis tempore? Eum, blanditiis mollitia iure a aspernatur placeat autem, debitis qui quod similique ut corrupti. Laborum, provident! Assumenda eum placeat ad debitis voluptates deleniti velit est ab unde voluptatum reprehenderit at ipsam eveniet, aperiam dicta corporis fuga beatae architecto? Deserunt soluta deleniti eum dolore repellendus possimus iure illo reiciendis culpa ex eveniet facilis ratione at, nisi eaque magni nobis aut cupiditate quia dicta omnis velit. Quibusdam quo molestiae, quis aliquid illo dolorum velit ad, inventore quaerat, fugiat dolores officiis voluptate vero necessitatibus distinctio numquam! Quisquam doloremque veritatis, debitis perspiciatis officiis est unde totam! Repellat, repellendus! Alias quis repellendus minima aperiam pariatur quia deserunt quod explicabo blanditiis vitae maxime placeat voluptatibus, corrupti eligendi nobis ducimus quaerat! Delectus cum quam pariatur, quaerat saepe at quas optio eum, quia eaque porro quasi quisquam laboriosam praesentium minus sequi dolor doloribus. Quae, expedita obcaecati ad hic vel mollitia neque optio minima porro. Optio ad nihil accusantium officiis aut maiores dolorum consectetur alias esse architecto placeat perferendis reprehenderit nesciunt modi, vel soluta eius quo debitis deleniti omnis, est quod! Architecto earum tempore recusandae eius debitis ullam veritatis sapiente eos voluptates nisi modi quam, aliquam laboriosam error minima omnis asperiores facilis nemo officia, eligendi quae nihil odit saepe? Laborum, magni debitis non autem ad nesciunt culpa qui dolorum incidunt, accusantium aspernatur inventore perspiciatis placeat, optio explicabo quis praesentium. Reprehenderit velit quae excepturi, illum possimus optio deleniti dicta ab facilis, iusto consequatur saepe aliquid at ipsa tenetur veritatis, explicabo iure odio mollitia architecto omnis quasi. Ipsa.',
      reply : [
        {username: '지혁', msg: '안녕하세요'},
        {username: '명우', msg: '해리포터 좋아요!'},
        {username: '원석', msg: 'Na to the Fla'},
        {username: '정민', msg: '안녕하세요. 허교익입니다. 떡볶이는 맛이 없는 음식입니다. 쏘ㅑㄹ라 소ㅑㄹ라 소ㅑㄹㄹ쇗라'},
        {username: '지혁', msg: '안녕하세요'},
        {username: '명우', msg: '해리포터 좋아요!'},
        {username: '원석', msg: 'Na to the Fla'},
        {username: '정민', msg: '안녕하세요. 허교익입니다. 떡볶이는 맛이 없는 음식입니다. 쏘ㅑㄹ라 소ㅑㄹ라 소ㅑㄹㄹ쇗라'},
        {username: '지혁', msg: '안녕하세요'},
        {username: '명우', msg: '해리포터 좋아요!'},
        {username: '원석', msg: 'Na to the Fla'},
        {username: '정민', msg: '안녕하세요. 허교익입니다. 떡볶이는 맛이 없는 음식입니다. 쏘ㅑㄹ라 소ㅑㄹ라 소ㅑㄹㄹ쇗라'},
        {username: '지혁', msg: '안녕하세요'},
        {username: '명우', msg: '해리포터 좋아요!'},
        {username: '원석', msg: 'Na to the Fla'},
        {username: '정민', msg: '안녕하세요. 허교익입니다. 떡볶이는 맛이 없는 음식입니다. 쏘ㅑㄹ라 소ㅑㄹ라 소ㅑㄹㄹ쇗라'},
        {username: '지혁', msg: '안녕하세요'},
        {username: '명우', msg: '해리포터 좋아요!'},
        {username: '원석', msg: 'Na to the Fla'},
        {username: '정민', msg: '안녕하세요. 허교익입니다. 떡볶이는 맛이 없는 음식입니다. 쏘ㅑㄹ라 소ㅑㄹ라 소ㅑㄹㄹ쇗라'},
        {username: '명우', msg: '해리포터 좋아요!'},
        {username: '원석', msg: 'Na to the Fla'}
       ],
      isLike : true,
      likeCount:5,
      isFollowing: false,
    }

  state = {
    thumbnail : '',
    title : '',
    content: '',
    reply: [
      {reply_id:1, username: '지혁', msg: '안녕하세요'},
      {reply_id:2, username: '명우', msg: '해리포터 좋아요!'},
      {reply_id:3, username: '원석', msg: 'Na to the Fla'},
      {reply_id:4, username: '정민', msg: '안녕하세요. 허교익입니다. 떡볶이는 맛이 없는 음식입니다. 쏘ㅑㄹ라 소ㅑㄹ라 소ㅑㄹㄹ쇗라'},
      {reply_id:5, username: '지혁', msg: '안녕하세요'},
      {reply_id:6, username: '명우', msg: '해리포터 좋아요!'},
      {reply_id:7, username: '정민', msg: '안녕하세요. 허교익입니다. 떡볶이는 맛이 없는 음식입니다. 쏘ㅑㄹ라 소ㅑㄹ라 소ㅑㄹㄹ쇗라'},
      {reply_id:8, username: '지혁', msg: '안녕하세요'},
      {reply_id:9, username: '명우', msg: '해리포터 좋아요!'},
      {reply_id:10, username: '원석', msg: 'Na to the Fla'},
      {reply_id:11, username: '정민', msg: '안녕하세요. 허교익입니다. 떡볶이는 맛이 없는 음식입니다. 쏘ㅑㄹ라 소ㅑㄹ라 소ㅑㄹㄹ쇗라'},
      {reply_id:12, username: '지혁', msg: '안녕하세요'},
      {reply_id:13, username: '명우', msg: '해리포터 좋아요!'},
      {reply_id:14, username: '원석', msg: 'Na to the Fla'},
      {reply_id:15, username: '정민', msg: '안녕하세요. 허교익입니다. 떡볶이는 맛이 없는 음식입니다. 쏘ㅑㄹ라 소ㅑㄹ라 소ㅑㄹㄹ쇗라'},
      {reply_id:16, username: '지혁', msg: '안녕하세요'},
      {reply_id:17, username: '명우', msg: '해리포터 좋아요!'},
      {reply_id:18, username: '원석', msg: 'Na to the Fla'},
      {reply_id:19, username: '정민', msg: '안녕하세요. 허교익입니다. 떡볶이는 맛이 없는 음식입니다. 쏘ㅑㄹ라 소ㅑㄹ라 소ㅑㄹㄹ쇗라'},
      {reply_id:20, username: '명우', msg: '해리포터 좋아요!'},
      {reply_id:21, username: '원석', msg: 'Na to the Fla'}
     ],
    replyCount : '', //댓글 갯수
    isLike: false, // 지금 보고있는 유저가 이 포스트를 좋아하는지 아닌지 (렌더전에 받아온 데이터에 의해 초기값이 세팅되어야 함.)- 클릭 하냐 마냐에 따라 likecount 도 변동되어야 함.
    likeCount: 10, //이 포스트의 좋아요 숫자. isLike state와도 관련있음. (렌더전에 받아온 데이터에 의해 초기값이 세팅되어야 함.)
    bookInfo: '',
    show : false,
    yap: '',
    isFollowing: true,
    comment:'',
  }

  _getPostData = () => {
    // this.props 가 어떻게 오는지 봐야함.
    // axios.get()
  }

  _newReply = (e) => {
    this.setState({comment: e.target.value})
  }

  _makeReply = () => {
    //포스트 보내고, 다시 그 글의 전체 reply정보 받아와서 state에 다시 set합니다.
    //axios.post ()
    // res 받기 ()
    // this.setState({reply:'썸띵썸띵'});
    const reply = this.state.reply
    reply.push({
      reply_id: this.state.reply.length,
      username: '원석',
      msg: this.state.comment})
    this.setState({reply: reply});
  }

  _getBookInfo = () => {
    //알라딘에서 책 정보 가져오기
  }

  _handleLike = () => {
    //레몬에 온클릭 함수로 걸고있음.
    //클릭할때마다 axios 요청 보내기.&& state를 setting 하기
    // axios.put
    // .then
    if(this.state.isLike){
      this.setState({
        isLike: false,
        likeCount : this.state.likeCount -1
      })
    }else{
      this.setState({
        isLike: true,
        likeCount : this.state.likeCount +1
      })
    }
  }

  _handleClose = () => {
    this.setState({ show: false });
    // console.log('모달을 숨겨라. this.state.show',this.state)
  }

  _handleShow = () => {
    this.setState({ show: true });
    // console.log('모달을 보여줘. this.state.show',this.state)
  }

  _handleFollowing = () => {
    // "팔로우" 버튼 클릭하면, "팔로잉"으로 바뀌고(팔로우하기) "팔로잉" 버튼 클릭하면, "팔로우"로 바뀌기 (언팔하기)
    //axios.put()// 1. 내가 팔로우 또는 언팔 한다는 거 
    // .then( // 그 정보를 잘 보냈으면, 스테이트 바꾸기
    if(this.state.isFollowing){
      this.setState({isFollowing: false})
    }else{
      this.setState({isFollowing: true})
    }
  }

  componentWillMount(){
    this._getPostData(); //이 포스트에 대한 모든 정보
    //이 포스트에 대한 나의 정보
    this._getBookInfo();
  }

  render() {
    return (
      <div>
        <Nav1 />
        {console.log(this.props)}
        <div className='post_detail'>
          <div className='post_detail_left'>
            <div> <img height={window.innerHeight * 0.6} src={this.props.location.state.imgUrl} alt={this.mockData.title}/></div>
            <h2>{this.mockData.title}</h2> 
            <div className='post_detail_content'>{this.mockData.content}</div> 
          </div>

          <div className='post_detail_right'>

            <div className='post_detail_right_1'>
              <img src={this.mockData.userimg} className='img-circle' alt={this.props.location.state.username} />
              {this.state.isFollowing ?
                  <h4 className='post_detail_following' onClick={this._handleFollowing}>팔로잉</h4> :
                  <h4 className='post_detail_follow' onClick={this._handleFollowing}>팔로우</h4>}
              <h1 className='post_detail_username'>{this.props.location.state.username}</h1>
            </div>

            <div className='post_detail_right_2'>
              <div className='post_detail_icon'><Icon name="pencil alternate" size="large" fitted/> X {this.state.reply.length}</div>
              <div className='post_detail_icon'>
                {this.state.isLike ?
                  <span><Icon name="lemon" size="large" fitted onClick={this._handleLike} />X {this.state.likeCount}</span> :
                  <span><Icon name="lemon outline" size="large" fitted onClick={this._handleLike} />X {this.state.likeCount}</span>}
              </div>
              <div className='post_detail_icon' onClick={this._handleShow}>
                <Icon name="book" size="large" fitted/> info
              </div>
              <BookInfoModal show = {this.state.show} hide = {this._handleClose} />
            </div>
            
            <div className='post_detail_right_3'>
              {this.state.reply.map((reply, index) => <Reply reply={reply} key={index}/>)}
            </div>

            <div className='post_detail_right_2'>
              <form>
                <input
                  className='post_detail_reply_input'
                  type="text"
                  placeholder="댓글을 입력해라"
                  onChange={this._newReply}></input>
                <span onClick={this._makeReply}><Icon name="pencil alternate" fitted size="large" /></span>
              </form>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default PostDetail;
