import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import Nav1 from '../components/Nav1';
import Reply from '../components/PostDetail/Reply';
import "../components/PostDetail/PostDetail.css";

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

  render() {
    return (
      <div>
        <Nav1 />
        <div className='post_detail'>
          <div className='post_detail_left'>
            <div> <img height={window.innerHeight * 0.6} src={this.mockData.thumbnail} alt={this.mockData.title}/></div>
            <h2>{this.mockData.title}</h2> 
            <div className='post_detail_content'>{this.mockData.content}</div> 
          </div>

          <div className='post_detail_right'>

            <div className='post_detail_right_1'>
              <img src={this.mockData.userimg} className='img-circle' alt={this.mockData.username} />
              <h1 className='post_detail_username'>{this.mockData.username}</h1>
              {this.mockData.isFollowing ?
                <h4 className='post_detail_following' >팔로잉</h4> :
                <h4 className='post_detail_follow' >팔로우</h4>}
            </div>

            <div className='post_detail_right_2'>
              <div className='post_detail_icon'><Icon name="pencil alternate" size="large" /> X {this.mockData.reply.length}</div>
              <div className='post_detail_icon'>
                {this.mockData.isLike ?
                  <span><Icon name="lemon" size="large" />X {this.mockData.likeCount}   </span> :
                  <span><Icon name="lemon outline" size="large" /> X {this.mockData.likeCount}</span>}
              </div>
              <div className='post_detail_icon'><Icon name="book" size="large" /> info </div>
            </div>
            
            <div className='post_detail_right_3'>
              {this.mockData.reply.map(reply => <Reply reply={reply}/>)}
            </div>

            
            
            {/* <Icon name="paw" size="big" />
            <Icon name="rocket" size="big" />
            <Icon name="magic" size="big" />
            <Icon name="gem outline" size="big" />
            <Icon name="user secret" size="big" />
            <Icon name="pencil alternate" size="big" />
            <Icon name="gulp" size="big" /> */}
            {/* <div> like: {this.mockData.likeCount} </div> */}
            {/* <div> {this.mockData.reply[0]}</div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default PostDetail;
