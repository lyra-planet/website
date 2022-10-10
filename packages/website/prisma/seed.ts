import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

const seed =  async() => {
    const kody = await db.user.create({
        data: {
          name: "Lyra",
          email: "1170155d48@qq.com"
        },
      });
    await Promise.all(
        getAtricleBoxListData().map((AtricleBoxData)=>{
            return db.articleBox.create({data:AtricleBoxData})
        })
    )
}

seed()



function getAtricleBoxListData(){
    return [
        {   name:"Lyra",
            title:"开始与终结的序章",
            content:"18岁。维克多·孔多利亚（ヴィクトル·コンドリア）大学脑部科学研究所的研究员。仅18岁就跳级大学毕业。更在美国的著名学术期刊（Science）发表论文的货真价实的天才。一见到未知事物，就提起兴趣埋头钻研。属于不太直率的类型，不善于称赞对方。尽管如此，对于自己认可的人，虽然会嘴硬，但还是会抱着尊敬的态度。冈部称她为“助手“、“克莉丝汀娜（Christina）”。而本人并不接受。也是所谓的傲娇。",
            type:"Steins;Gate",
            data:``
        },
        {   name:"Lyra",
            title:"时间跳跃的偏执狂",
            content:"18岁。维克多·孔多利亚（ヴィクトル·コンドリア）大学脑部科学研究所的研究员。仅18岁就跳级大学毕业。更在美国的著名学术期刊（Science）发表论文的货真价实的天才。一见到未知事物，就提起兴趣埋头钻研。属于不太直率的类型，不善于称赞对方。尽管如此，对于自己认可的人，虽然会嘴硬，但还是会抱着尊敬的态度。冈部称她为“助手“、“克莉丝汀娜（Christina）”。而本人并不接受。也是所谓的傲娇。",
            type:"Steins;Gate",
            data:`“中二病”，关于这个词汇你怎么看呢？谁不曾有过那么一点点“二”？只是，人不能永远长不大，不是？！

            中二病，是今年年初由日本兴起的一个词汇， 中二病（又称初二症）是伊集院光在广播节目《伊集院光 深夜的马鹿力》中提出，比喻日本青春期的少年过于自以为是等特别言行的俗语。
            
            对于“中二病”，大家关注点不同，反应不一。
            
            心理学家分析后的结论是：“中二病”的形成源自长期的“御宅”生活方式或意志被压抑而导致的心理扭曲；当然，“中二病”中也有正面积极的地方，比如对自己的肯定、自我意识的建立。
            
            社会学家认为，“中二病”是现代社会科技化进程加快的负面作用的体现之一。例如，过于快速和便捷的生活方式，使得人们减少沟通交流，更沉醉在自己的小世界里。生活过于简单而思维过于丰富，为“中二病”的诞生提供了温床。
            
            时尚界及艺文界这群本身就很“中二”的人，则有自己的看法。他们认为，“中二病”没什么不好，“人不中二枉少年”，“中二”才能让人更加地才华横溢。
            
            根据以上的结论可以看出，中二病的原因多为自我意识的压抑或者得不到合理的疏导，表现行为多为傲娇的行为等等，而这种行为多为对于自己和世界的不清晰认识，类似初生牛犊不怕虎。
            
            青少年转变成大人的过渡期——青春期特有的思想、行动、价值观的总称，把成长过程中发生一种类似“热病”的精神状态，比喻为“症状”。“发病”时期约在中学（初中）2年级前后，故称为“中二病”，而把有那种情况的人称为“中二病患者”（初二症患者）。虽然称为“病”，但没有看医生的必要，不是医学上的“疾病”。 ——（维基百科的解释）
            
            这个解释很合理，不过其实大多数人都有这种意识和行为的。现今的生活是个鼓励个性的社会，但是话说回来，谁又是真的特别的呢？真的优秀，特别的人只是极少数。故大部分的人无意识或有意识的要表现自己。这是人的一种本能。没有人想成为别人的复制品。可是大部分人自我意识良好（属于正常范围而非过分不良好）则慢慢的变成了别人的翻版，有时也可能是因为别人已经做了自己想成为的那种人（又或者别人已经做得更好了，我没法超越，偶像心理。）。一种是为了保护自己的形象，一种是能在别人身上找到安慰。
            
            为了保护自己的形象
            
            人都是这样的，比如说很多女孩，人前淑女，人后疯女。排除不想给别人一眼看穿而无力反抗的*裸的心理之外，更多的是一种自我安慰（又或者自我保护）的心理，比如说我们在陌生人面前表现的nice时，别人对我们的印象更好，会间接或者直接的“夸奖”我们（夸奖啊，或者对我们也很nice啊）。每个人的心理都有那么一点点期望（大多数人是不自知的），而做出一系列行为就可以解释这个原因。当然也有不少人对人粗暴，这则是另外一种表现自己和保护自己的行为了。此处不作为讨论，表过不提。
            
            在别人身上找到安慰。（偶像心理和假象心理）
            
            这种心理和上面提到的希望别人夸奖自己的心理有所不同，区别在于能不能做到。上面的心理是可以做到的，这种心理是很难完成甚至无法做到的。比如说别人夸我们善良可爱，我们是可以做到的，但是我们自己想成为自己心目中偶像的样子的话，很难。崇拜张学友和能不能成为张学友第二是两码事，而且就算非常崇拜也不见得能成为。只是这种心理给人心理一种假象：我和我的偶像差不多。魂淡，醒醒吧！差远了，好嘛！这其实是对于自身和自身环境没有清晰的认识。那些成熟而理性的人是没有偶像的或者说自己就是自己的偶像。相反那些心理不成熟或者在自己生活不如人意的人会无意识的通过偶像心理来安慰自己：其实你也不是很差的啦，你看看你的偶像，你和他差不多，当年他也是你这样什么的等等。（不得不说偶像心理给人很多错误，如果不敢相信，请查查china史上最严重的偶像崇拜事件，*期长达十年而且事情过去了四十年事件影响还未完绝。）
            
            以上基本就是人心理的原因了，不过现今社会还有很多其他的原因存在而导致中二现象。
            
            1、家庭教育：目前中国的教育大多都是长辈说，晚辈听的状态，晚辈的自我意识被压抑。而且长辈的自我也是扭曲的（这点特别说明一下，60后和70后的人成长时受到了更加严重的意识扭曲，没有真正的认识过自己和自我环境，因为没有机会呗。），看一些现象就知道了，孩子考了一百分，爸爸就给你买个玩具车！然后爸爸会无意宣扬自己的儿子成绩不错，自己面上有光。魂淡啊，纪伯伦都说过：孩子是你生的，但是不是你的。企图控制孩子行为，通过孩子的表现来满足自我，这心灵得多么的空虚啊。孩子考差了，说孩子不争气，孩子考好了，全靠我教的好。大部分中国孩子或多或少的都受到这种教育，而这种成长经历给人带来的更多的自我缺失。父母的强加和缺乏沟通为不少人埋下了恶果。
            
            2、社会问题：目前社会大多鼓励个性，但却没有给出适合个性生长的环境。而这同时社会又进行了快速的科技进步和财富变化。换句话来说，也是不少老板最喜欢说的一句：不管用什么方法，你给我挣到钱！财富的变化和贫富悬殊加剧，让人变得不关乎真正的内涵，更注重外表，科技变化让大家更少真正的沟通，所谓的在网上带着面具展现自我不过是弥补缺失的另外一个表现而已，要知道这种缺失是填不满的，不但越陷越深还让人迷失自己。另外网络的进步给人更多幻想，我们上网可以轻松的找到很多奢侈的东西，但是这不代表我们能真正的理解和拥有这些奢侈的东西（拿个爱疯就能代表你是高富帅？）
            
            3、自我救赎：这点太难了，人贵自度，道贵自悟。科技和环境的进步让人轻浮，不少人已经学不会深入的思考和学习，更别说领悟了。突然觉得这点很难说清楚。大部分人会把这个扯上大环境，但是这个真的不关乎环境多大的问题。正如以前没书读的时候，拿到一本书会认真的读很多遍，但是现在有很多书了，倒不一定会拿起来看。而那些真正的爱书的人是不会因为书多书少而受影响的。之前看过很经典的一个故事，同一个家庭出来的双胞胎兄弟，一个努力奋斗成为了老板，一个自我堕落吃上了国家饭，问其原因的时候，两人的回答如出一辙：出生在这样的家庭，我能怎么办呢！这个可能天生的吧，我也说不清楚，目前心理学也无法很好的解释这一心理。有些人活了半辈子就对拥有大智慧，有些人活两三辈子，都不一定明白一些事情。
            
            4、环境： 这点和我们说的社会不同，这个环境说的是每个人的环境，有很多不同，但是也有很多共同的地方，比如说女孩子向闺蜜咨询某个男孩是否靠谱的时候，总是容易得到对方是否多金或者帅气高大的回答。我了解一些婚姻失败的朋友，其实他们婚姻失败的都有一个原因，身边的人给出了不靠谱的答案（当然也不排除自身的不靠谱）。在国内很多有心理疾病的人无法得到很好的治疗的有一方面的原因就在于身边的人就是病态的。你想想，你感冒了，正常的来说，吃了药会好的（很多时候哪怕不吃药也会好），不过身边的人会一直让你不脱衣服甚至泼冷水等等，你还能好么！
            
            现在我们对中二病总结一下：
            
            1、由于成长时期自我意识的压抑，而到了成年时能表现自己的时候，自我意识爆棚！
            
            2、成长时期缺乏沟通，也没学会正确和良好的沟通而导致成年时不会真正的沟通！
            
            3、从身边的人上得不到真正的关心和爱以及建议，误导了自身，形成了缺陷人格和自我感觉失误。
            
            4、自己的悟性太差不能真正的理解这个社会给予自己的反馈，加重了自我感觉的失误。（比如很多人不能正视别人对于自己的评价，甚至直接变现攻击对方。）
            
            5、科技进步和财富进步，让人更加不能自控。你开着QQ写文章试试，你能完全不看QQ的话，我算你狠！
            
            以上问题不会在二十多岁的时候带来大的问题（二十多岁，大家能原谅你的幼稚，再说了，那时也没有沉重的家庭问题），而到了三四十岁的时候，问题就越来越严重了。不少齐天大圣就是酱紫的哦！
            
            本来想弄个案例分析的，但是担心得罪对方和被对方攻击，就罢了吧。
            
            很早之前看过这样一句话：人性的进步是很漫长的，但是人性的退步却非常容易。（路西法效应）`
        },
        {   name:"Lyra",
            title:"平行时空的偏执狂",
            content:"18岁。维克多·孔多利亚（ヴィクトル·コンドリア）大学脑部科学研究所的研究员。仅18岁就跳级大学毕业。更在美国的著名学术期刊（Science）发表论文的货真价实的天才。一见到未知事物，就提起兴趣埋头钻研。属于不太直率的类型，不善于称赞对方。尽管如此，对于自己认可的人，虽然会嘴硬，但还是会抱着尊敬的态度。冈部称她为“助手“、“克莉丝汀娜（Christina）”。而本人并不接受。也是所谓的傲娇。",
            type:"Steins;Gate",
            data:`“中二病”，关于这个词汇你怎么看呢？谁不曾有过那么一点点“二”？只是，人不能永远长不大，不是？！

            中二病，是今年年初由日本兴起的一个词汇， 中二病（又称初二症）是伊集院光在广播节目《伊集院光 深夜的马鹿力》中提出，比喻日本青春期的少年过于自以为是等特别言行的俗语。
            
            对于“中二病”，大家关注点不同，反应不一。
            
            心理学家分析后的结论是：“中二病”的形成源自长期的“御宅”生活方式或意志被压抑而导致的心理扭曲；当然，“中二病”中也有正面积极的地方，比如对自己的肯定、自我意识的建立。
            
            社会学家认为，“中二病”是现代社会科技化进程加快的负面作用的体现之一。例如，过于快速和便捷的生活方式，使得人们减少沟通交流，更沉醉在自己的小世界里。生活过于简单而思维过于丰富，为“中二病”的诞生提供了温床。
            
            时尚界及艺文界这群本身就很“中二”的人，则有自己的看法。他们认为，“中二病”没什么不好，“人不中二枉少年”，“中二”才能让人更加地才华横溢。
            
            根据以上的结论可以看出，中二病的原因多为自我意识的压抑或者得不到合理的疏导，表现行为多为傲娇的行为等等，而这种行为多为对于自己和世界的不清晰认识，类似初生牛犊不怕虎。
            
            青少年转变成大人的过渡期——青春期特有的思想、行动、价值观的总称，把成长过程中发生一种类似“热病”的精神状态，比喻为“症状”。“发病”时期约在中学（初中）2年级前后，故称为“中二病”，而把有那种情况的人称为“中二病患者”（初二症患者）。虽然称为“病”，但没有看医生的必要，不是医学上的“疾病”。 ——（维基百科的解释）
            
            这个解释很合理，不过其实大多数人都有这种意识和行为的。现今的生活是个鼓励个性的社会，但是话说回来，谁又是真的特别的呢？真的优秀，特别的人只是极少数。故大部分的人无意识或有意识的要表现自己。这是人的一种本能。没有人想成为别人的复制品。可是大部分人自我意识良好（属于正常范围而非过分不良好）则慢慢的变成了别人的翻版，有时也可能是因为别人已经做了自己想成为的那种人（又或者别人已经做得更好了，我没法超越，偶像心理。）。一种是为了保护自己的形象，一种是能在别人身上找到安慰。
            
            为了保护自己的形象
            
            人都是这样的，比如说很多女孩，人前淑女，人后疯女。排除不想给别人一眼看穿而无力反抗的*裸的心理之外，更多的是一种自我安慰（又或者自我保护）的心理，比如说我们在陌生人面前表现的nice时，别人对我们的印象更好，会间接或者直接的“夸奖”我们（夸奖啊，或者对我们也很nice啊）。每个人的心理都有那么一点点期望（大多数人是不自知的），而做出一系列行为就可以解释这个原因。当然也有不少人对人粗暴，这则是另外一种表现自己和保护自己的行为了。此处不作为讨论，表过不提。
            
            在别人身上找到安慰。（偶像心理和假象心理）
            
            这种心理和上面提到的希望别人夸奖自己的心理有所不同，区别在于能不能做到。上面的心理是可以做到的，这种心理是很难完成甚至无法做到的。比如说别人夸我们善良可爱，我们是可以做到的，但是我们自己想成为自己心目中偶像的样子的话，很难。崇拜张学友和能不能成为张学友第二是两码事，而且就算非常崇拜也不见得能成为。只是这种心理给人心理一种假象：我和我的偶像差不多。魂淡，醒醒吧！差远了，好嘛！这其实是对于自身和自身环境没有清晰的认识。那些成熟而理性的人是没有偶像的或者说自己就是自己的偶像。相反那些心理不成熟或者在自己生活不如人意的人会无意识的通过偶像心理来安慰自己：其实你也不是很差的啦，你看看你的偶像，你和他差不多，当年他也是你这样什么的等等。（不得不说偶像心理给人很多错误，如果不敢相信，请查查china史上最严重的偶像崇拜事件，*期长达十年而且事情过去了四十年事件影响还未完绝。）
            
            以上基本就是人心理的原因了，不过现今社会还有很多其他的原因存在而导致中二现象。
            
            1、家庭教育：目前中国的教育大多都是长辈说，晚辈听的状态，晚辈的自我意识被压抑。而且长辈的自我也是扭曲的（这点特别说明一下，60后和70后的人成长时受到了更加严重的意识扭曲，没有真正的认识过自己和自我环境，因为没有机会呗。），看一些现象就知道了，孩子考了一百分，爸爸就给你买个玩具车！然后爸爸会无意宣扬自己的儿子成绩不错，自己面上有光。魂淡啊，纪伯伦都说过：孩子是你生的，但是不是你的。企图控制孩子行为，通过孩子的表现来满足自我，这心灵得多么的空虚啊。孩子考差了，说孩子不争气，孩子考好了，全靠我教的好。大部分中国孩子或多或少的都受到这种教育，而这种成长经历给人带来的更多的自我缺失。父母的强加和缺乏沟通为不少人埋下了恶果。
            
            2、社会问题：目前社会大多鼓励个性，但却没有给出适合个性生长的环境。而这同时社会又进行了快速的科技进步和财富变化。换句话来说，也是不少老板最喜欢说的一句：不管用什么方法，你给我挣到钱！财富的变化和贫富悬殊加剧，让人变得不关乎真正的内涵，更注重外表，科技变化让大家更少真正的沟通，所谓的在网上带着面具展现自我不过是弥补缺失的另外一个表现而已，要知道这种缺失是填不满的，不但越陷越深还让人迷失自己。另外网络的进步给人更多幻想，我们上网可以轻松的找到很多奢侈的东西，但是这不代表我们能真正的理解和拥有这些奢侈的东西（拿个爱疯就能代表你是高富帅？）
            
            3、自我救赎：这点太难了，人贵自度，道贵自悟。科技和环境的进步让人轻浮，不少人已经学不会深入的思考和学习，更别说领悟了。突然觉得这点很难说清楚。大部分人会把这个扯上大环境，但是这个真的不关乎环境多大的问题。正如以前没书读的时候，拿到一本书会认真的读很多遍，但是现在有很多书了，倒不一定会拿起来看。而那些真正的爱书的人是不会因为书多书少而受影响的。之前看过很经典的一个故事，同一个家庭出来的双胞胎兄弟，一个努力奋斗成为了老板，一个自我堕落吃上了国家饭，问其原因的时候，两人的回答如出一辙：出生在这样的家庭，我能怎么办呢！这个可能天生的吧，我也说不清楚，目前心理学也无法很好的解释这一心理。有些人活了半辈子就对拥有大智慧，有些人活两三辈子，都不一定明白一些事情。
            
            4、环境： 这点和我们说的社会不同，这个环境说的是每个人的环境，有很多不同，但是也有很多共同的地方，比如说女孩子向闺蜜咨询某个男孩是否靠谱的时候，总是容易得到对方是否多金或者帅气高大的回答。我了解一些婚姻失败的朋友，其实他们婚姻失败的都有一个原因，身边的人给出了不靠谱的答案（当然也不排除自身的不靠谱）。在国内很多有心理疾病的人无法得到很好的治疗的有一方面的原因就在于身边的人就是病态的。你想想，你感冒了，正常的来说，吃了药会好的（很多时候哪怕不吃药也会好），不过身边的人会一直让你不脱衣服甚至泼冷水等等，你还能好么！
            
            现在我们对中二病总结一下：
            
            1、由于成长时期自我意识的压抑，而到了成年时能表现自己的时候，自我意识爆棚！
            
            2、成长时期缺乏沟通，也没学会正确和良好的沟通而导致成年时不会真正的沟通！
            
            3、从身边的人上得不到真正的关心和爱以及建议，误导了自身，形成了缺陷人格和自我感觉失误。
            
            4、自己的悟性太差不能真正的理解这个社会给予自己的反馈，加重了自我感觉的失误。（比如很多人不能正视别人对于自己的评价，甚至直接变现攻击对方。）
            
            5、科技进步和财富进步，让人更加不能自控。你开着QQ写文章试试，你能完全不看QQ的话，我算你狠！
            
            以上问题不会在二十多岁的时候带来大的问题（二十多岁，大家能原谅你的幼稚，再说了，那时也没有沉重的家庭问题），而到了三四十岁的时候，问题就越来越严重了。不少齐天大圣就是酱紫的哦！
            
            本来想弄个案例分析的，但是担心得罪对方和被对方攻击，就罢了吧。
            
            很早之前看过这样一句话：人性的进步是很漫长的，但是人性的退步却非常容易。（路西法效应）`
        },
        {   name:"Lyra",
            title:"空理彷徨的会面",
            content:"18岁。维克多·孔多利亚（ヴィクトル·コンドリア）大学脑部科学研究所的研究员。仅18岁就跳级大学毕业。更在美国的著名学术期刊（Science）发表论文的货真价实的天才。一见到未知事物，就提起兴趣埋头钻研。属于不太直率的类型，不善于称赞对方。尽管如此，对于自己认可的人，虽然会嘴硬，但还是会抱着尊敬的态度。冈部称她为“助手“、“克莉丝汀娜（Christina）”。而本人并不接受。也是所谓的傲娇。",
            type:"Steins;Gate",
            data:`“中二病”，关于这个词汇你怎么看呢？谁不曾有过那么一点点“二”？只是，人不能永远长不大，不是？！

            中二病，是今年年初由日本兴起的一个词汇， 中二病（又称初二症）是伊集院光在广播节目《伊集院光 深夜的马鹿力》中提出，比喻日本青春期的少年过于自以为是等特别言行的俗语。
            
            对于“中二病”，大家关注点不同，反应不一。
            
            心理学家分析后的结论是：“中二病”的形成源自长期的“御宅”生活方式或意志被压抑而导致的心理扭曲；当然，“中二病”中也有正面积极的地方，比如对自己的肯定、自我意识的建立。
            
            社会学家认为，“中二病”是现代社会科技化进程加快的负面作用的体现之一。例如，过于快速和便捷的生活方式，使得人们减少沟通交流，更沉醉在自己的小世界里。生活过于简单而思维过于丰富，为“中二病”的诞生提供了温床。
            
            时尚界及艺文界这群本身就很“中二”的人，则有自己的看法。他们认为，“中二病”没什么不好，“人不中二枉少年”，“中二”才能让人更加地才华横溢。
            
            根据以上的结论可以看出，中二病的原因多为自我意识的压抑或者得不到合理的疏导，表现行为多为傲娇的行为等等，而这种行为多为对于自己和世界的不清晰认识，类似初生牛犊不怕虎。
            
            青少年转变成大人的过渡期——青春期特有的思想、行动、价值观的总称，把成长过程中发生一种类似“热病”的精神状态，比喻为“症状”。“发病”时期约在中学（初中）2年级前后，故称为“中二病”，而把有那种情况的人称为“中二病患者”（初二症患者）。虽然称为“病”，但没有看医生的必要，不是医学上的“疾病”。 ——（维基百科的解释）
            
            这个解释很合理，不过其实大多数人都有这种意识和行为的。现今的生活是个鼓励个性的社会，但是话说回来，谁又是真的特别的呢？真的优秀，特别的人只是极少数。故大部分的人无意识或有意识的要表现自己。这是人的一种本能。没有人想成为别人的复制品。可是大部分人自我意识良好（属于正常范围而非过分不良好）则慢慢的变成了别人的翻版，有时也可能是因为别人已经做了自己想成为的那种人（又或者别人已经做得更好了，我没法超越，偶像心理。）。一种是为了保护自己的形象，一种是能在别人身上找到安慰。
            
            为了保护自己的形象
            
            人都是这样的，比如说很多女孩，人前淑女，人后疯女。排除不想给别人一眼看穿而无力反抗的*裸的心理之外，更多的是一种自我安慰（又或者自我保护）的心理，比如说我们在陌生人面前表现的nice时，别人对我们的印象更好，会间接或者直接的“夸奖”我们（夸奖啊，或者对我们也很nice啊）。每个人的心理都有那么一点点期望（大多数人是不自知的），而做出一系列行为就可以解释这个原因。当然也有不少人对人粗暴，这则是另外一种表现自己和保护自己的行为了。此处不作为讨论，表过不提。
            
            在别人身上找到安慰。（偶像心理和假象心理）
            
            这种心理和上面提到的希望别人夸奖自己的心理有所不同，区别在于能不能做到。上面的心理是可以做到的，这种心理是很难完成甚至无法做到的。比如说别人夸我们善良可爱，我们是可以做到的，但是我们自己想成为自己心目中偶像的样子的话，很难。崇拜张学友和能不能成为张学友第二是两码事，而且就算非常崇拜也不见得能成为。只是这种心理给人心理一种假象：我和我的偶像差不多。魂淡，醒醒吧！差远了，好嘛！这其实是对于自身和自身环境没有清晰的认识。那些成熟而理性的人是没有偶像的或者说自己就是自己的偶像。相反那些心理不成熟或者在自己生活不如人意的人会无意识的通过偶像心理来安慰自己：其实你也不是很差的啦，你看看你的偶像，你和他差不多，当年他也是你这样什么的等等。（不得不说偶像心理给人很多错误，如果不敢相信，请查查china史上最严重的偶像崇拜事件，*期长达十年而且事情过去了四十年事件影响还未完绝。）
            
            以上基本就是人心理的原因了，不过现今社会还有很多其他的原因存在而导致中二现象。
            
            1、家庭教育：目前中国的教育大多都是长辈说，晚辈听的状态，晚辈的自我意识被压抑。而且长辈的自我也是扭曲的（这点特别说明一下，60后和70后的人成长时受到了更加严重的意识扭曲，没有真正的认识过自己和自我环境，因为没有机会呗。），看一些现象就知道了，孩子考了一百分，爸爸就给你买个玩具车！然后爸爸会无意宣扬自己的儿子成绩不错，自己面上有光。魂淡啊，纪伯伦都说过：孩子是你生的，但是不是你的。企图控制孩子行为，通过孩子的表现来满足自我，这心灵得多么的空虚啊。孩子考差了，说孩子不争气，孩子考好了，全靠我教的好。大部分中国孩子或多或少的都受到这种教育，而这种成长经历给人带来的更多的自我缺失。父母的强加和缺乏沟通为不少人埋下了恶果。
            
            2、社会问题：目前社会大多鼓励个性，但却没有给出适合个性生长的环境。而这同时社会又进行了快速的科技进步和财富变化。换句话来说，也是不少老板最喜欢说的一句：不管用什么方法，你给我挣到钱！财富的变化和贫富悬殊加剧，让人变得不关乎真正的内涵，更注重外表，科技变化让大家更少真正的沟通，所谓的在网上带着面具展现自我不过是弥补缺失的另外一个表现而已，要知道这种缺失是填不满的，不但越陷越深还让人迷失自己。另外网络的进步给人更多幻想，我们上网可以轻松的找到很多奢侈的东西，但是这不代表我们能真正的理解和拥有这些奢侈的东西（拿个爱疯就能代表你是高富帅？）
            
            3、自我救赎：这点太难了，人贵自度，道贵自悟。科技和环境的进步让人轻浮，不少人已经学不会深入的思考和学习，更别说领悟了。突然觉得这点很难说清楚。大部分人会把这个扯上大环境，但是这个真的不关乎环境多大的问题。正如以前没书读的时候，拿到一本书会认真的读很多遍，但是现在有很多书了，倒不一定会拿起来看。而那些真正的爱书的人是不会因为书多书少而受影响的。之前看过很经典的一个故事，同一个家庭出来的双胞胎兄弟，一个努力奋斗成为了老板，一个自我堕落吃上了国家饭，问其原因的时候，两人的回答如出一辙：出生在这样的家庭，我能怎么办呢！这个可能天生的吧，我也说不清楚，目前心理学也无法很好的解释这一心理。有些人活了半辈子就对拥有大智慧，有些人活两三辈子，都不一定明白一些事情。
            
            4、环境： 这点和我们说的社会不同，这个环境说的是每个人的环境，有很多不同，但是也有很多共同的地方，比如说女孩子向闺蜜咨询某个男孩是否靠谱的时候，总是容易得到对方是否多金或者帅气高大的回答。我了解一些婚姻失败的朋友，其实他们婚姻失败的都有一个原因，身边的人给出了不靠谱的答案（当然也不排除自身的不靠谱）。在国内很多有心理疾病的人无法得到很好的治疗的有一方面的原因就在于身边的人就是病态的。你想想，你感冒了，正常的来说，吃了药会好的（很多时候哪怕不吃药也会好），不过身边的人会一直让你不脱衣服甚至泼冷水等等，你还能好么！
            
            现在我们对中二病总结一下：
            
            1、由于成长时期自我意识的压抑，而到了成年时能表现自己的时候，自我意识爆棚！
            
            2、成长时期缺乏沟通，也没学会正确和良好的沟通而导致成年时不会真正的沟通！
            
            3、从身边的人上得不到真正的关心和爱以及建议，误导了自身，形成了缺陷人格和自我感觉失误。
            
            4、自己的悟性太差不能真正的理解这个社会给予自己的反馈，加重了自我感觉的失误。（比如很多人不能正视别人对于自己的评价，甚至直接变现攻击对方。）
            
            5、科技进步和财富进步，让人更加不能自控。你开着QQ写文章试试，你能完全不看QQ的话，我算你狠！
            
            以上问题不会在二十多岁的时候带来大的问题（二十多岁，大家能原谅你的幼稚，再说了，那时也没有沉重的家庭问题），而到了三四十岁的时候，问题就越来越严重了。不少齐天大圣就是酱紫的哦！
            
            本来想弄个案例分析的，但是担心得罪对方和被对方攻击，就罢了吧。
            
            很早之前看过这样一句话：人性的进步是很漫长的，但是人性的退步却非常容易。（路西法效应）`
        },
        {   name:"Lyra",
            title:"电荷冲突的会面",
            content:"18岁。维克多·孔多利亚（ヴィクトル·コンドリア）大学脑部科学研究所的研究员。仅18岁就跳级大学毕业。更在美国的著名学术期刊（Science）发表论文的货真价实的天才。一见到未知事物，就提起兴趣埋头钻研。属于不太直率的类型，不善于称赞对方。尽管如此，对于自己认可的人，虽然会嘴硬，但还是会抱着尊敬的态度。冈部称她为“助手“、“克莉丝汀娜（Christina）”。而本人并不接受。也是所谓的傲娇。",
            type:"Steins;Gate",
            data:`“中二病”，关于这个词汇你怎么看呢？谁不曾有过那么一点点“二”？只是，人不能永远长不大，不是？！

            中二病，是今年年初由日本兴起的一个词汇， 中二病（又称初二症）是伊集院光在广播节目《伊集院光 深夜的马鹿力》中提出，比喻日本青春期的少年过于自以为是等特别言行的俗语。
            
            对于“中二病”，大家关注点不同，反应不一。
            
            心理学家分析后的结论是：“中二病”的形成源自长期的“御宅”生活方式或意志被压抑而导致的心理扭曲；当然，“中二病”中也有正面积极的地方，比如对自己的肯定、自我意识的建立。
            
            社会学家认为，“中二病”是现代社会科技化进程加快的负面作用的体现之一。例如，过于快速和便捷的生活方式，使得人们减少沟通交流，更沉醉在自己的小世界里。生活过于简单而思维过于丰富，为“中二病”的诞生提供了温床。
            
            时尚界及艺文界这群本身就很“中二”的人，则有自己的看法。他们认为，“中二病”没什么不好，“人不中二枉少年”，“中二”才能让人更加地才华横溢。
            
            根据以上的结论可以看出，中二病的原因多为自我意识的压抑或者得不到合理的疏导，表现行为多为傲娇的行为等等，而这种行为多为对于自己和世界的不清晰认识，类似初生牛犊不怕虎。
            
            青少年转变成大人的过渡期——青春期特有的思想、行动、价值观的总称，把成长过程中发生一种类似“热病”的精神状态，比喻为“症状”。“发病”时期约在中学（初中）2年级前后，故称为“中二病”，而把有那种情况的人称为“中二病患者”（初二症患者）。虽然称为“病”，但没有看医生的必要，不是医学上的“疾病”。 ——（维基百科的解释）
            
            这个解释很合理，不过其实大多数人都有这种意识和行为的。现今的生活是个鼓励个性的社会，但是话说回来，谁又是真的特别的呢？真的优秀，特别的人只是极少数。故大部分的人无意识或有意识的要表现自己。这是人的一种本能。没有人想成为别人的复制品。可是大部分人自我意识良好（属于正常范围而非过分不良好）则慢慢的变成了别人的翻版，有时也可能是因为别人已经做了自己想成为的那种人（又或者别人已经做得更好了，我没法超越，偶像心理。）。一种是为了保护自己的形象，一种是能在别人身上找到安慰。
            
            为了保护自己的形象
            
            人都是这样的，比如说很多女孩，人前淑女，人后疯女。排除不想给别人一眼看穿而无力反抗的*裸的心理之外，更多的是一种自我安慰（又或者自我保护）的心理，比如说我们在陌生人面前表现的nice时，别人对我们的印象更好，会间接或者直接的“夸奖”我们（夸奖啊，或者对我们也很nice啊）。每个人的心理都有那么一点点期望（大多数人是不自知的），而做出一系列行为就可以解释这个原因。当然也有不少人对人粗暴，这则是另外一种表现自己和保护自己的行为了。此处不作为讨论，表过不提。
            
            在别人身上找到安慰。（偶像心理和假象心理）
            
            这种心理和上面提到的希望别人夸奖自己的心理有所不同，区别在于能不能做到。上面的心理是可以做到的，这种心理是很难完成甚至无法做到的。比如说别人夸我们善良可爱，我们是可以做到的，但是我们自己想成为自己心目中偶像的样子的话，很难。崇拜张学友和能不能成为张学友第二是两码事，而且就算非常崇拜也不见得能成为。只是这种心理给人心理一种假象：我和我的偶像差不多。魂淡，醒醒吧！差远了，好嘛！这其实是对于自身和自身环境没有清晰的认识。那些成熟而理性的人是没有偶像的或者说自己就是自己的偶像。相反那些心理不成熟或者在自己生活不如人意的人会无意识的通过偶像心理来安慰自己：其实你也不是很差的啦，你看看你的偶像，你和他差不多，当年他也是你这样什么的等等。（不得不说偶像心理给人很多错误，如果不敢相信，请查查china史上最严重的偶像崇拜事件，*期长达十年而且事情过去了四十年事件影响还未完绝。）
            
            以上基本就是人心理的原因了，不过现今社会还有很多其他的原因存在而导致中二现象。
            
            1、家庭教育：目前中国的教育大多都是长辈说，晚辈听的状态，晚辈的自我意识被压抑。而且长辈的自我也是扭曲的（这点特别说明一下，60后和70后的人成长时受到了更加严重的意识扭曲，没有真正的认识过自己和自我环境，因为没有机会呗。），看一些现象就知道了，孩子考了一百分，爸爸就给你买个玩具车！然后爸爸会无意宣扬自己的儿子成绩不错，自己面上有光。魂淡啊，纪伯伦都说过：孩子是你生的，但是不是你的。企图控制孩子行为，通过孩子的表现来满足自我，这心灵得多么的空虚啊。孩子考差了，说孩子不争气，孩子考好了，全靠我教的好。大部分中国孩子或多或少的都受到这种教育，而这种成长经历给人带来的更多的自我缺失。父母的强加和缺乏沟通为不少人埋下了恶果。
            
            2、社会问题：目前社会大多鼓励个性，但却没有给出适合个性生长的环境。而这同时社会又进行了快速的科技进步和财富变化。换句话来说，也是不少老板最喜欢说的一句：不管用什么方法，你给我挣到钱！财富的变化和贫富悬殊加剧，让人变得不关乎真正的内涵，更注重外表，科技变化让大家更少真正的沟通，所谓的在网上带着面具展现自我不过是弥补缺失的另外一个表现而已，要知道这种缺失是填不满的，不但越陷越深还让人迷失自己。另外网络的进步给人更多幻想，我们上网可以轻松的找到很多奢侈的东西，但是这不代表我们能真正的理解和拥有这些奢侈的东西（拿个爱疯就能代表你是高富帅？）
            
            3、自我救赎：这点太难了，人贵自度，道贵自悟。科技和环境的进步让人轻浮，不少人已经学不会深入的思考和学习，更别说领悟了。突然觉得这点很难说清楚。大部分人会把这个扯上大环境，但是这个真的不关乎环境多大的问题。正如以前没书读的时候，拿到一本书会认真的读很多遍，但是现在有很多书了，倒不一定会拿起来看。而那些真正的爱书的人是不会因为书多书少而受影响的。之前看过很经典的一个故事，同一个家庭出来的双胞胎兄弟，一个努力奋斗成为了老板，一个自我堕落吃上了国家饭，问其原因的时候，两人的回答如出一辙：出生在这样的家庭，我能怎么办呢！这个可能天生的吧，我也说不清楚，目前心理学也无法很好的解释这一心理。有些人活了半辈子就对拥有大智慧，有些人活两三辈子，都不一定明白一些事情。
            
            4、环境： 这点和我们说的社会不同，这个环境说的是每个人的环境，有很多不同，但是也有很多共同的地方，比如说女孩子向闺蜜咨询某个男孩是否靠谱的时候，总是容易得到对方是否多金或者帅气高大的回答。我了解一些婚姻失败的朋友，其实他们婚姻失败的都有一个原因，身边的人给出了不靠谱的答案（当然也不排除自身的不靠谱）。在国内很多有心理疾病的人无法得到很好的治疗的有一方面的原因就在于身边的人就是病态的。你想想，你感冒了，正常的来说，吃了药会好的（很多时候哪怕不吃药也会好），不过身边的人会一直让你不脱衣服甚至泼冷水等等，你还能好么！
            
            现在我们对中二病总结一下：
            
            1、由于成长时期自我意识的压抑，而到了成年时能表现自己的时候，自我意识爆棚！
            
            2、成长时期缺乏沟通，也没学会正确和良好的沟通而导致成年时不会真正的沟通！
            
            3、从身边的人上得不到真正的关心和爱以及建议，误导了自身，形成了缺陷人格和自我感觉失误。
            
            4、自己的悟性太差不能真正的理解这个社会给予自己的反馈，加重了自我感觉的失误。（比如很多人不能正视别人对于自己的评价，甚至直接变现攻击对方。）
            
            5、科技进步和财富进步，让人更加不能自控。你开着QQ写文章试试，你能完全不看QQ的话，我算你狠！
            
            以上问题不会在二十多岁的时候带来大的问题（二十多岁，大家能原谅你的幼稚，再说了，那时也没有沉重的家庭问题），而到了三四十岁的时候，问题就越来越严重了。不少齐天大圣就是酱紫的哦！
            
            本来想弄个案例分析的，但是担心得罪对方和被对方攻击，就罢了吧。
            
            很早之前看过这样一句话：人性的进步是很漫长的，但是人性的退步却非常容易。（路西法效应）`
        },
        {   name:"Lyra",
            title:"蝶翼的分歧",
            content:"18岁。维克多·孔多利亚（ヴィクトル·コンドリア）大学脑部科学研究所的研究员。仅18岁就跳级大学毕业。更在美国的著名学术期刊（Science）发表论文的货真价实的天才。一见到未知事物，就提起兴趣埋头钻研。属于不太直率的类型，不善于称赞对方。尽管如此，对于自己认可的人，虽然会嘴硬，但还是会抱着尊敬的态度。冈部称她为“助手“、“克莉丝汀娜（Christina）”。而本人并不接受。也是所谓的傲娇。",
            type:"Steins;Gate",
            data:`“中二病”，关于这个词汇你怎么看呢？谁不曾有过那么一点点“二”？只是，人不能永远长不大，不是？！

            中二病，是今年年初由日本兴起的一个词汇， 中二病（又称初二症）是伊集院光在广播节目《伊集院光 深夜的马鹿力》中提出，比喻日本青春期的少年过于自以为是等特别言行的俗语。
            
            对于“中二病”，大家关注点不同，反应不一。
            
            心理学家分析后的结论是：“中二病”的形成源自长期的“御宅”生活方式或意志被压抑而导致的心理扭曲；当然，“中二病”中也有正面积极的地方，比如对自己的肯定、自我意识的建立。
            
            社会学家认为，“中二病”是现代社会科技化进程加快的负面作用的体现之一。例如，过于快速和便捷的生活方式，使得人们减少沟通交流，更沉醉在自己的小世界里。生活过于简单而思维过于丰富，为“中二病”的诞生提供了温床。
            
            时尚界及艺文界这群本身就很“中二”的人，则有自己的看法。他们认为，“中二病”没什么不好，“人不中二枉少年”，“中二”才能让人更加地才华横溢。
            
            根据以上的结论可以看出，中二病的原因多为自我意识的压抑或者得不到合理的疏导，表现行为多为傲娇的行为等等，而这种行为多为对于自己和世界的不清晰认识，类似初生牛犊不怕虎。
            
            青少年转变成大人的过渡期——青春期特有的思想、行动、价值观的总称，把成长过程中发生一种类似“热病”的精神状态，比喻为“症状”。“发病”时期约在中学（初中）2年级前后，故称为“中二病”，而把有那种情况的人称为“中二病患者”（初二症患者）。虽然称为“病”，但没有看医生的必要，不是医学上的“疾病”。 ——（维基百科的解释）
            
            这个解释很合理，不过其实大多数人都有这种意识和行为的。现今的生活是个鼓励个性的社会，但是话说回来，谁又是真的特别的呢？真的优秀，特别的人只是极少数。故大部分的人无意识或有意识的要表现自己。这是人的一种本能。没有人想成为别人的复制品。可是大部分人自我意识良好（属于正常范围而非过分不良好）则慢慢的变成了别人的翻版，有时也可能是因为别人已经做了自己想成为的那种人（又或者别人已经做得更好了，我没法超越，偶像心理。）。一种是为了保护自己的形象，一种是能在别人身上找到安慰。
            
            为了保护自己的形象
            
            人都是这样的，比如说很多女孩，人前淑女，人后疯女。排除不想给别人一眼看穿而无力反抗的*裸的心理之外，更多的是一种自我安慰（又或者自我保护）的心理，比如说我们在陌生人面前表现的nice时，别人对我们的印象更好，会间接或者直接的“夸奖”我们（夸奖啊，或者对我们也很nice啊）。每个人的心理都有那么一点点期望（大多数人是不自知的），而做出一系列行为就可以解释这个原因。当然也有不少人对人粗暴，这则是另外一种表现自己和保护自己的行为了。此处不作为讨论，表过不提。
            
            在别人身上找到安慰。（偶像心理和假象心理）
            
            这种心理和上面提到的希望别人夸奖自己的心理有所不同，区别在于能不能做到。上面的心理是可以做到的，这种心理是很难完成甚至无法做到的。比如说别人夸我们善良可爱，我们是可以做到的，但是我们自己想成为自己心目中偶像的样子的话，很难。崇拜张学友和能不能成为张学友第二是两码事，而且就算非常崇拜也不见得能成为。只是这种心理给人心理一种假象：我和我的偶像差不多。魂淡，醒醒吧！差远了，好嘛！这其实是对于自身和自身环境没有清晰的认识。那些成熟而理性的人是没有偶像的或者说自己就是自己的偶像。相反那些心理不成熟或者在自己生活不如人意的人会无意识的通过偶像心理来安慰自己：其实你也不是很差的啦，你看看你的偶像，你和他差不多，当年他也是你这样什么的等等。（不得不说偶像心理给人很多错误，如果不敢相信，请查查china史上最严重的偶像崇拜事件，*期长达十年而且事情过去了四十年事件影响还未完绝。）
            
            以上基本就是人心理的原因了，不过现今社会还有很多其他的原因存在而导致中二现象。
            
            1、家庭教育：目前中国的教育大多都是长辈说，晚辈听的状态，晚辈的自我意识被压抑。而且长辈的自我也是扭曲的（这点特别说明一下，60后和70后的人成长时受到了更加严重的意识扭曲，没有真正的认识过自己和自我环境，因为没有机会呗。），看一些现象就知道了，孩子考了一百分，爸爸就给你买个玩具车！然后爸爸会无意宣扬自己的儿子成绩不错，自己面上有光。魂淡啊，纪伯伦都说过：孩子是你生的，但是不是你的。企图控制孩子行为，通过孩子的表现来满足自我，这心灵得多么的空虚啊。孩子考差了，说孩子不争气，孩子考好了，全靠我教的好。大部分中国孩子或多或少的都受到这种教育，而这种成长经历给人带来的更多的自我缺失。父母的强加和缺乏沟通为不少人埋下了恶果。
            
            2、社会问题：目前社会大多鼓励个性，但却没有给出适合个性生长的环境。而这同时社会又进行了快速的科技进步和财富变化。换句话来说，也是不少老板最喜欢说的一句：不管用什么方法，你给我挣到钱！财富的变化和贫富悬殊加剧，让人变得不关乎真正的内涵，更注重外表，科技变化让大家更少真正的沟通，所谓的在网上带着面具展现自我不过是弥补缺失的另外一个表现而已，要知道这种缺失是填不满的，不但越陷越深还让人迷失自己。另外网络的进步给人更多幻想，我们上网可以轻松的找到很多奢侈的东西，但是这不代表我们能真正的理解和拥有这些奢侈的东西（拿个爱疯就能代表你是高富帅？）
            
            3、自我救赎：这点太难了，人贵自度，道贵自悟。科技和环境的进步让人轻浮，不少人已经学不会深入的思考和学习，更别说领悟了。突然觉得这点很难说清楚。大部分人会把这个扯上大环境，但是这个真的不关乎环境多大的问题。正如以前没书读的时候，拿到一本书会认真的读很多遍，但是现在有很多书了，倒不一定会拿起来看。而那些真正的爱书的人是不会因为书多书少而受影响的。之前看过很经典的一个故事，同一个家庭出来的双胞胎兄弟，一个努力奋斗成为了老板，一个自我堕落吃上了国家饭，问其原因的时候，两人的回答如出一辙：出生在这样的家庭，我能怎么办呢！这个可能天生的吧，我也说不清楚，目前心理学也无法很好的解释这一心理。有些人活了半辈子就对拥有大智慧，有些人活两三辈子，都不一定明白一些事情。
            
            4、环境： 这点和我们说的社会不同，这个环境说的是每个人的环境，有很多不同，但是也有很多共同的地方，比如说女孩子向闺蜜咨询某个男孩是否靠谱的时候，总是容易得到对方是否多金或者帅气高大的回答。我了解一些婚姻失败的朋友，其实他们婚姻失败的都有一个原因，身边的人给出了不靠谱的答案（当然也不排除自身的不靠谱）。在国内很多有心理疾病的人无法得到很好的治疗的有一方面的原因就在于身边的人就是病态的。你想想，你感冒了，正常的来说，吃了药会好的（很多时候哪怕不吃药也会好），不过身边的人会一直让你不脱衣服甚至泼冷水等等，你还能好么！
            
            现在我们对中二病总结一下：
            
            1、由于成长时期自我意识的压抑，而到了成年时能表现自己的时候，自我意识爆棚！
            
            2、成长时期缺乏沟通，也没学会正确和良好的沟通而导致成年时不会真正的沟通！
            
            3、从身边的人上得不到真正的关心和爱以及建议，误导了自身，形成了缺陷人格和自我感觉失误。
            
            4、自己的悟性太差不能真正的理解这个社会给予自己的反馈，加重了自我感觉的失误。（比如很多人不能正视别人对于自己的评价，甚至直接变现攻击对方。）
            
            5、科技进步和财富进步，让人更加不能自控。你开着QQ写文章试试，你能完全不看QQ的话，我算你狠！
            
            以上问题不会在二十多岁的时候带来大的问题（二十多岁，大家能原谅你的幼稚，再说了，那时也没有沉重的家庭问题），而到了三四十岁的时候，问题就越来越严重了。不少齐天大圣就是酱紫的哦！
            
            本来想弄个案例分析的，但是担心得罪对方和被对方攻击，就罢了吧。
            
            很早之前看过这样一句话：人性的进步是很漫长的，但是人性的退步却非常容易。（路西法效应）`
        },
        {   name:"Lyra",
            title:"断层的分歧",
            content:"18岁。维克多·孔多利亚（ヴィクトル·コンドリア）大学脑部科学研究所的研究员。仅18岁就跳级大学毕业。更在美国的著名学术期刊（Science）发表论文的货真价实的天才。一见到未知事物，就提起兴趣埋头钻研。属于不太直率的类型，不善于称赞对方。尽管如此，对于自己认可的人，虽然会嘴硬，但还是会抱着尊敬的态度。冈部称她为“助手“、“克莉丝汀娜（Christina）”。而本人并不接受。也是所谓的傲娇。",
            type:"Steins;Gate",
            data:`“中二病”，关于这个词汇你怎么看呢？谁不曾有过那么一点点“二”？只是，人不能永远长不大，不是？！

            中二病，是今年年初由日本兴起的一个词汇， 中二病（又称初二症）是伊集院光在广播节目《伊集院光 深夜的马鹿力》中提出，比喻日本青春期的少年过于自以为是等特别言行的俗语。
            
            对于“中二病”，大家关注点不同，反应不一。
            
            心理学家分析后的结论是：“中二病”的形成源自长期的“御宅”生活方式或意志被压抑而导致的心理扭曲；当然，“中二病”中也有正面积极的地方，比如对自己的肯定、自我意识的建立。
            
            社会学家认为，“中二病”是现代社会科技化进程加快的负面作用的体现之一。例如，过于快速和便捷的生活方式，使得人们减少沟通交流，更沉醉在自己的小世界里。生活过于简单而思维过于丰富，为“中二病”的诞生提供了温床。
            
            时尚界及艺文界这群本身就很“中二”的人，则有自己的看法。他们认为，“中二病”没什么不好，“人不中二枉少年”，“中二”才能让人更加地才华横溢。
            
            根据以上的结论可以看出，中二病的原因多为自我意识的压抑或者得不到合理的疏导，表现行为多为傲娇的行为等等，而这种行为多为对于自己和世界的不清晰认识，类似初生牛犊不怕虎。
            
            青少年转变成大人的过渡期——青春期特有的思想、行动、价值观的总称，把成长过程中发生一种类似“热病”的精神状态，比喻为“症状”。“发病”时期约在中学（初中）2年级前后，故称为“中二病”，而把有那种情况的人称为“中二病患者”（初二症患者）。虽然称为“病”，但没有看医生的必要，不是医学上的“疾病”。 ——（维基百科的解释）
            
            这个解释很合理，不过其实大多数人都有这种意识和行为的。现今的生活是个鼓励个性的社会，但是话说回来，谁又是真的特别的呢？真的优秀，特别的人只是极少数。故大部分的人无意识或有意识的要表现自己。这是人的一种本能。没有人想成为别人的复制品。可是大部分人自我意识良好（属于正常范围而非过分不良好）则慢慢的变成了别人的翻版，有时也可能是因为别人已经做了自己想成为的那种人（又或者别人已经做得更好了，我没法超越，偶像心理。）。一种是为了保护自己的形象，一种是能在别人身上找到安慰。
            
            为了保护自己的形象
            
            人都是这样的，比如说很多女孩，人前淑女，人后疯女。排除不想给别人一眼看穿而无力反抗的*裸的心理之外，更多的是一种自我安慰（又或者自我保护）的心理，比如说我们在陌生人面前表现的nice时，别人对我们的印象更好，会间接或者直接的“夸奖”我们（夸奖啊，或者对我们也很nice啊）。每个人的心理都有那么一点点期望（大多数人是不自知的），而做出一系列行为就可以解释这个原因。当然也有不少人对人粗暴，这则是另外一种表现自己和保护自己的行为了。此处不作为讨论，表过不提。
            
            在别人身上找到安慰。（偶像心理和假象心理）
            
            这种心理和上面提到的希望别人夸奖自己的心理有所不同，区别在于能不能做到。上面的心理是可以做到的，这种心理是很难完成甚至无法做到的。比如说别人夸我们善良可爱，我们是可以做到的，但是我们自己想成为自己心目中偶像的样子的话，很难。崇拜张学友和能不能成为张学友第二是两码事，而且就算非常崇拜也不见得能成为。只是这种心理给人心理一种假象：我和我的偶像差不多。魂淡，醒醒吧！差远了，好嘛！这其实是对于自身和自身环境没有清晰的认识。那些成熟而理性的人是没有偶像的或者说自己就是自己的偶像。相反那些心理不成熟或者在自己生活不如人意的人会无意识的通过偶像心理来安慰自己：其实你也不是很差的啦，你看看你的偶像，你和他差不多，当年他也是你这样什么的等等。（不得不说偶像心理给人很多错误，如果不敢相信，请查查china史上最严重的偶像崇拜事件，*期长达十年而且事情过去了四十年事件影响还未完绝。）
            
            以上基本就是人心理的原因了，不过现今社会还有很多其他的原因存在而导致中二现象。
            
            1、家庭教育：目前中国的教育大多都是长辈说，晚辈听的状态，晚辈的自我意识被压抑。而且长辈的自我也是扭曲的（这点特别说明一下，60后和70后的人成长时受到了更加严重的意识扭曲，没有真正的认识过自己和自我环境，因为没有机会呗。），看一些现象就知道了，孩子考了一百分，爸爸就给你买个玩具车！然后爸爸会无意宣扬自己的儿子成绩不错，自己面上有光。魂淡啊，纪伯伦都说过：孩子是你生的，但是不是你的。企图控制孩子行为，通过孩子的表现来满足自我，这心灵得多么的空虚啊。孩子考差了，说孩子不争气，孩子考好了，全靠我教的好。大部分中国孩子或多或少的都受到这种教育，而这种成长经历给人带来的更多的自我缺失。父母的强加和缺乏沟通为不少人埋下了恶果。
            
            2、社会问题：目前社会大多鼓励个性，但却没有给出适合个性生长的环境。而这同时社会又进行了快速的科技进步和财富变化。换句话来说，也是不少老板最喜欢说的一句：不管用什么方法，你给我挣到钱！财富的变化和贫富悬殊加剧，让人变得不关乎真正的内涵，更注重外表，科技变化让大家更少真正的沟通，所谓的在网上带着面具展现自我不过是弥补缺失的另外一个表现而已，要知道这种缺失是填不满的，不但越陷越深还让人迷失自己。另外网络的进步给人更多幻想，我们上网可以轻松的找到很多奢侈的东西，但是这不代表我们能真正的理解和拥有这些奢侈的东西（拿个爱疯就能代表你是高富帅？）
            
            3、自我救赎：这点太难了，人贵自度，道贵自悟。科技和环境的进步让人轻浮，不少人已经学不会深入的思考和学习，更别说领悟了。突然觉得这点很难说清楚。大部分人会把这个扯上大环境，但是这个真的不关乎环境多大的问题。正如以前没书读的时候，拿到一本书会认真的读很多遍，但是现在有很多书了，倒不一定会拿起来看。而那些真正的爱书的人是不会因为书多书少而受影响的。之前看过很经典的一个故事，同一个家庭出来的双胞胎兄弟，一个努力奋斗成为了老板，一个自我堕落吃上了国家饭，问其原因的时候，两人的回答如出一辙：出生在这样的家庭，我能怎么办呢！这个可能天生的吧，我也说不清楚，目前心理学也无法很好的解释这一心理。有些人活了半辈子就对拥有大智慧，有些人活两三辈子，都不一定明白一些事情。
            
            4、环境： 这点和我们说的社会不同，这个环境说的是每个人的环境，有很多不同，但是也有很多共同的地方，比如说女孩子向闺蜜咨询某个男孩是否靠谱的时候，总是容易得到对方是否多金或者帅气高大的回答。我了解一些婚姻失败的朋友，其实他们婚姻失败的都有一个原因，身边的人给出了不靠谱的答案（当然也不排除自身的不靠谱）。在国内很多有心理疾病的人无法得到很好的治疗的有一方面的原因就在于身边的人就是病态的。你想想，你感冒了，正常的来说，吃了药会好的（很多时候哪怕不吃药也会好），不过身边的人会一直让你不脱衣服甚至泼冷水等等，你还能好么！
            
            现在我们对中二病总结一下：
            
            1、由于成长时期自我意识的压抑，而到了成年时能表现自己的时候，自我意识爆棚！
            
            2、成长时期缺乏沟通，也没学会正确和良好的沟通而导致成年时不会真正的沟通！
            
            3、从身边的人上得不到真正的关心和爱以及建议，误导了自身，形成了缺陷人格和自我感觉失误。
            
            4、自己的悟性太差不能真正的理解这个社会给予自己的反馈，加重了自我感觉的失误。（比如很多人不能正视别人对于自己的评价，甚至直接变现攻击对方。）
            
            5、科技进步和财富进步，让人更加不能自控。你开着QQ写文章试试，你能完全不看QQ的话，我算你狠！
            
            以上问题不会在二十多岁的时候带来大的问题（二十多岁，大家能原谅你的幼稚，再说了，那时也没有沉重的家庭问题），而到了三四十岁的时候，问题就越来越严重了。不少齐天大圣就是酱紫的哦！
            
            本来想弄个案例分析的，但是担心得罪对方和被对方攻击，就罢了吧。
            
            很早之前看过这样一句话：人性的进步是很漫长的，但是人性的退步却非常容易。（路西法效应）`
        },
        {   name:"Lyra",
            title:"梦幻的自平衡",
            content:"18岁。维克多·孔多利亚（ヴィクトル·コンドリア）大学脑部科学研究所的研究员。仅18岁就跳级大学毕业。更在美国的著名学术期刊（Science）发表论文的货真价实的天才。一见到未知事物，就提起兴趣埋头钻研。属于不太直率的类型，不善于称赞对方。尽管如此，对于自己认可的人，虽然会嘴硬，但还是会抱着尊敬的态度。冈部称她为“助手“、“克莉丝汀娜（Christina）”。而本人并不接受。也是所谓的傲娇。",
            type:"Steins;Gate",
            data:`“中二病”，关于这个词汇你怎么看呢？谁不曾有过那么一点点“二”？只是，人不能永远长不大，不是？！

            中二病，是今年年初由日本兴起的一个词汇， 中二病（又称初二症）是伊集院光在广播节目《伊集院光 深夜的马鹿力》中提出，比喻日本青春期的少年过于自以为是等特别言行的俗语。
            
            对于“中二病”，大家关注点不同，反应不一。
            
            心理学家分析后的结论是：“中二病”的形成源自长期的“御宅”生活方式或意志被压抑而导致的心理扭曲；当然，“中二病”中也有正面积极的地方，比如对自己的肯定、自我意识的建立。
            
            社会学家认为，“中二病”是现代社会科技化进程加快的负面作用的体现之一。例如，过于快速和便捷的生活方式，使得人们减少沟通交流，更沉醉在自己的小世界里。生活过于简单而思维过于丰富，为“中二病”的诞生提供了温床。
            
            时尚界及艺文界这群本身就很“中二”的人，则有自己的看法。他们认为，“中二病”没什么不好，“人不中二枉少年”，“中二”才能让人更加地才华横溢。
            
            根据以上的结论可以看出，中二病的原因多为自我意识的压抑或者得不到合理的疏导，表现行为多为傲娇的行为等等，而这种行为多为对于自己和世界的不清晰认识，类似初生牛犊不怕虎。
            
            青少年转变成大人的过渡期——青春期特有的思想、行动、价值观的总称，把成长过程中发生一种类似“热病”的精神状态，比喻为“症状”。“发病”时期约在中学（初中）2年级前后，故称为“中二病”，而把有那种情况的人称为“中二病患者”（初二症患者）。虽然称为“病”，但没有看医生的必要，不是医学上的“疾病”。 ——（维基百科的解释）
            
            这个解释很合理，不过其实大多数人都有这种意识和行为的。现今的生活是个鼓励个性的社会，但是话说回来，谁又是真的特别的呢？真的优秀，特别的人只是极少数。故大部分的人无意识或有意识的要表现自己。这是人的一种本能。没有人想成为别人的复制品。可是大部分人自我意识良好（属于正常范围而非过分不良好）则慢慢的变成了别人的翻版，有时也可能是因为别人已经做了自己想成为的那种人（又或者别人已经做得更好了，我没法超越，偶像心理。）。一种是为了保护自己的形象，一种是能在别人身上找到安慰。
            
            为了保护自己的形象
            
            人都是这样的，比如说很多女孩，人前淑女，人后疯女。排除不想给别人一眼看穿而无力反抗的*裸的心理之外，更多的是一种自我安慰（又或者自我保护）的心理，比如说我们在陌生人面前表现的nice时，别人对我们的印象更好，会间接或者直接的“夸奖”我们（夸奖啊，或者对我们也很nice啊）。每个人的心理都有那么一点点期望（大多数人是不自知的），而做出一系列行为就可以解释这个原因。当然也有不少人对人粗暴，这则是另外一种表现自己和保护自己的行为了。此处不作为讨论，表过不提。
            
            在别人身上找到安慰。（偶像心理和假象心理）
            
            这种心理和上面提到的希望别人夸奖自己的心理有所不同，区别在于能不能做到。上面的心理是可以做到的，这种心理是很难完成甚至无法做到的。比如说别人夸我们善良可爱，我们是可以做到的，但是我们自己想成为自己心目中偶像的样子的话，很难。崇拜张学友和能不能成为张学友第二是两码事，而且就算非常崇拜也不见得能成为。只是这种心理给人心理一种假象：我和我的偶像差不多。魂淡，醒醒吧！差远了，好嘛！这其实是对于自身和自身环境没有清晰的认识。那些成熟而理性的人是没有偶像的或者说自己就是自己的偶像。相反那些心理不成熟或者在自己生活不如人意的人会无意识的通过偶像心理来安慰自己：其实你也不是很差的啦，你看看你的偶像，你和他差不多，当年他也是你这样什么的等等。（不得不说偶像心理给人很多错误，如果不敢相信，请查查china史上最严重的偶像崇拜事件，*期长达十年而且事情过去了四十年事件影响还未完绝。）
            
            以上基本就是人心理的原因了，不过现今社会还有很多其他的原因存在而导致中二现象。
            
            1、家庭教育：目前中国的教育大多都是长辈说，晚辈听的状态，晚辈的自我意识被压抑。而且长辈的自我也是扭曲的（这点特别说明一下，60后和70后的人成长时受到了更加严重的意识扭曲，没有真正的认识过自己和自我环境，因为没有机会呗。），看一些现象就知道了，孩子考了一百分，爸爸就给你买个玩具车！然后爸爸会无意宣扬自己的儿子成绩不错，自己面上有光。魂淡啊，纪伯伦都说过：孩子是你生的，但是不是你的。企图控制孩子行为，通过孩子的表现来满足自我，这心灵得多么的空虚啊。孩子考差了，说孩子不争气，孩子考好了，全靠我教的好。大部分中国孩子或多或少的都受到这种教育，而这种成长经历给人带来的更多的自我缺失。父母的强加和缺乏沟通为不少人埋下了恶果。
            
            2、社会问题：目前社会大多鼓励个性，但却没有给出适合个性生长的环境。而这同时社会又进行了快速的科技进步和财富变化。换句话来说，也是不少老板最喜欢说的一句：不管用什么方法，你给我挣到钱！财富的变化和贫富悬殊加剧，让人变得不关乎真正的内涵，更注重外表，科技变化让大家更少真正的沟通，所谓的在网上带着面具展现自我不过是弥补缺失的另外一个表现而已，要知道这种缺失是填不满的，不但越陷越深还让人迷失自己。另外网络的进步给人更多幻想，我们上网可以轻松的找到很多奢侈的东西，但是这不代表我们能真正的理解和拥有这些奢侈的东西（拿个爱疯就能代表你是高富帅？）
            
            3、自我救赎：这点太难了，人贵自度，道贵自悟。科技和环境的进步让人轻浮，不少人已经学不会深入的思考和学习，更别说领悟了。突然觉得这点很难说清楚。大部分人会把这个扯上大环境，但是这个真的不关乎环境多大的问题。正如以前没书读的时候，拿到一本书会认真的读很多遍，但是现在有很多书了，倒不一定会拿起来看。而那些真正的爱书的人是不会因为书多书少而受影响的。之前看过很经典的一个故事，同一个家庭出来的双胞胎兄弟，一个努力奋斗成为了老板，一个自我堕落吃上了国家饭，问其原因的时候，两人的回答如出一辙：出生在这样的家庭，我能怎么办呢！这个可能天生的吧，我也说不清楚，目前心理学也无法很好的解释这一心理。有些人活了半辈子就对拥有大智慧，有些人活两三辈子，都不一定明白一些事情。
            
            4、环境： 这点和我们说的社会不同，这个环境说的是每个人的环境，有很多不同，但是也有很多共同的地方，比如说女孩子向闺蜜咨询某个男孩是否靠谱的时候，总是容易得到对方是否多金或者帅气高大的回答。我了解一些婚姻失败的朋友，其实他们婚姻失败的都有一个原因，身边的人给出了不靠谱的答案（当然也不排除自身的不靠谱）。在国内很多有心理疾病的人无法得到很好的治疗的有一方面的原因就在于身边的人就是病态的。你想想，你感冒了，正常的来说，吃了药会好的（很多时候哪怕不吃药也会好），不过身边的人会一直让你不脱衣服甚至泼冷水等等，你还能好么！
            
            现在我们对中二病总结一下：
            
            1、由于成长时期自我意识的压抑，而到了成年时能表现自己的时候，自我意识爆棚！
            
            2、成长时期缺乏沟通，也没学会正确和良好的沟通而导致成年时不会真正的沟通！
            
            3、从身边的人上得不到真正的关心和爱以及建议，误导了自身，形成了缺陷人格和自我感觉失误。
            
            4、自己的悟性太差不能真正的理解这个社会给予自己的反馈，加重了自我感觉的失误。（比如很多人不能正视别人对于自己的评价，甚至直接变现攻击对方。）
            
            5、科技进步和财富进步，让人更加不能自控。你开着QQ写文章试试，你能完全不看QQ的话，我算你狠！
            
            以上问题不会在二十多岁的时候带来大的问题（二十多岁，大家能原谅你的幼稚，再说了，那时也没有沉重的家庭问题），而到了三四十岁的时候，问题就越来越严重了。不少齐天大圣就是酱紫的哦！
            
            本来想弄个案例分析的，但是担心得罪对方和被对方攻击，就罢了吧。
            
            很早之前看过这样一句话：人性的进步是很漫长的，但是人性的退步却非常容易。（路西法效应）`
        },
        {   name:"Lyra",
            title:"幻象的自平衡",
            content:"18岁。维克多·孔多利亚（ヴィクトル·コンドリア）大学脑部科学研究所的研究员。仅18岁就跳级大学毕业。更在美国的著名学术期刊（Science）发表论文的货真价实的天才。一见到未知事物，就提起兴趣埋头钻研。属于不太直率的类型，不善于称赞对方。尽管如此，对于自己认可的人，虽然会嘴硬，但还是会抱着尊敬的态度。冈部称她为“助手“、“克莉丝汀娜（Christina）”。而本人并不接受。也是所谓的傲娇。",
            type:"Steins;Gate",
            data:`“中二病”，关于这个词汇你怎么看呢？谁不曾有过那么一点点“二”？只是，人不能永远长不大，不是？！

            中二病，是今年年初由日本兴起的一个词汇， 中二病（又称初二症）是伊集院光在广播节目《伊集院光 深夜的马鹿力》中提出，比喻日本青春期的少年过于自以为是等特别言行的俗语。
            
            对于“中二病”，大家关注点不同，反应不一。
            
            心理学家分析后的结论是：“中二病”的形成源自长期的“御宅”生活方式或意志被压抑而导致的心理扭曲；当然，“中二病”中也有正面积极的地方，比如对自己的肯定、自我意识的建立。
            
            社会学家认为，“中二病”是现代社会科技化进程加快的负面作用的体现之一。例如，过于快速和便捷的生活方式，使得人们减少沟通交流，更沉醉在自己的小世界里。生活过于简单而思维过于丰富，为“中二病”的诞生提供了温床。
            
            时尚界及艺文界这群本身就很“中二”的人，则有自己的看法。他们认为，“中二病”没什么不好，“人不中二枉少年”，“中二”才能让人更加地才华横溢。
            
            根据以上的结论可以看出，中二病的原因多为自我意识的压抑或者得不到合理的疏导，表现行为多为傲娇的行为等等，而这种行为多为对于自己和世界的不清晰认识，类似初生牛犊不怕虎。
            
            青少年转变成大人的过渡期——青春期特有的思想、行动、价值观的总称，把成长过程中发生一种类似“热病”的精神状态，比喻为“症状”。“发病”时期约在中学（初中）2年级前后，故称为“中二病”，而把有那种情况的人称为“中二病患者”（初二症患者）。虽然称为“病”，但没有看医生的必要，不是医学上的“疾病”。 ——（维基百科的解释）
            
            这个解释很合理，不过其实大多数人都有这种意识和行为的。现今的生活是个鼓励个性的社会，但是话说回来，谁又是真的特别的呢？真的优秀，特别的人只是极少数。故大部分的人无意识或有意识的要表现自己。这是人的一种本能。没有人想成为别人的复制品。可是大部分人自我意识良好（属于正常范围而非过分不良好）则慢慢的变成了别人的翻版，有时也可能是因为别人已经做了自己想成为的那种人（又或者别人已经做得更好了，我没法超越，偶像心理。）。一种是为了保护自己的形象，一种是能在别人身上找到安慰。
            
            为了保护自己的形象
            
            人都是这样的，比如说很多女孩，人前淑女，人后疯女。排除不想给别人一眼看穿而无力反抗的*裸的心理之外，更多的是一种自我安慰（又或者自我保护）的心理，比如说我们在陌生人面前表现的nice时，别人对我们的印象更好，会间接或者直接的“夸奖”我们（夸奖啊，或者对我们也很nice啊）。每个人的心理都有那么一点点期望（大多数人是不自知的），而做出一系列行为就可以解释这个原因。当然也有不少人对人粗暴，这则是另外一种表现自己和保护自己的行为了。此处不作为讨论，表过不提。
            
            在别人身上找到安慰。（偶像心理和假象心理）
            
            这种心理和上面提到的希望别人夸奖自己的心理有所不同，区别在于能不能做到。上面的心理是可以做到的，这种心理是很难完成甚至无法做到的。比如说别人夸我们善良可爱，我们是可以做到的，但是我们自己想成为自己心目中偶像的样子的话，很难。崇拜张学友和能不能成为张学友第二是两码事，而且就算非常崇拜也不见得能成为。只是这种心理给人心理一种假象：我和我的偶像差不多。魂淡，醒醒吧！差远了，好嘛！这其实是对于自身和自身环境没有清晰的认识。那些成熟而理性的人是没有偶像的或者说自己就是自己的偶像。相反那些心理不成熟或者在自己生活不如人意的人会无意识的通过偶像心理来安慰自己：其实你也不是很差的啦，你看看你的偶像，你和他差不多，当年他也是你这样什么的等等。（不得不说偶像心理给人很多错误，如果不敢相信，请查查china史上最严重的偶像崇拜事件，*期长达十年而且事情过去了四十年事件影响还未完绝。）
            
            以上基本就是人心理的原因了，不过现今社会还有很多其他的原因存在而导致中二现象。
            
            1、家庭教育：目前中国的教育大多都是长辈说，晚辈听的状态，晚辈的自我意识被压抑。而且长辈的自我也是扭曲的（这点特别说明一下，60后和70后的人成长时受到了更加严重的意识扭曲，没有真正的认识过自己和自我环境，因为没有机会呗。），看一些现象就知道了，孩子考了一百分，爸爸就给你买个玩具车！然后爸爸会无意宣扬自己的儿子成绩不错，自己面上有光。魂淡啊，纪伯伦都说过：孩子是你生的，但是不是你的。企图控制孩子行为，通过孩子的表现来满足自我，这心灵得多么的空虚啊。孩子考差了，说孩子不争气，孩子考好了，全靠我教的好。大部分中国孩子或多或少的都受到这种教育，而这种成长经历给人带来的更多的自我缺失。父母的强加和缺乏沟通为不少人埋下了恶果。
            
            2、社会问题：目前社会大多鼓励个性，但却没有给出适合个性生长的环境。而这同时社会又进行了快速的科技进步和财富变化。换句话来说，也是不少老板最喜欢说的一句：不管用什么方法，你给我挣到钱！财富的变化和贫富悬殊加剧，让人变得不关乎真正的内涵，更注重外表，科技变化让大家更少真正的沟通，所谓的在网上带着面具展现自我不过是弥补缺失的另外一个表现而已，要知道这种缺失是填不满的，不但越陷越深还让人迷失自己。另外网络的进步给人更多幻想，我们上网可以轻松的找到很多奢侈的东西，但是这不代表我们能真正的理解和拥有这些奢侈的东西（拿个爱疯就能代表你是高富帅？）
            
            3、自我救赎：这点太难了，人贵自度，道贵自悟。科技和环境的进步让人轻浮，不少人已经学不会深入的思考和学习，更别说领悟了。突然觉得这点很难说清楚。大部分人会把这个扯上大环境，但是这个真的不关乎环境多大的问题。正如以前没书读的时候，拿到一本书会认真的读很多遍，但是现在有很多书了，倒不一定会拿起来看。而那些真正的爱书的人是不会因为书多书少而受影响的。之前看过很经典的一个故事，同一个家庭出来的双胞胎兄弟，一个努力奋斗成为了老板，一个自我堕落吃上了国家饭，问其原因的时候，两人的回答如出一辙：出生在这样的家庭，我能怎么办呢！这个可能天生的吧，我也说不清楚，目前心理学也无法很好的解释这一心理。有些人活了半辈子就对拥有大智慧，有些人活两三辈子，都不一定明白一些事情。
            
            4、环境： 这点和我们说的社会不同，这个环境说的是每个人的环境，有很多不同，但是也有很多共同的地方，比如说女孩子向闺蜜咨询某个男孩是否靠谱的时候，总是容易得到对方是否多金或者帅气高大的回答。我了解一些婚姻失败的朋友，其实他们婚姻失败的都有一个原因，身边的人给出了不靠谱的答案（当然也不排除自身的不靠谱）。在国内很多有心理疾病的人无法得到很好的治疗的有一方面的原因就在于身边的人就是病态的。你想想，你感冒了，正常的来说，吃了药会好的（很多时候哪怕不吃药也会好），不过身边的人会一直让你不脱衣服甚至泼冷水等等，你还能好么！
            
            现在我们对中二病总结一下：
            
            1、由于成长时期自我意识的压抑，而到了成年时能表现自己的时候，自我意识爆棚！
            
            2、成长时期缺乏沟通，也没学会正确和良好的沟通而导致成年时不会真正的沟通！
            
            3、从身边的人上得不到真正的关心和爱以及建议，误导了自身，形成了缺陷人格和自我感觉失误。
            
            4、自己的悟性太差不能真正的理解这个社会给予自己的反馈，加重了自我感觉的失误。（比如很多人不能正视别人对于自己的评价，甚至直接变现攻击对方。）
            
            5、科技进步和财富进步，让人更加不能自控。你开着QQ写文章试试，你能完全不看QQ的话，我算你狠！
            
            以上问题不会在二十多岁的时候带来大的问题（二十多岁，大家能原谅你的幼稚，再说了，那时也没有沉重的家庭问题），而到了三四十岁的时候，问题就越来越严重了。不少齐天大圣就是酱紫的哦！
            
            本来想弄个案例分析的，但是担心得罪对方和被对方攻击，就罢了吧。
            
            很早之前看过这样一句话：人性的进步是很漫长的，但是人性的退步却非常容易。（路西法效应）`
        },
        {   name:"Lyra",
            title:"相生的自平衡",
            content:"18岁。维克多·孔多利亚（ヴィクトル·コンドリア）大学脑部科学研究所的研究员。仅18岁就跳级大学毕业。更在美国的著名学术期刊（Science）发表论文的货真价实的天才。一见到未知事物，就提起兴趣埋头钻研。属于不太直率的类型，不善于称赞对方。尽管如此，对于自己认可的人，虽然会嘴硬，但还是会抱着尊敬的态度。冈部称她为“助手“、“克莉丝汀娜（Christina）”。而本人并不接受。也是所谓的傲娇。",
            type:"Steins;Gate",
            data:`“中二病”，关于这个词汇你怎么看呢？谁不曾有过那么一点点“二”？只是，人不能永远长不大，不是？！

            中二病，是今年年初由日本兴起的一个词汇， 中二病（又称初二症）是伊集院光在广播节目《伊集院光 深夜的马鹿力》中提出，比喻日本青春期的少年过于自以为是等特别言行的俗语。
            
            对于“中二病”，大家关注点不同，反应不一。
            
            心理学家分析后的结论是：“中二病”的形成源自长期的“御宅”生活方式或意志被压抑而导致的心理扭曲；当然，“中二病”中也有正面积极的地方，比如对自己的肯定、自我意识的建立。
            
            社会学家认为，“中二病”是现代社会科技化进程加快的负面作用的体现之一。例如，过于快速和便捷的生活方式，使得人们减少沟通交流，更沉醉在自己的小世界里。生活过于简单而思维过于丰富，为“中二病”的诞生提供了温床。
            
            时尚界及艺文界这群本身就很“中二”的人，则有自己的看法。他们认为，“中二病”没什么不好，“人不中二枉少年”，“中二”才能让人更加地才华横溢。
            
            根据以上的结论可以看出，中二病的原因多为自我意识的压抑或者得不到合理的疏导，表现行为多为傲娇的行为等等，而这种行为多为对于自己和世界的不清晰认识，类似初生牛犊不怕虎。
            
            青少年转变成大人的过渡期——青春期特有的思想、行动、价值观的总称，把成长过程中发生一种类似“热病”的精神状态，比喻为“症状”。“发病”时期约在中学（初中）2年级前后，故称为“中二病”，而把有那种情况的人称为“中二病患者”（初二症患者）。虽然称为“病”，但没有看医生的必要，不是医学上的“疾病”。 ——（维基百科的解释）
            
            这个解释很合理，不过其实大多数人都有这种意识和行为的。现今的生活是个鼓励个性的社会，但是话说回来，谁又是真的特别的呢？真的优秀，特别的人只是极少数。故大部分的人无意识或有意识的要表现自己。这是人的一种本能。没有人想成为别人的复制品。可是大部分人自我意识良好（属于正常范围而非过分不良好）则慢慢的变成了别人的翻版，有时也可能是因为别人已经做了自己想成为的那种人（又或者别人已经做得更好了，我没法超越，偶像心理。）。一种是为了保护自己的形象，一种是能在别人身上找到安慰。
            
            为了保护自己的形象
            
            人都是这样的，比如说很多女孩，人前淑女，人后疯女。排除不想给别人一眼看穿而无力反抗的*裸的心理之外，更多的是一种自我安慰（又或者自我保护）的心理，比如说我们在陌生人面前表现的nice时，别人对我们的印象更好，会间接或者直接的“夸奖”我们（夸奖啊，或者对我们也很nice啊）。每个人的心理都有那么一点点期望（大多数人是不自知的），而做出一系列行为就可以解释这个原因。当然也有不少人对人粗暴，这则是另外一种表现自己和保护自己的行为了。此处不作为讨论，表过不提。
            
            在别人身上找到安慰。（偶像心理和假象心理）
            
            这种心理和上面提到的希望别人夸奖自己的心理有所不同，区别在于能不能做到。上面的心理是可以做到的，这种心理是很难完成甚至无法做到的。比如说别人夸我们善良可爱，我们是可以做到的，但是我们自己想成为自己心目中偶像的样子的话，很难。崇拜张学友和能不能成为张学友第二是两码事，而且就算非常崇拜也不见得能成为。只是这种心理给人心理一种假象：我和我的偶像差不多。魂淡，醒醒吧！差远了，好嘛！这其实是对于自身和自身环境没有清晰的认识。那些成熟而理性的人是没有偶像的或者说自己就是自己的偶像。相反那些心理不成熟或者在自己生活不如人意的人会无意识的通过偶像心理来安慰自己：其实你也不是很差的啦，你看看你的偶像，你和他差不多，当年他也是你这样什么的等等。（不得不说偶像心理给人很多错误，如果不敢相信，请查查china史上最严重的偶像崇拜事件，*期长达十年而且事情过去了四十年事件影响还未完绝。）
            
            以上基本就是人心理的原因了，不过现今社会还有很多其他的原因存在而导致中二现象。
            
            1、家庭教育：目前中国的教育大多都是长辈说，晚辈听的状态，晚辈的自我意识被压抑。而且长辈的自我也是扭曲的（这点特别说明一下，60后和70后的人成长时受到了更加严重的意识扭曲，没有真正的认识过自己和自我环境，因为没有机会呗。），看一些现象就知道了，孩子考了一百分，爸爸就给你买个玩具车！然后爸爸会无意宣扬自己的儿子成绩不错，自己面上有光。魂淡啊，纪伯伦都说过：孩子是你生的，但是不是你的。企图控制孩子行为，通过孩子的表现来满足自我，这心灵得多么的空虚啊。孩子考差了，说孩子不争气，孩子考好了，全靠我教的好。大部分中国孩子或多或少的都受到这种教育，而这种成长经历给人带来的更多的自我缺失。父母的强加和缺乏沟通为不少人埋下了恶果。
            
            2、社会问题：目前社会大多鼓励个性，但却没有给出适合个性生长的环境。而这同时社会又进行了快速的科技进步和财富变化。换句话来说，也是不少老板最喜欢说的一句：不管用什么方法，你给我挣到钱！财富的变化和贫富悬殊加剧，让人变得不关乎真正的内涵，更注重外表，科技变化让大家更少真正的沟通，所谓的在网上带着面具展现自我不过是弥补缺失的另外一个表现而已，要知道这种缺失是填不满的，不但越陷越深还让人迷失自己。另外网络的进步给人更多幻想，我们上网可以轻松的找到很多奢侈的东西，但是这不代表我们能真正的理解和拥有这些奢侈的东西（拿个爱疯就能代表你是高富帅？）
            
            3、自我救赎：这点太难了，人贵自度，道贵自悟。科技和环境的进步让人轻浮，不少人已经学不会深入的思考和学习，更别说领悟了。突然觉得这点很难说清楚。大部分人会把这个扯上大环境，但是这个真的不关乎环境多大的问题。正如以前没书读的时候，拿到一本书会认真的读很多遍，但是现在有很多书了，倒不一定会拿起来看。而那些真正的爱书的人是不会因为书多书少而受影响的。之前看过很经典的一个故事，同一个家庭出来的双胞胎兄弟，一个努力奋斗成为了老板，一个自我堕落吃上了国家饭，问其原因的时候，两人的回答如出一辙：出生在这样的家庭，我能怎么办呢！这个可能天生的吧，我也说不清楚，目前心理学也无法很好的解释这一心理。有些人活了半辈子就对拥有大智慧，有些人活两三辈子，都不一定明白一些事情。
            
            4、环境： 这点和我们说的社会不同，这个环境说的是每个人的环境，有很多不同，但是也有很多共同的地方，比如说女孩子向闺蜜咨询某个男孩是否靠谱的时候，总是容易得到对方是否多金或者帅气高大的回答。我了解一些婚姻失败的朋友，其实他们婚姻失败的都有一个原因，身边的人给出了不靠谱的答案（当然也不排除自身的不靠谱）。在国内很多有心理疾病的人无法得到很好的治疗的有一方面的原因就在于身边的人就是病态的。你想想，你感冒了，正常的来说，吃了药会好的（很多时候哪怕不吃药也会好），不过身边的人会一直让你不脱衣服甚至泼冷水等等，你还能好么！
            
            现在我们对中二病总结一下：
            
            1、由于成长时期自我意识的压抑，而到了成年时能表现自己的时候，自我意识爆棚！
            
            2、成长时期缺乏沟通，也没学会正确和良好的沟通而导致成年时不会真正的沟通！
            
            3、从身边的人上得不到真正的关心和爱以及建议，误导了自身，形成了缺陷人格和自我感觉失误。
            
            4、自己的悟性太差不能真正的理解这个社会给予自己的反馈，加重了自我感觉的失误。（比如很多人不能正视别人对于自己的评价，甚至直接变现攻击对方。）
            
            5、科技进步和财富进步，让人更加不能自控。你开着QQ写文章试试，你能完全不看QQ的话，我算你狠！
            
            以上问题不会在二十多岁的时候带来大的问题（二十多岁，大家能原谅你的幼稚，再说了，那时也没有沉重的家庭问题），而到了三四十岁的时候，问题就越来越严重了。不少齐天大圣就是酱紫的哦！
            
            本来想弄个案例分析的，但是担心得罪对方和被对方攻击，就罢了吧。
            
            很早之前看过这样一句话：人性的进步是很漫长的，但是人性的退步却非常容易。（路西法效应）`
        },
      ]
}