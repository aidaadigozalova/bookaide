import React from "react";

const About = () => {
  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}>
      <h1>Haqqımızda</h1>
      <p>
        <strong>BookAide</strong> – kitabsevərlər üçün hazırlanmış innovativ bir
        tətbiqdir. Bu proqram kitab axtarışını və idarəsini asanlaşdırmaq
        məqsədilə yaradılıb.
      </p>
      <p>
        Proqram istifadəçilərə kitabları tez tapmaq, sevimli kitablarını
        siyahıya əlavə etmək və oxumaq üçün ideal platforma təqdim edir. Kitab
        axtarışını rahatlaşdırmaq üçün güclü API-lərdən istifadə olunur.
      </p>

      <h2>BookAide Adının Mənası</h2>
      <p>
        <strong>BookAide</strong> adı iki sözdən yaranıb: <br />- <em>Book</em>{" "}
        — yəni "kitab",
        <br />- <em>Aide</em> isə ingilis dilindən "assistant" və ya "köməkçi"
        mənasını verir.
      </p>
      <p>
        Bu proqram kitabsevərlər üçün yaradılmış xüsusi bir köməkçidir — kitab
        axtarmaqda, seçməkdə və idarə etməkdə onlara yardım edir.
      </p>
      <p>
        <strong>BookAide</strong> proqramının yaradıcısı{" "}
        <strong>Aida Adıgözəlova</strong> həm bir kitab həvəskarı, həm də
        bilbiofil (kitab kolleksioneri) kimi, öz adının ingiliscə mənasını da
        proqramın adına əlavə edib. Bu səbəbdən proqramın adı həm kitabı, həm də
        köməkçini ifadə edir — istifadəçilərə kitab dünyasında etibarlı bir dost
        kimi xidmət göstərməyi məqsəd qoyur.
      </p>

      <h2>Əsas Xüsusiyyətlərimiz</h2>
      <ul>
        <li>Sadə və sürətli kitab axtarışı</li>
        <li>İstifadəçi dostu interfeys</li>
        <li>Oxu siyahılarının yaradılması və idarəsi</li>
        <li>Mobil və masaüstü cihazlarda uyğun işləmə</li>
      </ul>
      <h2>Texnologiyalar</h2>
      <p>
        BookAide React.js ilə hazırlanmışdır və kitab məlumatlarını əldə etmək
        üçün açıq API-lərdən istifadə edir. Tamamilə responsiv dizayn sayəsində
        hər cihazda rahat işləyir.
      </p>
      <h2>Gələcək Planlar</h2>
      <p>
        Layihəmizi daim inkişaf etdiririk. Gələcəkdə sosial paylaşım imkanları,
        audio kitab dəstəyi və istifadəçi rəylərinin əlavə olunması
        planlaşdırılır.
      </p>
      <p>
        BookAide həmçinin istifadəçilərin fərdi zövqlərinə uyğun tövsiyələr
        verecek, oxu tarixçəsini saxlayıb və istifadəçi təcrübəsini daim inkişaf
        etdirmək üçün yeni funksiyalar əlavə olunacaq.
      </p>

    </div>
  );
};

export default About;
