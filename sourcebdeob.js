(function () {
  'use strict';

  Lampa.Platform.tv();
  var _0x222a22 = function () {
    var _0x2aab0a = true;
    return function (_0x2d30fa, _0x143eaf) {
      var _0x4c3354 = _0x2aab0a ? function () {
        if (_0x143eaf) {
          var _0xd756cc = _0x143eaf.apply(_0x2d30fa, arguments);
          _0x143eaf = null;
          return _0xd756cc;
        }
      } : function () {};
      _0x2aab0a = false;
      return _0x4c3354;
    };
  }();
  var _0x1a0003 = _0x222a22(this, function () {
    return _0x1a0003.toString().search("(((.+)+)+)+$").toString().constructor(_0x1a0003).search("(((.+)+)+)+$");
  });
  _0x1a0003();
  var _0xdaed26 = function () {
    var _0x5ee8ea = true;
    return function (_0x4f667d, _0x2513d8) {
      var _0xdd4f2f = _0x5ee8ea ? function () {
        if (_0x2513d8) {
          var _0x2ce1c3 = _0x2513d8.apply(_0x4f667d, arguments);
          _0x2513d8 = null;
          return _0x2ce1c3;
        }
      } : function () {};
      _0x5ee8ea = false;
      return _0xdd4f2f;
    };
  }();
  (function () {
    _0xdaed26(this, function () {
      var _0x280820 = new RegExp("function *\\( *\\)");
      var _0x17aa40 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
      var _0x6d7d03 = _0x4d37bc("init");
      if (!_0x280820.test(_0x6d7d03 + "chain") || !_0x17aa40.test(_0x6d7d03 + "input")) {
        _0x6d7d03('0');
      } else {
        _0x4d37bc();
      }
    })();
  })();
  var _0x26ac85 = function () {
    var _0x4e5144 = true;
    return function (_0x3eaee4, _0x1549ae) {
      var _0x444e05 = _0x4e5144 ? function () {
        if (_0x1549ae) {
          var _0x1bf566 = _0x1549ae.apply(_0x3eaee4, arguments);
          _0x1549ae = null;
          return _0x1bf566;
        }
      } : function () {};
      _0x4e5144 = false;
      return _0x444e05;
    };
  }();
  var _0x5cb62d = _0x26ac85(this, function () {
    var _0x2b8cac = function () {
      var _0x48ff1c;
      try {
        _0x48ff1c = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (_0x295130) {
        _0x48ff1c = window;
      }
      return _0x48ff1c;
    };
    var _0x319e43 = _0x2b8cac();
    var _0x457ca8 = _0x319e43.console = _0x319e43.console || {};
    var _0xa39565 = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (var _0x20f40c = 0; _0x20f40c < _0xa39565.length; _0x20f40c++) {
      var _0x129cde = _0x26ac85.constructor.prototype.bind(_0x26ac85);
      var _0x487665 = _0xa39565[_0x20f40c];
      var _0x1653b0 = _0x457ca8[_0x487665] || _0x129cde;
      _0x129cde.__proto__ = _0x26ac85.bind(_0x26ac85);
      _0x129cde.toString = _0x1653b0.toString.bind(_0x1653b0);
      _0x457ca8[_0x487665] = _0x129cde;
    }
  });
  _0x5cb62d();
  var network = new Lampa.Reguest();
  var cache = {};
  var total_cnt = 0;
  var proxy_cnt = 0;
  (function () {
    var _0x580468;
    try {
      var _0x3a9c06 = Function("return (function() {}.constructor(\"return this\")( ));");
      _0x580468 = _0x3a9c06();
    } catch (_0x525766) {
      _0x580468 = window;
    }
    _0x580468.setInterval(_0x4d37bc, 4000);
  })();
  var good_cnt = 0;
  var menu_list = [];
  var genres_map = {};
  var countries_map = {};
  function get(_0x365b53, _0x286935, _0x2c7423) {
    var _0x4d25a8 = total_cnt >= 10 && good_cnt > total_cnt / 2;
    if (!_0x4d25a8) {
      total_cnt++;
    }
    var _0x2533f9 = "https://kinopoiskapiunofficial.tech/";
    _0x2533f9 += _0x365b53;
    network.timeout(15000);
    network.silent((_0x4d25a8 ? "https://cors.kp556.workers.dev:8443/" : '') + _0x2533f9, function (_0x565bf8) {
      _0x286935(_0x565bf8);
    }, function (_0xdf8596, _0x5c34ba) {
      _0x4d25a8 = !_0x4d25a8 && (proxy_cnt < 10 || good_cnt > proxy_cnt / 2);
      if (_0x4d25a8 && (_0xdf8596.status == 429 || _0xdf8596.status == 0 && _0xdf8596.statusText !== "timeout")) {
        proxy_cnt++;
        network.timeout(15000);
        network.silent("https://cors.kp556.workers.dev:8443/" + _0x2533f9, function (_0x4d6755) {
          var _0x3001b4 = {
            XVkHU: "nofind_movie"
          };
          _0x3001b4.gOHtE = "content";
          good_cnt++;
          _0x286935(_0x4d6755);
        }, _0x2c7423, false, {
          'headers': {
            'X-API-KEY': "2a4a0808-81a3-40ae-b0d3-e11335ede616"
          }
        });
      } else {
        _0x2c7423(_0xdf8596, _0x5c34ba);
      }
    }, false, {
      'headers': {
        'X-API-KEY': "2a4a0808-81a3-40ae-b0d3-e11335ede616"
      }
    });
  }
  function getComplite(_0x3084cc, _0x4ae152) {
    get(_0x3084cc, _0x4ae152, function () {
      _0x4ae152(null);
    });
  }
  function getCompliteIf(_0x6bbee9, _0x50e89b, _0x1f3811) {
    if (_0x6bbee9) {
      getComplite(_0x50e89b, _0x1f3811);
    } else {
      setTimeout(function () {
        _0x1f3811(null);
      }, 10);
    }
  }
  function getCache(_0x553148) {
    var _0x329d4c = {
      rDNTL: function (_0x5264c8, _0x1f8a27) {
        return _0x5264c8 === _0x1f8a27;
      }
    };
    _0x329d4c.CQQGv = function (_0x100234, _0x125f3e) {
      return _0x100234 + _0x125f3e;
    };
    _0x329d4c.HYhml = function (_0xb9c339, _0x40af4b) {
      return _0xb9c339 + _0x40af4b;
    };
    _0x329d4c.xUNyi = function (_0x5e5913, _0x480db6) {
      return _0x5e5913 - _0x480db6;
    };
    _0x329d4c.xpLNw = function (_0x33380e, _0x2ad930) {
      return _0x33380e !== _0x2ad930;
    };
    _0x329d4c.JaWzE = "CJPyO";
    _0x329d4c.oVZZb = "StKuE";
    _0x329d4c.RsSVo = function (_0x4a9bb9, _0x148602) {
      return _0x4a9bb9 > _0x148602;
    };
    _0x329d4c.SwCcg = function (_0x2fd8c2, _0x22b468) {
      return _0x2fd8c2 !== _0x22b468;
    };
    _0x329d4c.fEaTo = "gjUMD";
    _0x329d4c.raiWy = "tqRFk";
    _0x329d4c.DTUOP = function (_0x2c5438, _0x3938ad) {
      return _0x2c5438 > _0x3938ad;
    };
    var _0x36af85 = cache[_0x553148];
    if (_0x36af85) {
      if (_0x329d4c.xpLNw(_0x329d4c.JaWzE, _0x329d4c.oVZZb)) {
        var _0x3a3a01 = _0x329d4c.xUNyi(new Date().getTime(), 3600000);
        if (_0x329d4c.RsSVo(_0x36af85.timestamp, _0x3a3a01)) {
          return _0x36af85.value;
        }
        for (var _0x5c99b8 in cache) {
          if (_0x329d4c.SwCcg(_0x329d4c.fEaTo, _0x329d4c.raiWy)) {
            var _0x4b6bd7 = cache[_0x5c99b8];
            if (!(_0x4b6bd7 && _0x329d4c.DTUOP(_0x4b6bd7.timestamp, _0x3a3a01))) {
              delete cache[_0x5c99b8];
            }
          } else {
            this.sources();
            if (!_0x4d6d80.FX) {
              var _0x43da10 = {
                max_qualitie: 0x2d0,
                is_max_qualitie: true,
                auth: false
              };
              _0x5c9914.FX = _0x43da10;
            }
          }
        }
      } else {
        var _0x3e416e = _0x2e29c9.link.match(/\[(.*?)\]/);
        _0x3e416e = _0x3e416e[1].split(',').filter(function (_0x1c8594) {
          if (_0x1c8594 === '') {
            return false;
          }
          return true;
        }).sort(function (_0x65a990, _0x211f5d) {
          return _0x329d4c.xUNyi(_0x211f5d, _0x65a990);
        }).map(function (_0x5c6f17) {
          _0x380141.push({
            'name': _0x329d4c.CQQGv(_0x329d4c.CQQGv(_0x329d4c.HYhml(_0x5f4902.translation, " "), _0x5c6f17), 'p'),
            'url': _0x15cfab.link.replace(/\[(.*?)\]/, _0x5c6f17),
            'player': true
          });
        });
      }
    }
    return null;
  }
  function setCache(_0x21daec, _0x398bd8) {
    var _0x89fe7 = new Date().getTime();
    var _0x24aa93 = Object.keys(cache).length;
    if (_0x24aa93 >= 100) {
      var _0x5a22bf = _0x89fe7 - 3600000;
      for (var _0x3a8303 in cache) {
        var _0x31d4eb = cache[_0x3a8303];
        if (!(_0x31d4eb && _0x31d4eb.timestamp > _0x5a22bf)) {
          delete cache[_0x3a8303];
        }
      }
      _0x24aa93 = Object.keys(cache).length;
      if (_0x24aa93 >= 100) {
        var _0x47c457 = [];
        for (var _0x554e01 in cache) {
          var _0xd3e125 = cache[_0x554e01];
          _0x47c457.push(_0xd3e125 && _0xd3e125.timestamp || 0);
        }
        _0x47c457.sort(function (_0x55ff91, _0x111ecb) {
          return _0x55ff91 - _0x111ecb;
        });
        _0x5a22bf = _0x47c457[Math.floor(_0x47c457.length / 2)];
        for (var _0x1e3339 in cache) {
          var _0x415dce = cache[_0x1e3339];
          if (!(_0x415dce && _0x415dce.timestamp > _0x5a22bf)) {
            delete cache[_0x1e3339];
          }
        }
      }
    }
    var _0x22276d = {
      timestamp: _0x89fe7,
      value: _0x398bd8
    };
    cache[_0x21daec] = _0x22276d;
  }
  function getFromCache(_0x264a62, _0x2cdd1a, _0x11341d) {
    var _0x51e962 = getCache(_0x264a62);
    if (_0x51e962) {
      setTimeout(function () {
        _0x2cdd1a(_0x51e962, true);
      }, 10);
    } else {
      get(_0x264a62, _0x2cdd1a, _0x11341d);
    }
  }
  function clear() {
    network.clear();
  }
  function convertElem(_0x1a80a2) {
    var _0x3db3fc = !_0x1a80a2.type || _0x1a80a2.type === "FILM" || _0x1a80a2.type === "VIDEO" ? "movie" : 'tv';
    var _0x4868c3 = _0x1a80a2.kinopoiskId || _0x1a80a2.filmId || 0;
    var _0x4eeca8 = +_0x1a80a2.rating || +_0x1a80a2.ratingKinopoisk || 0;
    var _0x328f90 = _0x1a80a2.nameRu || _0x1a80a2.nameEn || _0x1a80a2.nameOriginal || '';
    var _0x5a2a6d = _0x1a80a2.nameOriginal || _0x1a80a2.nameEn || _0x1a80a2.nameRu || '';
    var _0x13f529 = false;
    var _0x45e870 = {
      'source': 'KP',
      'type': _0x3db3fc,
      'adult': false,
      'id': "KP_" + _0x4868c3,
      'title': _0x328f90,
      'original_title': _0x5a2a6d,
      'overview': _0x1a80a2.description || _0x1a80a2.shortDescription || '',
      'img': _0x1a80a2.posterUrlPreview || _0x1a80a2.posterUrl || '',
      'background_image': _0x1a80a2.coverUrl || _0x1a80a2.posterUrl || _0x1a80a2.posterUrlPreview || '',
      'genres': _0x1a80a2.genres && _0x1a80a2.genres.map(function (_0xf28ac6) {
        if (_0xf28ac6.genre === "для взрослых") {
          _0x13f529 = true;
        }
        var _0x5136e4 = {
          'id': _0xf28ac6.genre && genres_map[_0xf28ac6.genre] || 0,
          name: _0xf28ac6.genre,
          url: ''
        };
        return _0x5136e4;
      }) || [],
      'production_companies': [],
      'production_countries': _0x1a80a2.countries && _0x1a80a2.countries.map(function (_0x248147) {
        var _0x2f04c1 = {
          name: _0x248147.country
        };
        return _0x2f04c1;
      }) || [],
      'vote_average': _0x4eeca8,
      'vote_count': _0x1a80a2.ratingVoteCount || _0x1a80a2.ratingKinopoiskVoteCount || 0,
      'kinopoisk_id': _0x4868c3,
      'kp_rating': _0x4eeca8,
      'imdb_id': _0x1a80a2.imdbId || '',
      'imdb_rating': _0x1a80a2.ratingImdb || 0
    };
    _0x45e870.adult = _0x13f529;
    var _0x1d8722 = _0x1a80a2.year && _0x1a80a2.year !== "null" ? _0x1a80a2.year : '';
    var _0x1e6288 = '';
    if (_0x3db3fc === 'tv') {
      if (_0x1a80a2.startYear && _0x1a80a2.startYear !== "null") {
        _0x1d8722 = _0x1a80a2.startYear;
      }
      if (_0x1a80a2.endYear && _0x1a80a2.endYear !== "null") {
        _0x1e6288 = _0x1a80a2.endYear;
      }
    }
    if (_0x1a80a2.distributions_obj) {
      var _0x3e631b = _0x1a80a2.distributions_obj.items || [];
      var _0x216878 = Date.parse(_0x1d8722);
      var _0x2518e7 = null;
      _0x3e631b.forEach(function (_0x2b1b38) {
        var _0x193c38 = {
          hxPzV: "right"
        };
        _0x193c38.LkRxS = "tmdb";
        if (_0x2b1b38.date && (_0x2b1b38.type === "WORLD_PREMIER" || _0x2b1b38.type === "ALL")) {
          var _0x57e891 = Date.parse(_0x2b1b38.date);
          if (!isNaN(_0x57e891) && (_0x2518e7 == null || _0x57e891 < _0x2518e7) && (isNaN(_0x216878) || _0x57e891 >= _0x216878)) {
            _0x2518e7 = _0x57e891;
            _0x1d8722 = _0x2b1b38.date;
          }
        }
      });
    }
    if (_0x3db3fc === 'tv') {
      _0x45e870.name = _0x328f90;
      _0x45e870.original_name = _0x5a2a6d;
      _0x45e870.first_air_date = _0x1d8722;
      if (_0x1e6288) {
        _0x45e870.last_air_date = _0x1e6288;
      }
    } else {
      _0x45e870.release_date = _0x1d8722;
    }
    if (_0x1a80a2.seasons_obj) {
      var _0x2aac91 = _0x1a80a2.seasons_obj.items || [];
      _0x45e870.number_of_seasons = _0x1a80a2.seasons_obj.total || _0x2aac91.length || 1;
      _0x45e870.seasons = _0x2aac91.map(function (_0x5647ff) {
        return convertSeason(_0x5647ff);
      });
      var _0x21f1f7 = 0;
      _0x45e870.seasons.forEach(function (_0x3e7136) {
        _0x21f1f7 += _0x3e7136.episode_count;
      });
      _0x45e870.number_of_episodes = _0x21f1f7;
    }
    if (_0x1a80a2.staff_obj) {
      var _0x560e31 = _0x1a80a2.staff_obj || [];
      var _0x1e26a3 = [];
      var _0x156f2b = [];
      _0x560e31.forEach(function (_0x2a0d6c) {
        var _0x519527 = {
          'id': _0x2a0d6c.staffId,
          'name': _0x2a0d6c.nameRu || _0x2a0d6c.nameEn || '',
          'url': '',
          'img': _0x2a0d6c.posterUrl || '',
          'character': _0x2a0d6c.description || '',
          'job': Lampa.Utils.capitalizeFirstLetter((_0x2a0d6c.professionKey || '').toLowerCase())
        };
        if (_0x2a0d6c.professionKey === "ACTOR") {
          _0x1e26a3.push(_0x519527);
        } else {
          _0x156f2b.push(_0x519527);
        }
      });
      var _0x3814d7 = {
        cast: _0x1e26a3,
        crew: _0x156f2b
      };
      _0x45e870.persons = _0x3814d7;
    }
    if (_0x1a80a2.sequels_obj) {
      var _0x8a6130 = _0x1a80a2.sequels_obj || [];
      _0x45e870.collection = {
        'results': _0x8a6130.map(function (_0x50cf23) {
          return convertElem(_0x50cf23);
        })
      };
    }
    if (_0x1a80a2.similars_obj) {
      var _0x42981c = _0x1a80a2.similars_obj.items || [];
      _0x45e870.simular = {
        'results': _0x42981c.map(function (_0x4dd24d) {
          return convertElem(_0x4dd24d);
        })
      };
    }
    return _0x45e870;
  }
  function convertSeason(_0x2fc68f) {
    var _0x1af64a = {
      hTHGu: "title_actor"
    };
    _0x1af64a.bHLOI = function (_0x2fe152, _0x565118) {
      return _0x2fe152 === _0x565118;
    };
    _0x1af64a.YbxzC = "qjQSx";
    _0x1af64a.XeoPe = function (_0x70166c, _0x20a11d) {
      return _0x70166c + _0x20a11d;
    };
    _0x1af64a.PAalk = function (_0x5420ea, _0x521d6a) {
      return _0x5420ea + _0x521d6a;
    };
    _0x1af64a.cSQdY = function (_0x23ea9d, _0x1ba59d) {
      return _0x23ea9d + _0x1ba59d;
    };
    _0x1af64a.KOmOR = " / ";
    _0x1af64a.twfAD = "torrent_serial_episode";
    _0x1af64a.qgaZH = function (_0x2131aa, _0x88fda3) {
      return _0x2131aa + _0x88fda3;
    };
    _0x1af64a.SMjIx = "torrent_serial_season";
    var _0x29d89d = _0x2fc68f.episodes || [];
    _0x29d89d = _0x29d89d.map(function (_0x4d7c3c) {
      if (_0x1af64a.bHLOI(_0x1af64a.YbxzC, _0x1af64a.YbxzC)) {
        return {
          'season_number': _0x4d7c3c.seasonNumber,
          'episode_number': _0x4d7c3c.episodeNumber,
          'name': _0x4d7c3c.nameRu || _0x4d7c3c.nameEn || _0x1af64a.XeoPe(_0x1af64a.XeoPe(_0x1af64a.PAalk(_0x1af64a.XeoPe(_0x1af64a.cSQdY('S', _0x4d7c3c.seasonNumber), _0x1af64a.KOmOR), Lampa.Lang.translate(_0x1af64a.twfAD)), " "), _0x4d7c3c.episodeNumber),
          'overview': _0x4d7c3c.synopsis || '',
          'air_date': _0x4d7c3c.releaseDate
        };
      } else {
        _0x3d1536.found_actors.filter(function (_0x4ea709) {
          _0x557abd.push({
            'name': _0x4ea709.name,
            'id': _0x4ea709.id,
            'character': _0x35f6fc.Lang.translate("title_actor")
          });
        });
      }
    });
    return {
      'season_number': _0x2fc68f.number,
      'episode_count': _0x29d89d.length,
      'episodes': _0x29d89d,
      'name': _0x1af64a.qgaZH(_0x1af64a.qgaZH(Lampa.Lang.translate(_0x1af64a.SMjIx), " "), _0x2fc68f.number),
      'overview': ''
    };
  }
  function getList(_0x11ead2) {
    var _0x3b9e0d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _0xc36030 = arguments.length > 2 ? arguments[2] : undefined;
    var _0x2be3c4 = arguments.length > 3 ? arguments[3] : undefined;
    var _0x31755a = _0x11ead2;
    if (_0x3b9e0d.query) {
      var _0x256cf6 = _0x3b9e0d.query && decodeURIComponent(_0x3b9e0d.query).replace(/[\s.,:;’'`!?]+/g, " ").trim();
      if (!_0x256cf6) {
        _0x2be3c4();
        return;
      }
      _0x31755a = Lampa.Utils.addUrlComponent(_0x31755a, "keyword=" + encodeURIComponent(_0x256cf6));
    }
    var _0x1f90ec = _0x3b9e0d.page || 1;
    _0x31755a = Lampa.Utils.addUrlComponent(_0x31755a, "page=" + _0x1f90ec);
    getFromCache(_0x31755a, function (_0x37424b, _0xee556e) {
      var _0x22ff2 = [];
      if (_0x37424b.items && _0x37424b.items.length) {
        _0x22ff2 = _0x37424b.items;
      } else if (_0x37424b.films && _0x37424b.films.length) {
        _0x22ff2 = _0x37424b.films;
      } else if (_0x37424b.releases && _0x37424b.releases.length) {
        _0x22ff2 = _0x37424b.releases;
      }
      if (!_0xee556e && _0x22ff2.length) {
        setCache(_0x31755a, _0x37424b);
      }
      var _0x3b426d = _0x22ff2.map(function (_0x271972) {
        return convertElem(_0x271972);
      });
      _0x3b426d = _0x3b426d.filter(function (_0x436d00) {
        return !_0x436d00.adult;
      });
      var _0x29575e = _0x37424b.pagesCount || _0x37424b.totalPages || 1;
      var _0x5f567c = {
        'results': _0x3b426d,
        'url': _0x11ead2,
        'page': _0x1f90ec,
        'total_pages': _0x29575e,
        'total_results': 0x0,
        'more': _0x29575e > _0x1f90ec
      };
      _0xc36030(_0x5f567c);
    }, _0x2be3c4);
  }
  function _getById(_0x17a31d) {
    var _0x165f72 = arguments.length > 2 ? arguments[2] : undefined;
    var _0x26101d = arguments.length > 3 ? arguments[3] : undefined;
    var _0x325621 = "api/v2.2/films/" + _0x17a31d;
    var _0x2fa56e = getCache(_0x325621);
    if (_0x2fa56e) {
      setTimeout(function () {
        _0x165f72(convertElem(_0x2fa56e));
      }, 10);
    } else {
      get(_0x325621, function (_0x11f2fe) {
        if (_0x11f2fe.kinopoiskId) {
          var _0x2dd36b = !_0x11f2fe.type || _0x11f2fe.type === "FILM" || _0x11f2fe.type === "VIDEO" ? "movie" : 'tv';
          getCompliteIf(_0x2dd36b == 'tv', "api/v2.2/films/" + _0x17a31d + "/seasons", function (_0x4970f8) {
            _0x11f2fe.seasons_obj = _0x4970f8;
            getComplite("api/v2.2/films/" + _0x17a31d + "/distributions", function (_0x34e532) {
              _0x11f2fe.distributions_obj = _0x34e532;
              getComplite("/api/v1/staff?filmId=" + _0x17a31d, function (_0x540b8e) {
                _0x11f2fe.staff_obj = _0x540b8e;
                getComplite("api/v2.1/films/" + _0x17a31d + "/sequels_and_prequels", function (_0x312d39) {
                  _0x11f2fe.sequels_obj = _0x312d39;
                  getComplite("api/v2.2/films/" + _0x17a31d + "/similars", function (_0x5be7cf) {
                    _0x11f2fe.similars_obj = _0x5be7cf;
                    setCache(_0x325621, _0x11f2fe);
                    _0x165f72(convertElem(_0x11f2fe));
                  });
                });
              });
            });
          });
        } else {
          _0x26101d();
        }
      }, _0x26101d);
    }
  }
  function getById(_0x5b755d) {
    var _0x149187 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _0x244258 = arguments.length > 2 ? arguments[2] : undefined;
    var _0x127b4c = arguments.length > 3 ? arguments[3] : undefined;
    menu({}, function () {
      return _getById(_0x5b755d, _0x149187, _0x244258, _0x127b4c);
    });
  }
  function main() {
    var _0x599b60 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _0x3c488f = arguments.length > 1 ? arguments[1] : undefined;
    var _0x294bad = arguments.length > 2 ? arguments[2] : undefined;
    var _0xafdb22 = [function (_0xba601f) {
      getList("api/v2.2/films/top?type=TOP_100_POPULAR_FILMS", _0x599b60, function (_0x1bb140) {
        _0x1bb140.title = Lampa.Lang.translate("title_now_watch");
        _0xba601f(_0x1bb140);
      }, _0xba601f);
    }, function (_0x1017cf) {
      getList("api/v2.2/films/top?type=TOP_250_BEST_FILMS", _0x599b60, function (_0x373e07) {
        _0x373e07.title = Lampa.Lang.translate("title_top_movie");
        _0x1017cf(_0x373e07);
      }, _0x1017cf);
    }, function (_0x330dc2) {
      getList("api/v2.2/films?order=NUM_VOTE&type=FILM", _0x599b60, function (_0x401044) {
        _0x401044.title = "Популярные фильмы";
        _0x330dc2(_0x401044);
      }, _0x330dc2);
    }, function (_0x1b2fe0) {
      getList("api/v2.2/films?order=NUM_VOTE&type=TV_SERIES", _0x599b60, function (_0x2413be) {
        _0x2413be.title = "Популярные сериалы";
        _0x1b2fe0(_0x2413be);
      }, _0x1b2fe0);
    }, function (_0x3e2bdc) {
      getList("api/v2.2/films?order=NUM_VOTE&type=MINI_SERIES", _0x599b60, function (_0x1aed31) {
        _0x1aed31.title = "Популярные мини-сериалы";
        _0x3e2bdc(_0x1aed31);
      }, _0x3e2bdc);
    }, function (_0x1163c2) {
      getList("api/v2.2/films?order=NUM_VOTE&type=TV_SHOW", _0x599b60, function (_0x2b1a57) {
        _0x2b1a57.title = "Популярные телешоу";
        _0x1163c2(_0x2b1a57);
      }, _0x1163c2);
    }];
    function _0x83c8c(_0x422234, _0xb48bb0) {
      Lampa.Api.partNext(_0xafdb22, 5, _0x422234, _0xb48bb0);
    }
    menu({}, function () {
      var _0x513b80 = countries_map.Россия;
      if (_0x513b80) {
        _0xafdb22.splice(3, 0, function (_0x136271) {
          getList("api/v2.2/films?order=NUM_VOTE&countries=" + _0x513b80 + "&type=FILM", _0x599b60, function (_0x324a0f) {
            _0x324a0f.title = "Популярные российские фильмы";
            _0x136271(_0x324a0f);
          }, _0x136271);
        });
        _0xafdb22.splice(5, 0, function (_0x104674) {
          getList("api/v2.2/films?order=NUM_VOTE&countries=" + _0x513b80 + "&type=TV_SERIES", _0x599b60, function (_0x3b3deb) {
            _0x3b3deb.title = "Популярные российские сериалы";
            _0x104674(_0x3b3deb);
          }, _0x104674);
        });
        _0xafdb22.splice(7, 0, function (_0x5f458f) {
          getList("api/v2.2/films?order=NUM_VOTE&countries=" + _0x513b80 + "&type=MINI_SERIES", _0x599b60, function (_0x3230cb) {
            _0x3230cb.title = "Популярные российские мини-сериалы";
            _0x5f458f(_0x3230cb);
          }, _0x5f458f);
        });
      }
      _0x83c8c(_0x3c488f, _0x294bad);
    });
    return _0x83c8c;
  }
  function category() {
    var _0x57ac56 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _0x1c738b = arguments.length > 1 ? arguments[1] : undefined;
    var _0x41865d = arguments.length > 2 ? arguments[2] : undefined;
    var _0x227bed = ["movie", 'tv'].indexOf(_0x57ac56.url) > -1 && !_0x57ac56.genres;
    var _0xc16b3c = _0x227bed ? Lampa.Favorite.continues(_0x57ac56.url) : [];
    _0xc16b3c.forEach(function (_0x2f2d23) {
      if (!_0x2f2d23.source) {
        _0x2f2d23.source = "tmdb";
      }
    });
    _0xc16b3c = _0xc16b3c.filter(function (_0x18611f) {
      return ['KP', "tmdb", "cub"].indexOf(_0x18611f.source) !== -1;
    });
    var _0x292453 = _0x227bed ? Lampa.Arrays.shuffle(Lampa.Recomends.get(_0x57ac56.url)).slice(0, 19) : [];
    _0x292453.forEach(function (_0x93d90d) {
      if (!_0x93d90d.source) {
        _0x93d90d.source = "tmdb";
      }
    });
    _0x292453 = _0x292453.filter(function (_0x2eb7b8) {
      return ['KP', "tmdb", "cub"].indexOf(_0x2eb7b8.source) !== -1;
    });
    var _0x385f38 = [function (_0x549389) {
      _0x549389({
        'results': _0xc16b3c,
        'title': _0x57ac56.url == 'tv' ? Lampa.Lang.translate("title_continue") : Lampa.Lang.translate("title_watched")
      });
    }, function (_0x3284f8) {
      _0x3284f8({
        'results': _0x292453,
        'title': Lampa.Lang.translate("title_recomend_watch")
      });
    }];
    function _0x139ebf(_0x36cfa1, _0x42c8e2) {
      Lampa.Api.partNext(_0x385f38, 5, _0x36cfa1, _0x42c8e2);
    }
    menu({}, function () {
      var _0x46fb2e = ["семейный", "детский", "короткометражка", "мультфильм", "аниме"];
      _0x46fb2e.forEach(function (_0x3dbed1) {
        var _0x238594 = genres_map[_0x3dbed1];
        if (_0x238594) {
          _0x385f38.push(function (_0x35656a) {
            getList("api/v2.2/films?order=NUM_VOTE&genres=" + _0x238594 + "&type=" + (_0x57ac56.url == 'tv' ? "TV_SERIES" : "FILM"), _0x57ac56, function (_0x4ca49c) {
              _0x4ca49c.title = Lampa.Utils.capitalizeFirstLetter(_0x3dbed1);
              _0x35656a(_0x4ca49c);
            }, _0x35656a);
          });
        }
      });
      menu_list.forEach(function (_0x2bbaf6) {
        if (!_0x2bbaf6.hide && !_0x2bbaf6.separator && _0x46fb2e.indexOf(_0x2bbaf6.title) == -1) {
          _0x385f38.push(function (_0x5b2399) {
            getList("api/v2.2/films?order=NUM_VOTE&genres=" + _0x2bbaf6.id + "&type=" + (_0x57ac56.url == 'tv' ? "TV_SERIES" : "FILM"), _0x57ac56, function (_0x56c576) {
              _0x56c576.title = Lampa.Utils.capitalizeFirstLetter(_0x2bbaf6.title);
              _0x5b2399(_0x56c576);
            }, _0x5b2399);
          });
        }
      });
      _0x139ebf(_0x1c738b, _0x41865d);
    });
    return _0x139ebf;
  }
  function full() {
    var _0x28b8b0 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _0x5d513c = arguments.length > 1 ? arguments[1] : undefined;
    var _0xeae48a = arguments.length > 2 ? arguments[2] : undefined;
    if (_0x28b8b0.card && _0x28b8b0.card.source === 'KP' && _0x28b8b0.card.kinopoisk_id) {
      getById(_0x28b8b0.card.kinopoisk_id, _0x28b8b0, function (_0x3bc129) {
        var _0x4b048f = new Lampa.Status(4);
        _0x4b048f.onComplite = _0x5d513c;
        _0x4b048f.append("movie", _0x3bc129);
        _0x4b048f.append("persons", _0x3bc129 && _0x3bc129.persons);
        _0x4b048f.append("collection", _0x3bc129 && _0x3bc129.collection);
        _0x4b048f.append("simular", _0x3bc129 && _0x3bc129.simular);
      }, _0xeae48a);
    } else {
      _0xeae48a();
    }
  }
  function list() {
    var _0x2d6016 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _0x3102a0 = arguments.length > 1 ? arguments[1] : undefined;
    var _0x2e81d2 = arguments.length > 2 ? arguments[2] : undefined;
    var _0x3703d1 = _0x2d6016.url;
    if (_0x3703d1 === '' && _0x2d6016.genres) {
      _0x3703d1 = "api/v2.2/films?order=NUM_VOTE&genres=" + _0x2d6016.genres;
    }
    getList(_0x3703d1, _0x2d6016, _0x3102a0, _0x2e81d2);
  }
  function search() {
    var _0x4d445d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _0xaa3008 = arguments.length > 1 ? arguments[1] : undefined;
    var _0x2dd1e6 = decodeURIComponent(_0x4d445d.query || '');
    var _0x3fcebc = new Lampa.Status(1);
    _0x3fcebc.onComplite = function (_0x301310) {
      var _0x99d204 = [];
      if (_0x301310.query && _0x301310.query.results) {
        var _0x3fd13c = _0x301310.query.results.filter(function (_0x1630d7) {
          return typeof _0x1630d7.title === "string" && typeof _0x2dd1e6 === "string" && _0x1630d7.title.toLowerCase().replace(/[\-\u2010-\u2015\u2E3A\u2E3B\uFE58\uFE63\uFF0D]+/g, '-').replace(/ё/g, 'е').replace(/[\s.,:;’'`!?]+/g, " ").trim().indexOf(_0x2dd1e6.toLowerCase().replace(/[\-\u2010-\u2015\u2E3A\u2E3B\uFE58\uFE63\uFF0D]+/g, '-').replace(/ё/g, 'е').replace(/[\s.,:;’'`!?]+/g, " ").trim()) !== -1 || typeof _0x1630d7.original_title === "string" && typeof _0x2dd1e6 === "string" && _0x1630d7.original_title.toLowerCase().replace(/[\-\u2010-\u2015\u2E3A\u2E3B\uFE58\uFE63\uFF0D]+/g, '-').replace(/ё/g, 'е').replace(/[\s.,:;’'`!?]+/g, " ").trim().indexOf(_0x2dd1e6.toLowerCase().replace(/[\-\u2010-\u2015\u2E3A\u2E3B\uFE58\uFE63\uFF0D]+/g, '-').replace(/ё/g, 'е').replace(/[\s.,:;’'`!?]+/g, " ").trim()) !== -1;
        });
        if (_0x3fd13c.length && _0x3fd13c.length !== _0x301310.query.results.length) {
          _0x301310.query.results = _0x3fd13c;
          _0x301310.query.more = true;
        }
        var _0x5aade5 = Object.assign({}, _0x301310.query);
        _0x5aade5.results = _0x301310.query.results.filter(function (_0x3229df) {
          return _0x3229df.type === "movie";
        });
        _0x5aade5.title = Lampa.Lang.translate("menu_movies");
        _0x5aade5.type = "movie";
        if (_0x5aade5.results.length) {
          _0x99d204.push(_0x5aade5);
        }
        var _0x4dc8e7 = Object.assign({}, _0x301310.query);
        _0x4dc8e7.results = _0x301310.query.results.filter(function (_0x560197) {
          return _0x560197.type === 'tv';
        });
        _0x4dc8e7.title = Lampa.Lang.translate("menu_tv");
        _0x4dc8e7.type = 'tv';
        if (_0x4dc8e7.results.length) {
          _0x99d204.push(_0x4dc8e7);
        }
      }
      _0xaa3008(_0x99d204);
    };
    getList("api/v2.1/films/search-by-keyword", _0x4d445d, function (_0x33e736) {
      _0x3fcebc.append("query", _0x33e736);
    }, _0x3fcebc.error.bind(_0x3fcebc));
  }
  function discovery() {
    var _0x582995 = {
      source: 'KP'
    };
    var _0x1cbb22 = {
      align_left: true,
      object: _0x582995
    };
    return {
      'title': 'KP',
      'search': search,
      'params': _0x1cbb22,
      'onMore': function _0x185fcc(_0x18892c) {
        Lampa.Activity.push({
          'url': "api/v2.1/films/search-by-keyword",
          'title': Lampa.Lang.translate("search") + " - " + _0x18892c.query,
          'component': "category_full",
          'page': 0x1,
          'query': encodeURIComponent(_0x18892c.query),
          'source': 'KP'
        });
      },
      'onCancel': network.clear.bind(network)
    };
  }
  function person() {
    var _0x1daa78 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _0x362b93 = arguments.length > 1 ? arguments[1] : undefined;
    var _0x20b952 = new Lampa.Status(1);
    _0x20b952.onComplite = function (_0x2b0b0b) {
      var _0x3e0506 = {};
      if (_0x2b0b0b.query) {
        var _0x1fb83e = _0x2b0b0b.query;
        _0x3e0506.person = {
          'id': _0x1fb83e.personId,
          'name': _0x1fb83e.nameRu || _0x1fb83e.nameEn || '',
          'url': '',
          'img': _0x1fb83e.posterUrl || '',
          'gender': _0x1fb83e.sex === "MALE" ? 2 : _0x1fb83e.sex === "FEMALE" ? 1 : 0,
          'birthday': _0x1fb83e.birthday,
          'place_of_birth': _0x1fb83e.birthplace,
          'deathday': _0x1fb83e.death,
          'place_of_death': _0x1fb83e.deathplace,
          'known_for_department': _0x1fb83e.profession || '',
          'biography': (_0x1fb83e.facts || []).join(" ")
        };
        var _0x4852b8 = [];
        var _0x198c31 = {};
        var _0x644247 = [];
        var _0x1faf65 = {};
        if (_0x1fb83e.films) {
          _0x1fb83e.films.forEach(function (_0x1ea5a6) {
            if (_0x1ea5a6.professionKey === "DIRECTOR" && !_0x198c31[_0x1ea5a6.filmId]) {
              _0x198c31[_0x1ea5a6.filmId] = true;
              _0x4852b8.push(convertElem(_0x1ea5a6));
            } else if (_0x1ea5a6.professionKey === "ACTOR" && !_0x1faf65[_0x1ea5a6.filmId]) {
              _0x1faf65[_0x1ea5a6.filmId] = true;
              _0x644247.push(convertElem(_0x1ea5a6));
            }
          });
        }
        var _0x5a51a5 = [];
        if (_0x4852b8.length) {
          _0x4852b8.sort(function (_0x49de77, _0x54888e) {
            var _0x5d9b0f = _0x54888e.vote_average - _0x49de77.vote_average;
            if (_0x5d9b0f) {
              return _0x5d9b0f;
            }
            return _0x49de77.id - _0x54888e.id;
          });
          _0x5a51a5.push({
            'name': Lampa.Lang.translate("title_producer"),
            'credits': _0x4852b8
          });
        }
        if (_0x644247.length) {
          _0x644247.sort(function (_0x50d870, _0x5107e5) {
            var _0x473eaa = _0x5107e5.vote_average - _0x50d870.vote_average;
            if (_0x473eaa) {
              return _0x473eaa;
            }
            return _0x50d870.id - _0x5107e5.id;
          });
          _0x5a51a5.push({
            'name': Lampa.Lang.translate(_0x1fb83e.sex === "FEMALE" ? "title_actress" : "title_actor"),
            'credits': _0x644247
          });
        }
        var _0x441c31 = {
          knownFor: _0x5a51a5
        };
        _0x3e0506.credits = _0x441c31;
      }
      _0x362b93(_0x3e0506);
    };
    var _0x4baa0b = "api/v1/staff/" + _0x1daa78.id;
    getFromCache(_0x4baa0b, function (_0x1e31f9, _0x19b617) {
      if (!_0x19b617 && _0x1e31f9.personId) {
        setCache(_0x4baa0b, _0x1e31f9);
      }
      _0x20b952.append("query", _0x1e31f9);
    }, _0x20b952.error.bind(_0x20b952));
  }
  function menu() {
    var _0x11cc4c = arguments.length > 1 ? arguments[1] : undefined;
    if (menu_list.length) {
      _0x11cc4c(menu_list);
    } else {
      get("api/v2.2/films/filters", function (_0x5a6237) {
        if (_0x5a6237.genres) {
          _0x5a6237.genres.forEach(function (_0x41c551) {
            menu_list.push({
              'id': _0x41c551.id,
              'title': _0x41c551.genre,
              'url': '',
              'hide': _0x41c551.genre === "для взрослых",
              'separator': !_0x41c551.genre
            });
            genres_map[_0x41c551.genre] = _0x41c551.id;
          });
        }
        if (_0x5a6237.countries) {
          _0x5a6237.countries.forEach(function (_0x443a89) {
            countries_map[_0x443a89.country] = _0x443a89.id;
          });
        }
        _0x11cc4c(menu_list);
      }, function () {
        _0x11cc4c([]);
      });
    }
  }
  function menuCategory(_0x3edba6, _0x37ad86) {
    _0x37ad86([]);
  }
  function seasons(_0x3e0bf9, _0x116512, _0x2eaf8a) {
    var _0x2df2fa = new Lampa.Status(_0x116512.length);
    _0x2df2fa.onComplite = _0x2eaf8a;
    _0x116512.forEach(function (_0x5a4e10) {
      var _0x743ac2 = _0x3e0bf9.seasons || [];
      _0x743ac2 = _0x743ac2.filter(function (_0x488539) {
        return _0x488539.season_number === _0x5a4e10;
      });
      if (_0x743ac2.length) {
        _0x2df2fa.append('' + _0x5a4e10, _0x743ac2[0]);
      } else {
        _0x2df2fa.error();
      }
    });
  }
  var _0x28ea9a = {
    SOURCE_NAME: 'KP'
  };
  _0x28ea9a.SOURCE_TITLE = 'KP';
  _0x28ea9a.main = main;
  _0x28ea9a.menu = menu;
  _0x28ea9a.full = full;
  _0x28ea9a.list = list;
  _0x28ea9a.category = category;
  _0x28ea9a.clear = clear;
  _0x28ea9a.person = person;
  _0x28ea9a.seasons = seasons;
  _0x28ea9a.menuCategory = menuCategory;
  _0x28ea9a.discovery = discovery;
  var _0xb9b304 = {
    name: "tmdb",
    title: "TMDB"
  };
  var _0x4c8969 = {
    name: "cub",
    title: "CUB"
  };
  var _0x2dbe22 = {
    name: "pub",
    title: "PUB"
  };
  var _0x3723a1 = {
    name: "filmix",
    title: "FILMIX"
  };
  var _0x19c431 = {
    name: 'KP',
    title: _0x28ea9a.SOURCE_TITLE
  };
  var ALL_SOURCES = [_0xb9b304, _0x4c8969, _0x2dbe22, _0x3723a1, _0x19c431];
  function startPlugin() {
    window.kp_source_plugin = true;
    function _0x15a480() {
      if (Lampa.Api.sources.KP) {
        Lampa.Noty.show("Установлен плагин несовместимый с kp_source");
        return;
      }
      Lampa.Api.sources.KP = _0x28ea9a;
      Object.defineProperty(Lampa.Api.sources, 'KP', {
        'get': function _0x2ed005() {
          return _0x28ea9a;
        }
      });
      var _0x5e9463;
      if (Lampa.Params.values && Lampa.Params.values.source) {
        _0x5e9463 = Object.assign({}, Lampa.Params.values.source);
        _0x5e9463.KP = _0x28ea9a.SOURCE_TITLE;
      } else {
        _0x5e9463 = {};
        ALL_SOURCES.forEach(function (_0x535d76) {
          if (Lampa.Api.sources[_0x535d76.name]) {
            _0x5e9463[_0x535d76.name] = _0x535d76.title;
          }
        });
      }
      Lampa.Params.select("source", _0x5e9463, "tmdb");
    }
    if (window.appready) {
      _0x15a480();
    } else {
      Lampa.Listener.follow("app", function (_0x1d2fa0) {
        if (_0x1d2fa0.type == "ready") {
          _0x15a480();
        }
      });
    }
  }
  if (!window.kp_source_plugin) {
    startPlugin();
  }
  var manifest;
  var menu_list = [];
  console.log("App", "protocol:", window.location.protocol == "https:" ? "https://" : "http://");
  var Lmp = {
    'init': function () {
      this.sources();
      if (!window.FX) {
        var _0x19ae18 = {
          max_qualitie: 0x2d0,
          is_max_qualitie: true,
          auth: false
        };
        window.FX = _0x19ae18;
      }
    },
    'sources': function () {
      var _0x19aa96;
      if (Lampa.Params.values && Lampa.Params.values.source) {
        _0x19aa96 = Object.assign({}, Lampa.Params.values.source);
        _0x19aa96.filmix = "FILMIX";
      } else {
        var _0x252f70 = {
          tmdb: "TMDB",
          cub: "CUB",
          filmix: "FILMIX"
        };
        _0x19aa96 = _0x252f70;
      }
      Lampa.Params.select("source", _0x19aa96, "tmdb");
    },
    'setCache': function (_0x4cbb13, _0x1a0170) {
      var _0x54e924 = {
        JyGMg: function (_0x44e5d3, _0x4465c0) {
          return _0x44e5d3 > _0x4465c0;
        },
        fdlQs: function (_0xecb11f, _0x4c1f6c) {
          return _0xecb11f - _0x4c1f6c;
        }
      };
      _0x54e924.nHyMO = function (_0x1b2392, _0x5eed8a) {
        return _0x1b2392 + _0x5eed8a;
      };
      _0x54e924.ZxpDN = "id_";
      _0x54e924.JbfIU = "card_my_clear";
      _0x54e924.kHSbr = "card_my_add";
      _0x54e924.yoZEW = "card_my_descr";
      _0x54e924.KBVjP = "book";
      _0x54e924.EBMWF = function (_0x212ffb, _0x8151ac) {
        return _0x212ffb !== _0x8151ac;
      };
      _0x54e924.qCxOT = "nlmHt";
      _0x54e924.WqUOe = "KLUpx";
      _0x54e924.ODKUz = function (_0x210679, _0x179ba2) {
        return _0x210679 !== _0x179ba2;
      };
      _0x54e924.tLiwb = "FsPHx";
      _0x54e924.oDmTq = function (_0x871d12, _0x19ca44) {
        return _0x871d12 > _0x19ca44;
      };
      _0x54e924.CfAqv = "eIJGa";
      var _0x7ee88c = new Date().getTime();
      var _0x53ad1a = Lampa.Storage.cache(_0x4cbb13, 1, {});
      if (!_0x53ad1a[_0x4cbb13]) {
        if (_0x54e924.EBMWF(_0x54e924.qCxOT, _0x54e924.WqUOe)) {
          _0x53ad1a[_0x4cbb13] = _0x1a0170;
          Lampa.Storage.set(_0x4cbb13, _0x53ad1a);
        } else {
          _0x397ae3.Api.partNext(_0x235a5b, _0x473d90, _0x42aa92, _0x1e1bfd);
        }
      } else {
        if (_0x54e924.ODKUz(_0x54e924.tLiwb, _0x54e924.tLiwb)) {
          var _0x3e008a = new _0x484373().getTime();
          var _0x498d31 = _0x2a2049.Storage.cache(_0x5b1fac, 1, {});
          if (!_0x498d31[_0x3664ed]) {
            _0x498d31[_0x3956c2] = _0x2cec00;
            _0x50cdea.Storage.set(_0x3208ce, _0x498d31);
          } else {
            if (_0x3e008a - _0x498d31[_0x25b18b].timestamp > this.CACHE_TIME) {
              _0x1f7c12.timestamp = _0x3e008a;
              _0x498d31[_0xe319dc] = _0x3bc02a;
              _0x39c865.Storage.set(_0x2207b0, _0x498d31);
            } else {
              _0x335283 = _0x498d31[_0x4bea07];
            }
          }
          return _0x2d2437;
        } else {
          if (_0x54e924.oDmTq(_0x7ee88c - _0x53ad1a[_0x4cbb13].timestamp, this.CACHE_TIME)) {
            if (_0x54e924.ODKUz(_0x54e924.CfAqv, _0x54e924.CfAqv)) {
              _0x3f197e.push({
                'title': _0x46bbd2[_0x54e924.nHyMO(_0x54e924.ZxpDN, _0x50c7e0.id)] ? _0x57219b.Lang.translate(_0x54e924.JbfIU) : _0x16ad2b.Lang.translate(_0x54e924.kHSbr),
                'subtitle': _0x22c184.Lang.translate(_0x54e924.yoZEW),
                'where': _0x54e924.KBVjP
              });
            } else {
              _0x1a0170.timestamp = _0x7ee88c;
              _0x53ad1a[_0x4cbb13] = _0x1a0170;
              Lampa.Storage.set(_0x4cbb13, _0x53ad1a);
            }
          } else {
            _0x1a0170 = _0x53ad1a[_0x4cbb13];
          }
        }
      }
      return _0x1a0170;
    }
  };
  var Filmix = {
    'network': new Lampa.Reguest(),
    'api_url': "http://filmixapp.cyou/api/v2/",
    'token': Lampa.Storage.get("filmix_token", ''),
    'user_dev': "app_lang=ru_RU&user_dev_apk=2.1.2&user_dev_id=" + Lampa.Utils.uid(16) + "&user_dev_name=Xiaomi&user_dev_os=11&user_dev_vendor=Xiaomi&user_dev_token=",
    'add_new': function () {
      var _0x33b94e = '';
      var _0x51ef43 = '';
      var _0x490e86 = $("<div><div class=\"broadcast__text\">" + Lampa.Lang.translate("filmix_modal_text") + "</div><div class=\"broadcast__device selector\" style=\"text-align: center\">Ожидаем код...</div><br><div class=\"broadcast__scan\"><div></div></div></div></div>");
      Lampa.Modal.open({
        'title': '',
        'html': _0x490e86,
        'onBack': function _0x5d7fb4() {
          Lampa.Modal.close();
          Lampa.Controller.toggle("settings_component");
          clearInterval(ping_auth);
        },
        'onSelect': function _0x35c8f3() {
          Lampa.Utils.copyTextToClipboard(_0x33b94e, function () {
            Lampa.Noty.show(Lampa.Lang.translate("filmix_copy_secuses"));
          }, function () {
            Lampa.Noty.show(Lampa.Lang.translate("filmix_copy_fail"));
          });
        }
      });
      ping_auth = setInterval(function () {
        Filmix.checkPro(_0x51ef43, function (_0x2bcf9a) {
          if (_0x2bcf9a && _0x2bcf9a.user_data) {
            Lampa.Modal.close();
            clearInterval(ping_auth);
            Lampa.Storage.set("filmix_token", _0x51ef43);
            Filmix.token = _0x51ef43;
            $("[data-name=\"filmix_token\"] .settings-param__value").text(_0x51ef43);
            Lampa.Controller.toggle("settings_component");
          }
        });
      }, 2000);
      this.network.clear();
      this.network.timeout(10000);
      this.network.quiet(this.api_url + "token_request?" + this.user_dev, function (_0xb318d4) {
        if (_0xb318d4.status == 'ok') {
          _0x51ef43 = _0xb318d4.code;
          _0x33b94e = _0xb318d4.user_code;
          _0x490e86.find(".selector").text(_0x33b94e);
        } else {
          Lampa.Noty.show(_0xb318d4);
        }
      }, function (_0x508821, _0xb26ae2) {
        Lampa.Noty.show(Filmix.network.errorDecode(_0x508821, _0xb26ae2));
      });
    }
  };
  var Pub = {
    'network': new Lampa.Reguest()
  };
  function startFilmixPlugin() {
    window.plugin_lmp = true;
    manifest = {};
    Lampa.Manifest.plugins = manifest;
    if (!Lampa.Lang) {
      var _0x48e0f4 = {};
      Lampa.Lang = {
        'add': function (_0x477740) {
          _0x48e0f4 = _0x477740;
        },
        'translate': function (_0x53d44a) {
          return _0x48e0f4[_0x53d44a] ? _0x48e0f4[_0x53d44a].ru : _0x53d44a;
        }
      };
    }
    var _0x5f1f7d = {
      'ru': "По просмотрам"
    };
    var _0x405df1 = {
      'ru': "По подпискам"
    };
    var _0x255a89 = {
      'ru': "По обновлению"
    };
    var _0x202762 = {
      'ru': "По дате добавления"
    };
    var _0x5251d1 = {
      'ru': "Поиск по подборкам"
    };
    var _0x6c7597 = {
      'ru': "Все"
    };
    var _0x26fa3f = {
      'ru': "Популярные"
    };
    var _0xa8a286 = {
      'ru': "Новые"
    };
    var _0x195bd9 = {
      'ru': "Горячие"
    };
    var _0x3c22eb = {
      'ru': "Свежие"
    };
    var _0x3395d2 = {
      'ru': "Рейтинговые"
    };
    var _0x391b0a = {
      'ru': "Всё в жанре"
    };
    var _0x3b981c = {
      'ru': "Популярные фильмы"
    };
    var _0xc5bf02 = {
      'ru': "Популярные сериалы"
    };
    var _0x878c32 = {
      'ru': "Новые фильмы"
    };
    var _0x5101b7 = {
      'ru': "Новые сериалы"
    };
    var _0x3aeb7f = {
      'ru': "Новые концерты"
    };
    var _0x7fa930 = {
      'ru': "Новые док. фильмы"
    };
    var _0x5192aa = {
      'ru': "Новые док. сериалы"
    };
    var _0x2057a7 = {
      'ru': "Новое ТВ шоу"
    };
    var _0x2fbbd3 = {
      pub_sort_views: _0x5f1f7d,
      pub_sort_watchers: _0x405df1,
      pub_sort_updated: _0x255a89,
      pub_sort_created: _0x202762,
      pub_search_coll: _0x5251d1,
      pub_title_all: _0x6c7597,
      pub_title_popular: _0x26fa3f,
      pub_title_new: _0xa8a286,
      pub_title_hot: _0x195bd9,
      pub_title_fresh: _0x3c22eb,
      pub_title_rating: _0x3395d2
    };
    _0x2fbbd3.pub_title_allingenre = _0x391b0a;
    _0x2fbbd3.pub_title_popularfilm = _0x3b981c;
    _0x2fbbd3.pub_title_popularserial = _0xc5bf02;
    _0x2fbbd3.pub_title_newfilm = _0x878c32;
    _0x2fbbd3.pub_title_newserial = _0x5101b7;
    _0x2fbbd3.pub_title_newconcert = _0x3aeb7f;
    _0x2fbbd3.pub_title_newdocfilm = _0x7fa930;
    _0x2fbbd3.pub_title_newdocserial = _0x5192aa;
    _0x2fbbd3.pub_title_newtvshow = _0x2057a7;
    Lampa.Lang.add(_0x2fbbd3);
    function _0x2bb4ea() {
      Lmp.init();
    }
    if (window.appready) {
      _0x2bb4ea();
    } else {
      Lampa.Listener.follow("app", function (_0x4d9767) {
        if (_0x4d9767.type == "ready") {
          _0x2bb4ea();
        }
      });
    }
    function _0x48107a(_0x5a1fcb) {
      var _0x11a548 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      _0x5a1fcb = _0x5a1fcb == "undefined" ? '' : _0x5a1fcb;
      if (_0x11a548.genres) {
        _0x5a1fcb = "catalog" + (_0x5a1fcb + (/\?/.test(_0x5a1fcb) ? '&' : '?') + ("orderby=date&orderdir=desc&filter=s996-" + _0x11a548.genres.replace('f', 'g')));
      }
      if (_0x11a548.page) {
        _0x5a1fcb = _0x5a1fcb + (/\?/.test(_0x5a1fcb) ? '&' : '?') + ("page=" + _0x11a548.page);
      }
      if (_0x11a548.query) {
        _0x5a1fcb = _0x5a1fcb + (/\?/.test(_0x5a1fcb) ? '&' : '?') + ("story=" + _0x11a548.query);
      }
      if (_0x11a548.type) {
        _0x5a1fcb = _0x5a1fcb + (/\?/.test(_0x5a1fcb) ? '&' : '?') + ("type=" + _0x11a548.type);
      }
      if (_0x11a548.field) {
        _0x5a1fcb = _0x5a1fcb + (/\?/.test(_0x5a1fcb) ? '&' : '?') + ("field=" + _0x11a548.field);
      }
      if (_0x11a548.perpage) {
        _0x5a1fcb = _0x5a1fcb + (/\?/.test(_0x5a1fcb) ? '&' : '?') + ("perpage=" + _0x11a548.perpage);
      }
      _0x5a1fcb = _0x5a1fcb + (/\?/.test(_0x5a1fcb) ? '&' : '?') + (Filmix.user_dev + Lampa.Storage.get("filmix_token", "aaaabbbbccccddddeeeeffffaaaabbbb"));
      if (_0x11a548.filter) {
        for (var _0x1fa253 in _0x11a548.filter) {
          _0x5a1fcb = _0x5a1fcb + (/\?/.test(_0x5a1fcb) ? '&' : '?') + (_0x1fa253 + '=' + _0x11a548.filter[_0x1fa253]);
        }
      }
      return "http://filmixapp.cyou/api/v2/" + _0x5a1fcb;
    }
    function _0xb75d19(_0x1c474a, _0x3ba8c9) {
      var _0x42a206 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _0x4b0794 = arguments.length > 2 ? arguments[2] : undefined;
      var _0x5bcfa8 = arguments.length > 3 ? arguments[3] : undefined;
      var _0xa7fad3 = _0x48107a(_0x1c474a, _0x42a206);
      Filmix.network.native(_0xa7fad3, function (_0x400d01) {
        _0x400d01.url = _0x1c474a;
        _0x4b0794(_0x400d01);
      }, _0x5bcfa8);
    }
    function _0x4b0172(_0x4f8014, _0x149aad, _0x48035e) {
      var _0x329787 = 2;
      var _0x410b12 = _0x48107a(_0x4f8014.url, _0x4f8014);
      Filmix.network.native(_0x410b12, function (_0x3766c2) {
        var _0x55409e = [];
        if (_0x3766c2) {
          _0x3766c2.forEach(function (_0x4d1c1a) {
            _0x55409e.push({
              'url': '',
              'id': _0x4d1c1a.id,
              'type': undefined || (_0x4d1c1a.serial_stats && _0x4d1c1a.serial_stats.post_id || _0x4d1c1a.last_episode && _0x4d1c1a.last_episode.post_id ? 'tv' : "movie"),
              'source': "filmix",
              'quality': _0x4d1c1a.quality && _0x4d1c1a.quality.split(" ").shift() || '',
              'title': _0x4d1c1a.title,
              'original_title': _0x4d1c1a.original_title || _0x4d1c1a.title,
              'release_date': _0x4d1c1a.year || _0x4d1c1a.date && _0x4d1c1a.date.split(" ")[2] || "0000",
              'first_air_date': false || _0x4d1c1a.serial_stats && _0x4d1c1a.serial_stats.post_id || _0x4d1c1a.last_episode && _0x4d1c1a.last_episode.post_id ? _0x4d1c1a.year : '',
              'img': _0x4d1c1a.poster,
              'cover': _0x4d1c1a.poster,
              'background_image': _0x4d1c1a.poster,
              'vote_average': parseFloat(_0x4d1c1a.kp_rating || "0.0").toFixed(1),
              'imdb_rating': parseFloat(_0x4d1c1a.imdb_rating || "0.0").toFixed(1),
              'kp_rating': parseFloat(_0x4d1c1a.kp_rating || "0.0").toFixed(1),
              'year': _0x4d1c1a.year
            });
          });
        }
        var _0xcfee1c = {
          results: _0x55409e,
          page: _0x329787,
          total_pages: 0x32
        };
        _0x149aad(_0xcfee1c);
        _0x329787++;
      }, _0x48035e);
    }
    function _0x1a27b2(_0x5683c9, _0x1ca1e8, _0x383957) {
      var _0x2d268c = {
        title: "title_now_watch",
        url: "top_views"
      };
      var _0x30b5eb = {
        title: "title_new",
        url: "catalog?orderby=date&orderdir=desc"
      };
      var _0x4df03e = {
        title: "title_new_this_year",
        url: "catalog?orderby=year&orderdir=desc"
      };
      var _0x228506 = {
        title: "pub_title_newfilm",
        url: "catalog?orderby=date&orderdir=desc&filter=s0"
      };
      var _0xfe7a40 = {
        title: '4K',
        url: "catalog?orderby=date&orderdir=desc&filter=s0-q4"
      };
      var _0x34f562 = {
        title: "pub_title_popularfilm",
        url: "popular"
      };
      var _0x1ffa92 = {
        title: "pub_title_popularserial",
        url: "popular?section=7"
      };
      var _0x1a7a34 = {
        title: "title_in_top",
        url: "catalog?orderby=rating&orderdir=desc"
      };
      var _0x27a97c = [_0x2d268c, _0x30b5eb, _0x4df03e, _0x228506, _0xfe7a40, _0x34f562, _0x1ffa92, _0x1a7a34];
      var _0x539a4a = new Lampa.Status(Lampa.Arrays.getKeys(_0x27a97c).length);
      _0x539a4a.onComplite = function () {
        var _0x321b19 = [];
        _0x27a97c.forEach(function (_0x5b12aa) {
          if (_0x539a4a.data[_0x5b12aa.title] && _0x539a4a.data[_0x5b12aa.title].results.length) {
            _0x321b19.push(_0x539a4a.data[_0x5b12aa.title]);
          }
        });
        if (_0x321b19.length) {
          _0x1ca1e8(_0x321b19);
        } else {
          _0x383957();
        }
      };
      var _0x1c8142 = function _0x1bfcf2(_0x44c57e, _0x54ce84, _0x1f06c7) {
        _0x1f06c7.title = _0x44c57e;
        var _0x32346c = [];
        _0x1f06c7.forEach(function (_0x274b97) {
          _0x32346c.push({
            'url': '',
            'id': _0x274b97.id,
            'type': undefined || (_0x274b97.serial_stats && _0x274b97.serial_stats.post_id || _0x274b97.last_episode && _0x274b97.last_episode.post_id ? 'tv' : "movie"),
            'source': "filmix",
            'quality': _0x274b97.quality && _0x274b97.quality.split(" ").shift() || '',
            'title': _0x274b97.title,
            'original_title': _0x274b97.original_title || _0x274b97.title,
            'release_date': _0x274b97.year || _0x274b97.date && _0x274b97.date.split(" ")[2] || "0000",
            'first_air_date': false || _0x274b97.serial_stats && _0x274b97.serial_stats.post_id || _0x274b97.last_episode && _0x274b97.last_episode.post_id ? _0x274b97.year : '',
            'img': _0x274b97.poster,
            'cover': _0x274b97.poster,
            'background_image': _0x274b97.poster,
            'vote_average': parseFloat(_0x274b97.kp_rating || "0.0").toFixed(1),
            'imdb_rating': parseFloat(_0x274b97.imdb_rating || "0.0").toFixed(1),
            'kp_rating': parseFloat(_0x274b97.kp_rating || "0.0").toFixed(1),
            'year': _0x274b97.year
          });
        });
        _0x1f06c7.results = _0x32346c;
        _0x539a4a.append(_0x54ce84, _0x1f06c7);
      };
      _0x27a97c.forEach(function (_0x645540) {
        _0xb75d19(_0x645540.url, _0x5683c9, function (_0x5cdb76) {
          _0x1c8142(Lampa.Lang.translate(_0x645540.title), _0x645540.title, _0x5cdb76);
        }, _0x539a4a.error.bind(_0x539a4a));
      });
    }
    function _0x661281(_0x40e157, _0x25091f, _0x1c99ea) {
      var _0x44a2de = Lampa.Favorite.continues(_0x40e157.url);
      var _0x3543a0 = _0x40e157.url == 'tv' ? 7 : 0;
      var _0x2c508b = [{
        'title': "title_new_this_year",
        'url': "catalog?orderby=year&orderdir=desc&filter=s" + _0x3543a0
      }, {
        'title': "title_new",
        'url': "catalog?orderby=date&orderdir=desc&filter=s" + _0x3543a0
      }, {
        'title': "title_popular",
        'url': "popular?section=" + _0x3543a0
      }, {
        'title': "title_in_top",
        'url': "catalog?orderby=rating&orderdir=desc&filter=s" + _0x3543a0
      }];
      var _0x132c3d = new Lampa.Status(Lampa.Arrays.getKeys(_0x2c508b).length);
      _0x132c3d.onComplite = function () {
        var _0x259876 = [];
        var _0x3a651e = _0x132c3d.data;
        if (_0x44a2de.length) {
          _0x259876.push({
            'results': _0x44a2de,
            'title': _0x40e157.url == 'tv' ? Lampa.Lang.translate("title_continue") : Lampa.Lang.translate("title_watched")
          });
        }
        _0x2c508b.forEach(function (_0x5d46f9) {
          if (_0x3a651e[_0x5d46f9.title] && _0x3a651e[_0x5d46f9.title].results.length) {
            _0x259876.push(_0x3a651e[_0x5d46f9.title]);
          }
        });
        if (_0x259876.length) {
          _0x25091f(_0x259876);
        } else {
          _0x1c99ea();
        }
      };
      var _0x276f78 = function _0x476592(_0x3683b7, _0x5c9dd6, _0x1af320) {
        _0x1af320.title = _0x3683b7;
        var _0x2ba613 = [];
        _0x1af320.forEach(function (_0x5c5460) {
          _0x2ba613.push({
            'url': '',
            'id': _0x5c5460.id,
            'type': _0x40e157.url || (_0x5c5460.serial_stats && _0x5c5460.serial_stats.post_id || _0x5c5460.last_episode && _0x5c5460.last_episode.post_id ? 'tv' : "movie"),
            'source': "filmix",
            'quality': _0x5c5460.quality && _0x5c5460.quality.split(" ").shift() || '',
            'title': _0x5c5460.title,
            'original_title': _0x5c5460.original_title || _0x5c5460.title,
            'release_date': _0x5c5460.year || _0x5c5460.date && _0x5c5460.date.split(" ")[2] || "0000",
            'first_air_date': _0x40e157.url == 'tv' || _0x5c5460.serial_stats && _0x5c5460.serial_stats.post_id || _0x5c5460.last_episode && _0x5c5460.last_episode.post_id ? _0x5c5460.year : '',
            'img': _0x5c5460.poster,
            'cover': _0x5c5460.poster,
            'background_image': _0x5c5460.poster,
            'vote_average': parseFloat(_0x5c5460.kp_rating || "0.0").toFixed(1),
            'imdb_rating': parseFloat(_0x5c5460.imdb_rating || "0.0").toFixed(1),
            'kp_rating': parseFloat(_0x5c5460.kp_rating || "0.0").toFixed(1),
            'year': _0x5c5460.year
          });
        });
        _0x1af320.results = _0x2ba613;
        _0x132c3d.append(_0x5c9dd6, _0x1af320);
      };
      _0x2c508b.forEach(function (_0x7f74b8) {
        _0xb75d19(_0x7f74b8.url, _0x40e157, function (_0x499ba6) {
          _0x276f78(Lampa.Lang.translate(_0x7f74b8.title), _0x7f74b8.title, _0x499ba6);
        }, _0x132c3d.error.bind(_0x132c3d));
      });
    }
    function _0x4232f3(_0x4b94ff, _0x236bce, _0x493907) {
      var _0xe30c7d = new Lampa.Status(5);
      _0xe30c7d.onComplite = _0x236bce;
      var _0x3c478f = "post/" + _0x4b94ff.id;
      _0xb75d19(_0x3c478f, _0x4b94ff, function (_0x2a38b2) {
        _0x2a38b2.source = "filmix";
        var _0x65a8df = {};
        var _0x52b012 = [];
        if (_0x2a38b2.relates) {
          for (var _0x33ab94 in _0x2a38b2.relates) {
            var _0xf44ccd = _0x2a38b2.relates[_0x33ab94];
            _0x52b012.push({
              'url': '',
              'id': _0xf44ccd.id,
              'type': undefined || (_0xf44ccd.serial_stats && _0xf44ccd.serial_stats.post_id || _0xf44ccd.last_episode && _0xf44ccd.last_episode.post_id ? 'tv' : "movie"),
              'source': "filmix",
              'quality': _0xf44ccd.quality && _0xf44ccd.quality.split(" ").shift() || '',
              'title': _0xf44ccd.title,
              'original_title': _0xf44ccd.original_title || _0xf44ccd.title,
              'release_date': _0xf44ccd.year || _0xf44ccd.date && _0xf44ccd.date.split(" ")[2] || "0000",
              'first_air_date': false || _0xf44ccd.serial_stats && _0xf44ccd.serial_stats.post_id || _0xf44ccd.last_episode && _0xf44ccd.last_episode.post_id ? _0xf44ccd.year : '',
              'img': _0xf44ccd.poster,
              'cover': _0xf44ccd.poster,
              'background_image': _0xf44ccd.poster,
              'vote_average': parseFloat(_0xf44ccd.kp_rating || "0.0").toFixed(1),
              'imdb_rating': parseFloat(_0xf44ccd.imdb_rating || "0.0").toFixed(1),
              'kp_rating': parseFloat(_0xf44ccd.kp_rating || "0.0").toFixed(1),
              'year': _0xf44ccd.year
            });
          }
          var _0x3227e3 = {
            results: _0x52b012
          };
          _0xe30c7d.append("simular", _0x3227e3);
        }
        _0x65a8df.movie = {
          'id': _0x2a38b2.id,
          'url': _0x3c478f,
          'type': Lampa.Arrays.getValues(_0x2a38b2.player_links.playlist).length ? 'tv' : "movie",
          'source': "filmix",
          'title': _0x2a38b2.title,
          'original_title': _0x2a38b2.original_title,
          'name': Lampa.Arrays.getValues(_0x2a38b2.player_links.playlist).length ? _0x2a38b2.title : '',
          'original_name': Lampa.Arrays.getValues(_0x2a38b2.player_links.playlist).length ? _0x2a38b2.original_title : '',
          'overview': _0x2a38b2.short_story.replace(/\[n|r|t]/g, ''),
          'img': _0x2a38b2.poster,
          'runtime': _0x2a38b2.duration || 0,
          'genres': _0xee93f0(_0x2a38b2),
          'vote_average': parseFloat(_0x2a38b2.imdb_rating || _0x2a38b2.kp_rating || '0'),
          'production_companies': [],
          'production_countries': _0xab3cbd(_0x2a38b2.countries),
          'budget': _0x2a38b2.budget || 0,
          'release_date': _0x2a38b2.year || _0x2a38b2.date.split(" ")[2] || "0000",
          'seasons': Lampa.Arrays.getValues(_0x2a38b2.player_links.playlist).filter(function (_0x25e013) {
            _0x25e013.episode_count = 1;
            return _0x25e013;
          }),
          'quality': _0x2a38b2.rip && _0x2a38b2.rip.split(" ").shift() || '',
          'number_of_seasons': Lampa.Arrays.getValues(_0x2a38b2.player_links.playlist).length || '',
          'number_of_episodes': _0x2a38b2.last_episode && _0x2a38b2.last_episode.episode || '',
          'first_air_date': Lampa.Arrays.getValues(_0x2a38b2.player_links.playlist).length ? _0x2a38b2.year || _0x2a38b2.date_atom || "0000" : '',
          'background_image': _0x2a38b2.poster,
          'imdb_rating': parseFloat(_0x2a38b2.imdb_rating || "0.0").toFixed(1),
          'kp_rating': parseFloat(_0x2a38b2.kp_rating || "0.0").toFixed(1)
        };
        _0xb75d19("comments/" + _0x2a38b2.id, _0x4b94ff, function (_0x14804b) {
          var _0x145d40 = [];
          if (_0x14804b) {
            _0x14804b.forEach(function (_0x1b4c11) {
              _0x1b4c11.text = _0x1b4c11.text.replace(/\[n|r|t]/g, '');
              _0x1b4c11.like_count = '';
              _0x145d40.push(_0x1b4c11);
            });
            _0xe30c7d.append("comments", _0x145d40);
            $(".full-review__footer", Lampa.Activity.active().activity.render()).hide();
          }
        }, _0x493907);
        _0xe30c7d.append("persons", _0x513e61(_0x2a38b2));
        _0xe30c7d.append("movie", _0x65a8df.movie);
        _0xe30c7d.append("videos", _0x44628f(_0x2a38b2.player_links));
      }, _0x493907);
    }
    function _0x41c117(_0x3d3534, _0x32adcf) {
      var _0x3d3534 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _0x32adcf = arguments.length > 1 ? arguments[1] : undefined;
      if (menu_list.length) {
        _0x32adcf(menu_list);
      } else {
        var _0x973310 = _0x48107a("category_list", _0x3d3534);
        Filmix.network.native(_0x973310, function (_0x1d841a) {
          Lampa.Arrays.getKeys(_0x1d841a).forEach(function (_0x2c270e) {
            var _0x2f709d = {
              title: _0x1d841a[_0x2c270e],
              'id': _0x2c270e
            };
            menu_list.push(_0x2f709d);
          });
          console.log(menu_list);
          _0x32adcf(menu_list);
        });
      }
    }
    function _0x2d9182(_0x4f3ce6, _0x2d167c, _0x13b3a6) {
      Lampa.Api.sources.tmdb.seasons(_0x4f3ce6, _0x2d167c, _0x13b3a6);
    }
    function _0x236772(_0x26d66a) {
      var _0x5f0330 = {
        name: "января",
        number: '01'
      };
      var _0xa2cba6 = {
        name: "февраля",
        number: '02'
      };
      var _0x5c2886 = {
        name: "марта",
        number: '03'
      };
      var _0x3f6b03 = {
        name: "апреля",
        number: '04'
      };
      var _0x393851 = {
        name: "мая",
        number: '05'
      };
      var _0x13423c = {
        name: "июня",
        number: '06'
      };
      var _0x2568af = {
        name: "июля",
        number: '07'
      };
      var _0x21f8f9 = {
        name: "августа",
        number: '08'
      };
      var _0x23ef1d = {
        name: "сентября",
        number: '09'
      };
      var _0x2520da = {
        name: "октября",
        number: '10'
      };
      var _0x1dd15c = {
        name: "ноября",
        number: '11'
      };
      var _0x2d218a = {
        name: "декабря",
        number: '12'
      };
      var _0x412284 = [_0x5f0330, _0xa2cba6, _0x5c2886, _0x3f6b03, _0x393851, _0x13423c, _0x2568af, _0x21f8f9, _0x23ef1d, _0x2520da, _0x1dd15c, _0x2d218a];
      var _0x1c7f61 = _0x26d66a.split(" ");
      var _0x73ab46 = _0x1c7f61[0];
      var _0x1e25a5 = _0x1c7f61[1];
      var _0x3e7145 = _0x1c7f61[2];
      var _0x1d91ca;
      for (var _0x5760dc = 0; _0x5760dc < _0x412284.length; _0x5760dc++) {
        if (_0x412284[_0x5760dc].name === _0x1e25a5) {
          _0x1d91ca = _0x412284[_0x5760dc].number;
          break;
        }
      }
      var _0x44ae8d = _0x3e7145 + '-' + _0x1d91ca + '-' + _0x73ab46;
      return _0x44ae8d;
    }
    function _0x2ac8b8(_0x5a41ae, _0xc1459d, _0x5b3502) {
      var _0x541c12 = _0x48107a("person/" + _0x5a41ae.id, _0x5a41ae);
      Filmix.network.native(_0x541c12, function (_0x16ac46, _0xc5b54a) {
        var _0x455980 = {};
        if (_0x16ac46) {
          _0x455980.person = {
            'id': _0x5a41ae.id,
            'name': _0x16ac46.name,
            'biography': _0x16ac46.about,
            'img': _0x16ac46.poster,
            'place_of_birth': _0x16ac46.birth_place,
            'birthday': _0x236772(_0x16ac46.birth)
          };
          var _0x5c0929 = [];
          for (var _0x448c52 in _0x16ac46.movies) {
            var _0x5bc1ae = _0x16ac46.movies[_0x448c52];
            _0x5c0929.push({
              'url': '',
              'id': _0x5bc1ae.id,
              'type': undefined || (_0x5bc1ae.serial_stats && _0x5bc1ae.serial_stats.post_id || _0x5bc1ae.last_episode && _0x5bc1ae.last_episode.post_id ? 'tv' : "movie"),
              'source': "filmix",
              'quality': _0x5bc1ae.quality && _0x5bc1ae.quality.split(" ").shift() || '',
              'title': _0x5bc1ae.title,
              'original_title': _0x5bc1ae.original_title || _0x5bc1ae.title,
              'release_date': _0x5bc1ae.year || _0x5bc1ae.date && _0x5bc1ae.date.split(" ")[2] || "0000",
              'first_air_date': false || _0x5bc1ae.serial_stats && _0x5bc1ae.serial_stats.post_id || _0x5bc1ae.last_episode && _0x5bc1ae.last_episode.post_id ? _0x5bc1ae.year : '',
              'img': _0x5bc1ae.poster,
              'cover': _0x5bc1ae.poster,
              'background_image': _0x5bc1ae.poster,
              'vote_average': parseFloat(_0x5bc1ae.kp_rating || "0.0").toFixed(1),
              'imdb_rating': parseFloat(_0x5bc1ae.imdb_rating || "0.0").toFixed(1),
              'kp_rating': parseFloat(_0x5bc1ae.kp_rating || "0.0").toFixed(1),
              'year': _0x5bc1ae.year
            });
          }
          var _0x152a52 = {
            movie: _0x5c0929,
            knownFor: [{
              'name': _0x16ac46.career,
              'credits': _0x5c0929
            }]
          };
          _0x455980.credits = _0x152a52;
        }
        _0xc1459d(_0x455980);
      }, _0x5b3502);
    }
    function _0x1e1a3f() {
      Filmix.network.clear();
    }
    function _0x44628f(_0x4cb5a6) {
      var _0x32215a = [];
      if (_0x4cb5a6.trailer.length) {
        _0x4cb5a6.trailer.forEach(function (_0x5e8517) {
          var _0x47f368 = _0x5e8517.link.match(/\[(.*?)\]/);
          _0x47f368 = _0x47f368[1].split(',').filter(function (_0x3812d2) {
            if (_0x3812d2 === '') {
              return false;
            }
            return true;
          }).sort(function (_0x1ba939, _0x2791d0) {
            return _0x2791d0 - _0x1ba939;
          }).map(function (_0x458174) {
            _0x32215a.push({
              'name': _0x5e8517.translation + " " + _0x458174 + 'p',
              'url': _0x5e8517.link.replace(/\[(.*?)\]/, _0x458174),
              'player': true
            });
          });
        });
      }
      return _0x32215a.length ? {
        'results': _0x32215a
      } : false;
    }
    function _0x513e61(_0x2e17e4) {
      var _0x1a0b06 = [];
      if (_0x2e17e4.actors) {
        _0x2e17e4.found_actors.filter(function (_0x31bcfd) {
          _0x1a0b06.push({
            'name': _0x31bcfd.name,
            'id': _0x31bcfd.id,
            'character': Lampa.Lang.translate("title_actor")
          });
        });
      }
      return _0x1a0b06.length ? {
        'cast': _0x1a0b06
      } : false;
    }
    function _0xee93f0(_0x507591) {
      var _0x3fb74a = [];
      var _0x1044b7 = _0x48107a("category_list");
      Filmix.network.native(_0x1044b7, function (_0x12f4a9) {
        _0x507591.categories.forEach(function (_0x4cef3a, _0x440aac) {
          if (_0x4cef3a) {
            var _0xcc894e = Object.entries(_0x12f4a9).find(function (_0x230ec6) {
              return _0x230ec6[1] == _0x4cef3a;
            });
            var _0x58393c = {
              'id': _0xcc894e && _0xcc894e[0] || '',
              name: _0x4cef3a
            };
            _0x3fb74a.push(_0x58393c);
          }
        });
      });
      return _0x3fb74a;
    }
    function _0xab3cbd(_0x3c0023) {
      var _0xa1af16 = [];
      if (_0x3c0023) {
        _0x3c0023.forEach(function (_0x32bb21) {
          var _0x47b004 = {
            name: _0x32bb21
          };
          _0xa1af16.push(_0x47b004);
        });
      }
      return _0xa1af16;
    }
    function _0x11654d() {
      var _0x20cc54 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _0x2abcf = arguments.length > 1 ? arguments[1] : undefined;
      var _0x4f2806 = new Lampa.Status(2);
      _0x4f2806.onComplite = function (_0x398efd) {
        var _0x1515d3 = [];
        if (_0x398efd.movie && _0x398efd.movie.results.length) {
          _0x1515d3.push(_0x398efd.movie);
        }
        if (_0x398efd.tv && _0x398efd.tv.results.length) {
          _0x1515d3.push(_0x398efd.tv);
        }
        _0x2abcf(_0x1515d3);
      };
      _0xb75d19("search", _0x20cc54, function (_0x190ce2) {
        var _0x13eff3 = [];
        var _0x1ef580 = [];
        if (_0x190ce2) {
          _0x190ce2.forEach(function (_0x2358f9) {
            _0x2358f9;
            if (_0x2358f9.last_episode && _0x2358f9.last_episode.season || _0x2358f9.serial_stats && _0x2358f9.serial_stats.status) {
              _0x1ef580.push({
                'url': '',
                'id': _0x2358f9.id,
                'type': (_0x2358f9.last_episode && _0x2358f9.last_episode.season || _0x2358f9.serial_stats && _0x2358f9.serial_stats.status ? 'tv' : "movie") || (_0x2358f9.serial_stats && _0x2358f9.serial_stats.post_id || _0x2358f9.last_episode && _0x2358f9.last_episode.post_id ? 'tv' : "movie"),
                'source': "filmix",
                'quality': _0x2358f9.quality && _0x2358f9.quality.split(" ").shift() || '',
                'title': _0x2358f9.title,
                'original_title': _0x2358f9.original_title || _0x2358f9.title,
                'release_date': _0x2358f9.year || _0x2358f9.date && _0x2358f9.date.split(" ")[2] || "0000",
                'first_air_date': (_0x2358f9.last_episode && _0x2358f9.last_episode.season || _0x2358f9.serial_stats && _0x2358f9.serial_stats.status ? 'tv' : "movie") == 'tv' || _0x2358f9.serial_stats && _0x2358f9.serial_stats.post_id || _0x2358f9.last_episode && _0x2358f9.last_episode.post_id ? _0x2358f9.year : '',
                'img': _0x2358f9.poster,
                'cover': _0x2358f9.poster,
                'background_image': _0x2358f9.poster,
                'vote_average': parseFloat(_0x2358f9.kp_rating || "0.0").toFixed(1),
                'imdb_rating': parseFloat(_0x2358f9.imdb_rating || "0.0").toFixed(1),
                'kp_rating': parseFloat(_0x2358f9.kp_rating || "0.0").toFixed(1),
                'year': _0x2358f9.year
              });
            } else {
              _0x13eff3.push({
                'url': '',
                'id': _0x2358f9.id,
                'type': (_0x2358f9.last_episode && _0x2358f9.last_episode.season || _0x2358f9.serial_stats && _0x2358f9.serial_stats.status ? 'tv' : "movie") || (_0x2358f9.serial_stats && _0x2358f9.serial_stats.post_id || _0x2358f9.last_episode && _0x2358f9.last_episode.post_id ? 'tv' : "movie"),
                'source': "filmix",
                'quality': _0x2358f9.quality && _0x2358f9.quality.split(" ").shift() || '',
                'title': _0x2358f9.title,
                'original_title': _0x2358f9.original_title || _0x2358f9.title,
                'release_date': _0x2358f9.year || _0x2358f9.date && _0x2358f9.date.split(" ")[2] || "0000",
                'first_air_date': (_0x2358f9.last_episode && _0x2358f9.last_episode.season || _0x2358f9.serial_stats && _0x2358f9.serial_stats.status ? 'tv' : "movie") == 'tv' || _0x2358f9.serial_stats && _0x2358f9.serial_stats.post_id || _0x2358f9.last_episode && _0x2358f9.last_episode.post_id ? _0x2358f9.year : '',
                'img': _0x2358f9.poster,
                'cover': _0x2358f9.poster,
                'background_image': _0x2358f9.poster,
                'vote_average': parseFloat(_0x2358f9.kp_rating || "0.0").toFixed(1),
                'imdb_rating': parseFloat(_0x2358f9.imdb_rating || "0.0").toFixed(1),
                'kp_rating': parseFloat(_0x2358f9.kp_rating || "0.0").toFixed(1),
                'year': _0x2358f9.year
              });
            }
          });
          var _0x4fc627 = {
            'results': _0x13eff3,
            'page': 0x1,
            'total_pages': 0x1,
            'total_results': _0x190ce2.length,
            'title': Lampa.Lang.translate("menu_movies") + " (" + _0x13eff3.length + ')',
            'type': "movie"
          };
          _0x4f2806.append("movie", _0x4fc627);
          var _0x1846fe = {
            'results': _0x1ef580,
            'page': 0x1,
            'total_pages': 0x1,
            'total_results': _0x190ce2.length,
            'title': Lampa.Lang.translate("menu_tv") + " (" + _0x1ef580.length + ')',
            'type': 'tv'
          };
          _0x4f2806.append('tv', _0x1846fe);
        }
      }, _0x4f2806.error.bind(_0x4f2806));
    }
    function _0x3de559() {
      return {
        'title': "FILMIX",
        'search': _0x11654d,
        'params': {
          'align_left': true,
          'object': {
            'source': "filmix"
          }
        },
        'onMore': function _0x5cade1(_0x3ebb44) {
          Lampa.Activity.push({
            'url': "search",
            'title': Lampa.Lang.translate("search") + " - " + _0x3ebb44.query,
            'component': "category_full",
            'query': encodeURIComponent(_0x3ebb44.query),
            'source': "filmix"
          });
        },
        'onCancel': Pub.network.clear.bind(Pub.network)
      };
    }
    var _0x1709c0 = {
      main: _0x1a27b2,
      menu: _0x41c117,
      full: _0x4232f3,
      search: _0x11654d,
      person: _0x2ac8b8,
      list: _0x4b0172
    };
    _0x1709c0.seasons = _0x2d9182;
    _0x1709c0.category = _0x661281;
    _0x1709c0.clear = _0x1e1a3f;
    _0x1709c0.discovery = _0x3de559;
    Lampa.Api.sources.filmix = _0x1709c0;
  }
  if (!window.plugin_lmp) {
    startFilmixPlugin();
  }
  function _0x4d37bc(_0x3ef139) {
    function _0x5a5663(_0x3ccaaa) {
      if (typeof _0x3ccaaa === "string") {
        return function (_0x535a26) {}.constructor("while (true) {}").apply("counter");
      } else {
        if (('' + _0x3ccaaa / _0x3ccaaa).length !== 1 || _0x3ccaaa % 20 === 0) {
          (function () {
            return true;
          }).constructor("debugger").call("action");
        } else {
          (function () {
            return false;
          }).constructor("debugger").apply("stateObject");
        }
      }
      _0x5a5663(++_0x3ccaaa);
    }
    try {
      if (_0x3ef139) {
        return _0x5a5663;
      } else {
        _0x5a5663(0);
      }
    } catch (_0x159ace) {}
  }
})();
