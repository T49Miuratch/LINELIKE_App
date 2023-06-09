$(function(){
  $('.signinvalue').hide();

  $('.signin').on('click',function(){
    console.log("signinvalueがクリックされました");
    $('.signinvalue').not($($(this).attr('href'))).hide();

    // フェードイン・アウトのアニメーション付で、表示・非表示を交互に実行する
    $($(this).attr('href')).fadeToggle(1000);

    // show を使うと、表示するだけ （ 同じボタンを何回押しても変わらない ）
    // $($(this).attr('href')).show();
  });
});

// ここまでテスト

$(document).ready(function() {
  const imagesA = [ 'img/pillow/qst-pillow.png', 'img/pillow/yes-pillow.png', 'img/pillow/no-pillow.png'];
  const imagesB = [ 'img/pillow/qst-pillow-pink.png', 'img/pillow/yes-pillow-pink.png', 'img/pillow/no-pillow-pink.png'];
  var currentIndexA = 0;
  var currentIndexB = 0;

  $('.boys-pillow').on('click', 'img', function() {
    console.log("男の子の枕がクリックされました");
    currentIndexA = (currentIndexA + 1) % imagesA.length;
    var nextImageA = imagesA[currentIndexA];
    $(this).attr('src', nextImageA);
    checkImages();
  });

  $('.girls-pillow').on('click', 'img', function() {
    console.log("女の子の枕がクリックされました");
    currentIndexB = (currentIndexB + 1) % imagesB.length;
    var nextImageB = imagesB[currentIndexB];
    $(this).attr('src', nextImageB);
    checkImages();
  });

  function checkImages() {
    var currentImageA = imagesA[currentIndexA];
    var currentImageB = imagesB[currentIndexB];
    if (currentImageA === 'img/pillow/yes-pillow.png' && currentImageB === 'img/pillow/yes-pillow-pink.png') {
      $('#output').show();
    } else {
      $('#output').hide();
    }
  }
  
});