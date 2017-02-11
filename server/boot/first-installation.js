/**
 * Created by jadoux on 05/02/2017.
 */
var Promise = require("bluebird");

module.exports = function (app) {
  var RpgBoardModel = app.models.RpgBoard;
  var RpgSkillModel = app.models.RpgSkill;
  var RpgAttributeModel = app.models.RpgAttribute;
  var RpgRoleModel = app.models.RpgRole;
  var RpgRaceModel = app.models.RpgRace;
  var RpgRoleRpgAttributeModel = app.models.RpgRoleRpgAttribute;
  var RpgRoleRpgSkillModel = app.models.RpgRoleRpgSkill;

  var AttributeAndSkill = [
    {
      name: 'Force',
      skills : [
        {
          name: 'Athlétisme'
        }
      ]
    },
    {
      name: 'Constitution',
      skills : [
        {
          name: 'Endurance'
        }
      ]
    },
    {
      name: 'Dextérité',
      skills : [
        {
          name: 'Acrobatie'
        },
        {
          name: 'Discrétion'
        },
        {
          name: 'Larcin'
        }
      ]
    },
    {
      name: 'Intelligence',
      skills : [
        {
          name: 'Arcanes'
        },
        {
          name: 'Histoire'
        },
        {
          name: 'Religion'
        }
      ]
    },
    {
      name: 'Sagesse',
      skills : [
        {
          name: 'Exploration'
        },
        {
          name: 'Intuition'
        },
        {
          name: 'Nature'
        },
        {
          name: 'Perception'
        },
        {
          name: 'Soin'
        }
      ]
    },
    {
      name: 'Charisme',
      skills : [
        {
          name: 'Bluff'
        },
        {
          name: 'Connaissance de la rue'
        },
        {
          name: 'Diplomatie'
        },
        {
          name: 'Intimidation'
        }
      ]
    }
  ];

  var RoleWithAll = [
    {
      name: 'Guerrier',
      skills: [
        {
          name: 'Athlétisme',
          modif: 0,
          canMaster: true
        },
        {
          name: 'Connaissance de la rue',
          modif: 0,
          canMaster: true
        },
        {
          name: 'Endurance',
          modif: 0,
          canMaster: true
        },
        {
          name: 'Intimidation',
          modif: 0,
          canMaster: true
        },
        {
          name: 'Soin',
          modif: 0,
          canMaster: true
        }
      ],
      attributes: [
        {
          name: 'Force',
          modif: 0
        },
        {
          name: 'Constitution',
          modif: 0
        },
        {
          name: 'Dextérité',
          modif: 0
        },
        {
          name: 'Intelligence',
          modif: 0
        },
        {
          name: 'Sagesse',
          modif: 0
        },
        {
          name: 'Charisme',
          modif: 0
        }
      ]
    },
    {
      name: 'Magicien',
      skills: [
        {
          name: 'Arcanes',
          modif: 0,
          canMaster: true
        },
        {
          name: 'Diplomatie',
          modif: 0,
          canMaster: true
        },
        {
          name: 'Exploration',
          modif: 0,
          canMaster: true
        },
        {
          name: 'Histoire',
          modif: 0,
          canMaster: true
        },
        {
          name: 'Intuition',
          modif: 0,
          canMaster: true
        },
        {
          name: 'Nature',
          modif: 0,
          canMaster: true
        },
        {
          name: 'Religion',
          modif: 0,
          canMaster: true
        }
      ],
      attributes: [
        {
          name: 'Force',
          modif: 0
        },
        {
          name: 'Constitution',
          modif: 0
        },
        {
          name: 'Dextérité',
          modif: 0
        },
        {
          name: 'Intelligence',
          modif: 0
        },
        {
          name: 'Sagesse',
          modif: 0
        },
        {
          name: 'Charisme',
          modif: 0
        }
      ]
    },
    {
      name: 'Paladin',
      skills: [
        {
          name: 'Diplomatie',
          modif: 0,
          canMaster: true
        },
        {
          name: 'Endurance',
          modif: 0,
          canMaster: true
        },
        {
          name: 'Intimidation',
          modif: 0,
          canMaster: true
        },
        {
          name: 'Intuition',
          modif: 0,
          canMaster: true
        },
        {
          name: 'Soin',
          modif: 0,
          canMaster: true
        },
        {
          name: 'Religion',
          modif: 0,
          canMaster: true
        }
      ],
      attributes: [
        {
          name: 'Force',
          modif: 0
        },
        {
          name: 'Constitution',
          modif: 0
        },
        {
          name: 'Dextérité',
          modif: 0
        },
        {
          name: 'Intelligence',
          modif: 0
        },
        {
          name: 'Sagesse',
          modif: 0
        },
        {
          name: 'Charisme',
          modif: 0
        }
      ]
    }
  ];

  var raceWithAll = [
    {
      skills: [
        {
          name: 'Arcanes',
          modif: 0
        }
      ],
      attributes: [
        {
          name: 'Force',
          modif: 0
        },
        {
          name: 'Constitution',
          modif: 0
        },
        {
          name: 'Dextérité',
          modif: 0
        },
        {
          name: 'Intelligence',
          modif: 0
        },
        {
          name: 'Sagesse',
          modif: 0
        },
        {
          name: 'Charisme',
          modif: 0
        }
      ]
    }
  ];

  //create the admin role
  RpgBoardModel.findOrCreate({where: {name: 'DD4'}}, {name: 'DD4'}, function (err, RpgBoard) {
    if (err) throw err;

    Promise.map(AttributeAndSkill, function (RpgAttribute) {
      return new Promise(function(resolve, reject) {
        RpgAttributeModel.findOrCreate({
          where: {
            name: RpgAttribute.name,
            rpgBoardId: RpgBoard.id
          }
        }, {name: RpgAttribute.name, rpgBoard: RpgBoard}, function (err, attribute) {
          if (err) throw err;
          RpgAttribute.id = attribute.id;

          Promise.map(RpgAttribute.skills, function (RpgSkill) {
            return new Promise(function(resolve, reject) {
              RpgSkillModel.findOrCreate({where: {name: RpgSkill.name, rpgBoardId: RpgBoard.id}}, {
                name: RpgSkill.name,
                rpgBoard: RpgBoard,
                rpgAttribute: attribute
              }, function (err, skill) {
                if (err) throw err;

                resolve();
              });
            });
          }).then(function() {
            resolve();
          });
        });
      });
    }).then(function () {
      Promise.map(RoleWithAll, function(RpgRole) {
        return new Promise(function(resolve, reject) {
          RpgRoleModel.findOrCreate({where: {name: RpgRole.name, rpgBoardId: RpgBoard.id}}, {
            name: RpgRole.name,
            rpgBoard: RpgBoard
          }, function (err, roleLoaded) {
            Promise.map(RpgRole.skills, function(skill) {
              return new Promise(function(resolve, reject) {
                RpgSkillModel.findOne({where: {name: skill.name, rpgBoardId: RpgBoard.id}}, function(err, skillLoaded) {
                  RpgRoleRpgSkillModel.findOrCreate({where: {rpgSkillId: skillLoaded.id, rpgRoleId: roleLoaded.id}}, {
                    rpgSkill: skillLoaded,
                    rpgRole: roleLoaded,
                    modif: skill.modif,
                    canMaster: skill.canMaster
                  }, function (err, data) {
                    resolve();
                  })
                });
              });
            }).then(function() {
              Promise.map(RpgRole.attributes, function(attribute) {
                return new Promise(function(resolve, reject) {
                  RpgAttributeModel.findOne({where: {name: attribute.name, rpgBoardId: RpgBoard.id}}, function(err, attributeLoaded) {
                    RpgRoleRpgAttributeModel.findOrCreate({where: {rpgAttributeId: attributeLoaded.id, rpgRoleId: roleLoaded.id}}, {
                      rpgAttribute: attributeLoaded,
                      rpgRole: roleLoaded,
                      modif: attribute.modif
                    }, function (err, data) {
                      resolve();
                    })
                  });
                });
              }).then(function() {
                resolve();
              });
            });
          });
        });
      }).then(function() { console.log('finish promise role')});
    });
  });
};
