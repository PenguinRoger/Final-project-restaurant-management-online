'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Person', [
      {PERSONCODE:'BKOP','FIRSTNAME':'BK-ผู้แจ้ง','LASTNAME':'บางเขน','PERSON_NAME':'BK-ผู้แจ้ง บางเขน','TITLE':'ผู้แจ้ง','DEPTNO':'106','SITENO':1,'FLAGDEL':0},
{PERSONCODE:'BKOPHEAD','FIRSTNAME':'BK-ผู้อนุมัติแจ้ง','LASTNAME':'บางเขน','PERSON_NAME':'BK-ผู้อนุมัติแจ้ง บางเขน','TITLE':'ผู้อนุมัติแจ้ง','DEPTNO':'106','SITENO':1,'FLAGDEL':0},
{PERSONCODE:'BKMT','FIRSTNAME':'BK-ผู้ซ่อม/ปิดงาน','LASTNAME':'บางเขน','PERSON_NAME':'BK-ผู้ซ่อม/ปิดงาน บางเขน','TITLE':'ผู้ซ่อม/ปิดงาน','DEPTNO':'133','SITENO':1,'FLAGDEL':0},
{PERSONCODE:'BKMTHEAD','FIRSTNAME':'BK-ผู้อนุมัติปิดงาน','LASTNAME':'บางเขน','PERSON_NAME':'BK-ผู้อนุมัติปิดงาน บางเขน','TITLE':'ผู้อนุมัติปิดงาน','DEPTNO':'133','SITENO':1,'FLAGDEL':0},
{PERSONCODE:'MHOP','FIRSTNAME':'MH-ผู้แจ้ง','LASTNAME':'มหาสวัสดิ์','PERSON_NAME':'MH-ผู้แจ้ง มหาสวัสดิ์','TITLE':'ผู้แจ้ง','DEPTNO':'63','SITENO':1,'FLAGDEL':0},
{PERSONCODE:'MHOPHEAD','FIRSTNAME':'MH-ผู้อนุมัติแจ้ง','LASTNAME':'มหาสวัสดิ์','PERSON_NAME':'MH-ผู้อนุมัติแจ้ง มหาสวัสดิ์','TITLE':'ผู้อนุมัติแจ้ง','DEPTNO':'63','SITENO':1,'FLAGDEL':0},
{PERSONCODE:'MHMT','FIRSTNAME':'MH-ผู้ซ่อม/ปิดงาน','LASTNAME':'มหาสวัสดิ์','PERSON_NAME':'MH-ผู้ซ่อม/ปิดงาน มหาสวัสดิ์','TITLE':'ผู้ซ่อม/ปิดงาน','DEPTNO':'73','SITENO':1,'FLAGDEL':0},
{PERSONCODE:'MHMTHEAD','FIRSTNAME':'MH-ผู้อนุมัติปิดงาน','LASTNAME':'มหาสวัสดิ์','PERSON_NAME':'MH-ผู้อนุมัติปิดงาน มหาสวัสดิ์','TITLE':'ผู้อนุมัติปิดงาน','DEPTNO':'73','SITENO':1,'FLAGDEL':0},
{PERSONCODE:'THOP','FIRSTNAME':'TH-ผู้แจ้ง','LASTNAME':'ธนบุรี','PERSON_NAME':'TH-ผู้แจ้ง ธนบุรี','TITLE':'ผู้แจ้ง','DEPTNO':'74','SITENO':1,'FLAGDEL':0},
{PERSONCODE:'THOPHEAD','FIRSTNAME':'TH-ผู้อนุมัติแจ้ง','LASTNAME':'ธนบุรี','PERSON_NAME':'TH-ผู้อนุมัติแจ้ง ธนบุรี','TITLE':'ผู้อนุมัติแจ้ง','DEPTNO':'74','SITENO':1,'FLAGDEL':0},
{PERSONCODE:'THMT','FIRSTNAME':'TH-ผู้ซ่อม/ปิดงาน','LASTNAME':'ธนบุรี','PERSON_NAME':'TH-ผู้ซ่อม/ปิดงาน ธนบุรี','TITLE':'ผู้ซ่อม/ปิดงาน','DEPTNO':'73','SITENO':1,'FLAGDEL':0},
{PERSONCODE:'THMTHEAD','FIRSTNAME':'TH-ผู้อนุมัติปิดงาน','LASTNAME':'ธนบุรี','PERSON_NAME':'TH-ผู้อนุมัติปิดงาน ธนบุรี','TITLE':'ผู้อนุมัติปิดงาน','DEPTNO':'73','SITENO':1,'FLAGDEL':0},
{PERSONCODE:'SSOP','FIRSTNAME':'SS-ผู้แจ้ง','LASTNAME':'สามเสน','PERSON_NAME':'SS-ผู้แจ้ง สามเสน','TITLE':'ผู้แจ้ง','DEPTNO':'85','SITENO':1,'FLAGDEL':0},
{PERSONCODE:'SSOPHEAD','FIRSTNAME':'SS-ผู้อนุมัติแจ้ง','LASTNAME':'สามเสน','PERSON_NAME':'SS-ผู้อนุมัติแจ้ง สามเสน','TITLE':'ผู้อนุมัติแจ้ง','DEPTNO':'85','SITENO':1,'FLAGDEL':0},
{PERSONCODE:'SSMT','FIRSTNAME':'SS-ผู้ซ่อม/ปิดงาน','LASTNAME':'สามเสน','PERSON_NAME':'SS-ผู้ซ่อม/ปิดงาน สามเสน','TITLE':'ผู้ซ่อม/ปิดงาน','DEPTNO':'92','SITENO':1,'FLAGDEL':0},
{PERSONCODE:'SSMTHEAD','FIRSTNAME':'SS-ผู้อนุมัติปิดงาน','LASTNAME':'สามเสน','PERSON_NAME':'SS-ผู้อนุมัติปิดงาน สามเสน','TITLE':'ผู้อนุมัติปิดงาน','DEPTNO':'92','SITENO':1,'FLAGDEL':0},
{PERSONCODE:'WDOP','FIRSTNAME':'WD-ผู้แจ้ง','LASTNAME':'สถานีสูบจ่ายน้ำ','PERSON_NAME':'WD-ผู้แจ้ง สถานีสูบจ่ายน้ำ','TITLE':'ผู้แจ้ง','DEPTNO':'161','SITENO':1,'FLAGDEL':0},
{PERSONCODE:'WDOPHEAD','FIRSTNAME':'WD-ผู้อนุมัติแจ้ง','LASTNAME':'สถานีสูบจ่ายน้ำ','PERSON_NAME':'WD-ผู้อนุมัติแจ้ง สถานีสูบจ่ายน้ำ','TITLE':'ผู้อนุมัติแจ้ง','DEPTNO':'161','SITENO':1,'FLAGDEL':0},
{PERSONCODE:'WDMT','FIRSTNAME':'WD-ผู้ซ่อม/ปิดงาน','LASTNAME':'สถานีสูบจ่ายน้ำ','PERSON_NAME':'WD-ผู้ซ่อม/ปิดงาน สถานีสูบจ่ายน้ำ','TITLE':'ผู้ซ่อม/ปิดงาน','DEPTNO':'144','SITENO':1,'FLAGDEL':0},
{PERSONCODE:'WDMTHEAD','FIRSTNAME':'WD-ผู้อนุมัติปิดงาน','LASTNAME':'สถานีสูบจ่ายน้ำ','PERSON_NAME':'WD-ผู้อนุมัติปิดงาน สถานีสูบจ่ายน้ำ','TITLE':'ผู้อนุมัติปิดงาน','DEPTNO':'144','SITENO':1,'FLAGDEL':0},
{PERSONCODE:'RWOP','FIRSTNAME':'RW-ผู้แจ้ง','LASTNAME':'สถานีสูบน้ำดิบ','PERSON_NAME':'RW-ผู้แจ้ง สถานีสูบน้ำดิบ','TITLE':'ผู้แจ้ง','DEPTNO':'189','SITENO':1,'FLAGDEL':0},
{PERSONCODE:'RWOPHEAD','FIRSTNAME':'RW-ผู้อนุมัติแจ้ง','LASTNAME':'สถานีสูบน้ำดิบ','PERSON_NAME':'RW-ผู้อนุมัติแจ้ง สถานีสูบน้ำดิบ','TITLE':'ผู้อนุมัติแจ้ง','DEPTNO':'189','SITENO':1,'FLAGDEL':0},
{PERSONCODE:'RWMT','FIRSTNAME':'RW-ผู้ซ่อม/ปิดงาน','LASTNAME':'สถานีสูบน้ำดิบ','PERSON_NAME':'RW-ผู้ซ่อม/ปิดงาน สถานีสูบน้ำดิบ','TITLE':'ผู้ซ่อม/ปิดงาน','DEPTNO':'129','SITENO':1,'FLAGDEL':0},
{PERSONCODE:'RWMTHEAD','FIRSTNAME':'RW-ผู้อนุมัติปิดงาน','LASTNAME':'สถานีสูบน้ำดิบ','PERSON_NAME':'RW-ผู้อนุมัติปิดงาน สถานีสูบน้ำดิบ','TITLE':'ผู้อนุมัติปิดงาน','DEPTNO':'129','SITENO':1,'FLAGDEL':0},
{PERSONCODE:'CTOP','FIRSTNAME':'CT-ผู้แจ้ง','LASTNAME':'ระบบท่อจ่ายน้ำ','PERSON_NAME':'CT-ผู้แจ้ง ระบบท่อจ่ายน้ำ','TITLE':'ผู้แจ้ง','DEPTNO':'169','SITENO':1,'FLAGDEL':0},
{PERSONCODE:'CTOPHEAD','FIRSTNAME':'CT-ผู้อนุมัติแจ้ง','LASTNAME':'ระบบท่อจ่ายน้ำ','PERSON_NAME':'CT-ผู้อนุมัติแจ้ง ระบบท่อจ่ายน้ำ','TITLE':'ผู้อนุมัติแจ้ง','DEPTNO':'169','SITENO':1,'FLAGDEL':0},
{PERSONCODE:'CTMT','FIRSTNAME':'CT-ผู้ซ่อม/ปิดงาน','LASTNAME':'ระบบท่อจ่ายน้ำ','PERSON_NAME':'CT-ผู้ซ่อม/ปิดงาน ระบบท่อจ่ายน้ำ','TITLE':'ผู้ซ่อม/ปิดงาน','DEPTNO':'146','SITENO':1,'FLAGDEL':0},
{PERSONCODE:'CTMTHEAD','FIRSTNAME':'CT-ผู้อนุมัติปิดงาน','LASTNAME':'ระบบท่อจ่ายน้ำ','PERSON_NAME':'CT-ผู้อนุมัติปิดงาน ระบบท่อจ่ายน้ำ','TITLE':'ผู้อนุมัติปิดงาน','DEPTNO':'146','SITENO':1,'FLAGDEL':0},

    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Person', {
      where:{
        'PERSONCODE':[
          "BKOP",
          "BKOPHEAD",
          "BKMT",
          "BKMTHEAD",
          "MHOP",
          "MHOPHEAD",
          "MHMT",
          "MHMTHEAD",
          "THOP",
          "THOPHEAD",
          "THMT",
          "THMTHEAD",
          "SSOP",
          "SSOPHEAD",
          "SSMT",
          "SSMTHEAD",
          "WDOP",
          "WDOPHEAD",
          "WDMT",
          "WDMTHEAD",
          "RWOP",
          "RWOPHEAD",
          "RWMT",
          "RWMTHEAD",
          "CTOP",
          "CTOPHEAD",
          "CTMT",
          "CTMTHEAD",
        ]
      }
    }, {});
  }
};
