/**
 * Created by jadoux on 05/02/2017.
 */
var Promise = require("bluebird");

module.exports = function (app) {
  var RpgBoardModel = app.models.RpgBoard;
  var RpgSkillModel = app.models.RpgSkill;
  var RpgAttributeModel = app.models.RpgAttribute;
  var RpgRoleModel = app.models.RpgRole;
  var RpgPlayerModel = app.models.RpgPlayer;
  var RpgPlayerRpgRoleModel = app.models.RpgPlayerRpgRole;

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
        'Athlétisme',
        'Connaissance de la rue',
        'Endurance',
        'Intimidation',
        'Soin'
      ],
      attributes: [
        'Force',
        'Constitution',
        'Dextérité',
        'Intelligence',
        'Sagesse',
        'Charisme'
      ],
      players: [
        {
          firstname: "Richard",
          lastname: "Tememer",
          age: 93,
          size: "1m98",
          weight: "89Kg",
          caseSize: 1
        }
      ]
    },
    {
      name: 'Magicien',
      skills: [
        'Arcanes',
        'Diplomatie',
        'Exploration',
        'Histoire',
        'Intuition',
        'Nature',
        'Religion'
      ],
      attributes: [
        'Force',
        'Constitution',
        'Dextérité',
        'Intelligence',
        'Sagesse',
        'Charisme'
      ],
      players: [
        {
          firstname: "Gospel",
          lastname: "Geimzon",
          age: 23,
          size: "1m67",
          weight: "42Kg",
          caseSize: 1
        }
      ]
    },
    {
      name: 'Paladin',
      skills: [
        'Diplomatie',
        'Endurance',
        'Intimidation',
        'Intuition',
        'Soin',
        'Religion'
      ],
      attributes: [
        'Force',
        'Constitution',
        'Dextérité',
        'Intelligence',
        'Sagesse',
        'Charisme'
      ],
      players: [
        {
          firstname: "robert",
          lastname: "tomson",
          age: 34,
          size: "1m87",
          weight: "45Kg",
          caseSize: 1
        },
        {
          firstname: "michel",
          lastname: "Jojoe",
          age: 43,
          size: "1m57",
          weight: "35Kg",
          caseSize: 2
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
                RpgSkillModel.findOne({where: {name: skill, rpgBoardId: RpgBoard.id}}, function(err, skillLoaded) {
                  roleLoaded.rpgSkills.add(skillLoaded,
                    function(err) {
                      resolve();
                    });
                });
              });
            }).then(function() {
              Promise.map(RpgRole.attributes, function(attribute) {
                return new Promise(function(resolve, reject) {
                  RpgAttributeModel.findOne({where: {name: attribute, rpgBoardId: RpgBoard.id}}, function(err, attributeLoaded) {
                    roleLoaded.rpgAttributes.add(attributeLoaded,
                      function(err) {
                        resolve();
                      });
                  });
                });
              }).then(function() {
                Promise.map(RpgRole.players, function(player) {
                  return new Promise(function(resolve, reject) {
                    player.rpgBoard = RpgBoard;
                    RpgPlayerModel.findOrCreate({where: {firstname: player.firstname, lastname: player.lastname, rpgBoardId: player.rpgBoard.id}}, player, function(err, playerLoaded) {
                      RpgPlayerRpgRoleModel.findOrCreate({where:{rpgRoleId: roleLoaded.id, rpgPlayerId: playerLoaded.id}}, {rpgRole: roleLoaded, rpgPlayer: playerLoaded, data: playerLoaded.firstname + " " + playerLoaded.lastname}, function(err, result) {
                        resolve();
                      });
                    });
                  });
                }).then(function() {
                  resolve();
                });
              });
            });
          });
        });
      }).then(function() { console.log('finish promise role')});
    });
  });
};
