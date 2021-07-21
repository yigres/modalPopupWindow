import React, { useState } from 'react'
import './App.css'
import Modal from './Modal/Modal'

const App = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="app">
      <main>
        <button className="open-btn" onClick={() => setModalActive(true)}>Open modal window</button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore error velit dolorem ut culpa adipisci repudiandae molestias et dolor! Veniam, natus ipsum. Cumque mollitia velit sunt fugit quos vero assumenda recusandae dolorem maiores molestiae adipisci alias non tempora, ullam dolore nulla, quas earum ratione! Earum maiores maxime provident accusamus iste officiis molestiae autem corporis tenetur ut doloribus vero delectus debitis voluptatibus eligendi, nobis atque reprehenderit, aperiam, sint soluta dolores quidem quaerat nulla facere! Nesciunt nobis ea ab amet repellat harum aliquam, deleniti libero ducimus nam quos vel assumenda, ipsa commodi in eveniet ut a mollitia temporibus? Eveniet totam architecto atque debitis aliquid, vitae autem, suscipit, quidem eos illum dicta veniam. Ex magnam ad officia a vero unde officiis, omnis saepe quibusdam tempora eveniet nemo distinctio commodi temporibus alias cupiditate quos rerum! Blanditiis totam cumque reiciendis sunt, dignissimos obcaecati natus maiores expedita enim, ea animi, non odio. Accusamus iste ullam quia consequatur illo deleniti dicta temporibus aliquam nisi rem quam nobis maxime, dolorem corrupti. Dolorum, corporis odio quis vel incidunt architecto dolores blanditiis esse modi asperiores reprehenderit nam vero numquam impedit, reiciendis officiis sint, consequatur ab! Vitae labore repellat non est aspernatur. Enim, deserunt ipsam. Sapiente animi eius molestiae. Nesciunt, maiores.</p>
        <p>Temporibus ducimus inventore assumenda? Voluptates maxime ullam a minima, iusto voluptatum nobis labore illo odit magnam, at neque voluptatem esse eaque facere possimus. Vitae magni sint eaque veniam. Laborum excepturi aspernatur vitae obcaecati ut! Asperiores expedita impedit doloremque unde earum voluptatum, eaque soluta labore omnis ut ratione, nisi sunt alias error eveniet explicabo. Atque quis nemo voluptate natus enim amet! Ab culpa repudiandae in, iusto aperiam neque aliquam quas quos iste accusamus ea consequuntur fuga rem molestias cupiditate, itaque reiciendis fugiat quam non dignissimos! Cumque excepturi doloremque laudantium adipisci reprehenderit, maxime quisquam iusto assumenda nemo omnis at? Molestias labore exercitationem alias officiis excepturi quam cum pariatur esse iusto error? Aspernatur, voluptate sint praesentium voluptas odio, eligendi quos libero dicta rerum voluptatem beatae natus asperiores ipsam perspiciatis ex assumenda non atque fugiat nulla sapiente placeat totam consequuntur voluptatibus eaque? Non dolorem, corrupti at accusamus excepturi quam harum ipsum a dicta, omnis soluta veritatis aliquid beatae quis aperiam aut mollitia quibusdam, sunt nulla laborum cum cupiditate. Inventore quia, veniam velit dignissimos ea alias fugiat nam. Vero facilis, similique autem aliquam repudiandae ipsam soluta hic, harum, reiciendis iure ratione laboriosam. Molestias numquam consectetur vitae modi, totam fugiat ea maxime voluptatem quod cumque nemo!</p>
        <p>Saepe provident quaerat, tenetur amet totam assumenda quia ex repudiandae maiores tempore, nostrum labore quibusdam qui vel adipisci fuga ad ipsa libero dolorem aspernatur et voluptatibus aut id. Earum sit animi ut nisi amet eos ad provident, sequi deleniti dolores eveniet incidunt perferendis impedit maiores non ipsum, magnam quibusdam assumenda magni nemo obcaecati voluptas similique officiis consequuntur? Quae, a accusantium! Provident incidunt iusto deserunt cum. Minima, tenetur dignissimos. Magni nesciunt suscipit soluta alias minima incidunt, ipsam accusamus qui odio error aperiam vitae placeat! Soluta suscipit cumque animi temporibus eius unde voluptas est eligendi aspernatur vel, atque facilis sunt? Nisi blanditiis rerum amet corrupti molestiae dolores nostrum quia, quo ab esse? Nulla, blanditiis sit! Ipsum suscipit iusto eveniet tempora accusantium amet totam delectus. Accusamus ad iure eligendi sed voluptatibus repellat, commodi sint nihil dolores voluptas asperiores, enim quos. Eum eos dolorem officia non in sit? Dolore, quia enim id quis perspiciatis dignissimos ipsum sint, natus non eum necessitatibus rerum ratione dolor. Ea reiciendis odit ullam voluptas iste assumenda voluptate, eos dignissimos repellat cumque commodi. Fugit ad velit explicabo minus! Ullam quam placeat ipsa molestiae enim incidunt, aperiam officiis ab deleniti delectus libero tempora illum possimus voluptate sequi iusto consequuntur veniam. Odio!</p>
        <p>Obcaecati asperiores quaerat nostrum libero iusto hic rem provident. Maxime molestias nam consectetur dolor vero eligendi veniam eius tempore iusto quas repellendus minima dolorum, magni explicabo expedita blanditiis consequatur nostrum delectus similique? Suscipit ipsum consequuntur impedit voluptate veritatis labore dignissimos, doloribus animi est earum eaque dolores officiis numquam! Commodi, minus neque doloribus id placeat, beatae nesciunt corrupti dignissimos at enim suscipit. Ducimus molestiae fugiat et sed vel incidunt quos ipsa facilis ut obcaecati odit nostrum hic atque, accusantium ea neque necessitatibus voluptate ex. Ipsam, doloremque. Saepe cumque provident laudantium magnam distinctio repellendus, cupiditate modi, accusamus, asperiores alias inventore quos nostrum? Cumque nam exercitationem blanditiis temporibus. Consequatur assumenda praesentium minus suscipit amet ex impedit esse, natus sed eligendi laborum recusandae et ut error doloremque. Eligendi quo accusamus quaerat repudiandae consequatur, inventore blanditiis officiis quibusdam consectetur voluptatem error voluptatibus fuga doloremque ipsa, doloribus incidunt excepturi. Aspernatur dolore omnis, dignissimos eaque optio praesentium nobis provident inventore impedit expedita architecto sunt aut unde voluptates illum quos harum magni maxime quam. Ratione eaque vitae est tenetur consequuntur culpa iusto nulla eum fugiat provident minima accusamus porro ab, illo obcaecati soluta placeat et dignissimos! Ullam maiores nesciunt nihil doloremque iusto fugit provident. Maiores officiis laboriosam enim?</p>
        <p>Sint, accusantium necessitatibus? Eum quisquam temporibus qui, aliquid fuga ducimus consequuntur omnis, tenetur aperiam cumque, assumenda provident id quae quidem aliquam eaque maxime perferendis voluptate nulla! Saepe fugiat in officia ab asperiores a, reiciendis necessitatibus! Maxime doloribus inventore cupiditate commodi ex provident voluptatibus ipsam maiores quam nam repellendus animi, magnam doloremque odio? Voluptatibus similique iure pariatur quibusdam adipisci quod perspiciatis laudantium! Placeat, cum sit, cumque consequuntur ex soluta atque at porro eius perspiciatis assumenda omnis maxime? Aut itaque, eaque sapiente deleniti quam, obcaecati reprehenderit, eius possimus facere laudantium eum animi amet placeat. Perspiciatis aut ullam nihil dolores sunt tempora omnis nesciunt impedit corrupti non sint, veniam quisquam ratione. Harum ea molestias aut quia temporibus aliquid deleniti sapiente quo totam? Laborum expedita explicabo culpa dolore eius commodi quibusdam minus, animi labore recusandae odio maiores reiciendis corporis modi qui veritatis possimus enim laboriosam? Consequuntur quae natus error sed totam perspiciatis in sint, ea assumenda impedit recusandae rem sapiente magni nobis fuga eaque! Quam quisquam molestias temporibus odio eum recusandae? Tempore accusantium laboriosam iste rerum est sit in culpa voluptatibus optio cum. Deleniti iure vero perferendis accusantium delectus magnam facilis, error nobis, alias temporibus, consectetur obcaecati nostrum totam possimus quod omnis qui autem.</p>
        <p>Aut, sapiente iure quibusdam eveniet possimus nemo accusantium asperiores animi aliquam totam maxime voluptate dolore quam inventore quaerat corporis ex dicta tempora qui culpa tenetur alias amet voluptates illum? Consequuntur doloremque tenetur incidunt quasi maxime repellendus cum exercitationem sint repellat. Asperiores amet tenetur maxime suscipit ducimus impedit deleniti explicabo omnis iste quia, est mollitia. Dolores, at dolor dolore minus eius culpa aut incidunt itaque ab quam quae harum in autem adipisci magnam natus voluptatum dolorem consequatur veniam, eligendi magni. Sequi autem maxime accusantium nostrum provident tempore cum adipisci doloribus, veritatis quod, temporibus impedit quis repudiandae officiis esse corporis totam. Similique atque cupiditate, praesentium eius ullam fugit aliquid modi laboriosam consectetur quos beatae dicta nostrum maxime minus, nemo ipsa a veniam pariatur. Voluptate, porro modi! Nemo, aliquam suscipit est tempora adipisci vitae exercitationem consequuntur officia autem minima placeat iure in repellat libero nihil quas, facere error necessitatibus? Quae autem non quam. Inventore animi excepturi repudiandae voluptatem, quos mollitia quas quisquam vel, adipisci, officia obcaecati veritatis ab ratione quibusdam dolorem? Eum eligendi optio adipisci amet incidunt ullam fugiat, laboriosam dolorum? Ipsum molestiae obcaecati, veniam sunt provident dolorem eveniet, laborum ullam nobis asperiores at eos velit vero, minima vitae temporibus aliquam doloribus commodi.</p>
        <p>Rerum velit, exercitationem explicabo eius placeat, ipsa nam laborum, voluptate est doloribus dolores! Vero eius obcaecati ea nobis animi, quam incidunt dolorum porro ipsam qui recusandae, in quae aperiam. Nihil totam in tenetur dolorum cum enim iure tempora voluptates saepe maiores? Dolores, at vitae minima debitis, et est quod aperiam, maiores explicabo doloremque in eius soluta distinctio perspiciatis. Eum aperiam minima culpa minus quos deserunt iste. Repudiandae impedit vero inventore quis similique harum dolor aliquid ratione hic? Incidunt, amet! Odio omnis dignissimos incidunt qui sapiente iusto sit earum natus harum vero enim sequi, soluta ex pariatur at nesciunt. Eos dolores natus ut deleniti necessitatibus odit rem vitae. Maxime odit rerum laboriosam aperiam voluptatum ea dolore ullam sint praesentium, exercitationem veritatis debitis illo fugit sapiente consectetur voluptas doloremque nostrum sequi dolorem! Neque, doloremque magni! Saepe dolore ut illum accusantium commodi repudiandae voluptas, quaerat eius numquam recusandae facere quam placeat. Architecto eius libero impedit esse aut rem accusantium id ullam reiciendis. Asperiores natus, sint, minus in voluptatibus obcaecati quaerat cumque quod nemo eum omnis pariatur a totam aperiam, fugiat sequi! Minus quae aliquam ducimus, assumenda aperiam pariatur, dicta magni possimus, error velit harum molestias totam incidunt inventore eaque ab esse debitis saepe!</p>
      </main>
      <Modal active={modalActive} setActive={setModalActive}>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, rerum? Odit vero omnis ipsa impedit hic sunt beatae repellat illum quia culpa soluta veniam quos sit optio, eos consequatur reprehenderit porro quibusdam! Provident, reprehenderit tenetur libero, maiores id soluta, doloribus iste error ea incidunt optio perspiciatis aspernatur nobis quis necessitatibus aliquam sit praesentium voluptatem numquam nostrum corrupti magnam veniam nemo accusamus! Reprehenderit at nisi asperiores possimus quibusdam animi voluptates veritatis. Sit non quidem maxime eligendi, accusantium cumque modi ipsum repellat inventore iure autem adipisci, beatae dolor delectus molestias! Aspernatur sapiente iste sequi vero adipisci praesentium! Quas voluptas minima laborum illo expedita error, totam perspiciatis enim cum repudiandae consequuntur magnam consectetur reiciendis quo odit, molestiae accusamus, odio optio aliquid ad provident aut temporibus alias nemo. Voluptatum ratione perspiciatis possimus eligendi non aspernatur quo, eveniet aliquid assumenda illum? Dolor ratione numquam vel iure, ex eum ipsa deleniti quod, commodi odio laboriosam quas optio. Impedit deserunt cupiditate quae ipsam voluptatem eius eveniet eaque! Totam et facilis excepturi quasi repellendus eum voluptate, nulla at ex repellat ratione enim magni quos beatae. Repellendus ipsa, ipsum laborum velit itaque cumque quisquam soluta facilis veritatis quidem, laboriosam commodi quaerat culpa, possimus fugit odit ut distinctio illo voluptatum?</p>
      </Modal>
      {/* <Modal active={modalActive} setActive={setModalActive}>
        <form action="">
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <button type="submit">Submit</button>
        </form>
      </Modal> */}
    </div>
  )
}

export default App
