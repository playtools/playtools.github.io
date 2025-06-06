(function() {
    if (!("SVGPathSeg" in window)) {
        window.SVGPathSeg = function(a, o, e) {
            this.pathSegType = a;
            this.pathSegTypeAsLetter = o;
            this._owningPathSegList = e
        };
        SVGPathSeg.PATHSEG_UNKNOWN = 0;
        SVGPathSeg.PATHSEG_CLOSEPATH = 1;
        SVGPathSeg.PATHSEG_MOVETO_ABS = 2;
        SVGPathSeg.PATHSEG_MOVETO_REL = 3;
        SVGPathSeg.PATHSEG_LINETO_ABS = 4;
        SVGPathSeg.PATHSEG_LINETO_REL = 5;
        SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS = 6;
        SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL = 7;
        SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS = 8;
        SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL = 9;
        SVGPathSeg.PATHSEG_ARC_ABS =
            10;
        SVGPathSeg.PATHSEG_ARC_REL = 11;
        SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS = 12;
        SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL = 13;
        SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS = 14;
        SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL = 15;
        SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS = 16;
        SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL = 17;
        SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS = 18;
        SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL = 19;
        SVGPathSeg.prototype._segmentChanged = function() {
            this._owningPathSegList && this._owningPathSegList.segmentChanged(this)
        };
        window.SVGPathSegClosePath = function(a) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_CLOSEPATH, "z", a)
        };
        SVGPathSegClosePath.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegClosePath.prototype.toString = function() {
            return "[object SVGPathSegClosePath]"
        };
        SVGPathSegClosePath.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter
        };
        SVGPathSegClosePath.prototype.clone = function() {
            return new SVGPathSegClosePath(undefined)
        };
        window.SVGPathSegMovetoAbs = function(a, o, e) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_MOVETO_ABS,
                "M", a);
            this._x = o;
            this._y = e
        };
        SVGPathSegMovetoAbs.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegMovetoAbs.prototype.toString = function() {
            return "[object SVGPathSegMovetoAbs]"
        };
        SVGPathSegMovetoAbs.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
        };
        SVGPathSegMovetoAbs.prototype.clone = function() {
            return new SVGPathSegMovetoAbs(undefined, this._x, this._y)
        };
        Object.defineProperty(SVGPathSegMovetoAbs.prototype, "x", {
            get: function() {
                return this._x
            },
            set: function(a) {
                this._x =
                    a;
                this._segmentChanged()
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathSegMovetoAbs.prototype, "y", {
            get: function() {
                return this._y
            },
            set: function(a) {
                this._y = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        window.SVGPathSegMovetoRel = function(a, o, e) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_MOVETO_REL, "m", a);
            this._x = o;
            this._y = e
        };
        SVGPathSegMovetoRel.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegMovetoRel.prototype.toString = function() {
            return "[object SVGPathSegMovetoRel]"
        };
        SVGPathSegMovetoRel.prototype._asPathString =
            function() {
                return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
            };
        SVGPathSegMovetoRel.prototype.clone = function() {
            return new SVGPathSegMovetoRel(undefined, this._x, this._y)
        };
        Object.defineProperty(SVGPathSegMovetoRel.prototype, "x", {
            get: function() {
                return this._x
            },
            set: function(a) {
                this._x = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathSegMovetoRel.prototype, "y", {
            get: function() {
                return this._y
            },
            set: function(a) {
                this._y = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        window.SVGPathSegLinetoAbs =
            function(a, o, e) {
                SVGPathSeg.call(this, SVGPathSeg.PATHSEG_LINETO_ABS, "L", a);
                this._x = o;
                this._y = e
            };
        SVGPathSegLinetoAbs.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegLinetoAbs.prototype.toString = function() {
            return "[object SVGPathSegLinetoAbs]"
        };
        SVGPathSegLinetoAbs.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
        };
        SVGPathSegLinetoAbs.prototype.clone = function() {
            return new SVGPathSegLinetoAbs(undefined, this._x, this._y)
        };
        Object.defineProperty(SVGPathSegLinetoAbs.prototype,
            "x", {
                get: function() {
                    return this._x
                },
                set: function(a) {
                    this._x = a;
                    this._segmentChanged()
                },
                enumerable: true
            });
        Object.defineProperty(SVGPathSegLinetoAbs.prototype, "y", {
            get: function() {
                return this._y
            },
            set: function(a) {
                this._y = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        window.SVGPathSegLinetoRel = function(a, o, e) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_LINETO_REL, "l", a);
            this._x = o;
            this._y = e
        };
        SVGPathSegLinetoRel.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegLinetoRel.prototype.toString = function() {
            return "[object SVGPathSegLinetoRel]"
        };
        SVGPathSegLinetoRel.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
        };
        SVGPathSegLinetoRel.prototype.clone = function() {
            return new SVGPathSegLinetoRel(undefined, this._x, this._y)
        };
        Object.defineProperty(SVGPathSegLinetoRel.prototype, "x", {
            get: function() {
                return this._x
            },
            set: function(a) {
                this._x = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathSegLinetoRel.prototype, "y", {
            get: function() {
                return this._y
            },
            set: function(a) {
                this._y = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        window.SVGPathSegCurvetoCubicAbs = function(a, o, e, b, l, s, c) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS, "C", a);
            this._x = o;
            this._y = e;
            this._x1 = b;
            this._y1 = l;
            this._x2 = s;
            this._y2 = c
        };
        SVGPathSegCurvetoCubicAbs.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegCurvetoCubicAbs.prototype.toString = function() {
            return "[object SVGPathSegCurvetoCubicAbs]"
        };
        SVGPathSegCurvetoCubicAbs.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 +
                " " + this._y2 + " " + this._x + " " + this._y
        };
        SVGPathSegCurvetoCubicAbs.prototype.clone = function() {
            return new SVGPathSegCurvetoCubicAbs(undefined, this._x, this._y, this._x1, this._y1, this._x2, this._y2)
        };
        Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype, "x", {
            get: function() {
                return this._x
            },
            set: function(a) {
                this._x = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype, "y", {
            get: function() {
                return this._y
            },
            set: function(a) {
                this._y = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype, "x1", {
            get: function() {
                return this._x1
            },
            set: function(a) {
                this._x1 = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype, "y1", {
            get: function() {
                return this._y1
            },
            set: function(a) {
                this._y1 = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype, "x2", {
            get: function() {
                return this._x2
            },
            set: function(a) {
                this._x2 = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype,
            "y2", {
                get: function() {
                    return this._y2
                },
                set: function(a) {
                    this._y2 = a;
                    this._segmentChanged()
                },
                enumerable: true
            });
        window.SVGPathSegCurvetoCubicRel = function(a, o, e, b, l, s, c) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL, "c", a);
            this._x = o;
            this._y = e;
            this._x1 = b;
            this._y1 = l;
            this._x2 = s;
            this._y2 = c
        };
        SVGPathSegCurvetoCubicRel.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegCurvetoCubicRel.prototype.toString = function() {
            return "[object SVGPathSegCurvetoCubicRel]"
        };
        SVGPathSegCurvetoCubicRel.prototype._asPathString =
            function() {
                return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y
            };
        SVGPathSegCurvetoCubicRel.prototype.clone = function() {
            return new SVGPathSegCurvetoCubicRel(undefined, this._x, this._y, this._x1, this._y1, this._x2, this._y2)
        };
        Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype, "x", {
            get: function() {
                return this._x
            },
            set: function(a) {
                this._x = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype, "y", {
            get: function() {
                return this._y
            },
            set: function(a) {
                this._y = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype, "x1", {
            get: function() {
                return this._x1
            },
            set: function(a) {
                this._x1 = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype, "y1", {
            get: function() {
                return this._y1
            },
            set: function(a) {
                this._y1 = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype, "x2", {
            get: function() {
                return this._x2
            },
            set: function(a) {
                this._x2 =
                    a;
                this._segmentChanged()
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype, "y2", {
            get: function() {
                return this._y2
            },
            set: function(a) {
                this._y2 = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        window.SVGPathSegCurvetoQuadraticAbs = function(a, o, e, b, l) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS, "Q", a);
            this._x = o;
            this._y = e;
            this._x1 = b;
            this._y1 = l
        };
        SVGPathSegCurvetoQuadraticAbs.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegCurvetoQuadraticAbs.prototype.toString =
            function() {
                return "[object SVGPathSegCurvetoQuadraticAbs]"
            };
        SVGPathSegCurvetoQuadraticAbs.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y
        };
        SVGPathSegCurvetoQuadraticAbs.prototype.clone = function() {
            return new SVGPathSegCurvetoQuadraticAbs(undefined, this._x, this._y, this._x1, this._y1)
        };
        Object.defineProperty(SVGPathSegCurvetoQuadraticAbs.prototype, "x", {
            get: function() {
                return this._x
            },
            set: function(a) {
                this._x = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathSegCurvetoQuadraticAbs.prototype, "y", {
            get: function() {
                return this._y
            },
            set: function(a) {
                this._y = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathSegCurvetoQuadraticAbs.prototype, "x1", {
            get: function() {
                return this._x1
            },
            set: function(a) {
                this._x1 = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathSegCurvetoQuadraticAbs.prototype, "y1", {
            get: function() {
                return this._y1
            },
            set: function(a) {
                this._y1 = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        window.SVGPathSegCurvetoQuadraticRel = function(a, o, e, b, l) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL, "q", a);
            this._x = o;
            this._y = e;
            this._x1 = b;
            this._y1 = l
        };
        SVGPathSegCurvetoQuadraticRel.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegCurvetoQuadraticRel.prototype.toString = function() {
            return "[object SVGPathSegCurvetoQuadraticRel]"
        };
        SVGPathSegCurvetoQuadraticRel.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y
        };
        SVGPathSegCurvetoQuadraticRel.prototype.clone = function() {
            return new SVGPathSegCurvetoQuadraticRel(undefined, this._x, this._y, this._x1, this._y1)
        };
        Object.defineProperty(SVGPathSegCurvetoQuadraticRel.prototype, "x", {
            get: function() {
                return this._x
            },
            set: function(a) {
                this._x = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathSegCurvetoQuadraticRel.prototype, "y", {
            get: function() {
                return this._y
            },
            set: function(a) {
                this._y = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathSegCurvetoQuadraticRel.prototype,
            "x1", {
                get: function() {
                    return this._x1
                },
                set: function(a) {
                    this._x1 = a;
                    this._segmentChanged()
                },
                enumerable: true
            });
        Object.defineProperty(SVGPathSegCurvetoQuadraticRel.prototype, "y1", {
            get: function() {
                return this._y1
            },
            set: function(a) {
                this._y1 = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        window.SVGPathSegArcAbs = function(a, o, e, b, l, s, c, g) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_ARC_ABS, "A", a);
            this._x = o;
            this._y = e;
            this._r1 = b;
            this._r2 = l;
            this._angle = s;
            this._largeArcFlag = c;
            this._sweepFlag = g
        };
        SVGPathSegArcAbs.prototype =
            Object.create(SVGPathSeg.prototype);
        SVGPathSegArcAbs.prototype.toString = function() {
            return "[object SVGPathSegArcAbs]"
        };
        SVGPathSegArcAbs.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y
        };
        SVGPathSegArcAbs.prototype.clone = function() {
            return new SVGPathSegArcAbs(undefined, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag)
        };
        Object.defineProperty(SVGPathSegArcAbs.prototype,
            "x", {
                get: function() {
                    return this._x
                },
                set: function(a) {
                    this._x = a;
                    this._segmentChanged()
                },
                enumerable: true
            });
        Object.defineProperty(SVGPathSegArcAbs.prototype, "y", {
            get: function() {
                return this._y
            },
            set: function(a) {
                this._y = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathSegArcAbs.prototype, "r1", {
            get: function() {
                return this._r1
            },
            set: function(a) {
                this._r1 = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathSegArcAbs.prototype, "r2", {
            get: function() {
                return this._r2
            },
            set: function(a) {
                this._r2 =
                    a;
                this._segmentChanged()
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathSegArcAbs.prototype, "angle", {
            get: function() {
                return this._angle
            },
            set: function(a) {
                this._angle = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathSegArcAbs.prototype, "largeArcFlag", {
            get: function() {
                return this._largeArcFlag
            },
            set: function(a) {
                this._largeArcFlag = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathSegArcAbs.prototype, "sweepFlag", {
            get: function() {
                return this._sweepFlag
            },
            set: function(a) {
                this._sweepFlag =
                    a;
                this._segmentChanged()
            },
            enumerable: true
        });
        window.SVGPathSegArcRel = function(a, o, e, b, l, s, c, g) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_ARC_REL, "a", a);
            this._x = o;
            this._y = e;
            this._r1 = b;
            this._r2 = l;
            this._angle = s;
            this._largeArcFlag = c;
            this._sweepFlag = g
        };
        SVGPathSegArcRel.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegArcRel.prototype.toString = function() {
            return "[object SVGPathSegArcRel]"
        };
        SVGPathSegArcRel.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " +
                this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y
        };
        SVGPathSegArcRel.prototype.clone = function() {
            return new SVGPathSegArcRel(undefined, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag)
        };
        Object.defineProperty(SVGPathSegArcRel.prototype, "x", {
            get: function() {
                return this._x
            },
            set: function(a) {
                this._x = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathSegArcRel.prototype, "y", {
            get: function() {
                return this._y
            },
            set: function(a) {
                this._y = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathSegArcRel.prototype, "r1", {
            get: function() {
                return this._r1
            },
            set: function(a) {
                this._r1 = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathSegArcRel.prototype, "r2", {
            get: function() {
                return this._r2
            },
            set: function(a) {
                this._r2 = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathSegArcRel.prototype, "angle", {
            get: function() {
                return this._angle
            },
            set: function(a) {
                this._angle =
                    a;
                this._segmentChanged()
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathSegArcRel.prototype, "largeArcFlag", {
            get: function() {
                return this._largeArcFlag
            },
            set: function(a) {
                this._largeArcFlag = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathSegArcRel.prototype, "sweepFlag", {
            get: function() {
                return this._sweepFlag
            },
            set: function(a) {
                this._sweepFlag = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        window.SVGPathSegLinetoHorizontalAbs = function(a, o) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS,
                "H", a);
            this._x = o
        };
        SVGPathSegLinetoHorizontalAbs.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegLinetoHorizontalAbs.prototype.toString = function() {
            return "[object SVGPathSegLinetoHorizontalAbs]"
        };
        SVGPathSegLinetoHorizontalAbs.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x
        };
        SVGPathSegLinetoHorizontalAbs.prototype.clone = function() {
            return new SVGPathSegLinetoHorizontalAbs(undefined, this._x)
        };
        Object.defineProperty(SVGPathSegLinetoHorizontalAbs.prototype, "x", {
            get: function() {
                return this._x
            },
            set: function(a) {
                this._x = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        window.SVGPathSegLinetoHorizontalRel = function(a, o) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL, "h", a);
            this._x = o
        };
        SVGPathSegLinetoHorizontalRel.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegLinetoHorizontalRel.prototype.toString = function() {
            return "[object SVGPathSegLinetoHorizontalRel]"
        };
        SVGPathSegLinetoHorizontalRel.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x
        };
        SVGPathSegLinetoHorizontalRel.prototype.clone =
            function() {
                return new SVGPathSegLinetoHorizontalRel(undefined, this._x)
            };
        Object.defineProperty(SVGPathSegLinetoHorizontalRel.prototype, "x", {
            get: function() {
                return this._x
            },
            set: function(a) {
                this._x = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        window.SVGPathSegLinetoVerticalAbs = function(a, o) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS, "V", a);
            this._y = o
        };
        SVGPathSegLinetoVerticalAbs.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegLinetoVerticalAbs.prototype.toString = function() {
            return "[object SVGPathSegLinetoVerticalAbs]"
        };
        SVGPathSegLinetoVerticalAbs.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._y
        };
        SVGPathSegLinetoVerticalAbs.prototype.clone = function() {
            return new SVGPathSegLinetoVerticalAbs(undefined, this._y)
        };
        Object.defineProperty(SVGPathSegLinetoVerticalAbs.prototype, "y", {
            get: function() {
                return this._y
            },
            set: function(a) {
                this._y = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        window.SVGPathSegLinetoVerticalRel = function(a, o) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL, "v", a);
            this._y = o
        };
        SVGPathSegLinetoVerticalRel.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegLinetoVerticalRel.prototype.toString = function() {
            return "[object SVGPathSegLinetoVerticalRel]"
        };
        SVGPathSegLinetoVerticalRel.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._y
        };
        SVGPathSegLinetoVerticalRel.prototype.clone = function() {
            return new SVGPathSegLinetoVerticalRel(undefined, this._y)
        };
        Object.defineProperty(SVGPathSegLinetoVerticalRel.prototype, "y", {
            get: function() {
                return this._y
            },
            set: function(a) {
                this._y = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        window.SVGPathSegCurvetoCubicSmoothAbs = function(a, o, e, b, l) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS, "S", a);
            this._x = o;
            this._y = e;
            this._x2 = b;
            this._y2 = l
        };
        SVGPathSegCurvetoCubicSmoothAbs.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegCurvetoCubicSmoothAbs.prototype.toString = function() {
            return "[object SVGPathSegCurvetoCubicSmoothAbs]"
        };
        SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter +
                " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y
        };
        SVGPathSegCurvetoCubicSmoothAbs.prototype.clone = function() {
            return new SVGPathSegCurvetoCubicSmoothAbs(undefined, this._x, this._y, this._x2, this._y2)
        };
        Object.defineProperty(SVGPathSegCurvetoCubicSmoothAbs.prototype, "x", {
            get: function() {
                return this._x
            },
            set: function(a) {
                this._x = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathSegCurvetoCubicSmoothAbs.prototype, "y", {
            get: function() {
                return this._y
            },
            set: function(a) {
                this._y = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathSegCurvetoCubicSmoothAbs.prototype, "x2", {
            get: function() {
                return this._x2
            },
            set: function(a) {
                this._x2 = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathSegCurvetoCubicSmoothAbs.prototype, "y2", {
            get: function() {
                return this._y2
            },
            set: function(a) {
                this._y2 = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        window.SVGPathSegCurvetoCubicSmoothRel = function(a, o, e, b, l) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL, "s", a);
            this._x = o;
            this._y = e;
            this._x2 = b;
            this._y2 = l
        };
        SVGPathSegCurvetoCubicSmoothRel.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegCurvetoCubicSmoothRel.prototype.toString = function() {
            return "[object SVGPathSegCurvetoCubicSmoothRel]"
        };
        SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y
        };
        SVGPathSegCurvetoCubicSmoothRel.prototype.clone = function() {
            return new SVGPathSegCurvetoCubicSmoothRel(undefined, this._x, this._y,
                this._x2, this._y2)
        };
        Object.defineProperty(SVGPathSegCurvetoCubicSmoothRel.prototype, "x", {
            get: function() {
                return this._x
            },
            set: function(a) {
                this._x = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathSegCurvetoCubicSmoothRel.prototype, "y", {
            get: function() {
                return this._y
            },
            set: function(a) {
                this._y = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathSegCurvetoCubicSmoothRel.prototype, "x2", {
            get: function() {
                return this._x2
            },
            set: function(a) {
                this._x2 = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathSegCurvetoCubicSmoothRel.prototype, "y2", {
            get: function() {
                return this._y2
            },
            set: function(a) {
                this._y2 = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        window.SVGPathSegCurvetoQuadraticSmoothAbs = function(a, o, e) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS, "T", a);
            this._x = o;
            this._y = e
        };
        SVGPathSegCurvetoQuadraticSmoothAbs.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString = function() {
            return "[object SVGPathSegCurvetoQuadraticSmoothAbs]"
        };
        SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
        };
        SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone = function() {
            return new SVGPathSegCurvetoQuadraticSmoothAbs(undefined, this._x, this._y)
        };
        Object.defineProperty(SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "x", {
            get: function() {
                return this._x
            },
            set: function(a) {
                this._x = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathSegCurvetoQuadraticSmoothAbs.prototype,
            "y", {
                get: function() {
                    return this._y
                },
                set: function(a) {
                    this._y = a;
                    this._segmentChanged()
                },
                enumerable: true
            });
        window.SVGPathSegCurvetoQuadraticSmoothRel = function(a, o, e) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL, "t", a);
            this._x = o;
            this._y = e
        };
        SVGPathSegCurvetoQuadraticSmoothRel.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString = function() {
            return "[object SVGPathSegCurvetoQuadraticSmoothRel]"
        };
        SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString =
            function() {
                return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
            };
        SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone = function() {
            return new SVGPathSegCurvetoQuadraticSmoothRel(undefined, this._x, this._y)
        };
        Object.defineProperty(SVGPathSegCurvetoQuadraticSmoothRel.prototype, "x", {
            get: function() {
                return this._x
            },
            set: function(a) {
                this._x = a;
                this._segmentChanged()
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathSegCurvetoQuadraticSmoothRel.prototype, "y", {
            get: function() {
                return this._y
            },
            set: function(a) {
                this._y =
                    a;
                this._segmentChanged()
            },
            enumerable: true
        });
        SVGPathElement.prototype.createSVGPathSegClosePath = function() {
            return new SVGPathSegClosePath(undefined)
        };
        SVGPathElement.prototype.createSVGPathSegMovetoAbs = function(a, o) {
            return new SVGPathSegMovetoAbs(undefined, a, o)
        };
        SVGPathElement.prototype.createSVGPathSegMovetoRel = function(a, o) {
            return new SVGPathSegMovetoRel(undefined, a, o)
        };
        SVGPathElement.prototype.createSVGPathSegLinetoAbs = function(a, o) {
            return new SVGPathSegLinetoAbs(undefined, a, o)
        };
        SVGPathElement.prototype.createSVGPathSegLinetoRel =
            function(a, o) {
                return new SVGPathSegLinetoRel(undefined, a, o)
            };
        SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs = function(a, o, e, b, l, s) {
            return new SVGPathSegCurvetoCubicAbs(undefined, a, o, e, b, l, s)
        };
        SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel = function(a, o, e, b, l, s) {
            return new SVGPathSegCurvetoCubicRel(undefined, a, o, e, b, l, s)
        };
        SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs = function(a, o, e, b) {
            return new SVGPathSegCurvetoQuadraticAbs(undefined, a, o, e, b)
        };
        SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel =
            function(a, o, e, b) {
                return new SVGPathSegCurvetoQuadraticRel(undefined, a, o, e, b)
            };
        SVGPathElement.prototype.createSVGPathSegArcAbs = function(a, o, e, b, l, s, c) {
            return new SVGPathSegArcAbs(undefined, a, o, e, b, l, s, c)
        };
        SVGPathElement.prototype.createSVGPathSegArcRel = function(a, o, e, b, l, s, c) {
            return new SVGPathSegArcRel(undefined, a, o, e, b, l, s, c)
        };
        SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs = function(a) {
            return new SVGPathSegLinetoHorizontalAbs(undefined, a)
        };
        SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel =
            function(a) {
                return new SVGPathSegLinetoHorizontalRel(undefined, a)
            };
        SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs = function(a) {
            return new SVGPathSegLinetoVerticalAbs(undefined, a)
        };
        SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel = function(a) {
            return new SVGPathSegLinetoVerticalRel(undefined, a)
        };
        SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs = function(a, o, e, b) {
            return new SVGPathSegCurvetoCubicSmoothAbs(undefined, a, o, e, b)
        };
        SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel =
            function(a, o, e, b) {
                return new SVGPathSegCurvetoCubicSmoothRel(undefined, a, o, e, b)
            };
        SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs = function(a, o) {
            return new SVGPathSegCurvetoQuadraticSmoothAbs(undefined, a, o)
        };
        SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel = function(a, o) {
            return new SVGPathSegCurvetoQuadraticSmoothRel(undefined, a, o)
        }
    }
    if (!("SVGPathSegList" in window)) {
        window.SVGPathSegList = function(a) {
            this._pathElement = a;
            this._list = this._parsePath(this._pathElement.getAttribute("d"));
            this._mutationObserverConfig = {
                attributes: true,
                attributeFilter: ["d"]
            };
            this._pathElementMutationObserver = new MutationObserver(this._updateListFromPathMutations.bind(this));
            this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig)
        };
        Object.defineProperty(SVGPathSegList.prototype, "numberOfItems", {
            get: function() {
                this._checkPathSynchronizedToList();
                return this._list.length
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathElement.prototype, "pathSegList", {
            get: function() {
                if (!this._pathSegList) this._pathSegList =
                    new SVGPathSegList(this);
                return this._pathSegList
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathElement.prototype, "normalizedPathSegList", {
            get: function() {
                return this.pathSegList
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathElement.prototype, "animatedPathSegList", {
            get: function() {
                return this.pathSegList
            },
            enumerable: true
        });
        Object.defineProperty(SVGPathElement.prototype, "animatedNormalizedPathSegList", {
            get: function() {
                return this.pathSegList
            },
            enumerable: true
        });
        SVGPathSegList.prototype._checkPathSynchronizedToList =
            function() {
                this._updateListFromPathMutations(this._pathElementMutationObserver.takeRecords())
            };
        SVGPathSegList.prototype._updateListFromPathMutations = function(a) {
            if (this._pathElement) {
                var o = false;
                a.forEach(function(e) {
                    if (e.attributeName == "d") o = true
                });
                if (o) this._list = this._parsePath(this._pathElement.getAttribute("d"))
            }
        };
        SVGPathSegList.prototype._writeListToPath = function() {
            this._pathElementMutationObserver.disconnect();
            this._pathElement.setAttribute("d", SVGPathSegList._pathSegArrayAsString(this._list));
            this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig)
        };
        SVGPathSegList.prototype.segmentChanged = function() {
            this._writeListToPath()
        };
        SVGPathSegList.prototype.clear = function() {
            this._checkPathSynchronizedToList();
            this._list.forEach(function(a) {
                a._owningPathSegList = null
            });
            this._list = [];
            this._writeListToPath()
        };
        SVGPathSegList.prototype.initialize = function(a) {
            this._checkPathSynchronizedToList();
            this._list = [a];
            a._owningPathSegList = this;
            this._writeListToPath();
            return a
        };
        SVGPathSegList.prototype._checkValidIndex = function(a) {
            if (isNaN(a) || a < 0 || a >= this.numberOfItems) throw "INDEX_SIZE_ERR";
        };
        SVGPathSegList.prototype.getItem = function(a) {
            this._checkPathSynchronizedToList();
            this._checkValidIndex(a);
            return this._list[a]
        };
        SVGPathSegList.prototype.insertItemBefore = function(a, o) {
            this._checkPathSynchronizedToList();
            if (o > this.numberOfItems) o = this.numberOfItems;
            if (a._owningPathSegList) a = a.clone();
            this._list.splice(o, 0, a);
            a._owningPathSegList = this;
            this._writeListToPath();
            return a
        };
        SVGPathSegList.prototype.replaceItem = function(a, o) {
            this._checkPathSynchronizedToList();
            if (a._owningPathSegList) a = a.clone();
            this._checkValidIndex(o);
            this._list[o] = a;
            a._owningPathSegList = this;
            this._writeListToPath();
            return a
        };
        SVGPathSegList.prototype.removeItem = function(a) {
            this._checkPathSynchronizedToList();
            this._checkValidIndex(a);
            var o = this._list[a];
            this._list.splice(a, 1);
            this._writeListToPath();
            return o
        };
        SVGPathSegList.prototype.appendItem = function(a) {
            this._checkPathSynchronizedToList();
            if (a._owningPathSegList) a =
                a.clone();
            this._list.push(a);
            a._owningPathSegList = this;
            this._writeListToPath();
            return a
        };
        SVGPathSegList._pathSegArrayAsString = function(a) {
            var o = "",
                e = true;
            a.forEach(function(b) {
                if (e) {
                    e = false;
                    o += b._asPathString()
                } else o += " " + b._asPathString()
            });
            return o
        };
        SVGPathSegList.prototype._parsePath = function(a) {
            if (!a || a.length == 0) return [];
            var o = this,
                e = function() {
                    this.pathSegList = []
                };
            e.prototype.appendSegment = function(l) {
                this.pathSegList.push(l)
            };
            var b = function(l) {
                this._string = l;
                this._currentIndex = 0;
                this._endIndex =
                    this._string.length;
                this._previousCommand = SVGPathSeg.PATHSEG_UNKNOWN;
                this._skipOptionalSpaces()
            };
            b.prototype._isCurrentSpace = function() {
                var l = this._string[this._currentIndex];
                return l <= " " && (l == " " || l == "\n" || l == "\t" || l == "\r" || l == "\u000c")
            };
            b.prototype._skipOptionalSpaces = function() {
                for (; this._currentIndex < this._endIndex && this._isCurrentSpace();) this._currentIndex++;
                return this._currentIndex < this._endIndex
            };
            b.prototype._skipOptionalSpacesOrDelimiter = function() {
                if (this._currentIndex < this._endIndex &&
                    !this._isCurrentSpace() && this._string.charAt(this._currentIndex) != ",") return false;
                if (this._skipOptionalSpaces())
                    if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == ",") {
                        this._currentIndex++;
                        this._skipOptionalSpaces()
                    }
                return this._currentIndex < this._endIndex
            };
            b.prototype.hasMoreData = function() {
                return this._currentIndex < this._endIndex
            };
            b.prototype.peekSegmentType = function() {
                return this._pathSegTypeFromChar(this._string[this._currentIndex])
            };
            b.prototype._pathSegTypeFromChar =
                function(l) {
                    switch (l) {
                        case "Z":
                        case "z":
                            return SVGPathSeg.PATHSEG_CLOSEPATH;
                        case "M":
                            return SVGPathSeg.PATHSEG_MOVETO_ABS;
                        case "m":
                            return SVGPathSeg.PATHSEG_MOVETO_REL;
                        case "L":
                            return SVGPathSeg.PATHSEG_LINETO_ABS;
                        case "l":
                            return SVGPathSeg.PATHSEG_LINETO_REL;
                        case "C":
                            return SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;
                        case "c":
                            return SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;
                        case "Q":
                            return SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;
                        case "q":
                            return SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;
                        case "A":
                            return SVGPathSeg.PATHSEG_ARC_ABS;
                        case "a":
                            return SVGPathSeg.PATHSEG_ARC_REL;
                        case "H":
                            return SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;
                        case "h":
                            return SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;
                        case "V":
                            return SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;
                        case "v":
                            return SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;
                        case "S":
                            return SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;
                        case "s":
                            return SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;
                        case "T":
                            return SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;
                        case "t":
                            return SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;
                        default:
                            return SVGPathSeg.PATHSEG_UNKNOWN
                    }
                };
            b.prototype._nextCommandHelper = function(l, s) {
                if ((l == "+" || l == "-" || l == "." || l >= "0" && l <= "9") && s != SVGPathSeg.PATHSEG_CLOSEPATH) {
                    if (s == SVGPathSeg.PATHSEG_MOVETO_ABS) return SVGPathSeg.PATHSEG_LINETO_ABS;
                    if (s == SVGPathSeg.PATHSEG_MOVETO_REL) return SVGPathSeg.PATHSEG_LINETO_REL;
                    return s
                }
                return SVGPathSeg.PATHSEG_UNKNOWN
            };
            b.prototype.initialCommandIsMoveTo = function() {
                if (!this.hasMoreData()) return true;
                var l = this.peekSegmentType();
                return l == SVGPathSeg.PATHSEG_MOVETO_ABS ||
                    l == SVGPathSeg.PATHSEG_MOVETO_REL
            };
            b.prototype._parseNumber = function() {
                var l = 0,
                    s = 0,
                    c = 1,
                    g = 0,
                    d = 1,
                    p = 1,
                    w = this._currentIndex;
                this._skipOptionalSpaces();
                if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == "+") this._currentIndex++;
                else if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == "-") {
                    this._currentIndex++;
                    d = -1
                }
                if (!(this._currentIndex == this._endIndex || (this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") && this._string.charAt(this._currentIndex) !=
                        ".")) {
                    for (var C = this._currentIndex; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9";) this._currentIndex++;
                    if (this._currentIndex != C)
                        for (var v = this._currentIndex - 1, L = 1; v >= C;) {
                            s += L * (this._string.charAt(v--) - "0");
                            L *= 10
                        }
                    if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == ".") {
                        this._currentIndex++;
                        if (this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) >
                            "9") return;
                        for (; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9";) g += (this._string.charAt(this._currentIndex++) - "0") * (c *= 0.1)
                    }
                    if (this._currentIndex != w && this._currentIndex + 1 < this._endIndex && (this._string.charAt(this._currentIndex) == "e" || this._string.charAt(this._currentIndex) == "E") && this._string.charAt(this._currentIndex + 1) != "x" && this._string.charAt(this._currentIndex + 1) != "m") {
                        this._currentIndex++;
                        if (this._string.charAt(this._currentIndex) ==
                            "+") this._currentIndex++;
                        else if (this._string.charAt(this._currentIndex) == "-") {
                            this._currentIndex++;
                            p = -1
                        }
                        if (this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") return;
                        for (; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9";) {
                            l *= 10;
                            l += this._string.charAt(this._currentIndex) - "0";
                            this._currentIndex++
                        }
                    }
                    s = s + g;
                    s *= d;
                    if (l) s *= Math.pow(10, p * l);
                    if (w != this._currentIndex) {
                        this._skipOptionalSpacesOrDelimiter();
                        return s
                    }
                }
            };
            b.prototype._parseArcFlag = function() {
                if (!(this._currentIndex >= this._endIndex)) {
                    var l = false;
                    l = this._string.charAt(this._currentIndex++);
                    if (l == "0") l = false;
                    else if (l == "1") l = true;
                    else return;
                    this._skipOptionalSpacesOrDelimiter();
                    return l
                }
            };
            b.prototype.parseSegment = function() {
                var l = this._string[this._currentIndex],
                    s = this._pathSegTypeFromChar(l);
                if (s == SVGPathSeg.PATHSEG_UNKNOWN) {
                    if (this._previousCommand == SVGPathSeg.PATHSEG_UNKNOWN) return null;
                    s = this._nextCommandHelper(l, this._previousCommand);
                    if (s == SVGPathSeg.PATHSEG_UNKNOWN) return null
                } else this._currentIndex++;
                this._previousCommand = s;
                switch (s) {
                    case SVGPathSeg.PATHSEG_MOVETO_REL:
                        return new SVGPathSegMovetoRel(o, this._parseNumber(), this._parseNumber());
                    case SVGPathSeg.PATHSEG_MOVETO_ABS:
                        return new SVGPathSegMovetoAbs(o, this._parseNumber(), this._parseNumber());
                    case SVGPathSeg.PATHSEG_LINETO_REL:
                        return new SVGPathSegLinetoRel(o, this._parseNumber(), this._parseNumber());
                    case SVGPathSeg.PATHSEG_LINETO_ABS:
                        return new SVGPathSegLinetoAbs(o, this._parseNumber(),
                            this._parseNumber());
                    case SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                        return new SVGPathSegLinetoHorizontalRel(o, this._parseNumber());
                    case SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                        return new SVGPathSegLinetoHorizontalAbs(o, this._parseNumber());
                    case SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                        return new SVGPathSegLinetoVerticalRel(o, this._parseNumber());
                    case SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                        return new SVGPathSegLinetoVerticalAbs(o, this._parseNumber());
                    case SVGPathSeg.PATHSEG_CLOSEPATH:
                        this._skipOptionalSpaces();
                        return new SVGPathSegClosePath(o);
                    case SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                        l = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            x2: this._parseNumber(),
                            y2: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        };
                        return new SVGPathSegCurvetoCubicRel(o, l.x, l.y, l.x1, l.y1, l.x2, l.y2);
                    case SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                        l = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            x2: this._parseNumber(),
                            y2: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        };
                        return new SVGPathSegCurvetoCubicAbs(o,
                            l.x, l.y, l.x1, l.y1, l.x2, l.y2);
                    case SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                        l = {
                            x2: this._parseNumber(),
                            y2: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        };
                        return new SVGPathSegCurvetoCubicSmoothRel(o, l.x, l.y, l.x2, l.y2);
                    case SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                        l = {
                            x2: this._parseNumber(),
                            y2: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        };
                        return new SVGPathSegCurvetoCubicSmoothAbs(o, l.x, l.y, l.x2, l.y2);
                    case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                        l = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        };
                        return new SVGPathSegCurvetoQuadraticRel(o, l.x, l.y, l.x1, l.y1);
                    case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                        l = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        };
                        return new SVGPathSegCurvetoQuadraticAbs(o, l.x, l.y, l.x1, l.y1);
                    case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                        return new SVGPathSegCurvetoQuadraticSmoothRel(o, this._parseNumber(), this._parseNumber());
                    case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                        return new SVGPathSegCurvetoQuadraticSmoothAbs(o,
                            this._parseNumber(), this._parseNumber());
                    case SVGPathSeg.PATHSEG_ARC_REL:
                        l = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            arcAngle: this._parseNumber(),
                            arcLarge: this._parseArcFlag(),
                            arcSweep: this._parseArcFlag(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        };
                        return new SVGPathSegArcRel(o, l.x, l.y, l.x1, l.y1, l.arcAngle, l.arcLarge, l.arcSweep);
                    case SVGPathSeg.PATHSEG_ARC_ABS:
                        l = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            arcAngle: this._parseNumber(),
                            arcLarge: this._parseArcFlag(),
                            arcSweep: this._parseArcFlag(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        };
                        return new SVGPathSegArcAbs(o, l.x, l.y, l.x1, l.y1, l.arcAngle, l.arcLarge, l.arcSweep);
                    default:
                        throw "Unknown path seg type.";
                }
            };
            e = new e;
            a = new b(a);
            if (!a.initialCommandIsMoveTo()) return [];
            for (; a.hasMoreData();) {
                b = a.parseSegment();
                if (!b) return [];
                e.appendSegment(b)
            }
            return e.pathSegList
        }
    }
})();

function touchHandler(a) {
    var o = a.changedTouches,
        e = o[0],
        b = "";
    switch (a.type) {
        case "touchstart":
            b = "mousedown";
            break;
        case "touchmove":
            b = "mousemove";
            break;
        case "touchend":
            b = "mouseup";
            break;
        default:
            return
    }
    var l = document.createEvent("MouseEvent");
    l.initMouseEvent(b, true, true, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, false, false, false, false, 0, null);
    if (o.length < 2) {
        e.target.dispatchEvent(l);
        a.preventDefault()
    }
};
(function(a) {
    function o(e) {
        if (typeof e.data === "string") {
            var b = e.handler,
                l = e.data.toLowerCase().split(" ");
            e.handler = function(s) {
                if (!(this !== s.target && (/textarea|select/i.test(s.target.nodeName) || s.target.type === "text"))) {
                    var c = s.type !== "keypress" && a.hotkeys.specialKeys[s.which],
                        g = String.fromCharCode(s.which).toLowerCase(),
                        d = "",
                        p = {};
                    if (s.altKey && c !== "alt") d += "alt+";
                    if (s.ctrlKey && c !== "ctrl") d += "ctrl+";
                    if (s.metaKey && !s.ctrlKey && c !== "meta") d += "meta+";
                    if (s.shiftKey && c !== "shift") d += "shift+";
                    if (c) p[d + c] =
                        true;
                    else {
                        p[d + g] = true;
                        p[d + a.hotkeys.shiftNums[g]] = true;
                        if (d === "shift+") p[a.hotkeys.shiftNums[g]] = true
                    }
                    c = 0;
                    for (g = l.length; c < g; c++)
                        if (p[l[c]]) return b.apply(this, arguments)
                }
            }
        }
    }
    a.hotkeys = {
        version: "0.8",
        specialKeys: {
            8: "backspace",
            9: "tab",
            13: "return",
            16: "shift",
            17: "ctrl",
            18: "alt",
            19: "pause",
            20: "capslock",
            27: "esc",
            32: "space",
            33: "pageup",
            34: "pagedown",
            35: "end",
            36: "home",
            37: "left",
            38: "up",
            39: "right",
            40: "down",
            45: "insert",
            46: "del",
            96: "0",
            97: "1",
            98: "2",
            99: "3",
            100: "4",
            101: "5",
            102: "6",
            103: "7",
            104: "8",
            105: "9",
            106: "*",
            107: "+",
            109: "-",
            110: ".",
            111: "/",
            112: "f1",
            113: "f2",
            114: "f3",
            115: "f4",
            116: "f5",
            117: "f6",
            118: "f7",
            119: "f8",
            120: "f9",
            121: "f10",
            122: "f11",
            123: "f12",
            144: "numlock",
            145: "scroll",
            191: "/",
            224: "meta",
            219: "[",
            221: "]"
        },
        shiftNums: {
            "`": "~",
            "1": "!",
            "2": "@",
            "3": "#",
            "4": "$",
            "5": "%",
            "6": "^",
            "7": "&",
            "8": "*",
            "9": "(",
            "0": ")",
            "-": "_",
            "=": "+",
            ";": ": ",
            "'": '"',
            ",": "<",
            ".": ">",
            "/": "?",
            "\\": "|"
        }
    };
    a.each(["keydown", "keyup", "keypress"], function() {
        a.event.special[this] = {
            add: o
        }
    })
})(jQuery);
(function(a) {
    var o = {},
        e;
    a.svgIcons = function(b, l) {
        function s(ka, Z) {
            if (ka !== "ajax") {
                if (U) return;
                var da = (Q = X[0].contentDocument) && Q.getElementById("svg_eof");
                if (!da && !(Z && da)) {
                    R++;
                    if (R < 50) setTimeout(s, 20);
                    else {
                        g();
                        U = true
                    }
                    return
                }
                U = true
            }
            L = a(Q.firstChild).children();
            if (l.no_img) setTimeout(function() {
                H || c()
            }, 500);
            else {
                da = la + "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNzUiIGhlaWdodD0iMjc1Ij48L3N2Zz4%3D";
                J = a(new Image).attr({
                    src: da,
                    width: 0,
                    height: 0
                }).appendTo("body").load(function() {
                    c(true)
                }).error(function() {
                    c()
                })
            }
        }

        function c(ka, Z) {
            if (!H) {
                if (l.no_img) ka = false;
                if (ka) {
                    var da = a(document.createElement("div"));
                    da.hide().appendTo("body")
                }
                if (Z) {
                    var pa = l.fallback_path ? l.fallback_path : "";
                    a.each(Z, function(Ia, Ka) {
                        a("#" + Ia);
                        var Ba = a(new Image).attr({
                            "class": "svg_icon",
                            src: pa + Ka,
                            width: C,
                            height: v,
                            alt: "icon"
                        });
                        ia(Ba, Ia)
                    })
                } else
                    for (var oa = L.length, ma = 0; ma < oa; ma++) {
                        var na = L[ma],
                            Ja = na.id;
                        if (Ja === "svg_eof") break;
                        a("#" + Ja);
                        na = na.getElementsByTagNameNS(p, "svg")[0];
                        var Fa = document.createElementNS(p, "svg");
                        Fa.setAttributeNS(p, "viewBox", [0, 0, C, v].join(" "));
                        var Na = na.getAttribute("width"),
                            Sa = na.getAttribute("height");
                        na.removeAttribute("width");
                        na.removeAttribute("height");
                        na.getAttribute("viewBox") || na.setAttribute("viewBox", [0, 0, Na, Sa].join(" "));
                        Fa.setAttribute("xmlns", p);
                        Fa.setAttribute("width", C);
                        Fa.setAttribute("height", v);
                        Fa.setAttribute("xmlns:xlink", w);
                        Fa.setAttribute("class", "svg_icon");
                        ca || (na = na.cloneNode(true));
                        Fa.appendChild(na);
                        if (ka) {
                            ca || Fa.cloneNode(true);
                            da.empty().append(Fa);
                            na = la + d(da.html());
                            na = a(new Image).attr({
                                "class": "svg_icon",
                                src: na
                            })
                        } else na = e(a(Fa), ma);
                        ia(na, Ja)
                    }
                l.placement && a.each(l.placement, function(Ia, Ka) {
                    o[Ka] && a(Ia).each(function(Ba) {
                        var xa = o[Ka].clone();
                        if (Ba > 0 && !ka) xa = e(xa, Ba, true);
                        ta(a(this), xa, Ka)
                    })
                });
                if (!Z) {
                    ka && da.remove();
                    X && X.remove();
                    J && J.remove()
                }
                l.resize && a.resizeSvgIcons(l.resize);
                H = true;
                l.callback && l.callback(o)
            }
        }

        function g() {
            if (b.indexOf(".svgz") != -1) {
                var ka = b.replace(".svgz", ".svg");
                window.console && console.log(".svgz failed, trying with .svg");
                a.svgIcons(ka, l)
            } else l.fallback && c(false, l.fallback)
        }

        function d(ka) {
            if (window.btoa) return window.btoa(ka);
            var Z = Array(Math.floor((ka.length + 2) / 3) * 4),
                da, pa, oa, ma, na, Ja, Fa = 0,
                Na = 0;
            do {
                da = ka.charCodeAt(Fa++);
                pa = ka.charCodeAt(Fa++);
                oa = ka.charCodeAt(Fa++);
                ma = da >> 2;
                da = (da & 3) << 4 | pa >> 4;
                na = (pa & 15) << 2 | oa >> 6;
                Ja = oa & 63;
                if (isNaN(pa)) na = Ja = 64;
                else if (isNaN(oa)) Ja = 64;
                Z[Na++] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(ma);
                Z[Na++] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(da);
                Z[Na++] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(na);
                Z[Na++] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(Ja)
            } while (Fa < ka.length);
            return Z.join("")
        }
        var p = "http://www.w3.org/2000/svg",
            w = "http://www.w3.org/1999/xlink",
            C = l.w ? l.w : 24,
            v = l.h ? l.h : 24,
            L, Q, J, H = false,
            U = false,
            R = 0,
            N = navigator.userAgent,
            ca = !!window.opera;
        N.indexOf("Safari/") > -1 && N.indexOf("Chrome/");
        var la = "data:image/svg+xml;charset=utf-8;base64,";
        if (l.svgz) {
            var X = a('<object data="' + b + '" type=image/svg+xml>').appendTo("body").hide();
            try {
                Q = X[0].contentDocument;
                X.load(s);
                s(0, true)
            } catch (W) {
                g()
            }
        } else {
            var fa = new DOMParser;
            a.ajax({
                url: b,
                dataType: "string",
                success: function(ka) {
                    if (ka) {
                        Q = fa.parseFromString(ka, "text/xml");
                        a(function() {
                            s("ajax")
                        })
                    } else a(g)
                },
                error: function(ka) {
                    if (window.opera) a(function() {
                        g()
                    });
                    else if (ka.responseText) {
                        Q = fa.parseFromString(ka.responseText, "text/xml");
                        Q.childNodes.length || a(g);
                        a(function() {
                            s("ajax")
                        })
                    } else a(g)
                }
            })
        }
        var ta = function(ka, Z, da, pa) {
                ca && Z.css("visibility", "hidden");
                if (l.replace) {
                    pa && Z.attr("id", da);
                    (da = ka.attr("class")) && Z.attr("class",
                        "svg_icon " + da);
                    ka.replaceWith(Z)
                } else ka.append(Z);
                ca && setTimeout(function() {
                    Z.removeAttr("style")
                }, 1)
            },
            ia = function(ka, Z) {
                if (l.id_match === undefined || l.id_match !== false) ta(holder, ka, Z, true);
                o[Z] = ka
            };
        e = function(ka, Z) {
            var da = ka.find("defs");
            if (!da.length) return ka;
            da = ca ? da.find("*").filter(function() {
                return !!this.id
            }) : da.find("[id]");
            var pa = ka[0].getElementsByTagName("*"),
                oa = pa.length;
            da.each(function(ma) {
                var na = this.id;
                a(Q).find("#" + na);
                this.id = ma = "x" + na + Z + ma;
                na = "url(#" + na + ")";
                var Ja = "url(#" + ma + ")";
                for (ma = 0; ma < oa; ma++) {
                    var Fa = pa[ma];
                    Fa.getAttribute("fill") === na && Fa.setAttribute("fill", Ja);
                    Fa.getAttribute("stroke") === na && Fa.setAttribute("stroke", Ja);
                    Fa.getAttribute("filter") === na && Fa.setAttribute("filter", Ja)
                }
            });
            return ka
        }
    };
    a.getSvgIcon = function(b, l) {
        var s = o[b];
        if (l && s) s = e(s, 0, true).clone(true);
        return s
    };
    a.resizeSvgIcons = function(b) {
        var l = !a(".svg_icon:first").length;
        a.each(b, function(s, c) {
            var g = a.isArray(c),
                d = g ? c[0] : c,
                p = g ? c[1] : c;
            if (l) s = s.replace(/\.svg_icon/g, "svg");
            a(s).each(function() {
                this.setAttribute("width",
                    d);
                this.setAttribute("height", p);
                if (window.opera && window.widget) {
                    this.parentNode.style.width = d + "px";
                    this.parentNode.style.height = p + "px"
                }
            })
        })
    }
})(jQuery);
(function() {
    function a(b, l, s) {
        b = document.createElementNS(o.svg, b);
        if (e)
            for (var c in l) b.setAttribute(c, l[c]);
        else
            for (c in l) {
                var g = l[c],
                    d = b[c];
                if (d && d.constructor === "SVGLength") d.baseVal.value = g;
                else b.setAttribute(c, g)
            }
        s && s.appendChild(b);
        return b
    }
    var o = {
        svg: "http://www.w3.org/2000/svg",
        xlink: "http://www.w3.org/1999/xlink"
    };
    if (!window.console) window.console = new function() {
        this.log = function() {};
        this.dir = function() {}
    };
    $.jGraduate = {
        Paint: function(b) {
            b = b || {};
            this.alpha = isNaN(b.alpha) ? 100 : b.alpha;
            if (b.copy) {
                this.type =
                    b.copy.type;
                this.alpha = b.copy.alpha;
                this.radialGradient = this.linearGradient = this.solidColor = null;
                switch (this.type) {
                    case "solidColor":
                        this.solidColor = b.copy.solidColor;
                        break;
                    case "linearGradient":
                        this.linearGradient = b.copy.linearGradient.cloneNode(true);
                        break;
                    case "radialGradient":
                        this.radialGradient = b.copy.radialGradient.cloneNode(true)
                }
            } else if (b.linearGradient) {
                this.type = "linearGradient";
                this.radialGradient = this.solidColor = null;
                this.linearGradient = b.linearGradient.cloneNode(true)
            } else if (b.radialGradient) {
                this.type =
                    "radialGradient";
                this.linearGradient = this.solidColor = null;
                this.radialGradient = b.radialGradient.cloneNode(true)
            } else if (b.solidColor) {
                this.type = "solidColor";
                this.solidColor = b.solidColor
            } else {
                this.type = "none";
                this.radialGradient = this.linearGradient = this.solidColor = null
            }
        }
    };
    jQuery.fn.jGraduateDefaults = {
        paint: new $.jGraduate.Paint,
        window: {
            pickerTitle: "Drag markers to pick a paint"
        },
        images: {
            clientPath: "images/"
        },
        newstop: "inverse"
    };
    var e = navigator.userAgent.indexOf("Gecko/") >= 0;
    jQuery.fn.jGraduate = function(b) {
        var l =
            arguments;
        return this.each(function() {
            function s(ha, Y, ja, M, P) {
                var ba = P || a("stop", {
                    "stop-color": Y,
                    "stop-opacity": ja,
                    offset: ha
                }, fa);
                if (P) {
                    Y = P.getAttribute("stop-color");
                    ja = P.getAttribute("stop-opacity");
                    ha = P.getAttribute("offset")
                } else fa.appendChild(ba);
                if (ja === null) ja = 1;
                P = a("path", {
                    d: "M-6.2,0.9c3.6-4,6.7-4.3,6.7-12.4c-0.2,7.9,3.1,8.8,6.5,12.4c3.5,3.8,2.9,9.6,0,12.3c-3.1,2.8-10.4,2.7-13.2,0C-9.6,9.9-9.4,4.4-6.2,0.9z",
                    fill: "url(#jGraduate_trans)",
                    transform: "translate(" + (10 + ha * ca) + ", 26)"
                }, kb);
                var Ca =
                    a("path", {
                        d: "M-6.2,0.9c3.6-4,6.7-4.3,6.7-12.4c-0.2,7.9,3.1,8.8,6.5,12.4c3.5,3.8,2.9,9.6,0,12.3c-3.1,2.8-10.4,2.7-13.2,0C-9.6,9.9-9.4,4.4-6.2,0.9z",
                        fill: Y,
                        "fill-opacity": ja,
                        transform: "translate(" + (10 + ha * ca) + ", 26)",
                        stroke: "#000",
                        "stroke-width": 1.5
                    }, kb);
                $(Ca).mousedown(function(Ma) {
                    c(this);
                    Va = cb;
                    U.mousemove(p).mouseup(g);
                    ua = vb.offset();
                    Ma.preventDefault();
                    return false
                }).data("stop", ba).data("bg", P).dblclick(function() {
                    $("div.jGraduate_LightBox").show();
                    for (var Ma = this, Wa = +ba.getAttribute("stop-opacity") ||
                            1, Za = ba.getAttribute("stop-color") || 1, nb = (parseFloat(Wa) * 255).toString(16); nb.length < 2;) nb = "0" + nb;
                    Y = Za.substr(1) + nb;
                    $("#" + v + "_jGraduate_stopPicker").css({
                        left: 100,
                        bottom: 15
                    }).jPicker({
                        window: {
                            title: "Pick the start color and opacity for the gradient"
                        },
                        images: {
                            clientPath: C.images.clientPath
                        },
                        color: {
                            active: Y,
                            alphaSupport: true
                        }
                    }, function(Qa) {
                        Za = Qa.val("hex") ? "#" + Qa.val("hex") : "none";
                        Wa = Qa.val("a") !== null ? Qa.val("a") / 256 : 1;
                        Ma.setAttribute("fill", Za);
                        Ma.setAttribute("fill-opacity", Wa);
                        ba.setAttribute("stop-color",
                            Za);
                        ba.setAttribute("stop-opacity", Wa);
                        $("div.jGraduate_LightBox").hide();
                        $("#" + v + "_jGraduate_stopPicker").hide()
                    }, null, function() {
                        $("div.jGraduate_LightBox").hide();
                        $("#" + v + "_jGraduate_stopPicker").hide()
                    })
                });
                $(fa).find("stop").each(function() {
                    var Ma = $(this);
                    if (+this.getAttribute("offset") > ha) {
                        if (!Y) {
                            var Wa = this.getAttribute("stop-color"),
                                Za = this.getAttribute("stop-opacity");
                            ba.setAttribute("stop-color", Wa);
                            Ca.setAttribute("fill", Wa);
                            ba.setAttribute("stop-opacity", Za === null ? 1 : Za);
                            Ca.setAttribute("fill-opacity",
                                Za === null ? 1 : Za)
                        }
                        Ma.before(ba);
                        return false
                    }
                });
                M && c(Ca);
                return ba
            }

            function c(ha) {
                cb && cb.setAttribute("stroke", "#000");
                ha.setAttribute("stroke", "blue");
                cb = ha;
                cb.parentNode.appendChild(cb)
            }

            function g() {
                U.unbind("mousemove", p);
                if (Da.getAttribute("display") !== "none") {
                    Da.setAttribute("display", "none");
                    var ha = $(cb),
                        Y = ha.data("stop");
                    ha = ha.data("bg");
                    $([cb, Y, ha]).remove()
                }
                Va = null
            }

            function d() {
                var ha = Ra ? "rotate(" + Ra + "," + Ea + "," + db + ") " : "";
                $a === 1 && Ga === 1 ? fa.removeAttribute("gradientTransform") : fa.setAttribute("gradientTransform",
                    ha + "translate(" + -Ea * ($a - 1) + "," + -db * (Ga - 1) + ") scale(" + $a + "," + Ga + ")")
            }

            function p(ha) {
                var Y = ha.pageX - ua.left;
                ha = ha.pageY - ua.top;
                Y = Y < 10 ? 10 : Y > ca + 10 ? ca + 10 : Y;
                var ja = "translate(" + Y + ", 26)";
                if (ha < -60 || ha > 130) {
                    Da.setAttribute("display", "block");
                    Da.setAttribute("transform", ja)
                } else Da.setAttribute("display", "none");
                Va.setAttribute("transform", ja);
                $.data(Va, "bg").setAttribute("transform", ja);
                $.data(Va, "stop").setAttribute("offset", (Y - 10) / ca);
                var M = 0;
                $(fa).find("stop").each(function() {
                    var P = this.getAttribute("offset"),
                        ba = $(this);
                    if (P < M) {
                        ba.prev().before(ba);
                        wa = $(fa).find("stop")
                    }
                    M = P
                })
            }
            var w = $(this),
                C = $.extend(true, {}, jQuery.fn.jGraduateDefaults, b),
                v = w.attr("id"),
                L = "#" + w.attr("id") + " ";
            if (L) {
                var Q = function() {
                        switch (w.paint.type) {
                            case "radialGradient":
                                w.paint.linearGradient = null;
                                break;
                            case "linearGradient":
                                w.paint.radialGradient = null;
                                break;
                            case "solidColor":
                                w.paint.radialGradient = w.paint.linearGradient = null
                        }
                        $.isFunction(w.okCallback) && w.okCallback(w.paint);
                        w.hide()
                    },
                    J = function() {
                        $.isFunction(w.cancelCallback) && w.cancelCallback();
                        w.hide()
                    };
                $.extend(true, w, {
                    paint: new $.jGraduate.Paint({
                        copy: C.paint
                    }),
                    okCallback: $.isFunction(l[1]) && l[1] || null,
                    cancelCallback: $.isFunction(l[2]) && l[2] || null
                });
                w.position();
                var H = null,
                    U = $(window);
                if (w.paint.type == "none") w.paint = $.jGraduate.Paint({
                    solidColor: "ffffff"
                });
                w.addClass("jGraduate_Picker");
                w.html('<ul class="jGraduate_tabs"><li class="jGraduate_tab_color jGraduate_tab_current" data-type="col">Solid Color</li><li class="jGraduate_tab_lingrad" data-type="lg">Linear Gradient</li><li class="jGraduate_tab_radgrad" data-type="rg">Radial Gradient</li></ul><div class="jGraduate_colPick"></div><div class="jGraduate_gradPick"></div><div class="jGraduate_LightBox"></div><div id="' +
                    v + '_jGraduate_stopPicker" class="jGraduate_stopPicker"></div>');
                var R = $(L + "> .jGraduate_colPick"),
                    N = $(L + "> .jGraduate_gradPick");
                N.html('<div id="' + v + '_jGraduate_Swatch" class="jGraduate_Swatch"><h2 class="jGraduate_Title">' + C.window.pickerTitle + '</h2><div id="' + v + '_jGraduate_GradContainer" class="jGraduate_GradContainer"></div><div id="' + v + '_jGraduate_StopSlider" class="jGraduate_StopSlider"></div></div><div class="jGraduate_Form jGraduate_Points jGraduate_lg_field"><div class="jGraduate_StopSection"><label class="jGraduate_Form_Heading">Begin Point</label><div class="jGraduate_Form_Section"><label>x:</label><input type="text" id="' +
                    v + '_jGraduate_x1" size="3" title="Enter starting x value between 0.0 and 1.0"/><label> y:</label><input type="text" id="' + v + '_jGraduate_y1" size="3" title="Enter starting y value between 0.0 and 1.0"/></div></div><div class="jGraduate_StopSection"><label class="jGraduate_Form_Heading">End Point</label><div class="jGraduate_Form_Section"><label>x:</label><input type="text" id="' + v + '_jGraduate_x2" size="3" title="Enter ending x value between 0.0 and 1.0"/><label> y:</label><input type="text" id="' +
                    v + '_jGraduate_y2" size="3" title="Enter ending y value between 0.0 and 1.0"/></div></div></div><div class="jGraduate_Form jGraduate_Points jGraduate_rg_field"><div class="jGraduate_StopSection"><label class="jGraduate_Form_Heading">Center Point</label><div class="jGraduate_Form_Section"><label>x:</label><input type="text" id="' + v + '_jGraduate_cx" size="3" title="Enter x value between 0.0 and 1.0"/><label> y:</label><input type="text" id="' + v + '_jGraduate_cy" size="3" title="Enter y value between 0.0 and 1.0"/></div></div><div class="jGraduate_StopSection"><label class="jGraduate_Form_Heading">Focal Point</label><div class="jGraduate_Form_Section"><label>Match center: <input type="checkbox" checked="checked" id="' +
                    v + '_jGraduate_match_ctr"/></label><br/><label>x:</label><input type="text" id="' + v + '_jGraduate_fx" size="3" title="Enter x value between 0.0 and 1.0"/><label> y:</label><input type="text" id="' + v + '_jGraduate_fy" size="3" title="Enter y value between 0.0 and 1.0"/></div></div></div><div class="jGraduate_StopSection jGraduate_SpreadMethod"><label class="jGraduate_Form_Heading">Spread method</label><div class="jGraduate_Form_Section"><select class="jGraduate_spreadMethod"><option value=pad selected>Pad</option><option value=reflect>Reflect</option><option value=repeat>Repeat</option></select></div></div><div class="jGraduate_Form"><div class="jGraduate_Slider jGraduate_RadiusField jGraduate_rg_field"><label class="prelabel">Radius:</label><div id="' +
                    v + '_jGraduate_Radius" class="jGraduate_SliderBar jGraduate_Radius" title="Click to set radius"><img id="' + v + '_jGraduate_RadiusArrows" class="jGraduate_RadiusArrows" src="' + C.images.clientPath + 'rangearrows2.gif"></div><label><input type="text" id="' + v + '_jGraduate_RadiusInput" size="3" value="100"/>%</label></div><div class="jGraduate_Slider jGraduate_EllipField jGraduate_rg_field"><label class="prelabel">Ellip:</label><div id="' + v + '_jGraduate_Ellip" class="jGraduate_SliderBar jGraduate_Ellip" title="Click to set Ellip"><img id="' +
                    v + '_jGraduate_EllipArrows" class="jGraduate_EllipArrows" src="' + C.images.clientPath + 'rangearrows2.gif"></div><label><input type="text" id="' + v + '_jGraduate_EllipInput" size="3" value="0"/>%</label></div><div class="jGraduate_Slider jGraduate_AngleField jGraduate_rg_field"><label class="prelabel">Angle:</label><div id="' + v + '_jGraduate_Angle" class="jGraduate_SliderBar jGraduate_Angle" title="Click to set Angle"><img id="' + v + '_jGraduate_AngleArrows" class="jGraduate_AngleArrows" src="' + C.images.clientPath +
                    'rangearrows2.gif"></div><label><input type="text" id="' + v + '_jGraduate_AngleInput" size="3" value="0"/>\u00ba&nbsp;</label></div><div class="jGraduate_Slider jGraduate_OpacField"><label class="prelabel">Opac:</label><div id="' + v + '_jGraduate_Opac" class="jGraduate_SliderBar jGraduate_Opac" title="Click to set Opac"><img id="' + v + '_jGraduate_OpacArrows" class="jGraduate_OpacArrows" src="' + C.images.clientPath + 'rangearrows2.gif"></div><label><input type="text" id="' + v + '_jGraduate_OpacInput" size="3" value="100"/>%</label></div></div><div class="jGraduate_OkCancel"><input type="button" id="' +
                    v + '_jGraduate_Ok" class="jGraduate_Ok" value="OK"/><input type="button" id="' + v + '_jGraduate_Cancel" class="jGraduate_Cancel" value="Cancel"/></div>');
                var ca = 256,
                    la = ca - 0,
                    X = ca - 0,
                    W, fa, ta, ia = {};
                $(".jGraduate_SliderBar").width(145);
                var ka = $("#" + v + "_jGraduate_GradContainer")[0],
                    Z = a("svg", {
                        id: v + "_jgraduate_svg",
                        width: ca,
                        height: ca,
                        xmlns: o.svg
                    }, ka);
                W = W || w.paint.type;
                var da = fa = w.paint[W],
                    pa = w.paint.alpha,
                    oa = W === "solidColor";
                switch (W) {
                    case "solidColor":
                    case "linearGradient":
                        if (!oa) {
                            fa.id = v + "_lg_jgraduate_grad";
                            da = fa = Z.appendChild(fa)
                        }
                        a("radialGradient", {
                            id: v + "_rg_jgraduate_grad"
                        }, Z);
                        if (W === "linearGradient") break;
                    case "radialGradient":
                        if (!oa) {
                            fa.id = v + "_rg_jgraduate_grad";
                            da = fa = Z.appendChild(fa)
                        }
                        a("linearGradient", {
                            id: v + "_lg_jgraduate_grad",
                            x1: 0,
                            y1: 0,
                            x2: 1,
                            y2: 0
                        }, Z)
                }
                if (oa) {
                    da = fa = $("#" + v + "_lg_jgraduate_grad")[0];
                    H = w.paint[W];
                    s(0, "#" + H, 1);
                    var ma = typeof C.newstop;
                    if (ma === "string") switch (C.newstop) {
                        case "same":
                            s(1, "#" + H, 1);
                            break;
                        case "inverse":
                            ma = "";
                            if (H.length === 3) H = H.split("").map(function(ha) {
                                return ha + "" + ha
                            }).join("");
                            for (var na = 0; na < 6; na += 2) {
                                H.substr(na, 2);
                                var Ja = (255 - parseInt(H.substr(na, 2), 16)).toString(16);
                                if (Ja.length < 2) Ja = 0 + Ja;
                                ma += Ja
                            }
                            s(1, "#" + ma, 1);
                            break;
                        case "white":
                            s(1, "#ffffff", 1);
                            break;
                        case "black":
                            s(1, "#000000", 1)
                    } else if (ma === "object") s(1, C.newstop.color || "#" + H, "opac" in C.newstop ? C.newstop.opac : 1)
                }
                H = parseFloat(da.getAttribute("x1") || 0);
                ma = parseFloat(da.getAttribute("y1") || 0);
                na = parseFloat(da.getAttribute("x2") || 1);
                Ja = parseFloat(da.getAttribute("y2") || 0);
                var Fa = parseFloat(da.getAttribute("cx") || 0.5),
                    Na = parseFloat(da.getAttribute("cy") || 0.5),
                    Sa = parseFloat(da.getAttribute("fx") || Fa),
                    Ia = parseFloat(da.getAttribute("fy") || Na);
                ta = a("rect", {
                    id: v + "_jgraduate_rect",
                    x: 0,
                    y: 0,
                    width: la,
                    height: X,
                    fill: "url(#" + v + "_jgraduate_grad)",
                    "fill-opacity": pa / 100
                }, Z);
                var Ka = $("<div/>").attr({
                        "class": "grad_coord jGraduate_lg_field",
                        title: "Begin Stop"
                    }).text(1).css({
                        top: ma * ca,
                        left: H * ca
                    }).data("coord", "start").appendTo(ka),
                    Ba = Ka.clone().text(2).css({
                        top: Ja * ca,
                        left: na * ca
                    }).attr("title", "End stop").data("coord", "end").appendTo(ka),
                    xa = $("<div/>").attr({
                        "class": "grad_coord jGraduate_rg_field",
                        title: "Center stop"
                    }).text("C").css({
                        top: Na * ca,
                        left: Fa * ca
                    }).data("coord", "center").appendTo(ka),
                    ra = xa.clone().text("F").css({
                        top: Ia * ca,
                        left: Sa * ca,
                        display: "none"
                    }).attr("title", "Focus point").data("coord", "focus").appendTo(ka);
                ra[0].id = v + "_jGraduate_focusCoord";
                $(L + " .grad_coord");
                $.each(["x1", "y1", "x2", "y2", "cx", "cy", "fx", "fy"], function(ha, Y) {
                    var ja = fa.getAttribute(Y),
                        M = isNaN(Y[1]);
                    ja || (ja = M ? "0.5" : Y === "x2" ? "1.0" : "0.0");
                    ia[Y] = $("#" + v + "_jGraduate_" +
                        Y).val(ja).change(function() {
                        if (isNaN(parseFloat(this.value)) || this.value < 0) this.value = 0;
                        else if (this.value > 1) this.value = 1;
                        if (!(Y[0] === "f" && !eb))
                            if (M && W === "radialGradient" || !M && W === "linearGradient") fa.setAttribute(Y, this.value);
                        var P = M ? Y[0] === "c" ? xa : ra : Y[1] === "1" ? Ka : Ba,
                            ba = Y.indexOf("x") >= 0 ? "left" : "top";
                        P.css(ba, this.value * ca)
                    }).change()
                });
                var wa, kb, vb = $("#" + v + "_jGraduate_StopSlider"),
                    cb, Ta, Va, Da = a("path", {
                            d: "m9.75,-6l-19.5,19.5m0,-19.5l19.5,19.5",
                            fill: "none",
                            stroke: "#D00",
                            "stroke-width": 5,
                            display: "none"
                        },
                        Ta),
                    ua, $a = 1,
                    Ga = 1,
                    Ra = 0,
                    Ea = Fa,
                    db = Na;
                Ta = a("svg", {
                    width: "100%",
                    height: 45
                }, vb[0]);
                ka = a("pattern", {
                    width: 16,
                    height: 16,
                    patternUnits: "userSpaceOnUse",
                    id: "jGraduate_trans"
                }, Ta);
                a("image", {
                    width: 16,
                    height: 16
                }, ka).setAttributeNS(o.xlink, "xlink:href", C.images.clientPath + "map-opacity.png");
                $(Ta).on("click touchstart", function(ha) {
                    ua = vb.offset();
                    if (ha.target.tagName !== "path") {
                        var Y = ha.pageX - ua.left - 8;
                        Y = Y < 10 ? 10 : Y > ca + 10 ? ca + 10 : Y;
                        s(Y / ca, 0, 0, true);
                        ha.stopPropagation()
                    }
                });
                $(Ta).mouseover(function() {
                    Ta.appendChild(Da)
                });
                kb = a("g", {}, Ta);
                a("line", {
                    x1: 10,
                    y1: 15,
                    x2: ca + 10,
                    y2: 15,
                    "stroke-width": 2,
                    stroke: "#000"
                }, Ta);
                var lb = N.find(".jGraduate_spreadMethod").change(function() {
                        fa.setAttribute("spreadMethod", $(this).val())
                    }),
                    Ua = null,
                    Xa = function(ha) {
                        var Y = ha.pageX - hb.left,
                            ja = ha.pageY - hb.top;
                        Y = Y < 0 ? 0 : Y > ca ? ca : Y;
                        ja = ja < 0 ? 0 : ja > ca ? ca : ja;
                        Ua.css("left", Y).css("top", ja);
                        Y = Y / la;
                        ja = ja / X;
                        var M = Ua.data("coord"),
                            P = fa;
                        switch (M) {
                            case "start":
                                ia.x1.val(Y);
                                ia.y1.val(ja);
                                P.setAttribute("x1", Y);
                                P.setAttribute("y1", ja);
                                break;
                            case "end":
                                ia.x2.val(Y);
                                ia.y2.val(ja);
                                P.setAttribute("x2", Y);
                                P.setAttribute("y2", ja);
                                break;
                            case "center":
                                ia.cx.val(Y);
                                ia.cy.val(ja);
                                P.setAttribute("cx", Y);
                                P.setAttribute("cy", ja);
                                Ea = Y;
                                db = ja;
                                d();
                                break;
                            case "focus":
                                ia.fx.val(Y);
                                ia.fy.val(ja);
                                P.setAttribute("fx", Y);
                                P.setAttribute("fy", ja);
                                d()
                        }
                        ha.preventDefault()
                    },
                    wb = function() {
                        Ua = null;
                        U.unbind("mousemove", Xa).unbind("mouseup", wb)
                    };
                wa = fa.getElementsByTagNameNS(o.svg, "stop");
                if (sa < 2) {
                    for (; sa < 2;) {
                        fa.appendChild(document.createElementNS(o.svg, "stop"));
                        ++sa
                    }
                    wa = fa.getElementsByTagNameNS(o.svg,
                        "stop")
                }
                var sa = wa.length;
                for (na = 0; na < sa; na++) s(0, 0, 0, 0, wa[na]);
                lb.val(fa.getAttribute("spreadMethod") || "pad");
                var hb, eb = false;
                ta.setAttribute("fill-opacity", pa / 100);
                $("#" + v + " div.grad_coord").mousedown(function(ha) {
                    ha.preventDefault();
                    Ua = $(this);
                    Ua.offset();
                    hb = Ua.parent().offset();
                    U.mousemove(Xa).mouseup(wb)
                });
                $("#" + v + "_jGraduate_Ok").bind("click touchstart", function() {
                    w.paint.type = W;
                    w.paint[W] = fa.cloneNode(true);
                    w.paint.solidColor = null;
                    Q()
                });
                $("#" + v + "_jGraduate_Cancel").bind("click touchstart", function() {
                    J()
                });
                if (W === "radialGradient")
                    if (eb) ra.show();
                    else {
                        ra.hide();
                        ia.fx.val("");
                        ia.fy.val("")
                    }
                $("#" + v + "_jGraduate_match_ctr")[0].checked = !eb;
                var sb, ib;
                $("#" + v + "_jGraduate_match_ctr").change(function() {
                    eb = !this.checked;
                    ra.toggle(eb);
                    ia.fx.val("");
                    ia.fy.val("");
                    var ha = fa;
                    if (eb) {
                        var Y = sb || 0.5,
                            ja = ib || 0.5;
                        ha.setAttribute("fx", Y);
                        ha.setAttribute("fy", ja);
                        ia.fx.val(Y);
                        ia.fy.val(ja)
                    } else {
                        sb = ha.getAttribute("fx");
                        ib = ha.getAttribute("fy");
                        ha.removeAttribute("fx");
                        ha.removeAttribute("fy")
                    }
                });
                wa = fa.getElementsByTagNameNS(o.svg,
                    "stop");
                sa = wa.length;
                if (sa < 2) {
                    for (; sa < 2;) {
                        fa.appendChild(document.createElementNS(o.svg, "stop"));
                        ++sa
                    }
                    wa = fa.getElementsByTagNameNS(o.svg, "stop")
                }
                var ab;
                pa = N = 0;
                if (W === "radialGradient") {
                    Z = fa.gradientTransform.baseVal;
                    if (Z.numberOfItems === 2) {
                        sa = Z.getItem(0);
                        Z = Z.getItem(1);
                        if (sa.type === 2 && Z.type === 3) {
                            sa = Z.matrix;
                            if (sa.a !== 1) N = Math.round(-(1 - sa.a) * 100);
                            else if (sa.d !== 1) N = Math.round((1 - sa.d) * 100)
                        }
                    } else if (Z.numberOfItems === 3) {
                        ka = Z.getItem(0);
                        sa = Z.getItem(1);
                        Z = Z.getItem(2);
                        if (ka.type === 4 && sa.type === 2 && Z.type ===
                            3) {
                            pa = Math.round(ka.angle);
                            sa = Z.matrix;
                            if (sa.a !== 1) N = Math.round(-(1 - sa.a) * 100);
                            else if (sa.d !== 1) N = Math.round((1 - sa.d) * 100)
                        }
                    }
                }
                N = {
                    radius: {
                        handle: "#" + v + "_jGraduate_RadiusArrows",
                        input: "#" + v + "_jGraduate_RadiusInput",
                        val: (fa.getAttribute("r") || 0.5) * 100
                    },
                    opacity: {
                        handle: "#" + v + "_jGraduate_OpacArrows",
                        input: "#" + v + "_jGraduate_OpacInput",
                        val: w.paint.alpha || 100
                    },
                    ellip: {
                        handle: "#" + v + "_jGraduate_EllipArrows",
                        input: "#" + v + "_jGraduate_EllipInput",
                        val: N
                    },
                    angle: {
                        handle: "#" + v + "_jGraduate_AngleArrows",
                        input: "#" + v + "_jGraduate_AngleInput",
                        val: pa
                    }
                };
                $.each(N, function(ha, Y) {
                    var ja = $(Y.handle);
                    ja.mousedown(function(M) {
                        var P = ja.parent();
                        ab = {
                            type: ha,
                            elem: ja,
                            input: $(Y.input),
                            parent: P,
                            offset: P.offset()
                        };
                        U.mousemove(ob).mouseup(pb);
                        M.preventDefault()
                    });
                    $(Y.input).val(Y.val).change(function() {
                        var M = +this.value,
                            P = 0,
                            ba = W === "radialGradient";
                        switch (ha) {
                            case "radius":
                                ba && fa.setAttribute("r", M / 100);
                                P = Math.pow(M / 100, 0.4) / 2 * 145;
                                break;
                            case "opacity":
                                w.paint.alpha = M;
                                ta.setAttribute("fill-opacity", M / 100);
                                P = M * 1.45;
                                break;
                            case "ellip":
                                $a = Ga = 1;
                                if (M === 0) {
                                    P =
                                        72.5;
                                    break
                                }
                                if (M > 99.5) M = 99.5;
                                if (M > 0) Ga = 1 - M / 100;
                                else $a = -(M / 100) - 1;
                                P = 145 * ((M + 100) / 2) / 100;
                                ba && d();
                                break;
                            case "angle":
                                Ra = M;
                                P = Ra / 180;
                                P += 0.5;
                                P *= 145;
                                ba && d()
                        }
                        if (P > 145) P = 145;
                        else if (P < 0) P = 0;
                        ja.css({
                            "margin-left": P - 5
                        })
                    }).change()
                });
                var ob = function(ha) {
                        var Y = ha.pageX - ab.offset.left - parseInt(ab.parent.css("border-left-width"));
                        if (Y > 145) Y = 145;
                        if (Y <= 0) Y = 0;
                        var ja = Y - 5;
                        Y /= 145;
                        switch (ab.type) {
                            case "radius":
                                Y = Math.pow(Y * 2, 2.5);
                                if (Y > 0.98 && Y < 1.02) Y = 1;
                                if (Y <= 0.01) Y = 0.01;
                                fa.setAttribute("r", Y);
                                break;
                            case "opacity":
                                w.paint.alpha =
                                    parseInt(Y * 100);
                                ta.setAttribute("fill-opacity", Y);
                                break;
                            case "ellip":
                                Ga = $a = 1;
                                if (Y < 0.5) {
                                    Y /= 0.5;
                                    $a = Y <= 0 ? 0.01 : Y
                                } else if (Y > 0.5) {
                                    Y /= 0.5;
                                    Y = 2 - Y;
                                    Ga = Y <= 0 ? 0.01 : Y
                                }
                                d();
                                Y -= 1;
                                if (Ga === Y + 1) Y = Math.abs(Y);
                                break;
                            case "angle":
                                Y -= 0.5;
                                Ra = Y *= 180;
                                d();
                                Y /= 100
                        }
                        ab.elem.css({
                            "margin-left": ja
                        });
                        Y = Math.round(Y * 100);
                        ab.input.val(Y);
                        ha.preventDefault()
                    },
                    pb = function() {
                        U.unbind("mousemove", ob).unbind("mouseup", pb);
                        ab = null
                    };
                for (N = (w.paint.alpha * 255 / 100).toString(16); N.length < 2;) N = "0" + N;
                N = N.split(".")[0];
                H = w.paint.solidColor == "none" ?
                    "" : w.paint.solidColor + N;
                oa || (H = wa[0].getAttribute("stop-color"));
                $.extend($.fn.jPicker.defaults.window, {
                    alphaSupport: true,
                    effects: {
                        type: "show",
                        speed: 0
                    }
                });
                R.jPicker({
                    window: {
                        title: C.window.pickerTitle
                    },
                    images: {
                        clientPath: C.images.clientPath
                    },
                    color: {
                        active: H,
                        alphaSupport: true
                    }
                }, function(ha) {
                    w.paint.type = "solidColor";
                    w.paint.alpha = ha.val("ahex") ? Math.round(ha.val("a") / 255 * 100) : 100;
                    w.paint.solidColor = ha.val("hex") ? ha.val("hex") : "none";
                    w.paint.radialGradient = null;
                    Q()
                }, null, function() {
                    J()
                });
                var fb = $(L +
                    " .jGraduate_tabs li");
                fb.on("click touchstart", function() {
                    fb.removeClass("jGraduate_tab_current");
                    $(this).addClass("jGraduate_tab_current");
                    $(L + " > div").hide();
                    var ha = $(this).attr("data-type");
                    $(L + " .jGraduate_gradPick").show();
                    if (ha === "rg" || ha === "lg") {
                        $(".jGraduate_" + ha + "_field").show();
                        $(".jGraduate_" + (ha === "lg" ? "rg" : "lg") + "_field").hide();
                        $("#" + v + "_jgraduate_rect")[0].setAttribute("fill", "url(#" + v + "_" + ha + "_jgraduate_grad)");
                        W = ha === "lg" ? "linearGradient" : "radialGradient";
                        $("#" + v + "_jGraduate_OpacInput").val(w.paint.alpha).change();
                        var Y = $("#" + v + "_" + ha + "_jgraduate_grad")[0];
                        if (fa !== Y) {
                            var ja = $(fa).find("stop");
                            $(Y).empty().append(ja);
                            fa = Y;
                            Y = lb.val();
                            fa.setAttribute("spreadMethod", Y)
                        }
                        eb = ha === "rg" && fa.getAttribute("fx") != null && !(Fa == Sa && Na == Ia);
                        $("#" + v + "_jGraduate_focusCoord").toggle(eb);
                        if (eb) $("#" + v + "_jGraduate_match_ctr")[0].checked = false
                    } else {
                        $(L + " .jGraduate_gradPick").hide();
                        $(L + " .jGraduate_colPick").show()
                    }
                });
                $(L + " > div").hide();
                fb.removeClass("jGraduate_tab_current");
                var tb;
                switch (w.paint.type) {
                    case "linearGradient":
                        tb =
                            $(L + " .jGraduate_tab_lingrad");
                        break;
                    case "radialGradient":
                        tb = $(L + " .jGraduate_tab_radgrad");
                        break;
                    default:
                        tb = $(L + " .jGraduate_tab_color")
                }
                w.show();
                setTimeout(function() {
                    tb.addClass("jGraduate_tab_current").click()
                }, 10)
            } else alert("Container element must have an id attribute to maintain unique id strings for sub-elements.")
        })
    }
})();
jQuery && function() {
    var a = $(window),
        o = $(document);
    $.extend($.fn, {
        contextMenu: function(e, b) {
            if (e.menu == undefined) return false;
            if (e.inSpeed == undefined) e.inSpeed = 150;
            if (e.outSpeed == undefined) e.outSpeed = 75;
            if (e.inSpeed == 0) e.inSpeed = -1;
            if (e.outSpeed == 0) e.outSpeed = -1;
            $(this).each(function() {
                var l = $(this),
                    s = $(l).offset(),
                    c = $("#" + e.menu);
                c.addClass("contextMenu");
                $(this).bind("mousedown", function(d) {
                    $(this).on("mouseup", function(p) {
                        var w = $(this);
                        w.unbind("mouseup");
                        $(".contextMenu").hide();
                        if (d.button === 2 ||
                            e.allowLeft || d.ctrlKey && svgedit.browser.isMac()) svgedit.browser.isTouch() || g(p, d, w)
                    })
                });
                svgedit.browser.isTouch() && $(this).bind("taphold", function(d) {
                    var p = $(this);
                    p.unbind("mouseup");
                    g(d, d, p)
                });
                var g = function(d, p, w) {
                    if (typeof p == "undefined") p = d;
                    d.stopPropagation();
                    if (l.hasClass("disabled") || p.altKey) return false;
                    var C = d.pageX,
                        v = d.pageY;
                    if (svgedit.browser.isTouch()) {
                        C = d.originalEvent.touches[0].pageX;
                        v = d.originalEvent.touches[0].pageY
                    }
                    d = a.width() - c.width();
                    p = a.height() - c.height();
                    if (C > d - 15) C = d - 15;
                    if (v > p - 30) v = p - 30;
                    if (svgedit.browser.isTouch()) v -= c.height() / 2;
                    o.unbind("click");
                    c.css({
                        top: v,
                        left: C
                    }).fadeIn(e.inSpeed);
                    c.find("A").mouseover(function() {
                        c.find("LI.hover").removeClass("hover");
                        $(this).parent().addClass("hover")
                    }).mouseout(function() {
                        c.find("LI.hover").removeClass("hover")
                    });
                    o.keypress(function(L) {
                        switch (L.keyCode) {
                            case 38:
                                if (c.find("LI.hover").length) {
                                    c.find("LI.hover").removeClass("hover").prevAll("LI:not(.disabled)").eq(0).addClass("hover");
                                    c.find("LI.hover").length || c.find("LI:last").addClass("hover")
                                } else c.find("LI:last").addClass("hover");
                                break;
                            case 40:
                                if (c.find("LI.hover").length == 0) c.find("LI:first").addClass("hover");
                                else {
                                    c.find("LI.hover").removeClass("hover").nextAll("LI:not(.disabled)").eq(0).addClass("hover");
                                    c.find("LI.hover").length || c.find("LI:first").addClass("hover")
                                }
                                break;
                            case 13:
                                c.find("LI.hover A").trigger("click");
                                break;
                            case 27:
                                o.trigger("click")
                        }
                    });
                    c.find("A").unbind("mouseup");
                    c.find("LI:not(.disabled) A").mouseup(function() {
                        o.unbind("click").unbind("keypress");
                        $(".contextMenu").hide();
                        b && b($(this).attr("href").substr(1),
                            $(w), {
                                x: C - s.left,
                                y: v - s.top,
                                docX: C,
                                docY: v
                            });
                        return false
                    });
                    setTimeout(function() {
                        o.click(function() {
                            o.unbind("click").unbind("keypress");
                            c.fadeOut(e.outSpeed);
                            return false
                        })
                    }, 0)
                };
                $(l).add($("UL.contextMenu")).bind("contextmenu", function() {
                    return false
                })
            });
            return $(this)
        },
        disableContextMenuItems: function(e) {
            if (e == undefined) {
                $(this).find("LI").addClass("disabled");
                return $(this)
            }
            $(this).each(function() {
                if (e != undefined)
                    for (var b = e.split(","), l = 0; l < b.length; l++) $(this).find('A[href="' + b[l] + '"]').parent().addClass("disabled")
            });
            return $(this)
        },
        enableContextMenuItems: function(e) {
            if (e == undefined) {
                $(this).find("LI.disabled").removeClass("disabled");
                return $(this)
            }
            $(this).each(function() {
                if (e != undefined)
                    for (var b = e.split(","), l = 0; l < b.length; l++) $(this).find('A[href="' + b[l] + '"]').parent().removeClass("disabled")
            });
            return $(this)
        },
        disableContextMenu: function() {
            $(this).each(function() {
                $(this).addClass("disabled")
            });
            return $(this)
        },
        enableContextMenu: function() {
            $(this).each(function() {
                $(this).removeClass("disabled")
            });
            return $(this)
        },
        destroyContextMenu: function() {
            $(this).each(function() {
                $(this).unbind("mousedown").unbind("mouseup")
            });
            return $(this)
        }
    })
}(jQuery);
var svgedit = svgedit || {};
(function() {
    if (!svgedit.browser) svgedit.browser = {};
    var a = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect;
    svgedit.browser.supportsSvg = function() {
        return a
    };
    if (svgedit.browser.supportsSvg()) {
        var o = navigator.userAgent,
            e = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
            b = !!window.opera,
            l = o.indexOf("AppleWebKit") >= 0,
            s = o.indexOf("Gecko/") >= 0,
            c = o.indexOf("MSIE") >= 0,
            g = o.indexOf("Chrome/") >= 0,
            d = o.indexOf("Windows") >= 0,
            p = o.indexOf("Macintosh") >=
            0,
            w = "ontouchstart" in window,
            C = !!e.querySelector,
            v = !!document.evaluate,
            L = function() {
                var ca = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
                    la = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                document.documentElement.appendChild(ca);
                la.setAttribute("x", 5);
                ca.appendChild(la);
                var X = document.createElementNS("http://www.w3.org/2000/svg", "text");
                X.textContent = "a";
                la.appendChild(X);
                la = X.getStartPositionOfChar(0);
                la = la.x;
                document.documentElement.removeChild(ca);
                return la === 0
            }(),
            Q =
            function() {
                var ca = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                document.documentElement.appendChild(ca);
                var la = document.createElementNS("http://www.w3.org/2000/svg", "path");
                la.setAttribute("d", "M0,0 C0,0 10,10 10,0");
                ca.appendChild(la);
                la = la.getBBox();
                document.documentElement.removeChild(ca);
                return la.height > 4 && la.height < 5
            }(),
            J = function() {
                var ca = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                document.documentElement.appendChild(ca);
                var la = document.createElementNS("http://www.w3.org/2000/svg",
                    "path");
                la.setAttribute("d", "M0,0 10,0");
                var X = document.createElementNS("http://www.w3.org/2000/svg", "path");
                X.setAttribute("d", "M5,0 15,0");
                var W = document.createElementNS("http://www.w3.org/2000/svg", "g");
                W.appendChild(la);
                W.appendChild(X);
                ca.appendChild(W);
                la = W.getBBox();
                document.documentElement.removeChild(ca);
                return la.width == 15
            }(),
            H = function() {
                var ca = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                ca.setAttribute("x", 0.1);
                (ca = ca.cloneNode(false).getAttribute("x").indexOf(",") ==
                    -1) || $.alert("NOTE: This version of Opera is known to contain bugs in SVG-edit.\n    Please upgrade to the <a href='http://opera.com'>latest version</a> in which the problems have been fixed.");
                return ca
            }(),
            U = function() {
                var ca = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                ca.setAttribute("style", "vector-effect:non-scaling-stroke");
                return ca.style.vectorEffect === "non-scaling-stroke"
            }(),
            R = function() {
                var ca = document.createElementNS("http://www.w3.org/2000/svg", "rect").transform.baseVal,
                    la = e.createSVGTransform();
                ca.appendItem(la);
                return ca.getItem(0) == la
            }(),
            N = function() {
                if (typeof Blob != "function") return false;
                var ca = new Blob(["<svg xmlns='http://www.w3.org/2000/svg'></svg>"], {
                        type: "image/svg+xml;charset=utf-8"
                    }),
                    la = new Image;
                la.onload = function() {
                    svgedit.browser.supportsBlobs = function() {
                        return true
                    }
                };
                la.onerror = function() {
                    svgedit.browser.supportsBlobs = function() {
                        return false
                    }
                };
                la.src = URL.createObjectURL(ca);
                return false
            }();
        svgedit.browser.isOpera = function() {
            return b
        };
        svgedit.browser.isWebkit =
            function() {
                return l
            };
        svgedit.browser.isGecko = function() {
            return s
        };
        svgedit.browser.isIE = function() {
            return c
        };
        svgedit.browser.isChrome = function() {
            return g
        };
        svgedit.browser.isWindows = function() {
            return d
        };
        svgedit.browser.isMac = function() {
            return p
        };
        svgedit.browser.isTouch = function() {
            return w
        };
        svgedit.browser.supportsSelectors = function() {
            return C
        };
        svgedit.browser.supportsXpath = function() {
            return v
        };
        svgedit.browser.supportsPathBBox = function() {
            return Q
        };
        svgedit.browser.supportsHVLineContainerBBox = function() {
            return J
        };
        svgedit.browser.supportsGoodTextCharPos = function() {
            return L
        };
        svgedit.browser.supportsEditableText = function() {
            return b
        };
        svgedit.browser.supportsGoodDecimals = function() {
            return H
        };
        svgedit.browser.supportsNonScalingStroke = function() {
            return U
        };
        svgedit.browser.supportsNativeTransformLists = function() {
            return R
        };
        svgedit.browser.supportsBlobs = function() {
            return N
        }
    } else window.location = "browser-not-supported.html"
})();
svgedit = svgedit || {};
(function() {
    if (!svgedit.transformlist) svgedit.transformlist = {};
    var a = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
        o = {};
    svgedit.transformlist.SVGTransformList = function(e) {
        this._elem = e || null;
        this._xforms = [];
        this._update = function() {
            var b = "";
            a.createSVGMatrix();
            for (var l = 0; l < this.numberOfItems; ++l) {
                var s = this._list.getItem(l);
                b = b;
                s = s;
                var c = s.matrix,
                    g = "";
                switch (s.type) {
                    case 1:
                        g = "matrix(" + [c.a, c.b, c.c, c.d, c.e, c.f].join(",") + ")";
                        break;
                    case 2:
                        g = "translate(" + c.e + "," + c.f + ")";
                        break;
                    case 3:
                        g =
                            c.a == c.d ? "scale(" + c.a + ")" : "scale(" + c.a + "," + c.d + ")";
                        break;
                    case 4:
                        var d = 0;
                        g = 0;
                        if (s.angle != 0) {
                            d = 1 - c.a;
                            g = (d * c.f + c.b * c.e) / (d * d + c.b * c.b);
                            d = (c.e - c.b * g) / d
                        }
                        g = "rotate(" + s.angle + " " + d + "," + g + ")"
                }
                b = b + (g + " ")
            }
            this._elem.setAttribute("transform", b)
        };
        this._list = this;
        this._init = function() {
            var b = this._elem.getAttribute("transform");
            if (b)
                for (var l = /\s*((scale|matrix|rotate|translate)\s*\(.*?\))\s*,?\s*/, s = true; s;) {
                    s = b.match(l);
                    b = b.replace(l, "");
                    if (s && s[1]) {
                        var c = s[1].split(/\s*\(/),
                            g = c[0];
                        c = c[1].match(/\s*(.*?)\s*\)/);
                        c[1] = c[1].replace(/(\d)-/g, "$1 -");
                        var d = c[1].split(/[, ]+/),
                            p = "abcdef".split(""),
                            w = a.createSVGMatrix();
                        $.each(d, function(L, Q) {
                            d[L] = parseFloat(Q);
                            if (g == "matrix") w[p[L]] = d[L]
                        });
                        c = a.createSVGTransform();
                        var C = "set" + g.charAt(0).toUpperCase() + g.slice(1),
                            v = g == "matrix" ? [w] : d;
                        if (g == "scale" && v.length == 1) v.push(v[0]);
                        else if (g == "translate" && v.length == 1) v.push(0);
                        else if (g == "rotate" && v.length == 1) {
                            v.push(0);
                            v.push(0)
                        }
                        c[C].apply(c, v);
                        this._list.appendItem(c)
                    }
                }
        };
        this._removeFromOtherLists = function(b) {
            if (b) {
                var l =
                    false,
                    s;
                for (s in o) {
                    for (var c = o[s], g = 0, d = c._xforms.length; g < d; ++g)
                        if (c._xforms[g] == b) {
                            l = true;
                            c.removeItem(g);
                            break
                        }
                    if (l) break
                }
            }
        };
        this.numberOfItems = 0;
        this.clear = function() {
            this.numberOfItems = 0;
            this._xforms = []
        };
        this.initialize = function(b) {
            this.numberOfItems = 1;
            this._removeFromOtherLists(b);
            this._xforms = [b]
        };
        this.getItem = function(b) {
            if (b < this.numberOfItems && b >= 0) return this._xforms[b];
            throw {
                code: 1
            };
        };
        this.insertItemBefore = function(b, l) {
            var s = null;
            if (l >= 0)
                if (l < this.numberOfItems) {
                    this._removeFromOtherLists(b);
                    s = Array(this.numberOfItems + 1);
                    for (var c = 0; c < l; ++c) s[c] = this._xforms[c];
                    s[c] = b;
                    for (var g = c + 1; c < this.numberOfItems; ++g, ++c) s[g] = this._xforms[c];
                    this.numberOfItems++;
                    this._xforms = s;
                    s = b;
                    this._list._update()
                } else s = this._list.appendItem(b);
            return s
        };
        this.replaceItem = function(b, l) {
            var s = null;
            if (l < this.numberOfItems && l >= 0) {
                this._removeFromOtherLists(b);
                s = this._xforms[l] = b;
                this._list._update()
            }
            return s
        };
        this.removeItem = function(b) {
            if (b < this.numberOfItems && b >= 0) {
                for (var l = this._xforms[b], s = Array(this.numberOfItems -
                        1), c = 0; c < b; ++c) s[c] = this._xforms[c];
                for (b = c; b < this.numberOfItems - 1; ++b, ++c) s[b] = this._xforms[c + 1];
                this.numberOfItems--;
                this._xforms = s;
                this._list._update();
                return l
            } else throw {
                code: 1
            };
        };
        this.appendItem = function(b) {
            this._removeFromOtherLists(b);
            this._xforms.push(b);
            this.numberOfItems++;
            this._list._update();
            return b
        }
    };
    svgedit.transformlist.resetListMap = function() {
        o = {}
    };
    svgedit.transformlist.removeElementFromListMap = function(e) {
        e.id && o[e.id] && delete o[e.id]
    };
    svgedit.transformlist.getTransformList = function(e) {
        if (svgedit.browser.supportsNativeTransformLists())
            if (e.transform) return e.transform.baseVal;
            else if (e.gradientTransform) return e.gradientTransform.baseVal;
        else {
            if (e.patternTransform) return e.patternTransform.baseVal
        } else {
            var b = e.id;
            b || (b = "temp");
            var l = o[b];
            if (!l || b == "temp") {
                o[b] = new svgedit.transformlist.SVGTransformList(e);
                o[b]._init();
                l = o[b]
            }
            return l
        }
        return null
    }
})();
svgedit = svgedit || {};
(function() {
    if (!svgedit.math) svgedit.math = {};
    var a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgedit.math.transformPoint = function(o, e, b) {
        return {
            x: b.a * o + b.c * e + b.e,
            y: b.b * o + b.d * e + b.f
        }
    };
    svgedit.math.isIdentity = function(o) {
        return o.a === 1 && o.b === 0 && o.c === 0 && o.d === 1 && o.e === 0 && o.f === 0
    };
    svgedit.math.matrixMultiply = function() {
        for (var o = arguments, e = o.length, b = o[e - 1]; e-- > 1;) b = o[e - 1].multiply(b);
        if (Math.abs(b.a) < 1.0E-14) b.a = 0;
        if (Math.abs(b.b) < 1.0E-14) b.b = 0;
        if (Math.abs(b.c) < 1.0E-14) b.c = 0;
        if (Math.abs(b.d) <
            1.0E-14) b.d = 0;
        if (Math.abs(b.e) < 1.0E-14) b.e = 0;
        if (Math.abs(b.f) < 1.0E-14) b.f = 0;
        return b
    };
    svgedit.math.hasMatrixTransform = function(o) {
        if (!o) return false;
        for (var e = o.numberOfItems; e--;) {
            var b = o.getItem(e);
            if (b.type == 1 && !svgedit.math.isIdentity(b.matrix)) return true
        }
        return false
    };
    svgedit.math.transformBox = function(o, e, b, l, s) {
        var c = {
                x: o,
                y: e
            },
            g = {
                x: o + b,
                y: e
            };
        b = {
            x: o + b,
            y: e + l
        };
        o = {
            x: o,
            y: e + l
        };
        e = svgedit.math.transformPoint;
        c = e(c.x, c.y, s);
        var d = l = c.x,
            p = c.y,
            w = c.y;
        g = e(g.x, g.y, s);
        l = Math.min(l, g.x);
        d = Math.max(d, g.x);
        p = Math.min(p, g.y);
        w = Math.max(w, g.y);
        o = e(o.x, o.y, s);
        l = Math.min(l, o.x);
        d = Math.max(d, o.x);
        p = Math.min(p, o.y);
        w = Math.max(w, o.y);
        b = e(b.x, b.y, s);
        l = Math.min(l, b.x);
        d = Math.max(d, b.x);
        p = Math.min(p, b.y);
        w = Math.max(w, b.y);
        return {
            tl: c,
            tr: g,
            bl: o,
            br: b,
            aabox: {
                x: l,
                y: p,
                width: d - l,
                height: w - p
            }
        }
    };
    svgedit.math.transformListToTransform = function(o, e, b) {
        if (o == null) return a.createSVGTransformFromMatrix(a.createSVGMatrix());
        e = e == undefined ? 0 : e;
        b = b == undefined ? o.numberOfItems - 1 : b;
        e = parseInt(e);
        b = parseInt(b);
        if (e > b) {
            var l = b;
            b = e;
            e = l
        }
        l = a.createSVGMatrix();
        for (e = e; e <= b; ++e) {
            var s = e >= 0 && e < o.numberOfItems ? o.getItem(e).matrix : a.createSVGMatrix();
            l = svgedit.math.matrixMultiply(l, s)
        }
        return a.createSVGTransformFromMatrix(l)
    };
    svgedit.math.getMatrix = function(o) {
        o = svgedit.transformlist.getTransformList(o);
        return svgedit.math.transformListToTransform(o).matrix
    };
    svgedit.math.snapToAngle = function(o, e, b, l) {
        var s = Math.PI / 4;
        b = b - o;
        var c = l - e;
        l = Math.sqrt(b * b + c * c);
        s = Math.round(Math.atan2(c, b) / s) * s;
        return {
            x: o + l * Math.cos(s),
            y: e + l * Math.sin(s),
            a: s
        }
    };
    svgedit.math.rectsIntersect = function(o, e) {
        if (!o || !e) return false;
        return e.x < o.x + o.width && e.x + e.width > o.x && e.y < o.y + o.height && e.y + e.height > o.y
    }
})();
svgedit = svgedit || {};
(function() {
    if (!svgedit.units) svgedit.units = {};
    var a = ["x", "x1", "cx", "rx", "width"],
        o = ["y", "y1", "cy", "ry", "height"],
        e = $.merge(["r", "radius"], a);
    $.merge(e, o);
    var b, l = {
        px: 1
    };
    svgedit.units.init = function(c) {
        b = c;
        c = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        document.body.appendChild(c);
        var g = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        g.setAttribute("width", "1em");
        g.setAttribute("height", "1ex");
        g.setAttribute("x", "1in");
        c.appendChild(g);
        g = g.getBBox();
        document.body.removeChild(c);
        c = g.x;
        l.em = g.width;
        l.ex = g.height;
        l["in"] = c;
        l.cm = c / 2.54;
        l.mm = c / 25.4;
        l.pt = c / 72;
        l.pc = c / 6;
        l["%"] = 0
    };
    svgedit.units.getTypeMap = function() {
        return l
    };
    svgedit.units.shortFloat = function(c) {
        var g = b.getRoundDigits();
        if (isNaN(c)) {
            if ($.isArray(c)) return svgedit.units.shortFloat(c[0]) + "," + svgedit.units.shortFloat(c[1])
        } else return +(+c).toFixed(g);
        return parseFloat(c).toFixed(g) - 0
    };
    svgedit.units.convertUnit = function(c, g) {
        g = g || b.getBaseUnit();
        return svgedit.unit.shortFloat(c / l[g])
    };
    svgedit.units.setUnitAttr = function(c,
        g, d) {
        isNaN(d) || c.getAttribute(g);
        c.setAttribute(g, d)
    };
    var s = {
        line: ["x1", "x2", "y1", "y2"],
        circle: ["cx", "cy", "r"],
        ellipse: ["cx", "cy", "rx", "ry"],
        foreignObject: ["x", "y", "width", "height"],
        rect: ["x", "y", "width", "height"],
        image: ["x", "y", "width", "height"],
        use: ["x", "y", "width", "height"],
        text: ["x", "y"]
    };
    svgedit.units.convertAttrs = function(c) {
        var g = c.tagName,
            d = b.getBaseUnit();
        if (g = s[g])
            for (var p = g.length, w = 0; w < p; w++) {
                var C = g[w],
                    v = c.getAttribute(C);
                if (v) isNaN(v) || c.setAttribute(C, v / l[d] + d)
            }
    };
    svgedit.units.convertToNum =
        function(c, g) {
            if (!isNaN(g)) return g - 0;
            if (g.substr(-1) === "%") {
                var d = g.substr(0, g.length - 1) / 100,
                    p = b.getWidth(),
                    w = b.getHeight();
                return a.indexOf(c) >= 0 ? d * p : o.indexOf(c) >= 0 ? d * w : d * Math.sqrt(p * p + w * w) / Math.sqrt(2)
            } else {
                p = g.substr(-2);
                d = g.substr(0, g.length - 2);
                return d * l[p]
            }
        };
    svgedit.units.isValidUnit = function(c, g, d) {
        var p = false;
        if (e.indexOf(c) >= 0)
            if (isNaN(g)) {
                g = g.toLowerCase();
                $.each(l, function(v) {
                    if (!p)
                        if (RegExp("^-?[\\d\\.]+" + v + "$").test(g)) p = true
                })
            } else p = true;
        else if (c == "id") {
            c = false;
            try {
                var w = b.getElement(g);
                c = w == null || w === d
            } catch (C) {}
            return c
        } else p = true;
        return p
    }
})();
svgedit = svgedit || {};
(function() {
    function a(c) {
        if (svgedit.browser.supportsHVLineContainerBBox()) try {
            return c.getBBox()
        } catch (g) {}
        var d = $.data(c, "ref"),
            p = null;
        if (d) {
            var w = $(d).children().clone().attr("visibility", "hidden");
            $(s).append(w);
            p = w.filter("line, path")
        } else p = $(c).find("line, path");
        var C = false;
        if (p.length) {
            p.each(function() {
                var v = this.getBBox();
                if (!v.width || !v.height) C = true
            });
            if (C) {
                c = d ? w : $(c).children();
                ret = getStrokedBBox(c)
            } else ret = c.getBBox()
        } else ret = c.getBBox();
        d && w.remove();
        return ret
    }
    if (!svgedit.utilities) svgedit.utilities = {};
    var o = "a,circle,ellipse,foreignObject,g,image,line,path,polygon,polyline,rect,svg,text,tspan,use".split(","),
        e = null,
        b = null,
        l = null,
        s = null;
    svgedit.utilities.init = function(c) {
        e = c;
        b = c.getDOMDocument();
        l = c.getDOMContainer();
        s = c.getSVGRoot()
    };
    svgedit.utilities.toXml = function(c) {
        return $("<p/>").text(c).html()
    };
    svgedit.utilities.fromXml = function(c) {
        return $("<p/>").html(c).text()
    };
    svgedit.utilities.encode64 = function(c) {
        c = svgedit.utilities.convertToXMLReferences(c);
        if (window.btoa) return window.btoa(c);
        var g = Array(Math.floor((c.length + 2) / 3) * 4),
            d, p, w, C, v, L, Q = 0,
            J = 0;
        do {
            d = c.charCodeAt(Q++);
            p = c.charCodeAt(Q++);
            w = c.charCodeAt(Q++);
            C = d >> 2;
            d = (d & 3) << 4 | p >> 4;
            v = (p & 15) << 2 | w >> 6;
            L = w & 63;
            if (isNaN(p)) v = L = 64;
            else if (isNaN(w)) L = 64;
            g[J++] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(C);
            g[J++] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(d);
            g[J++] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(v);
            g[J++] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(L)
        } while (Q <
            c.length);
        return g.join("")
    };
    svgedit.utilities.decode64 = function(c) {
        if (window.atob) return window.atob(c);
        var g = "",
            d, p, w = "",
            C, v = "",
            L = 0;
        c = c.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        do {
            d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(c.charAt(L++));
            p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(c.charAt(L++));
            C = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(c.charAt(L++));
            v = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(c.charAt(L++));
            d = d << 2 | p >> 4;
            p = (p & 15) << 4 | C >> 2;
            w = (C & 3) << 6 | v;
            g += String.fromCharCode(d);
            if (C != 64) g += String.fromCharCode(p);
            if (v != 64) g += String.fromCharCode(w)
        } while (L < c.length);
        return unescape(g)
    };
    svgedit.utilities.convertToXMLReferences = function(c) {
        for (var g = "", d = 0; d < c.length; d++) {
            var p = c.charCodeAt(d);
            if (p < 128) g += c[d];
            else if (p > 127) g += "&#" + p + ";"
        }
        return g
    };
    svgedit.utilities.text2xml = function(c) {
        if (c.indexOf("<svg:svg") >= 0) c = c.replace(/<(\/?)svg:/g, "<$1").replace("xmlns:svg", "xmlns");
        var g;
        try {
            var d = window.DOMParser ?
                new DOMParser : new ActiveXObject("Microsoft.XMLDOM");
            d.async = false
        } catch (p) {
            throw Error("XML Parser could not be instantiated");
        }
        try {
            g = d.loadXML ? d.loadXML(c) ? d : false : d.parseFromString(c, "text/xml")
        } catch (w) {
            throw Error("Error parsing XML string");
        }
        return g
    };
    svgedit.utilities.bboxToObj = function(c) {
        return {
            x: c.x,
            y: c.y,
            width: c.width,
            height: c.height
        }
    };
    svgedit.utilities.walkTree = function(c, g) {
        if (c && c.nodeType == 1) {
            g(c);
            for (var d = c.childNodes.length; d--;) svgedit.utilities.walkTree(c.childNodes.item(d), g)
        }
    };
    svgedit.utilities.walkTreePost = function(c, g) {
        if (c && c.nodeType == 1) {
            for (var d = c.childNodes.length; d--;) svgedit.utilities.walkTree(c.childNodes.item(d), g);
            g(c)
        }
    };
    svgedit.utilities.getUrlFromAttr = function(c) {
        if (c)
            if (c.indexOf('url("') === 0) return c.substring(5, c.indexOf('"', 6));
            else if (c.indexOf("url('") === 0) return c.substring(5, c.indexOf("'", 6));
        else if (c.indexOf("url(") === 0) return c.substring(4, c.indexOf(")"));
        return null
    };
    svgedit.utilities.getHref = function(c) {
        if (c) return c.getAttributeNS("http://www.w3.org/1999/xlink",
            "href")
    };
    svgedit.utilities.setHref = function(c, g) {
        c.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", g)
    };
    svgedit.utilities.findDefs = function(c) {
        c = e.getSVGContent().documentElement;
        var g = c.getElementsByTagNameNS("http://www.w3.org/2000/svg", "defs");
        return g = g.length > 0 ? g[0] : c.insertBefore(c.ownerDocument.createElementNS("http://www.w3.org/2000/svg", "defs"), c.firstChild.nextSibling)
    };
    svgedit.utilities.getPathBBox = function(c) {
        var g = c.pathSegList,
            d = g.numberOfItems;
        c = [
            [],
            []
        ];
        var p = g.getItem(0),
            w = [p.x, p.y];
        for (p = 0; p < d; p++) {
            var C = g.getItem(p);
            if (typeof C.x != "undefined") {
                c[0].push(w[0]);
                c[1].push(w[1]);
                if (C.x1) {
                    for (var v = [C.x1, C.y1], L = [C.x2, C.y2], Q = [C.x, C.y], J = 0; J < 2; J++) {
                        C = function(ca) {
                            return Math.pow(1 - ca, 3) * w[J] + 3 * Math.pow(1 - ca, 2) * ca * v[J] + 3 * (1 - ca) * Math.pow(ca, 2) * L[J] + Math.pow(ca, 3) * Q[J]
                        };
                        var H = 6 * w[J] - 12 * v[J] + 6 * L[J],
                            U = -3 * w[J] + 9 * v[J] - 9 * L[J] + 3 * Q[J],
                            R = 3 * v[J] - 3 * w[J];
                        if (U == 0) {
                            if (H != 0) {
                                H = -R / H;
                                0 < H && H < 1 && c[J].push(C(H))
                            }
                        } else {
                            R = Math.pow(H, 2) - 4 * R * U;
                            if (!(R < 0)) {
                                var N = (-H + Math.sqrt(R)) / (2 * U);
                                0 < N && N <
                                    1 && c[J].push(C(N));
                                H = (-H - Math.sqrt(R)) / (2 * U);
                                0 < H && H < 1 && c[J].push(C(H))
                            }
                        }
                    }
                    w = Q
                } else {
                    c[0].push(C.x);
                    c[1].push(C.y)
                }
            }
        }
        g = Math.min.apply(null, c[0]);
        d = Math.max.apply(null, c[0]) - g;
        p = Math.min.apply(null, c[1]);
        c = Math.max.apply(null, c[1]) - p;
        return {
            x: g,
            y: p,
            width: d,
            height: c
        }
    };
    svgedit.utilities.getBBox = function(c) {
        var g = c || e.getSelectedElements()[0];
        if (c.nodeType != 1) return null;
        c = null;
        var d = g.nodeName;
        switch (d) {
            case "text":
                if (g.textContent === "") {
                    g.textContent = "a";
                    c = g.getBBox();
                    g.textContent = ""
                } else try {
                    c = g.getBBox()
                } catch (p) {}
                break;
            case "path":
                if (svgedit.browser.supportsPathBBox()) try {
                    c = g.getBBox()
                } catch (w) {} else c = svgedit.utilities.getPathBBox(g);
                break;
            case "g":
            case "a":
                c = a(g);
                break;
            default:
                if (d === "use") c = a(g, true);
                if (d === "use") c || (c = g.getBBox());
                else if (~o.indexOf(d)) try {
                    c = g.getBBox()
                } catch (C) {
                    g = $(g).closest("foreignObject");
                    if (g.length) try {
                        c = g[0].getBBox()
                    } catch (v) {
                        c = null
                    } else c = null
                }
        }
        if (c) c = svgedit.utilities.bboxToObj(c);
        return c
    };
    svgedit.utilities.getRotationAngle = function(c, g) {
        var d = c || e.getSelectedElements()[0];
        d = svgedit.transformlist.getTransformList(d);
        if (!d) return 0;
        for (var p = d.numberOfItems, w = 0; w < p; ++w) {
            var C = d.getItem(w);
            if (C.type == 4) return g ? C.angle * Math.PI / 180 : C.angle
        }
        return 0
    };
    svgedit.utilities.getElem = svgedit.browser.supportsSelectors() ? function(c) {
        return s.querySelector("#" + c)
    } : svgedit.browser.supportsXpath() ? function(c) {
        return b.evaluate('svg:svg[@id="svgroot"]//svg:*[@id="' + c + '"]', l, function() {
            return "http://www.w3.org/2000/svg"
        }, 9, null).singleNodeValue
    } : function(c) {
        return $(s).find("[id=" + c + "]")[0]
    };
    svgedit.utilities.assignAttributes =
        function(c, g, d, p) {
            for (var w in g)
                if (d = w.substr(0, 4) === "xml:" ? "http://www.w3.org/XML/1998/namespace" : w.substr(0, 6) === "xlink:" ? "http://www.w3.org/1999/xlink" : null) c.setAttributeNS(d, w, g[w]);
                else p ? svgedit.units.setUnitAttr(c, w, g[w]) : c.setAttribute(w, g[w])
        };
    svgedit.utilities.cleanupElement = function(c) {
        var g = {
                "fill-opacity": 1,
                "stop-opacity": 1,
                opacity: 1,
                stroke: "none",
                "stroke-dasharray": "none",
                "stroke-linejoin": "miter",
                "stroke-linecap": "butt",
                "stroke-opacity": 1,
                "stroke-width": 1,
                rx: 0,
                ry: 0
            },
            d;
        for (d in g) {
            var p =
                g[d];
            c.getAttribute(d) == p && c.removeAttribute(d)
        }
    }
})();
svgedit = svgedit || {};
(function() {
    if (!svgedit.sanitize) svgedit.sanitize = {};
    var a = {};
    a["http://www.w3.org/1999/xlink"] = "xlink";
    a["http://www.w3.org/XML/1998/namespace"] = "xml";
    a["http://www.w3.org/2000/xmlns/"] = "xmlns";
    a["http://svg-edit.googlecode.com"] = "se";
    a["http://www.w3.org/1999/xhtml"] = "xhtml";
    a["http://www.w3.org/1998/Math/MathML"] = "mathml";
    var o = {};
    $.each(a, function(l, s) {
        o[s] = l
    });
    var e = {
            a: ["class", "clip-path", "clip-rule", "fill", "fill-opacity", "fill-rule", "filter", "id", "mask", "opacity", "stroke", "stroke-dasharray",
                "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "transform", "xlink:href", "xlink:title"
            ],
            circle: ["class", "clip-path", "clip-rule", "cx", "cy", "fill", "fill-opacity", "fill-rule", "filter", "id", "mask", "opacity", "r", "requiredFeatures", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "transform"],
            clipPath: ["class",
                "clipPathUnits", "id"
            ],
            defs: [],
            style: ["type"],
            desc: [],
            ellipse: ["class", "clip-path", "clip-rule", "cx", "cy", "fill", "fill-opacity", "fill-rule", "filter", "id", "mask", "opacity", "requiredFeatures", "rx", "ry", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "transform"],
            feGaussianBlur: ["class", "color-interpolation-filters", "id", "requiredFeatures", "stdDeviation"],
            filter: ["class", "color-interpolation-filters",
                "filterRes", "filterUnits", "height", "id", "primitiveUnits", "requiredFeatures", "width", "x", "xlink:href", "y"
            ],
            foreignObject: ["class", "font-size", "height", "id", "opacity", "requiredFeatures", "style", "transform", "width", "x", "y"],
            g: ["class", "clip-path", "clip-rule", "id", "display", "fill", "fill-opacity", "fill-rule", "filter", "mask", "opacity", "requiredFeatures", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage",
                "transform", "font-family", "font-size", "font-style", "font-weight", "text-anchor", "data-locked"
            ],
            image: ["class", "clip-path", "clip-rule", "filter", "height", "id", "mask", "opacity", "requiredFeatures", "style", "systemLanguage", "transform", "width", "x", "xlink:href", "xlink:title", "y"],
            line: ["shape-rendering", "class", "clip-path", "clip-rule", "fill", "fill-opacity", "fill-rule", "filter", "id", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "requiredFeatures", "stroke", "stroke-dasharray", "stroke-dashoffset",
                "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "transform", "x1", "x2", "y1", "y2"
            ],
            linearGradient: ["class", "id", "gradientTransform", "gradientUnits", "requiredFeatures", "spreadMethod", "systemLanguage", "x1", "x2", "xlink:href", "y1", "y2"],
            marker: ["id", "class", "markerHeight", "markerUnits", "markerWidth", "orient", "preserveAspectRatio", "refX", "refY", "systemLanguage", "viewBox"],
            mask: ["class", "height", "id", "maskContentUnits", "maskUnits", "width", "x",
                "y"
            ],
            metadata: ["class", "id"],
            path: ["class", "clip-path", "clip-rule", "d", "fill", "fill-opacity", "fill-rule", "filter", "id", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "requiredFeatures", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "transform"],
            pattern: ["class", "height", "id", "patternContentUnits", "patternTransform", "patternUnits", "requiredFeatures", "style", "systemLanguage", "viewBox",
                "width", "x", "xlink:href", "y"
            ],
            polygon: ["class", "clip-path", "clip-rule", "id", "fill", "fill-opacity", "fill-rule", "filter", "id", "class", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "points", "requiredFeatures", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "transform"],
            polyline: ["class", "clip-path", "clip-rule", "id", "fill", "fill-opacity", "fill-rule", "filter", "marker-end", "marker-mid",
                "marker-start", "mask", "opacity", "points", "requiredFeatures", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "transform"
            ],
            radialGradient: ["class", "cx", "cy", "fx", "fy", "gradientTransform", "gradientUnits", "id", "r", "requiredFeatures", "spreadMethod", "systemLanguage", "xlink:href"],
            rect: ["shape-rendering", "class", "clip-path", "clip-rule", "fill", "fill-opacity", "fill-rule", "filter", "height", "id", "mask",
                "opacity", "requiredFeatures", "rx", "ry", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "transform", "width", "x", "y"
            ],
            stop: ["class", "id", "offset", "requiredFeatures", "stop-color", "stop-opacity", "style", "systemLanguage"],
            svg: ["class", "clip-path", "clip-rule", "filter", "id", "height", "mask", "preserveAspectRatio", "requiredFeatures", "style", "systemLanguage", "viewBox", "width", "x", "xmlns", "xmlns:se",
                "xmlns:xlink", "y"
            ],
            "switch": ["class", "id", "requiredFeatures", "systemLanguage"],
            symbol: ["class", "fill", "fill-opacity", "fill-rule", "filter", "font-family", "font-size", "font-style", "font-weight", "id", "opacity", "preserveAspectRatio", "requiredFeatures", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "transform", "viewBox"],
            text: ["class", "clip-path", "clip-rule", "fill", "fill-opacity", "fill-rule",
                "filter", "font-family", "font-size", "font-style", "font-weight", "id", "mask", "opacity", "requiredFeatures", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "text-anchor", "transform", "x", "xml:space", "y"
            ],
            textPath: ["class", "id", "method", "requiredFeatures", "spacing", "startOffset", "style", "systemLanguage", "transform", "xlink:href"],
            title: [],
            tspan: ["class", "clip-path", "clip-rule", "dx", "dy", "fill",
                "fill-opacity", "fill-rule", "filter", "font-family", "font-size", "font-style", "font-weight", "id", "mask", "opacity", "requiredFeatures", "rotate", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "text-anchor", "textLength", "transform", "x", "xml:space", "y"
            ],
            use: ["class", "clip-path", "clip-rule", "fill", "fill-opacity", "fill-rule", "filter", "height", "id", "mask", "stroke", "stroke-dasharray", "stroke-dashoffset",
                "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "transform", "width", "x", "xlink:href", "y"
            ],
            annotation: ["encoding"],
            "annotation-xml": ["encoding"],
            maction: ["actiontype", "other", "selection"],
            math: ["class", "id", "display", "xmlns"],
            menclose: ["notation"],
            merror: [],
            mfrac: ["linethickness"],
            mi: ["mathvariant"],
            mmultiscripts: [],
            mn: [],
            mo: ["fence", "lspace", "maxsize", "minsize", "rspace", "stretchy"],
            mover: [],
            mpadded: ["lspace", "width", "height", "depth", "voffset"],
            mphantom: [],
            mprescripts: [],
            mroot: [],
            mrow: ["xlink:href", "xlink:type", "xmlns:xlink"],
            mspace: ["depth", "height", "width"],
            msqrt: [],
            mstyle: ["displaystyle", "mathbackground", "mathcolor", "mathvariant", "scriptlevel"],
            msub: [],
            msubsup: [],
            msup: [],
            mtable: ["align", "columnalign", "columnlines", "columnspacing", "displaystyle", "equalcolumns", "equalrows", "frame", "rowalign", "rowlines", "rowspacing", "width"],
            mtd: ["columnalign", "columnspan", "rowalign", "rowspan"],
            mtext: [],
            mtr: ["columnalign", "rowalign"],
            munder: [],
            munderover: [],
            none: [],
            semantics: []
        },
        b = {};
    $.each(e, function(l, s) {
        var c = {};
        $.each(s, function(g, d) {
            if (d.indexOf(":") >= 0) {
                var p = d.split(":");
                c[p[1]] = o[p[0]]
            } else c[d] = d == "xmlns" ? "http://www.w3.org/2000/xmlns/" : null
        });
        b[l] = c
    });
    svgedit.sanitize.getNSMap = function() {
        return a
    };
    svgedit.sanitize.sanitizeSvg = function(l) {
        if (l.nodeType == 3) {
            l.nodeValue = l.nodeValue.replace(/^\s+|\s+$/g, "");
            l.nodeValue.length || l.parentNode.removeChild(l)
        }
        if (l.nodeType == 1) {
            var s = l.parentNode;
            if (l.ownerDocument && s) {
                var c = e[l.nodeName],
                    g = b[l.nodeName];
                if (c !=
                    undefined) {
                    for (var d = [], p = l.attributes.length; p--;) {
                        var w = l.attributes.item(p),
                            C = w.nodeName,
                            v = w.localName,
                            L = w.namespaceURI;
                        if (!(g.hasOwnProperty(v) && L == g[v] && L != "http://www.w3.org/2000/xmlns/") && !(L == "http://www.w3.org/2000/xmlns/" && a[w.nodeValue])) {
                            C.indexOf("se:") == 0 && d.push([C, w.nodeValue]);
                            l.removeAttributeNS(L, v)
                        }
                        if (svgedit.browser.isGecko()) switch (C) {
                            case "transform":
                            case "gradientTransform":
                            case "patternTransform":
                                v = w.nodeValue.replace(/(\d)-/g, "$1 -");
                                l.setAttribute(C, v)
                        }
                        if (C == "style") {
                            w =
                                w.nodeValue.split(";");
                            for (C = w.length; C--;) {
                                v = w[C].split(":");
                                c.indexOf(v[0]) >= 0 && l.setAttribute(v[0], v[1])
                            }
                            l.removeAttribute("style")
                        }
                    }
                    $.each(d, function(Q, J) {
                        l.setAttributeNS("http://svg-edit.googlecode.com", J[0], J[1])
                    });
                    if ((p = svgedit.utilities.getHref(l)) && ["filter", "linearGradient", "pattern", "radialGradient", "textPath", "use"].indexOf(l.nodeName) >= 0)
                        if (p[0] != "#") {
                            svgedit.utilities.setHref(l, "");
                            l.removeAttributeNS("http://www.w3.org/1999/xlink", "href")
                        }
                    if (l.nodeName == "use" && !svgedit.utilities.getHref(l)) s.removeChild(l);
                    else {
                        $.each(["clip-path", "fill", "filter", "marker-end", "marker-mid", "marker-start", "mask", "stroke"], function(Q, J) {
                            var H = l.getAttribute(J);
                            if (H)
                                if ((H = svgedit.utilities.getUrlFromAttr(H)) && H[0] !== "#") {
                                    l.setAttribute(J, "");
                                    l.removeAttribute(J)
                                }
                        });
                        for (p = l.childNodes.length; p--;) svgedit.sanitize.sanitizeSvg(l.childNodes.item(p))
                    }
                } else {
                    for (c = []; l.hasChildNodes();) c.push(s.insertBefore(l.firstChild, l));
                    s.removeChild(l);
                    for (p = c.length; p--;) svgedit.sanitize.sanitizeSvg(c[p])
                }
            }
        }
    }
})();
svgedit = svgedit || {};
(function() {
    if (!svgedit.history) svgedit.history = {};
    svgedit.history.HistoryEventTypes = {
        BEFORE_APPLY: "before_apply",
        AFTER_APPLY: "after_apply",
        BEFORE_UNAPPLY: "before_unapply",
        AFTER_UNAPPLY: "after_unapply"
    };
    svgedit.history.MoveElementCommand = function(a, o, e, b) {
        this.elem = a;
        this.text = b ? "Move " + a.tagName + " to " + b : "Move " + a.tagName;
        this.oldNextSibling = o;
        this.oldParent = e;
        this.newNextSibling = a.nextSibling;
        this.newParent = a.parentNode
    };
    svgedit.history.MoveElementCommand.type = function() {
        return "svgedit.history.MoveElementCommand"
    };
    svgedit.history.MoveElementCommand.prototype.type =
        svgedit.history.MoveElementCommand.type;
    svgedit.history.MoveElementCommand.prototype.getText = function() {
        return this.text
    };
    svgedit.history.MoveElementCommand.prototype.apply = function(a) {
        a && a.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_APPLY, this);
        this.elem = this.newParent.insertBefore(this.elem, this.newNextSibling);
        a && a.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_APPLY, this)
    };
    svgedit.history.MoveElementCommand.prototype.unapply = function(a) {
        a && a.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_UNAPPLY,
            this);
        this.elem = this.oldParent.insertBefore(this.elem, this.oldNextSibling);
        a && a.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_UNAPPLY, this)
    };
    svgedit.history.MoveElementCommand.prototype.elements = function() {
        return [this.elem]
    };
    svgedit.history.InsertElementCommand = function(a, o) {
        this.elem = a;
        this.text = o || "Create " + a.tagName;
        this.parent = a.parentNode;
        this.nextSibling = this.elem.nextSibling
    };
    svgedit.history.InsertElementCommand.type = function() {
        return "svgedit.history.InsertElementCommand"
    };
    svgedit.history.InsertElementCommand.prototype.type =
        svgedit.history.InsertElementCommand.type;
    svgedit.history.InsertElementCommand.prototype.getText = function() {
        return this.text
    };
    svgedit.history.InsertElementCommand.prototype.apply = function(a) {
        a && a.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_APPLY, this);
        this.elem = this.parent.insertBefore(this.elem, this.nextSibling);
        a && a.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_APPLY, this)
    };
    svgedit.history.InsertElementCommand.prototype.unapply = function(a) {
        a && a.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_UNAPPLY,
            this);
        this.parent = this.elem.parentNode;
        this.elem = this.elem.parentNode.removeChild(this.elem);
        a && a.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_UNAPPLY, this)
    };
    svgedit.history.InsertElementCommand.prototype.elements = function() {
        return [this.elem]
    };
    svgedit.history.RemoveElementCommand = function(a, o, e, b) {
        this.elem = a;
        this.text = b || "Delete " + a.tagName;
        this.nextSibling = o;
        this.parent = e;
        svgedit.transformlist.removeElementFromListMap(a)
    };
    svgedit.history.RemoveElementCommand.type = function() {
        return "svgedit.history.RemoveElementCommand"
    };
    svgedit.history.RemoveElementCommand.prototype.type = svgedit.history.RemoveElementCommand.type;
    svgedit.history.RemoveElementCommand.prototype.getText = function() {
        return this.text
    };
    svgedit.history.RemoveElementCommand.prototype.apply = function(a) {
        a && a.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_APPLY, this);
        svgedit.transformlist.removeElementFromListMap(this.elem);
        this.parent = this.elem.parentNode;
        this.elem = this.parent.removeChild(this.elem);
        a && a.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_APPLY,
            this)
    };
    svgedit.history.RemoveElementCommand.prototype.unapply = function(a) {
        a && a.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_UNAPPLY, this);
        svgedit.transformlist.removeElementFromListMap(this.elem);
        this.nextSibling == null && window.console && console.log("Error: reference element was lost");
        this.parent.insertBefore(this.elem, this.nextSibling);
        a && a.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_UNAPPLY, this)
    };
    svgedit.history.RemoveElementCommand.prototype.elements = function() {
        return [this.elem]
    };
    svgedit.history.ChangeElementCommand = function(a, o, e) {
        this.elem = a;
        this.text = e ? "Change " + a.tagName + " " + e : "Change " + a.tagName;
        this.newValues = {};
        this.oldValues = o;
        for (var b in o) this.newValues[b] = b == "#text" ? a.textContent : b == "#href" ? svgedit.utilities.getHref(a) : a.getAttribute(b)
    };
    svgedit.history.ChangeElementCommand.type = function() {
        return "svgedit.history.ChangeElementCommand"
    };
    svgedit.history.ChangeElementCommand.prototype.type = svgedit.history.ChangeElementCommand.type;
    svgedit.history.ChangeElementCommand.prototype.getText =
        function() {
            return this.text
        };
    svgedit.history.ChangeElementCommand.prototype.apply = function(a) {
        a && a.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_APPLY, this);
        var o = false,
            e;
        for (e in this.newValues) {
            if (this.newValues[e])
                if (e == "#text") this.elem.textContent = this.newValues[e];
                else e == "#href" ? svgedit.utilities.setHref(this.elem, this.newValues[e]) : this.elem.setAttribute(e, this.newValues[e]);
            else if (e == "#text") this.elem.textContent = "";
            else {
                this.elem.setAttribute(e, "");
                this.elem.removeAttribute(e)
            }
            if (e ==
                "transform") o = true
        }
        if (!o)
            if (o = svgedit.utilities.getRotationAngle(this.elem)) {
                e = elem.getBBox();
                o = ["rotate(", o, " ", e.x + e.width / 2, ",", e.y + e.height / 2, ")"].join("");
                o != elem.getAttribute("transform") && elem.setAttribute("transform", o)
            }
        a && a.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_APPLY, this);
        return true
    };
    svgedit.history.ChangeElementCommand.prototype.unapply = function(a) {
        a && a.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_UNAPPLY, this);
        var o = false,
            e;
        for (e in this.oldValues) {
            if (this.oldValues[e])
                if (e ==
                    "#text") this.elem.textContent = this.oldValues[e];
                else e == "#href" ? svgedit.utilities.setHref(this.elem, this.oldValues[e]) : this.elem.setAttribute(e, this.oldValues[e]);
            else if (e == "#text") this.elem.textContent = "";
            else this.elem.removeAttribute(e);
            if (e == "transform") o = true
        }
        if (!o)
            if (o = svgedit.utilities.getRotationAngle(this.elem)) {
                e = this.elem.getBBox();
                o = ["rotate(", o, " ", e.x + e.width / 2, ",", e.y + e.height / 2, ")"].join("");
                o != this.elem.getAttribute("transform") && this.elem.setAttribute("transform", o)
            }
        svgedit.transformlist.removeElementFromListMap(this.elem);
        a && a.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_UNAPPLY, this);
        return true
    };
    svgedit.history.ChangeElementCommand.prototype.elements = function() {
        return [this.elem]
    };
    svgedit.history.BatchCommand = function(a) {
        this.text = a || "Batch Command";
        this.stack = []
    };
    svgedit.history.BatchCommand.type = function() {
        return "svgedit.history.BatchCommand"
    };
    svgedit.history.BatchCommand.prototype.type = svgedit.history.BatchCommand.type;
    svgedit.history.BatchCommand.prototype.getText = function() {
        return this.text
    };
    svgedit.history.BatchCommand.prototype.apply =
        function(a) {
            a && a.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_APPLY, this);
            for (var o = this.stack.length, e = 0; e < o; ++e) this.stack[e].apply(a);
            a && a.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_APPLY, this)
        };
    svgedit.history.BatchCommand.prototype.unapply = function(a) {
        a && a.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_UNAPPLY, this);
        for (var o = this.stack.length - 1; o >= 0; o--) this.stack[o].unapply(a);
        a && a.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_UNAPPLY,
            this)
    };
    svgedit.history.BatchCommand.prototype.elements = function() {
        for (var a = [], o = this.stack.length; o--;)
            for (var e = this.stack[o].elements(), b = e.length; b--;) a.indexOf(e[b]) == -1 && a.push(e[b]);
        return a
    };
    svgedit.history.BatchCommand.prototype.addSubCommand = function(a) {
        this.stack.push(a)
    };
    svgedit.history.BatchCommand.prototype.isEmpty = function() {
        return this.stack.length == 0
    };
    svgedit.history.UndoManager = function(a) {
        this.handler_ = a || null;
        this.undoStackPointer = 0;
        this.undoStack = [];
        this.undoChangeStackPointer = -1;
        this.undoableChangeStack = []
    };
    svgedit.history.UndoManager.prototype.resetUndoStack = function() {
        this.undoStack = [];
        this.undoStackPointer = 0
    };
    svgedit.history.UndoManager.prototype.getUndoStackSize = function() {
        return this.undoStackPointer
    };
    svgedit.history.UndoManager.prototype.getRedoStackSize = function() {
        return this.undoStack.length - this.undoStackPointer
    };
    svgedit.history.UndoManager.prototype.getNextUndoCommandText = function() {
        return this.undoStackPointer > 0 ? this.undoStack[this.undoStackPointer - 1].getText() :
            ""
    };
    svgedit.history.UndoManager.prototype.getNextRedoCommandText = function() {
        return this.undoStackPointer < this.undoStack.length ? this.undoStack[this.undoStackPointer].getText() : ""
    };
    svgedit.history.UndoManager.prototype.undo = function() {
        this.undoStackPointer > 0 && this.undoStack[--this.undoStackPointer].unapply(this.handler_)
    };
    svgedit.history.UndoManager.prototype.redo = function() {
        this.undoStackPointer < this.undoStack.length && this.undoStack.length > 0 && this.undoStack[this.undoStackPointer++].apply(this.handler_)
    };
    svgedit.history.UndoManager.prototype.addCommandToHistory = function(a) {
        if (this.undoStackPointer < this.undoStack.length && this.undoStack.length > 0) this.undoStack = this.undoStack.splice(0, this.undoStackPointer);
        this.undoStack.push(a);
        this.undoStackPointer = this.undoStack.length
    };
    svgedit.history.UndoManager.prototype.beginUndoableChange = function(a, o) {
        for (var e = ++this.undoChangeStackPointer, b = o.length, l = Array(b), s = Array(b); b--;) {
            var c = o[b];
            if (c != null) {
                s[b] = c;
                l[b] = c.getAttribute(a)
            }
        }
        this.undoableChangeStack[e] = {
            attrName: a,
            oldValues: l,
            elements: s
        }
    };
    svgedit.history.UndoManager.prototype.finishUndoableChange = function() {
        for (var a = this.undoChangeStackPointer--, o = this.undoableChangeStack[a], e = o.elements.length, b = o.attrName, l = new svgedit.history.BatchCommand("Change " + b); e--;) {
            var s = o.elements[e];
            if (s != null) {
                var c = {};
                c[b] = o.oldValues[e];
                c[b] != s.getAttribute(b) && l.addSubCommand(new svgedit.history.ChangeElementCommand(s, c, b))
            }
        }
        this.undoableChangeStack[a] = null;
        return l
    }
})();
svgedit = svgedit || {};
(function() {
    if (!svgedit.select) svgedit.select = {};
    var a, o, e;
    svgedit.select.Selector = function(b, l) {
        this.id = b;
        this.selectedElement = l;
        this.locked = true;
        this.selectorGroup = a.createSVGElement({
            element: "g",
            attr: {
                id: "selectorGroup" + this.id
            }
        });
        this.selectorRect = this.selectorGroup.appendChild(a.createSVGElement({
            element: "path",
            attr: {
                id: "selectedBox" + this.id,
                fill: "none",
                stroke: "#4F80FF",
                "stroke-width": "1",
                "shape-rendering": "crispEdges",
                style: "pointer-events:none"
            }
        }));
        svgedit.browser.isTouch() && this.selectorRect.setAttribute("stroke-opacity",
            0.3);
        this.gripCoords = {
            nw: null,
            n: null,
            ne: null,
            e: null,
            se: null,
            s: null,
            sw: null,
            w: null
        };
        this.reset(this.selectedElement)
    };
    svgedit.select.Selector.prototype.reset = function(b) {
        this.locked = true;
        this.selectedElement = b;
        this.resize();
        this.selectorGroup.setAttribute("display", "inline")
    };
    svgedit.select.Selector.prototype.updateGripCursors = function(b) {
        var l = [];
        b = Math.round(b / 45);
        if (b < 0) b += 8;
        for (var s in e.selectorGrips) l.push(s);
        for (; b > 0;) {
            l.push(l.shift());
            b--
        }
        b = 0;
        for (s in e.selectorGrips) {
            e.selectorGrips[s].setAttribute("style",
                "cursor:" + l[b] + "-resize");
            b++
        }
    };
    svgedit.select.Selector.prototype.showGrips = function(b) {
        e.selectorGripsGroup.setAttribute("display", b ? "inline" : "none");
        var l = this.selectedElement;
        this.hasGrips = b;
        if (l && b) {
            this.selectorGroup.appendChild(e.selectorGripsGroup);
            this.updateGripCursors(svgedit.utilities.getRotationAngle(l))
        }
    };
    svgedit.select.Selector.prototype.resize = function() {
        var b = this.selectorRect,
            l = e,
            s = l.selectorGrips,
            c = this.selectedElement,
            g = c.getAttribute("stroke-width"),
            d = a.currentZoom(),
            p = 1 / d;
        if (c.getAttribute("stroke") !==
            "none" && !isNaN(g)) p += g / 2;
        var w = c.tagName;
        if (w === "text") p += 2 / d;
        g = svgedit.transformlist.getTransformList(c);
        g = svgedit.math.transformListToTransform(g).matrix;
        g.e *= d;
        g.f *= d;
        var C = svgedit.utilities.getBBox(c);
        if (w === "g" && !$.data(c, "gsvg"))
            if (w = a.getStrokedBBox(c.childNodes)) C = w;
        w = C.x;
        var v = C.y,
            L = C.width;
        C = C.height;
        p *= d;
        d = svgedit.math.transformBox(w * d, v * d, L * d, C * d, g);
        g = d.aabox;
        w = g.x - p;
        v = g.y - p;
        var Q = g.width + p * 2;
        L = g.height + p * 2;
        g = w + Q / 2;
        C = v + L / 2;
        if (c = svgedit.utilities.getRotationAngle(c)) {
            w = a.svgRoot().createSVGTransform();
            w.setRotate(-c, g, C);
            w = w.matrix;
            d.tl = svgedit.math.transformPoint(d.tl.x, d.tl.y, w);
            d.tr = svgedit.math.transformPoint(d.tr.x, d.tr.y, w);
            d.bl = svgedit.math.transformPoint(d.bl.x, d.bl.y, w);
            d.br = svgedit.math.transformPoint(d.br.x, d.br.y, w);
            w = d.tl;
            Q = w.x;
            L = w.y;
            var J = w.x,
                H = w.y;
            w = Math.min;
            v = Math.max;
            Q = w(Q, w(d.tr.x, w(d.bl.x, d.br.x))) - p;
            L = w(L, w(d.tr.y, w(d.bl.y, d.br.y))) - p;
            J = v(J, v(d.tr.x, v(d.bl.x, d.br.x))) + p;
            H = v(H, v(d.tr.y, v(d.bl.y, d.br.y))) + p;
            w = Q;
            v = L;
            Q = J - Q;
            L = H - L
        }
        b.setAttribute("d", "M" + w + "," + v + " L" + (w + Q) + "," + v + " " +
            (w + Q) + "," + (v + L) + " " + w + "," + (v + L) + "z");
        this.selectorGroup.setAttribute("transform", c ? "rotate(" + [c, g, C].join(",") + ")" : "");
        if (svgedit.browser.isTouch()) {
            w -= 15.75;
            v -= 15.75
        } else {
            w -= 4;
            v -= 4
        }
        this.gripCoords = {
            nw: [w, v].map(Math.round),
            ne: [w + Q, v].map(Math.round),
            sw: [w, v + L].map(Math.round),
            se: [w + Q, v + L].map(Math.round),
            n: [w + Q / 2, v].map(Math.round),
            w: [w, v + L / 2].map(Math.round),
            e: [w + Q, v + L / 2].map(Math.round),
            s: [w + Q / 2, v + L].map(Math.round)
        };
        for (var U in this.gripCoords) {
            b = this.gripCoords[U];
            s[U].setAttribute("x", b[0]);
            s[U].setAttribute("y", b[1])
        }
        this.rotateCoords = {
            nw: [w, v],
            ne: [w + Q + 8, v],
            sw: [w, v + L + 8],
            se: [w + Q + 8, v + L + 8]
        };
        for (U in this.rotateCoords) {
            b = this.rotateCoords[U];
            l.rotateGrips[U].setAttribute("cx", b[0]);
            l.rotateGrips[U].setAttribute("cy", b[1])
        }
    };
    svgedit.select.SelectorManager = function() {
        this.rubberBandBox = this.selectorParentGroup = null;
        this.selectors = [];
        this.selectorMap = {};
        this.selectorGrips = {
            nw: null,
            n: null,
            ne: null,
            e: null,
            se: null,
            s: null,
            sw: null,
            w: null
        };
        this.selectorGripsGroup = null;
        this.rotateGrips = {
            nw: null,
            ne: null,
            se: null,
            sw: null
        };
        this.initGroup()
    };
    svgedit.select.SelectorManager.prototype.initGroup = function() {
        this.selectorParentGroup && this.selectorParentGroup.parentNode && this.selectorParentGroup.parentNode.removeChild(this.selectorParentGroup);
        this.selectorParentGroup = a.createSVGElement({
            element: "g",
            attr: {
                id: "selectorParentGroup"
            }
        });
        this.selectorGripsGroup = a.createSVGElement({
            element: "g",
            attr: {
                display: "none"
            }
        });
        this.selectorParentGroup.appendChild(this.selectorGripsGroup);
        a.svgRoot().appendChild(this.selectorParentGroup);
        this.selectorMap = {};
        this.selectors = [];
        this.rubberBandBox = null;
        for (var b in this.rotateGrips) {
            var l = a.createSVGElement({
                element: "circle",
                attr: {
                    id: "selectorGrip_rotate_" + b,
                    fill: "#000",
                    r: 8,
                    stroke: "#000",
                    "fill-opacity": 0,
                    "stroke-opacity": 0,
                    "stroke-width": 0,
                    style: "cursor:url(" + o.imgPath + "rotate.png) 12 12, auto;"
                }
            });
            $.data(l, "dir", b);
            $.data(l, "type", "rotate");
            this.rotateGrips[b] = this.selectorGripsGroup.appendChild(l)
        }
        for (b in this.selectorGrips) {
            l = a.createSVGElement({
                element: "rect",
                attr: {
                    id: "selectorGrip_resize_" +
                        b,
                    width: 8,
                    height: 8,
                    fill: "#4F80FF",
                    stroke: "rgba(0,0,0,0)",
                    "stroke-width": 1,
                    style: "cursor:" + b + "-resize",
                    "pointer-events": "all"
                }
            });
            if (svgedit.browser.isTouch()) {
                l.setAttribute("width", 30.5);
                l.setAttribute("height", 30.5);
                l.setAttribute("fill-opacity", 0.3)
            }
            $.data(l, "dir", b);
            $.data(l, "type", "resize");
            this.selectorGrips[b] = this.selectorGripsGroup.appendChild(l)
        }
        if (!$("#canvasBackground").length) {
            b = o.dimensions;
            b = a.createSVGElement({
                element: "svg",
                attr: {
                    id: "canvasBackground",
                    width: b[0],
                    height: b[1],
                    x: 0,
                    y: 0,
                    overflow: svgedit.browser.isWebkit() ? "none" : "visible",
                    style: "pointer-events:none"
                }
            });
            l = a.createSVGElement({
                element: "defs",
                attr: {
                    id: "placeholder_defs"
                }
            });
            var s = a.createSVGElement({
                    element: "pattern",
                    attr: {
                        id: "checkerPattern",
                        patternUnits: "userSpaceOnUse",
                        x: 0,
                        y: 0,
                        width: 20,
                        height: 20,
                        viewBox: "0 0 10 10"
                    }
                }),
                c = a.createSVGElement({
                    element: "rect",
                    attr: {
                        x: 0,
                        y: 0,
                        width: 10,
                        height: 10,
                        fill: "#fff"
                    }
                }),
                g = a.createSVGElement({
                    element: "rect",
                    attr: {
                        x: 0,
                        y: 0,
                        width: 5,
                        height: 5,
                        fill: "#eee"
                    }
                }),
                d = a.createSVGElement({
                    element: "rect",
                    attr: {
                        x: 5,
                        y: 5,
                        width: 5,
                        height: 5,
                        fill: "#eee"
                    }
                }),
                p = a.createSVGElement({
                    element: "rect",
                    attr: {
                        width: "100%",
                        height: "100%",
                        x: 0,
                        y: 0,
                        "stroke-width": 1,
                        stroke: "#000",
                        fill: "url(#checkerPattern)",
                        style: "pointer-events:none"
                    }
                });
            b.appendChild(l);
            l.appendChild(s);
            s.appendChild(c);
            s.appendChild(g);
            s.appendChild(d);
            b.appendChild(p);
            a.svgRoot().insertBefore(b, a.svgContent())
        }
    };
    svgedit.select.SelectorManager.prototype.requestSelector = function(b) {
        if (b == null) return null;
        var l = this.selectors.length;
        if (typeof this.selectorMap[b.id] ==
            "object") {
            this.selectorMap[b.id].locked = true;
            return this.selectorMap[b.id]
        }
        for (var s = 0; s < l; ++s)
            if (this.selectors[s] && !this.selectors[s].locked) {
                this.selectors[s].locked = true;
                this.selectors[s].reset(b);
                this.selectorMap[b.id] = this.selectors[s];
                return this.selectors[s]
            }
        this.selectors[l] = new svgedit.select.Selector(l, b);
        this.selectorParentGroup.appendChild(this.selectors[l].selectorGroup);
        this.selectorMap[b.id] = this.selectors[l];
        return this.selectors[l]
    };
    svgedit.select.SelectorManager.prototype.releaseSelector =
        function(b) {
            if (b != null)
                for (var l = this.selectors.length, s = this.selectorMap[b.id], c = 0; c < l; ++c)
                    if (this.selectors[c] && this.selectors[c] == s) {
                        s.locked == false && console.log("WARNING! selector was released but was already unlocked");
                        delete this.selectorMap[b.id];
                        s.locked = false;
                        s.selectedElement = null;
                        s.showGrips(false);
                        try {
                            s.selectorGroup.setAttribute("display", "none")
                        } catch (g) {}
                        break
                    }
        };
    svgedit.select.SelectorManager.prototype.getRubberBandBox = function() {
        if (!this.rubberBandBox) this.rubberBandBox = this.selectorParentGroup.appendChild(a.createSVGElement({
            element: "rect",
            attr: {
                id: "selectorRubberBand",
                fill: "none",
                stroke: "#666",
                "stroke-width": 1,
                "stroke-dasharray": "3,2",
                display: "none",
                style: "pointer-events:none"
            }
        }));
        return this.rubberBandBox
    };
    svgedit.select.init = function(b, l) {
        o = b;
        a = l;
        e = new svgedit.select.SelectorManager;
        a.createSVGElement({
            element: "g",
            attr: {
                id: "hover_group"
            }
        })
    };
    svgedit.select.getSelectorManager = function() {
        return e
    }
})();
svgedit = svgedit || {};
(function() {
    if (!svgedit.draw) svgedit.draw = {};
    var a = "a,circle,ellipse,foreignObject,g,image,line,path,polygon,polyline,rect,svg,text,tspan,use".split(","),
        o = {
            LET_DOCUMENT_DECIDE: 0,
            ALWAYS_RANDOMIZE: 1,
            NEVER_RANDOMIZE: 2
        },
        e = o.LET_DOCUMENT_DECIDE;
    svgedit.draw.Layer = function(b, l) {
        this.name_ = b;
        this.group_ = l
    };
    svgedit.draw.Layer.prototype.getName = function() {
        return this.name_
    };
    svgedit.draw.Layer.prototype.getGroup = function() {
        return this.group_
    };
    svgedit.draw.randomizeIds = function(b, l) {
        e = b == false ? o.NEVER_RANDOMIZE :
            o.ALWAYS_RANDOMIZE;
        if (e == o.ALWAYS_RANDOMIZE && !l.getNonce()) l.setNonce(Math.floor(Math.random() * 100001));
        else e == o.NEVER_RANDOMIZE && l.getNonce() && l.clearNonce()
    };
    svgedit.draw.Drawing = function(b, l) {
        if (!b || !b.tagName || !b.namespaceURI || b.tagName != "svg" || b.namespaceURI != "http://www.w3.org/2000/svg") throw "Error: svgedit.draw.Drawing instance initialized without a <svg> element";
        this.svgElem_ = b;
        this.obj_num = 0;
        this.idPrefix = l || "svg_";
        this.releasedNums = [];
        this.all_layers = [];
        this.current_layer = null;
        this.nonce_ =
            "";
        var s = this.svgElem_.getAttributeNS("http://svg-edit.googlecode.com", "nonce");
        if (s && e != o.NEVER_RANDOMIZE) this.nonce_ = s;
        else e == o.ALWAYS_RANDOMIZE && this.setNonce(Math.floor(Math.random() * 100001))
    };
    svgedit.draw.Drawing.prototype.getElem_ = function(b) {
        return this.svgElem_.querySelector ? this.svgElem_.querySelector("#" + b) : $(this.svgElem_).find("[id=" + b + "]")[0]
    };
    svgedit.draw.Drawing.prototype.getSvgElem = function() {
        return this.svgElem_
    };
    svgedit.draw.Drawing.prototype.getNonce = function() {
        return this.nonce_
    };
    svgedit.draw.Drawing.prototype.setNonce = function(b) {
        this.svgElem_.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:se", "http://svg-edit.googlecode.com");
        this.svgElem_.setAttributeNS("http://svg-edit.googlecode.com", "se:nonce", b);
        this.nonce_ = b
    };
    svgedit.draw.Drawing.prototype.clearNonce = function() {
        this.nonce_ = ""
    };
    svgedit.draw.Drawing.prototype.getId = function() {
        return this.nonce_ ? this.idPrefix + this.nonce_ + "_" + this.obj_num : this.idPrefix + this.obj_num
    };
    svgedit.draw.Drawing.prototype.getNextId = function() {
        var b =
            this.obj_num,
            l = false;
        if (this.releasedNums.length > 0) {
            this.obj_num = this.releasedNums.pop();
            l = true
        } else this.obj_num++;
        for (var s = this.getId(); this.getElem_(s);) {
            if (l) {
                this.obj_num = b;
                l = false
            }
            this.obj_num++;
            s = this.getId()
        }
        if (l) this.obj_num = b;
        return s
    };
    svgedit.draw.Drawing.prototype.releaseId = function(b) {
        var l = this.idPrefix + (this.nonce_ ? this.nonce_ + "_" : "");
        if (typeof b != "string" || b.indexOf(l) != 0) return false;
        b = parseInt(b.substr(l.length));
        if (typeof b != "number" || b <= 0 || this.releasedNums.indexOf(b) != -1) return false;
        this.releasedNums.push(b);
        return true
    };
    svgedit.draw.Drawing.prototype.getNumLayers = function() {
        return this.all_layers.length
    };
    svgedit.draw.Drawing.prototype.hasLayer = function(b) {
        for (var l = 0; l < this.getNumLayers(); l++)
            if (this.all_layers[l][0] == b) return true;
        return false
    };
    svgedit.draw.Drawing.prototype.getLayerName = function(b) {
        if (b >= 0 && b < this.getNumLayers()) return this.all_layers[b][0];
        return ""
    };
    svgedit.draw.Drawing.prototype.getCurrentLayer = function() {
        return this.current_layer
    };
    svgedit.draw.Drawing.prototype.getCurrentLayerName =
        function() {
            for (var b = 0; b < this.getNumLayers(); ++b)
                if (this.all_layers[b][1] == this.current_layer) return this.getLayerName(b);
            return ""
        };
    svgedit.draw.Drawing.prototype.setCurrentLayer = function(b) {
        for (var l = 0; l < this.getNumLayers(); ++l)
            if (b == this.getLayerName(l)) {
                if (this.current_layer != this.all_layers[l][1]) {
                    this.current_layer.setAttribute("style", "pointer-events:none");
                    this.current_layer = this.all_layers[l][1];
                    this.current_layer.setAttribute("style", "pointer-events:all")
                }
                return true
            }
        return false
    };
    svgedit.draw.Drawing.prototype.deleteCurrentLayer =
        function() {
            if (this.current_layer && this.getNumLayers() > 1) {
                var b = this.current_layer.parentNode.removeChild(this.current_layer);
                this.identifyLayers();
                return b
            }
            return null
        };
    svgedit.draw.Drawing.prototype.identifyLayers = function() {
        this.all_layers = [];
        for (var b = this.svgElem_.childNodes.length, l = [], s = [], c = null, g = false, d = 0; d < b; ++d) {
            var p = this.svgElem_.childNodes.item(d);
            if (p && p.nodeType == 1)
                if (p.tagName == "g") {
                    g = true;
                    var w = $("title", p).text();
                    if (!w && svgedit.browser.isOpera() && p.querySelectorAll) w = $(p.querySelectorAll("title")).text();
                    if (w) {
                        s.push(w);
                        this.all_layers.push([w, p]);
                        c = p;
                        svgedit.utilities.walkTree(p, function(C) {
                            C.setAttribute("style", "pointer-events:inherit")
                        });
                        c.setAttribute("style", "pointer-events:none")
                    } else l.push(p)
                } else if (~a.indexOf(p.nodeName)) {
                svgedit.utilities.getBBox(p);
                l.push(p)
            }
        }
        b = this.svgElem_.ownerDocument;
        if (l.length > 0 || !g) {
            for (d = 1; s.indexOf("Layer " + d) >= 0;) d++;
            s = "Layer " + d;
            c = b.createElementNS("http://www.w3.org/2000/svg", "g");
            g = b.createElementNS("http://www.w3.org/2000/svg", "title");
            g.textContent = s;
            c.appendChild(g);
            for (g = 0; g < l.length; ++g) c.appendChild(l[g]);
            this.svgElem_.appendChild(c);
            this.all_layers.push([s, c])
        }
        svgedit.utilities.walkTree(c, function(C) {
            C.setAttribute("style", "pointer-events:inherit")
        });
        this.current_layer = c.getAttribute("data-locked") === "true" ? this.all_layers.slice(-2)[0][1] : c;
        this.current_layer.setAttribute("style", "pointer-events:all")
    };
    svgedit.draw.Drawing.prototype.createLayer = function(b) {
        var l = this.svgElem_.ownerDocument,
            s = l.createElementNS("http://www.w3.org/2000/svg",
                "g");
        l = l.createElementNS("http://www.w3.org/2000/svg", "title");
        l.textContent = b;
        s.appendChild(l);
        this.svgElem_.appendChild(s);
        this.identifyLayers();
        return s
    };
    svgedit.draw.Drawing.prototype.getLayerVisibility = function(b) {
        for (var l = null, s = 0; s < this.getNumLayers(); ++s)
            if (this.getLayerName(s) == b) {
                l = this.all_layers[s][1];
                break
            }
        if (!l) return false;
        return l.getAttribute("display") != "none"
    };
    svgedit.draw.Drawing.prototype.setLayerVisibility = function(b, l) {
        if (typeof l != "boolean") return null;
        for (var s = null, c = 0; c <
            this.getNumLayers(); ++c)
            if (this.getLayerName(c) == b) {
                s = this.all_layers[c][1];
                break
            }
        if (!s) return null;
        s.getAttribute("display");
        s.setAttribute("display", l ? "inline" : "none");
        return s
    };
    svgedit.draw.Drawing.prototype.getLayerOpacity = function(b) {
        for (var l = 0; l < this.getNumLayers(); ++l)
            if (this.getLayerName(l) == b) {
                (b = this.all_layers[l][1].getAttribute("opacity")) || (b = "1.0");
                return parseFloat(b)
            }
        return null
    };
    svgedit.draw.Drawing.prototype.setLayerOpacity = function(b, l) {
        if (!(typeof l != "number" || l < 0 || l > 1))
            for (var s =
                    0; s < this.getNumLayers(); ++s)
                if (this.getLayerName(s) == b) {
                    this.all_layers[s][1].setAttribute("opacity", l);
                    break
                }
    }
})();
svgedit = svgedit || {};
(function() {
    if (!svgedit.path) svgedit.path = {};
    var a = {
            pathNodeTooltip: "Drag node to move it. Double-click node to change segment type",
            pathCtrlPtTooltip: "Drag control point to adjust curve properties"
        },
        o = {
            2: ["x", "y"],
            4: ["x", "y"],
            6: ["x", "y", "x1", "y1", "x2", "y2"],
            8: ["x", "y", "x1", "y1"],
            10: ["x", "y", "r1", "r2", "angle", "largeArcFlag", "sweepFlag"],
            12: ["x"],
            14: ["y"],
            16: ["x", "y", "x2", "y2"],
            18: ["x", "y"]
        },
        e = [],
        b = false,
        l = {};
    svgedit.path.setLinkControlPoints = function(g) {
        b = g
    };
    var s = svgedit.path.path = null;
    svgedit.path.init =
        function(g) {
            s = g;
            e = [0, "ClosePath"];
            $.each(["Moveto", "Lineto", "CurvetoCubic", "CurvetoQuadratic", "Arc", "LinetoHorizontal", "LinetoVertical", "CurvetoCubicSmooth", "CurvetoQuadraticSmooth"], function(d, p) {
                e.push(p + "Abs");
                e.push(p + "Rel")
            })
        };
    svgedit.path.insertItemBefore = function(g, d, p) {
        g.pathSegList.insertItemBefore(d, p)
    };
    svgedit.path.ptObjToArr = function(g, d) {
        for (var p = o[g], w = p.length, C = Array(w), v = 0; v < w; v++) C[v] = d[p[v]];
        return C
    };
    svgedit.path.getGripPt = function(g, d) {
        var p = {
                x: d ? d.x : g.item.x,
                y: d ? d.y : g.item.y
            },
            w = g.path;
        if (w.matrix) p = svgedit.math.transformPoint(p.x, p.y, w.matrix);
        p.x *= s.getCurrentZoom();
        p.y *= s.getCurrentZoom();
        return p
    };
    svgedit.path.getPointFromGrip = function(g, d) {
        var p = {
            x: g.x,
            y: g.y
        };
        if (d.matrix) {
            g = svgedit.math.transformPoint(p.x, p.y, d.imatrix);
            p.x = g.x;
            p.y = g.y
        }
        p.x /= s.getCurrentZoom();
        p.y /= s.getCurrentZoom();
        return p
    };
    svgedit.path.addPointGrip = function(g, d, p) {
        var w = svgedit.path.getGripContainer(),
            C = svgedit.utilities.getElem("pathpointgrip_" + g);
        if (!C) {
            C = document.createElementNS("http://www.w3.org/2000/svg",
                "rect");
            svgedit.utilities.assignAttributes(C, {
                id: "pathpointgrip_" + g,
                display: "none",
                width: svgedit.browser.isTouch() ? 30 : 5,
                height: svgedit.browser.isTouch() ? 30 : 5,
                fill: "#fff",
                stroke: "#4F80FF",
                "shape-rendering": "crispEdges",
                "stroke-width": 1,
                cursor: "move",
                style: "pointer-events:all",
                "xlink:title": a.pathNodeTooltip
            });
            C = w.appendChild(C);
            $("#pathpointgrip_" + g).dblclick(function() {
                svgedit.path.path && svgedit.path.path.setSegType()
            })
        }
        if (d && p) svgedit.utilities.assignAttributes(C, {
            x: d - (svgedit.browser.isTouch() ?
                15 : 2.5),
            y: p - (svgedit.browser.isTouch() ? 15 : 2.5),
            display: "inline"
        });
        return C
    };
    svgedit.path.getGripContainer = function() {
        var g = svgedit.utilities.getElem("pathpointgrip_container");
        if (!g) {
            g = svgedit.utilities.getElem("selectorParentGroup").appendChild(document.createElementNS("http://www.w3.org/2000/svg", "g"));
            g.id = "pathpointgrip_container"
        }
        return g
    };
    svgedit.path.addCtrlGrip = function(g) {
        var d = svgedit.utilities.getElem("ctrlpointgrip_" + g);
        if (d) return d;
        d = document.createElementNS("http://www.w3.org/2000/svg",
            "circle");
        svgedit.utilities.assignAttributes(d, {
            id: "ctrlpointgrip_" + g,
            display: "none",
            r: svgedit.browser.isTouch() ? 15 : 3,
            fill: "#4F80FF",
            stroke: "#4F80FF",
            "stroke-opacity": 0,
            "stroke-width": "3",
            cursor: "move",
            style: "pointer-events:all",
            "xlink:title": a.pathCtrlPtTooltip
        });
        svgedit.path.getGripContainer().appendChild(d);
        return d
    };
    svgedit.path.getCtrlLine = function(g) {
        var d = svgedit.utilities.getElem("ctrlLine_" + g);
        if (d) return d;
        d = document.createElementNS("http://www.w3.org/2000/svg", "line");
        svgedit.utilities.assignAttributes(d, {
            id: "ctrlLine_" + g,
            stroke: "#4F80FF",
            "stroke-width": 1,
            style: "pointer-events:none"
        });
        svgedit.path.getGripContainer().appendChild(d);
        return d
    };
    svgedit.path.getPointGrip = function(g, d) {
        var p = svgedit.path.addPointGrip(g.index);
        if (d) {
            var w = svgedit.path.getGripPt(g);
            svgedit.utilities.assignAttributes(p, {
                x: w.x - (svgedit.browser.isTouch() ? 15 : 2.5),
                y: w.y - (svgedit.browser.isTouch() ? 15 : 2.5),
                display: "inline"
            })
        }
        return p
    };
    svgedit.path.getControlPoints = function(g) {
        var d = g.item,
            p = g.index;
        if (!d || !("x1" in d) || !("x2" in d)) return null;
        var w = {};
        svgedit.path.getGripContainer();
        for (var C = [svgedit.path.path.segs[p - 1].item, d], v = 1; v < 3; v++) {
            var L = p + "c" + v,
                Q = w["c" + v + "_line"] = svgedit.path.getCtrlLine(L),
                J = svgedit.path.getGripPt(g, {
                    x: d["x" + v],
                    y: d["y" + v]
                }),
                H = svgedit.path.getGripPt(g, {
                    x: C[v - 1].x,
                    y: C[v - 1].y
                });
            svgedit.utilities.assignAttributes(Q, {
                x1: J.x,
                y1: J.y,
                x2: H.x,
                y2: H.y,
                display: "inline"
            });
            w["c" + v + "_line"] = Q;
            pointGrip = w["c" + v] = svgedit.path.addCtrlGrip(L);
            svgedit.utilities.assignAttributes(pointGrip, {
                cx: J.x,
                cy: J.y,
                display: "inline"
            });
            w["c" +
                v] = pointGrip
        }
        return w
    };
    svgedit.path.replacePathSeg = function(g, d, p, w) {
        w = w || svgedit.path.path.elem;
        g = w["createSVGPathSeg" + e[g]].apply(w, p);
        w.pathSegList.replaceItem(g, d)
    };
    svgedit.path.getSegSelector = function(g, d) {
        var p = g.index,
            w = svgedit.utilities.getElem("segline_" + p);
        if (!w) {
            var C = svgedit.path.getGripContainer();
            w = document.createElementNS("http://www.w3.org/2000/svg", "path");
            svgedit.utilities.assignAttributes(w, {
                id: "segline_" + p,
                display: "none",
                fill: "none",
                stroke: "#0ff",
                "stroke-opacity": 1,
                "shape-rendering": "crispEdges",
                "stroke-width": 2,
                style: "pointer-events:none",
                d: "M0,0 0,0"
            });
            C.appendChild(w)
        }
        if (d) {
            p = g.prev;
            if (!p) {
                w.setAttribute("display", "none");
                return w
            }
            p = svgedit.path.getGripPt(p);
            svgedit.path.replacePathSeg(2, 0, [p.x, p.y], w);
            C = svgedit.path.ptObjToArr(g.type, g.item, true);
            for (var v = 0; v < C.length; v += 2) {
                p = svgedit.path.getGripPt(g, {
                    x: C[v],
                    y: C[v + 1]
                });
                C[v] = p.x;
                C[v + 1] = p.y
            }
            svgedit.path.replacePathSeg(g.type, 1, C, w)
        }
        return w
    };
    svgedit.path.smoothControlPoints = this.smoothControlPoints = function(g, d, p) {
        var w = g.x - p.x,
            C = g.y -
            p.y,
            v = d.x - p.x,
            L = d.y - p.y;
        if ((w != 0 || C != 0) && (v != 0 || L != 0)) {
            g = Math.atan2(C, w);
            d = Math.atan2(L, v);
            w = Math.sqrt(w * w + C * C);
            v = Math.sqrt(v * v + L * L);
            C = s.getSVGRoot().createSVGPoint();
            L = s.getSVGRoot().createSVGPoint();
            if (g < 0) g += 2 * Math.PI;
            if (d < 0) d += 2 * Math.PI;
            var Q = Math.abs(g - d),
                J = Math.abs(Math.PI - Q) / 2;
            if (g - d > 0) {
                g = Q < Math.PI ? g + J : g - J;
                d = Q < Math.PI ? d - J : d + J
            } else {
                g = Q < Math.PI ? g - J : g + J;
                d = Q < Math.PI ? d + J : d - J
            }
            C.x = w * Math.cos(g) + p.x;
            C.y = w * Math.sin(g) + p.y;
            L.x = v * Math.cos(d) + p.x;
            L.y = v * Math.sin(d) + p.y;
            return [C, L]
        }
    };
    svgedit.path.Segment =
        function(g, d) {
            this.selected = false;
            this.index = g;
            this.item = d;
            this.type = d.pathSegType;
            this.ctrlpts = [];
            this.segsel = this.ptgrip = null
        };
    svgedit.path.Segment.prototype.showCtrlPts = function(g) {
        for (var d in this.ctrlpts) this.ctrlpts[d].setAttribute("display", g ? "inline" : "none")
    };
    svgedit.path.Segment.prototype.selectCtrls = function() {
        $("#ctrlpointgrip_" + this.index + "c1, #ctrlpointgrip_" + this.index + "c2").attr("fill", "#4F80FF")
    };
    svgedit.path.Segment.prototype.show = function(g) {
        if (this.ptgrip) {
            this.ptgrip.setAttribute("display",
                g ? "inline" : "none");
            this.segsel.setAttribute("display", g ? "inline" : "none");
            this.showCtrlPts(g)
        }
    };
    svgedit.path.Segment.prototype.select = function(g) {
        if (this.ptgrip) {
            this.ptgrip.setAttribute("stroke", g ? "#4F80FF" : "#4F80FF");
            this.ptgrip.setAttribute("fill", g ? "#4F80FF" : "#fff");
            this.segsel.setAttribute("display", g ? "inline" : "none");
            this.ctrlpts && this.selectCtrls(g);
            this.selected = g
        }
    };
    svgedit.path.Segment.prototype.addGrip = function() {
        this.ptgrip = svgedit.path.getPointGrip(this, true);
        this.ctrlpts = svgedit.path.getControlPoints(this,
            true);
        this.segsel = svgedit.path.getSegSelector(this, true)
    };
    svgedit.path.Segment.prototype.update = function(g) {
        if (this.ptgrip) {
            var d = svgedit.path.getGripPt(this),
                p = svgedit.browser.isTouch() ? 15 : 2.5;
            svgedit.utilities.assignAttributes(this.ptgrip, this.ptgrip.nodeName == "rect" ? {
                x: d.x - p,
                y: d.y - p
            } : {
                cx: d.x,
                cy: d.y
            });
            svgedit.path.getSegSelector(this, true);
            if (this.ctrlpts) {
                if (g) {
                    this.item = svgedit.path.path.elem.pathSegList.getItem(this.index);
                    this.type = this.item.pathSegType
                }
                svgedit.path.getControlPoints(this)
            }
        }
    };
    svgedit.path.Segment.prototype.move = function(g, d) {
        var p = this.item;
        p = $.extend({}, p);
        p = this.ctrlpts ? [p.x += g, p.y += d, p.x1, p.y1, p.x2 += g, p.y2 += d] : [p.x += g, p.y += d];
        svgedit.path.replacePathSeg(this.type, this.index, p);
        if (this.next && this.next.ctrlpts) {
            p = this.next.item;
            p = [p.x, p.y, p.x1 += g, p.y1 += d, p.x2, p.y2];
            svgedit.path.replacePathSeg(this.next.type, this.next.index, p)
        }
        if (this.mate) {
            p = this.mate.item;
            p = [p.x += g, p.y += d];
            svgedit.path.replacePathSeg(this.mate.type, this.mate.index, p)
        }
        this.update(true);
        this.next && this.next.update(true)
    };
    svgedit.path.Segment.prototype.setLinked = function(g) {
        var d, p, w;
        if (g == 2) {
            p = 1;
            d = this.next;
            if (!d) return;
            w = this.item
        } else {
            p = 2;
            d = this.prev;
            if (!d) return;
            w = d.item
        }
        var C = $.extend({}, d.item);
        C["x" + p] = w.x + (w.x - this.item["x" + g]);
        C["y" + p] = w.y + (w.y - this.item["y" + g]);
        svgedit.path.replacePathSeg(d.type, d.index, [C.x, C.y, C.x1, C.y1, C.x2, C.y2]);
        d.update(true)
    };
    svgedit.path.Segment.prototype.moveCtrl = function(g, d, p) {
        var w = $.extend({}, this.item);
        w["x" + g] += d;
        w["y" + g] += p;
        svgedit.path.replacePathSeg(this.type, this.index, [w.x, w.y, w.x1, w.y1, w.x2, w.y2]);
        this.update(true)
    };
    svgedit.path.Segment.prototype.setType = function(g, d) {
        svgedit.path.replacePathSeg(g, this.index, d);
        this.type = g;
        this.item = svgedit.path.path.elem.pathSegList.getItem(this.index);
        this.showCtrlPts(g === 6);
        this.ctrlpts = svgedit.path.getControlPoints(this);
        this.update(true)
    };
    svgedit.path.Path = function(g) {
        if (!g || g.tagName !== "path") throw "svgedit.path.Path constructed without a <path> element";
        this.elem = g;
        this.segs = [];
        this.selected_pts = [];
        svgedit.path.path = this;
        this.init()
    };
    svgedit.path.Path.prototype.init = function() {
        $(svgedit.path.getGripContainer()).find("*").attr("display", "none");
        var g = this.elem.pathSegList,
            d = g.numberOfItems;
        this.segs = [];
        this.selected_pts = [];
        this.first_seg = null;
        for (var p = 0; p < d; p++) {
            var w = g.getItem(p);
            w = new svgedit.path.Segment(p, w);
            w.path = this;
            this.segs.push(w)
        }
        g = this.segs;
        w = null;
        for (p = 0; p < d; p++) {
            var C = g[p],
                v = p + 1 >= d ? null : g[p + 1],
                L = p - 1 < 0 ? null : g[p - 1];
            if (C.type === 2) {
                if (L && L.type !== 1) {
                    v = g[w];
                    v.next = g[w + 1];
                    v.next.prev = v;
                    v.addGrip()
                }
                w = p
            } else if (v &&
                v.type === 1) {
                C.next = g[w + 1];
                C.next.prev = C;
                C.mate = g[w];
                C.addGrip();
                if (this.first_seg == null) this.first_seg = C
            } else if (v) {
                if (C.type !== 1) {
                    C.addGrip();
                    if (v && v.type !== 2) {
                        C.next = v;
                        C.next.prev = C
                    }
                }
            } else if (C.type !== 1) {
                v = g[w];
                v.next = g[w + 1];
                v.next.prev = v;
                v.addGrip();
                C.addGrip();
                if (!this.first_seg) this.first_seg = g[w]
            }
        }
        return this
    };
    svgedit.path.Path.prototype.eachSeg = function(g) {
        for (var d = this.segs.length, p = 0; p < d; p++)
            if (g.call(this.segs[p], p) === false) break
    };
    svgedit.path.Path.prototype.addSeg = function(g) {
        var d = this.segs[g];
        if (d.prev) {
            var p = d.prev,
                w;
            switch (d.item.pathSegType) {
                case 4:
                    var C = (d.item.x + p.item.x) / 2,
                        v = (d.item.y + p.item.y) / 2;
                    w = this.elem.createSVGPathSegLinetoAbs(C, v);
                    break;
                case 6:
                    w = (p.item.x + d.item.x1) / 2;
                    var L = (d.item.x1 + d.item.x2) / 2,
                        Q = (d.item.x2 + d.item.x) / 2,
                        J = (w + L) / 2;
                    L = (L + Q) / 2;
                    C = (J + L) / 2;
                    var H = (p.item.y + d.item.y1) / 2,
                        U = (d.item.y1 + d.item.y2) / 2;
                    p = (d.item.y2 + d.item.y) / 2;
                    var R = (H + U) / 2;
                    U = (U + p) / 2;
                    v = (R + U) / 2;
                    w = this.elem.createSVGPathSegCurvetoCubicAbs(C, v, w, H, J, R);
                    svgedit.path.replacePathSeg(d.type, g, [d.item.x, d.item.y,
                        L, U, Q, p
                    ])
            }
            svgedit.path.insertItemBefore(this.elem, w, g)
        }
    };
    svgedit.path.Path.prototype.deleteSeg = function(g) {
        var d = this.segs[g],
            p = this.elem.pathSegList;
        d.show(false);
        var w = d.next;
        if (d.mate) {
            var C = [w.item.x, w.item.y];
            svgedit.path.replacePathSeg(2, w.index, C);
            svgedit.path.replacePathSeg(4, d.index, C);
            p.removeItem(d.mate.index)
        } else {
            if (!d.prev) {
                C = [w.item.x, w.item.y];
                svgedit.path.replacePathSeg(2, d.next.index, C)
            }
            p.removeItem(g)
        }
    };
    svgedit.path.Path.prototype.subpathIsClosed = function(g) {
        var d = false;
        svgedit.path.path.eachSeg(function(p) {
            if (p <=
                g) return true;
            if (this.type === 2) return false;
            else if (this.type === 1) {
                d = true;
                return false
            }
        });
        return d
    };
    svgedit.path.Path.prototype.removePtFromSelection = function(g) {
        var d = this.selected_pts.indexOf(g);
        if (d != -1) {
            this.segs[g].select(false);
            this.selected_pts.splice(d, 1)
        }
    };
    svgedit.path.Path.prototype.clearSelection = function() {
        this.eachSeg(function() {
            this.select(false)
        });
        this.selected_pts = []
    };
    svgedit.path.Path.prototype.storeD = function() {
        this.last_d = this.elem.getAttribute("d")
    };
    svgedit.path.Path.prototype.show =
        function(g) {
            this.eachSeg(function() {
                this.show(g)
            });
            g && this.selectPt(this.first_seg.index);
            return this
        };
    svgedit.path.Path.prototype.movePts = function(g, d) {
        for (var p = this.selected_pts.length; p--;) this.segs[this.selected_pts[p]].move(g, d)
    };
    svgedit.path.Path.prototype.moveCtrl = function(g, d) {
        var p = this.segs[this.selected_pts[0]];
        p.moveCtrl(this.dragctrl, g, d);
        b && p.setLinked(this.dragctrl)
    };
    svgedit.path.Path.prototype.setSegType = function(g) {
        this.storeD();
        for (var d = this.selected_pts.length, p; d--;) {
            var w = this.segs[this.selected_pts[d]],
                C = w.prev;
            if (C) {
                if (!g) {
                    p = "Toggle Path Segment Type";
                    g = w.type == 6 ? 4 : 6
                }
                g -= 0;
                var v = w.item.x,
                    L = w.item.y,
                    Q = C.item.x;
                C = C.item.y;
                var J;
                switch (g) {
                    case 6:
                        if (w.olditem) {
                            Q = w.olditem;
                            J = [v, L, Q.x1, Q.y1, Q.x2, Q.y2]
                        } else {
                            J = v - Q;
                            var H = L - C;
                            J = [v, L, Q + J / 3, C + H / 3, v - J / 3, L - H / 3]
                        }
                        break;
                    case 4:
                        J = [v, L];
                        w.olditem = w.item
                }
                w.setType(g, J)
            }
        }
        svgedit.path.path.endChanges(p)
    };
    svgedit.path.Path.prototype.selectPt = function(g, d) {
        this.clearSelection();
        g == null && this.eachSeg(function(p) {
            if (this.prev) g = p
        });
        this.addPtsToSelection(g);
        if (d) {
            this.dragctrl =
                d;
            b && this.segs[g].setLinked(d)
        }
    };
    svgedit.path.Path.prototype.update = function() {
        var g = this.elem;
        if (svgedit.utilities.getRotationAngle(g)) {
            this.matrix = svgedit.math.getMatrix(g);
            this.imatrix = this.matrix.inverse()
        } else this.imatrix = this.matrix = null;
        this.eachSeg(function(d) {
            this.item = g.pathSegList.getItem(d);
            this.update()
        });
        return this
    };
    svgedit.path.getPath_ = function(g) {
        var d = l[g.id];
        d || (d = l[g.id] = new svgedit.path.Path(g));
        return d
    };
    svgedit.path.removePath_ = function(g) {
        g in l && delete l[g]
    };
    var c = function(g,
        d, p, w, C, v, L) {
        dx = g - p;
        dy = d - w;
        r = Math.sqrt(dx * dx + dy * dy);
        theta = Math.atan2(dy, dx) + L;
        dx = r * Math.cos(theta) + p;
        dy = r * Math.sin(theta) + w;
        dx -= C;
        dy -= v;
        r = Math.sqrt(dx * dx + dy * dy);
        theta = Math.atan2(dy, dx) - L;
        return {
            x: (r * Math.cos(theta) + C) / 1,
            y: (r * Math.sin(theta) + v) / 1
        }
    };
    svgedit.path.recalcRotatedPath = function() {
        var g = svgedit.path.path.elem,
            d = svgedit.utilities.getRotationAngle(g, true);
        if (d) {
            var p = svgedit.utilities.getBBox(g),
                w = svgedit.path.path.oldbbox,
                C = w.x + w.width / 2;
            w = w.y + w.height / 2;
            var v = p.x + p.width / 2;
            p = p.y + p.height /
                2;
            v = v - C;
            var L = p - w;
            p = Math.sqrt(v * v + L * L);
            L = Math.atan2(L, v) + d;
            v = p * Math.cos(L) + C;
            p = p * Math.sin(L) + w;
            L = g.pathSegList;
            for (var Q = L.numberOfItems; Q;) {
                Q -= 1;
                var J = L.getItem(Q),
                    H = J.pathSegType;
                if (H != 1) {
                    var U = c(J.x, J.y, C, w, v, p, d);
                    U = [U.x, U.y];
                    if (J.x1 != null && J.x2 != null) {
                        c_vals1 = c(J.x1, J.y1, C, w, v, p, d);
                        c_vals2 = c(J.x2, J.y2, C, w, v, p, d);
                        U.splice(U.length, 0, c_vals1.x, c_vals1.y, c_vals2.x, c_vals2.y)
                    }
                    svgedit.path.replacePathSeg(H, Q, U)
                }
            }
            svgedit.utilities.getBBox(g);
            C = svgroot.createSVGTransform();
            g = svgedit.transformlist.getTransformList(g);
            C.setRotate(d * 180 / Math.PI, v, p);
            g.replaceItem(C, 0)
        }
    };
    svgedit.path.clearData = function() {
        l = {}
    }
})();
if (!window.console) {
    window.console = {};
    window.console.log = function() {};
    window.console.dir = function() {}
}
if (window.opera) {
    window.console.log = function(a) {
        opera.postError(a)
    };
    window.console.dir = function() {}
}
(function() {
    var a = jQuery.fn.attr;
    jQuery.fn.attr = function(o, e) {
        var b = this.length;
        if (!b) return a.apply(this, arguments);
        for (var l = 0; l < b; l++) {
            var s = this[l];
            if (s.namespaceURI === "http://www.w3.org/2000/svg")
                if (e !== undefined) s.setAttribute(o, e);
                else if ($.isArray(o)) {
                b = o.length;
                for (l = {}; b--;) {
                    var c = o[b],
                        g = s.getAttribute(c);
                    if (g || g === "0") g = isNaN(g) ? g : g - 0;
                    l[c] = g
                }
                return l
            } else if (typeof o === "object")
                for (c in o) s.setAttribute(c, o[c]);
            else {
                if ((g = s.getAttribute(o)) || g === "0") g = isNaN(g) ? g : g - 0;
                return g
            } else return a.apply(this,
                arguments)
        }
        return this
    }
})();
$.SvgCanvas = function(a, o) {
    function e(f, h) {
        for (var m = svgedit.utilities.getBBox(f), B = 0; B < 2; B++) {
            var A = B === 0 ? "fill" : "stroke",
                G = f.getAttribute(A);
            if (G && G.indexOf("url(") === 0) {
                G = P(G);
                if (G.tagName === "linearGradient") {
                    var D = G.getAttribute("x1") || 0,
                        z = G.getAttribute("y1") || 0,
                        F = G.getAttribute("x2") || 1,
                        k = G.getAttribute("y2") || 0;
                    D = m.width * D + m.x;
                    z = m.height * z + m.y;
                    F = m.width * F + m.x;
                    k = m.height * k + m.y;
                    D = N(D, z, h);
                    k = N(F, k, h);
                    F = {};
                    F.x1 = (D.x - m.x) / m.width;
                    F.y1 = (D.y - m.y) / m.height;
                    F.x2 = (k.x - m.x) / m.width;
                    F.y2 = (k.y - m.y) / m.height;
                    G = G.cloneNode(true);
                    $(G).attr(F);
                    G.id = ja();
                    gb().appendChild(G);
                    f.setAttribute(A, "url(#" + G.id + ")")
                }
            }
        }
    }
    var b = "http://www.w3.org/2000/svg",
        l = {
            show_outside_canvas: true,
            selectNew: true,
            dimensions: [640, 480]
        };
    o && $.extend(l, o);
    var s = l.dimensions,
        c = this,
        g = a.ownerDocument,
        d = g.importNode(svgedit.utilities.text2xml('<svg id="svgroot" xmlns="' + b + '" xlinkns="http://www.w3.org/1999/xlink" width="' + s[0] + '" height="' + s[1] + '" x="' + s[0] + '" y="' + s[1] + '" overflow="visible"><defs><filter id="canvashadow" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur"/><feOffset in="blur" dx="5" dy="5" result="offsetBlur"/><feMerge><feMergeNode in="offsetBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs></svg>').documentElement,
            true);
    a.appendChild(d);
    var p = g.createElementNS(b, "svg");
    (c.clearSvgContentElement = function() {
        for (; p.firstChild;) p.removeChild(p.firstChild);
        $(p).attr({
            id: "svgcontent",
            width: s[0],
            height: s[1],
            x: s[0],
            y: s[1],
            overflow: l.show_outside_canvas ? "visible" : "hidden",
            xmlns: b,
            "xmlns:se": "http://svg-edit.googlecode.com",
            "xmlns:xlink": "http://www.w3.org/1999/xlink"
        }).appendTo(d);
        var f = g.createComment(" Created with Liveweave.com ");
        p.appendChild(f)
    })();
    var w = "svg_";
    c.setIdPrefix =
        function(f) {
            w = f
        };
    c.current_drawing_ = new svgedit.draw.Drawing(p, w);
    var C = c.getCurrentDrawing = function() {
            return c.current_drawing_
        },
        v = 1,
        L = null,
        Q = {
            shape: {
                fill: (l.initFill.color == "none" ? "" : "#") + l.initFill.color,
                fill_paint: null,
                fill_opacity: l.initFill.opacity,
                stroke: "#" + l.initStroke.color,
                stroke_paint: null,
                stroke_opacity: l.initStroke.opacity,
                stroke_width: l.initStroke.width,
                stroke_dasharray: "none",
                opacity: l.initOpacity
            }
        };
    Q.text = $.extend(true, {}, Q.shape);
    $.extend(Q.text, {
        fill: "#000000",
        stroke_width: 0,
        font_size: 24,
        font_family: "Helvetica, Arial, sans-serif"
    });
    var J = Q.shape,
        H = Array(1),
        U = this.addSvgElementFromJson = function(f) {
            var h = svgedit.utilities.getElem(f.attr.id),
                m = C().getCurrentLayer();
            if (h && f.element != h.tagName) {
                m.removeChild(h);
                h = null
            }
            if (!h) {
                h = g.createElementNS(b, f.element);
                if (m)(L || m).appendChild(h)
            }
            f.curStyles && svgedit.utilities.assignAttributes(h, {
                fill: J.fill,
                stroke: J.stroke,
                "stroke-width": J.stroke_width,
                "stroke-dasharray": J.stroke_dasharray,
                "stroke-opacity": J.stroke_opacity,
                "fill-opacity": J.fill_opacity,
                opacity: J.opacity / 2,
                style: "pointer-events:inherit"
            }, 100);
            svgedit.utilities.assignAttributes(h, f.attr, 100);
            svgedit.utilities.cleanupElement(h);
            return h
        },
        R = c.getTransformList = svgedit.transformlist.getTransformList,
        N = svgedit.math.transformPoint,
        ca = c.matrixMultiply = svgedit.math.matrixMultiply,
        la = c.hasMatrixTransform = svgedit.math.hasMatrixTransform,
        X = c.transformListToTransform = svgedit.math.transformListToTransform,
        W = svgedit.math.snapToAngle,
        fa = svgedit.math.getMatrix;
    svgedit.units.init({
        getBaseUnit: function() {
            return l.baseUnit
        },
        getElement: svgedit.utilities.getElem,
        getHeight: function() {
            return p.getAttribute("height") / v
        },
        getWidth: function() {
            return p.getAttribute("width") / v
        },
        getRoundDigits: function() {
            return $a.round_digits
        }
    });
    var ta = c.convertToNum = svgedit.units.convertToNum;
    svgedit.utilities.init({
        getDOMDocument: function() {
            return g
        },
        getDOMContainer: function() {
            return a
        },
        getSVGRoot: function() {
            return d
        },
        getSelectedElements: function() {
            return H
        },
        getSVGContent: function() {
            return p
        }
    });
    var ia = c.getUrlFromAttr = svgedit.utilities.getUrlFromAttr,
        ka = c.getHref = svgedit.utilities.getHref,
        Z = c.setHref = svgedit.utilities.setHref,
        da = svgedit.utilities.getPathBBox;
    c.getBBox = svgedit.utilities.getBBox;
    var pa = c.getRotationAngle = svgedit.utilities.getRotationAngle,
        oa = c.getElem = svgedit.utilities.getElem,
        ma = c.assignAttributes = svgedit.utilities.assignAttributes,
        na = this.cleanupElement = svgedit.utilities.cleanupElement,
        Ja = svgedit.sanitize.getNSMap(),
        Fa = c.sanitizeSvg = svgedit.sanitize.sanitizeSvg,
        Na = svgedit.history.MoveElementCommand,
        Sa = svgedit.history.InsertElementCommand,
        Ia = svgedit.history.RemoveElementCommand,
        Ka = svgedit.history.ChangeElementCommand,
        Ba = svgedit.history.BatchCommand;
    c.undoMgr = new svgedit.history.UndoManager({
        handleHistoryEvent: function(f, h) {
            var m = svgedit.history.HistoryEventTypes;
            if (f == m.BEFORE_UNAPPLY || f == m.BEFORE_APPLY) c.clearSelection();
            else if (f == m.AFTER_APPLY || f == m.AFTER_UNAPPLY) {
                var B = h.elements();
                c.pathActions.clear();
                M("changed", B);
                B = h.type();
                m = f == m.AFTER_APPLY;
                if (B == Na.type())(m ? h.newParent : h.oldParent) == p && c.identifyLayers();
                else if (B == Sa.type() ||
                    B == Ia.type()) {
                    h.parent == p && c.identifyLayers();
                    if (B == Sa.type()) m && Ta(h.elem);
                    else m || Ta(h.elem);
                    h.elem.tagName === "use" && Gb(h.elem)
                } else if (B == Ka.type()) {
                    h.elem.tagName == "title" && h.elem.parentNode.parentNode == p && c.identifyLayers();
                    m = m ? h.newValues : h.oldValues;
                    m.stdDeviation && c.setBlurOffsets(h.elem.parentNode, m.stdDeviation)
                }
            }
        }
    });
    var xa = function(f) {
        c.undoMgr.addCommandToHistory(f)
    };
    svgedit.select.init(l, {
        createSVGElement: function(f) {
            return c.addSvgElementFromJson(f)
        },
        svgRoot: function() {
            return d
        },
        svgContent: function() {
            return p
        },
        currentZoom: function() {
            return v
        },
        getStrokedBBox: function(f) {
            return c.getStrokedBBox([f])
        }
    });
    var ra = this.selectorManager = svgedit.select.getSelectorManager();
    svgedit.path.init({
        getCurrentZoom: function() {
            return v
        },
        getSVGRoot: function() {
            return d
        }
    });
    svgedit.utilities.snapToGrid = function(f) {
        var h = l.snappingStep,
            m = l.baseUnit;
        if (m !== "px") h *= svgedit.units.getTypeMap()[m];
        return f = Math.round(f / h) * h
    };
    var wa = svgedit.utilities.snapToGrid,
        kb = {
            exportNoBlur: "Blurred elements will appear as un-blurred",
            exportNoforeignObject: "foreignObject elements will not appear",
            exportNoDashArray: "Strokes will appear filled",
            exportNoText: "Text may not appear as expected"
        },
        vb = ["clip-path", "fill", "filter", "marker-end", "marker-mid", "marker-start", "mask", "stroke"],
        cb = $.data,
        Ta = function(f) {
            var h = $(f).attr(vb),
                m;
            for (m in h) {
                var B = h[m];
                if (B && B.indexOf("url(") === 0) {
                    B = ia(B).substr(1);
                    if (!oa(B)) {
                        gb().appendChild(sb[B]);
                        delete sb[B]
                    }
                }
            }
            f = f.getElementsByTagName("*");
            if (f.length) {
                h = 0;
                for (m = f.length; h < m; h++) Ta(f[h])
            }
        },
        Va = {},
        Da = l.imgPath + "logo.png",
        ua = [],
        $a = {
            round_digits: 5
        },
        Ga = false,
        Ra =
        null,
        Ea = "select",
        db = "none",
        lb = {},
        Ua = Q.text,
        Xa = J,
        wb = null,
        sa = null,
        hb = [],
        eb = {},
        sb = {};
    c.clipBoard = [];
    var ib = this.runExtensions = function(f, h, m) {
        var B = false;
        if (m) B = [];
        $.each(eb, function(A, G) {
            if (f in G)
                if (m) B.push(G[f](h));
                else B = G[f](h)
        });
        return B
    };
    this.addExtension = function(f, h) {
        if (f in eb) console.log('Cannot add extension "' + f + '", an extension by that name already exists"');
        else {
            var m = $.isFunction(h) ? h($.extend(c.getPrivateMethods(), {
                svgroot: d,
                svgcontent: p,
                nonce: C().getNonce(),
                selectorManager: ra
            })) : h;
            eb[f] = m;
            M("extension_added", m)
        }
    };
    var ab = this.round = function(f) {
            return parseInt(f * v) / v
        },
        ob = this.getIntersectionList = function(f) {
            if (sa == null) return null;
            var h = L || C().getCurrentLayer();
            hb.length || (hb = fb(h));
            var m = null;
            try {
                m = h.getIntersectionList(f, null)
            } catch (B) {}
            if (m == null || typeof m.item != "function") {
                m = [];
                if (f) f = f;
                else {
                    f = sa.getBBox();
                    h = {};
                    for (var A in f) h[A] = f[A] / v;
                    f = h
                }
                for (A = hb.length; A--;) f.width && f.width && svgedit.math.rectsIntersect(f, hb[A].bbox) && m.push(hb[A].elem)
            }
            return m
        };
    getStrokedBBox = this.getStrokedBBox =
        function(f) {
            f || (f = pb());
            if (!f.length) return false;
            var h = function(k) {
                    try {
                        var n = svgedit.utilities.getBBox(k),
                            q = svgedit.utilities.getRotationAngle(k);
                        if (q && q % 90 || svgedit.math.hasMatrixTransform(svgedit.transformlist.getTransformList(k))) {
                            q = false;
                            if (["ellipse", "path", "line", "polyline", "polygon"].indexOf(k.tagName) >= 0) n = q = c.convertToPath(k, true);
                            else if (k.tagName == "rect") {
                                var u = k.getAttribute("rx"),
                                    E = k.getAttribute("ry");
                                if (u || E) n = q = c.convertToPath(k, true)
                            }
                            if (!q) {
                                var I = k.cloneNode(true),
                                    K = document.createElementNS(b,
                                        "g"),
                                    O = k.parentNode;
                                O.appendChild(K);
                                K.appendChild(I);
                                n = svgedit.utilities.bboxToObj(K.getBBox());
                                O.removeChild(K)
                            }
                        }
                        return n
                    } catch (V) {
                        console.log(k, V)
                    }
                },
                m;
            $.each(f, function() {
                if (!m)
                    if (this.parentNode) m = h(this)
            });
            if (m == null) return null;
            var B = m.x + m.width,
                A = m.y + m.height,
                G = m.x,
                D = m.y,
                z = function(k) {
                    var n = k.getAttribute("stroke-width"),
                        q = 0;
                    if (k.getAttribute("stroke") != "none" && !isNaN(n)) q += n / 2;
                    return q
                },
                F = [];
            $.each(f, function(k, n) {
                var q = h(n);
                if (q) {
                    var u = z(n);
                    G = Math.min(G, q.x - u);
                    D = Math.min(D, q.y - u);
                    F.push(q)
                }
            });
            m.x = G;
            m.y = D;
            $.each(f, function(k, n) {
                var q = F[k];
                if (q && n.nodeType == 1) {
                    var u = z(n);
                    B = Math.max(B, q.x + q.width + u);
                    A = Math.max(A, q.y + q.height + u)
                }
            });
            m.width = B - G;
            m.height = A - D;
            return m
        };
    var pb = this.getVisibleElements = function(f) {
            f || (f = $(p).children());
            f.find("#canvas_background").length && f.splice(0, 1);
            var h = [];
            $(f).children().each(function(m, B) {
                try {
                    B.getBBox() && h.push(B)
                } catch (A) {}
            });
            return h.reverse()
        },
        fb = this.getVisibleElementsAndBBoxes = function(f) {
            f || (f = $(p).children());
            var h = [];
            $(f).children().each(function(m,
                B) {
                try {
                    B.getBBox() && h.push({
                        elem: B,
                        bbox: getStrokedBBox([B])
                    })
                } catch (A) {}
            });
            return h.reverse()
        },
        tb = this.groupSvgElem = function(f) {
            var h = document.createElementNS(b, "g");
            f.parentNode.replaceChild(h, f);
            $(h).append(f).data("gsvg", f)[0].id = ja()
        },
        ha = function(f) {
            var h = document.createElementNS(f.namespaceURI, f.nodeName);
            h.removeAttribute("id");
            $.each(f.attributes, function(B, A) {
                A.localName != "-moz-math-font-style" && h.setAttributeNS(A.namespaceURI, A.nodeName, A.nodeValue)
            });
            if (svgedit.browser.isWebkit() && f.nodeName ==
                "path") {
                var m = Ha.convertPath(f);
                h.setAttribute("d", m)
            }
            $.each(f.childNodes, function(B, A) {
                switch (A.nodeType) {
                    case 1:
                        h.appendChild(ha(A));
                        break;
                    case 3:
                        h.textContent = A.nodeValue
                }
            });
            if ($(f).data("gsvg")) $(h).data("gsvg", h.firstChild);
            else if ($(f).data("symbol")) {
                f = $(f).data("symbol");
                $(h).data("ref", f).data("symbol", f)
            } else h.tagName == "image" && Fb(h);
            h.id = ja();
            return h
        },
        Y, ja, M;
    (function(f) {
        var h = {};
        Y = f.getId = function() {
            return C().getId()
        };
        ja = f.getNextId = function() {
            return C().getNextId()
        };
        M = f.call = function(m,
            B) {
            if (h[m]) return h[m](this, B)
        };
        f.bind = function(m, B) {
            var A = h[m];
            h[m] = B;
            return A
        }
    })(c);
    this.prepareSvg = function(f) {
        this.sanitizeSvg(f.documentElement);
        f = f.getElementsByTagNameNS(b, "path");
        for (var h = 0, m = f.length; h < m; ++h) {
            var B = f[h];
            B.setAttribute("d", Ha.convertPath(B));
            Ha.fixEnd(B)
        }
    };
    var P = this.getRefElem = function(f) {
            return oa(ia(f).substr(1))
        },
        ba = function(f) {
            if (!svgedit.browser.isGecko()) return f;
            var h = f.cloneNode(true);
            f.parentNode.insertBefore(h, f);
            f.parentNode.removeChild(f);
            ra.releaseSelector(f);
            H[0] = h;
            ra.requestSelector(h).showGrips(true);
            return h
        };
    this.setRotationAngle = function(f, h) {
        f = parseFloat(f);
        var m = H[0];
        if (m) {
            var B = m.getAttribute("transform"),
                A = svgedit.utilities.getBBox(m),
                G = A.x + A.width / 2,
                D = A.y + A.height / 2;
            A = R(m);
            A.numberOfItems > 0 && A.getItem(0).type == 4 && A.removeItem(0);
            if (f != 0) {
                G = N(G, D, X(A).matrix);
                D = d.createSVGTransform();
                D.setRotate(f, G.x, G.y);
                A.numberOfItems ? A.insertItemBefore(D, 0) : A.appendItem(D)
            } else A.numberOfItems == 0 && m.removeAttribute("transform");
            if (!h) {
                A = m.getAttribute("transform");
                m.setAttribute("transform", B);
                Ya("transform", A, H);
                M("changed", H)
            }
            oa("pathpointgrip_container");
            m = ra.requestSelector(H[0]);
            m.resize();
            m.updateGripCursors(f)
        }
    };
    var Ca = this.recalculateAllSelectedDimensions = function() {
            for (var f = new Ba(db == "none" ? "position" : "size"), h = H.length; h--;) {
                var m = Qa(H[h]);
                m && f.addSubCommand(m)
            }
            if (!f.isEmpty()) {
                xa(f);
                M("changed", H)
            }
        },
        Ma = [0, "z", "M", "m", "L", "l", "C", "c", "Q", "q", "A", "a", "H", "h", "V", "v", "S", "s", "T", "t"],
        Wa = function(f) {
            console.log([f.a, f.b, f.c, f.d, f.e, f.f])
        },
        Za = this.remapElement =
        function(f, h, m) {
            var B = l.gridSnapping && f.parentNode.parentNode.localName === "svg",
                A = function() {
                    if (B)
                        for (var q in h) h[q] = wa(h[q]);
                    ma(f, h, 1E3, true)
                };
            box = svgedit.utilities.getBBox(f);
            for (var G = 0; G < 2; G++) {
                var D = G === 0 ? "fill" : "stroke",
                    z = f.getAttribute(D);
                if (z && z.indexOf("url(") === 0)
                    if (m.a < 0 || m.d < 0) {
                        z = P(z).cloneNode(true);
                        if (m.a < 0) {
                            var F = z.getAttribute("x1"),
                                k = z.getAttribute("x2");
                            z.setAttribute("x1", -(F - 1));
                            z.setAttribute("x2", -(k - 1))
                        }
                        if (m.d < 0) {
                            F = z.getAttribute("y1");
                            k = z.getAttribute("y2");
                            z.setAttribute("y1", -(F - 1));
                            z.setAttribute("y2", -(k - 1))
                        }
                        z.id = ja();
                        gb().appendChild(z);
                        f.setAttribute(D, "url(#" + z.id + ")")
                    }
            }
            G = f.tagName;
            if (G === "g" || G === "text" || G === "use")
                if (m.a == 1 && m.b == 0 && m.c == 0 && m.d == 1 && (m.e != 0 || m.f != 0)) {
                    D = X(f).matrix;
                    D = ca(D.inverse(), m, D);
                    h.x = parseFloat(h.x) + D.e;
                    h.y = parseFloat(h.y) + D.f
                } else {
                    D = R(f);
                    z = d.createSVGTransform();
                    z.setMatrix(ca(X(D).matrix, m));
                    D.clear();
                    D.appendItem(z)
                }
            switch (G) {
                case "foreignObject":
                case "rect":
                case "image":
                    if (G === "image" && (m.a < 0 || m.d < 0)) {
                        D = R(f);
                        z = d.createSVGTransform();
                        z.setMatrix(ca(X(D).matrix,
                            m));
                        D.clear();
                        D.appendItem(z)
                    } else {
                        D = N(h.x, h.y, m);
                        h.width = m.a * h.width;
                        h.height = m.d * h.height;
                        h.x = D.x + Math.min(0, h.width);
                        h.y = D.y + Math.min(0, h.height);
                        h.width = Math.abs(h.width);
                        h.height = Math.abs(h.height)
                    }
                    A();
                    break;
                case "ellipse":
                    G = N(h.cx, h.cy, m);
                    h.cx = G.x;
                    h.cy = G.y;
                    h.rx = m.a * h.rx;
                    h.ry = m.d * h.ry;
                    h.rx = Math.abs(h.rx);
                    h.ry = Math.abs(h.ry);
                    A();
                    break;
                case "circle":
                    G = N(h.cx, h.cy, m);
                    h.cx = G.x;
                    h.cy = G.y;
                    G = svgedit.math.transformBox(box.x, box.y, box.width, box.height, m);
                    h.r = Math.min((G.tr.x - G.tl.x) / 2, (G.bl.y - G.tl.y) /
                        2);
                    if (h.r) h.r = Math.abs(h.r);
                    A();
                    break;
                case "line":
                    D = N(h.x1, h.y1, m);
                    F = N(h.x2, h.y2, m);
                    h.x1 = D.x;
                    h.y1 = D.y;
                    h.x2 = F.x;
                    h.y2 = F.y;
                case "text":
                    m = f.querySelectorAll("tspan");
                    for (G = m.length; G--;) {
                        D = ta("x", f.getAttribute("x"));
                        z = ta("x", m[G].getAttribute("x"));
                        F = ta("y", f.getAttribute("y"));
                        k = ta("y", m[G].getAttribute("y"));
                        var n = {};
                        if (!isNaN(D) && !isNaN(z) && D != 0 && z != 0 && h.x) n.x = h.x - (D - z);
                        if (!isNaN(F) && !isNaN(k) && F != 0 && k != 0 && h.y) n.y = h.y - (F - k);
                        if (n.x || n.y) ma(m[G], n, 1E3, true)
                    }
                    A();
                    break;
                case "use":
                    A();
                    break;
                case "g":
                    (A =
                        $(f).data("gsvg")) && ma(A, h, 1E3, true);
                    break;
                case "polyline":
                case "polygon":
                    A = h.points.length;
                    for (G = 0; G < A; ++G) {
                        k = h.points[G];
                        k = N(k.x, k.y, m);
                        h.points[G].x = k.x;
                        h.points[G].y = k.y
                    }
                    A = h.points.length;
                    m = "";
                    for (G = 0; G < A; ++G) {
                        k = h.points[G];
                        m += k.x + "," + k.y + " "
                    }
                    f.setAttribute("points", m);
                    break;
                case "path":
                    D = f.pathSegList;
                    A = D.numberOfItems;
                    h.d = Array(A);
                    for (G = 0; G < A; ++G) {
                        z = D.getItem(G);
                        h.d[G] = {
                            type: z.pathSegType,
                            x: z.x,
                            y: z.y,
                            x1: z.x1,
                            y1: z.y1,
                            x2: z.x2,
                            y2: z.y2,
                            r1: z.r1,
                            r2: z.r2,
                            angle: z.angle,
                            largeArcFlag: z.largeArcFlag,
                            sweepFlag: z.sweepFlag
                        }
                    }
                    A =
                        h.d.length;
                    G = h.d[0];
                    n = N(G.x, G.y, m);
                    h.d[0].x = n.x;
                    h.d[0].y = n.y;
                    for (G = 1; G < A; ++G) {
                        z = h.d[G];
                        D = z.type;
                        if (D % 2 == 0) {
                            k = N(z.x != undefined ? z.x : n.x, z.y != undefined ? z.y : n.y, m);
                            D = N(z.x1, z.y1, m);
                            F = N(z.x2, z.y2, m);
                            z.x = k.x;
                            z.y = k.y;
                            z.x1 = D.x;
                            z.y1 = D.y;
                            z.x2 = F.x;
                            z.y2 = F.y
                        } else {
                            z.x = m.a * z.x;
                            z.y = m.d * z.y;
                            z.x1 = m.a * z.x1;
                            z.y1 = m.d * z.y1;
                            z.x2 = m.a * z.x2;
                            z.y2 = m.d * z.y2
                        }
                        z.r1 = m.a * z.r1;
                        z.r2 = m.d * z.r2
                    }
                    m = "";
                    A = h.d.length;
                    for (G = 0; G < A; ++G) {
                        z = h.d[G];
                        D = z.type;
                        m += Ma[D];
                        switch (D) {
                            case 13:
                            case 12:
                                m += z.x + " ";
                                break;
                            case 15:
                            case 14:
                                m += z.y + " ";
                                break;
                            case 3:
                            case 5:
                            case 19:
                            case 2:
                            case 4:
                            case 18:
                                m +=
                                    z.x + "," + z.y + " ";
                                break;
                            case 7:
                            case 6:
                                m += z.x1 + "," + z.y1 + " " + z.x2 + "," + z.y2 + " " + z.x + "," + z.y + " ";
                                break;
                            case 9:
                            case 8:
                                m += z.x1 + "," + z.y1 + " " + z.x + "," + z.y + " ";
                                break;
                            case 11:
                            case 10:
                                m += z.r1 + "," + z.r2 + " " + z.angle + " " + +z.largeArcFlag + " " + +z.sweepFlag + " " + z.x + "," + z.y + " ";
                                break;
                            case 17:
                            case 16:
                                m += z.x2 + "," + z.y2 + " " + z.x + "," + z.y + " "
                        }
                    }
                    f.setAttribute("d", m)
            }
        },
        nb = function(f, h, m) {
            f = P(f).firstChild;
            var B = R(f),
                A = d.createSVGTransform();
            A.setTranslate(h, m);
            B.appendItem(A);
            Qa(f)
        },
        Qa = this.recalculateDimensions = function(f) {
            if (f ==
                null) return null;
            var h = R(f);
            if (h && h.numberOfItems > 0) {
                for (var m = h.numberOfItems; m--;) {
                    var B = h.getItem(m);
                    if (B.type === 0) h.removeItem(m);
                    else if (B.type === 1) svgedit.math.isIdentity(B.matrix) && h.removeItem(m);
                    else B.type === 4 && B.angle === 0 && h.removeItem(m)
                }
                if (h.numberOfItems === 1 && pa(f)) return null
            }
            if (!h || h.numberOfItems == 0) {
                f.removeAttribute("transform");
                return null
            }
            if (h) {
                m = h.numberOfItems;
                for (var A = []; m--;) {
                    B = h.getItem(m);
                    if (B.type === 1) A.push([B.matrix, m]);
                    else if (A.length) A = []
                }
                if (A.length === 2) {
                    m = d.createSVGTransformFromMatrix(ca(A[1][0],
                        A[0][0]));
                    h.removeItem(A[0][1]);
                    h.removeItem(A[1][1]);
                    h.insertItemBefore(m, A[1][1])
                }
                m = h.numberOfItems;
                if (m >= 2 && h.getItem(m - 2).type === 1 && h.getItem(m - 1).type === 2) {
                    A = d.createSVGTransform();
                    B = ca(h.getItem(m - 2).matrix, h.getItem(m - 1).matrix);
                    A.setMatrix(B);
                    h.removeItem(m - 2);
                    h.removeItem(m - 2);
                    h.appendItem(A)
                }
            }
            switch (f.tagName) {
                case "line":
                case "polyline":
                case "polygon":
                case "path":
                    break;
                default:
                    if (h.numberOfItems === 1 && h.getItem(0).type === 1 || h.numberOfItems === 2 && h.getItem(0).type === 1 && h.getItem(0).type ===
                        4) return null
            }
            var G = $(f).data("gsvg");
            m = new Ba("Transform");
            var D = {},
                z = null;
            B = [];
            switch (f.tagName) {
                case "line":
                    B = ["x1", "y1", "x2", "y2"];
                    break;
                case "circle":
                    B = ["cx", "cy", "r"];
                    break;
                case "ellipse":
                    B = ["cx", "cy", "rx", "ry"];
                    break;
                case "foreignObject":
                case "rect":
                case "image":
                    B = ["width", "height", "x", "y"];
                    break;
                case "use":
                case "text":
                case "tspan":
                    B = ["x", "y"];
                    break;
                case "polygon":
                case "polyline":
                    z = {};
                    z.points = f.getAttribute("points");
                    A = f.points;
                    var F = A.numberOfItems;
                    D.points = Array(F);
                    for (var k = 0; k < F; ++k) {
                        var n =
                            A.getItem(k);
                        D.points[k] = {
                            x: n.x,
                            y: n.y
                        }
                    }
                    break;
                case "path":
                    z = {};
                    z.d = f.getAttribute("d");
                    D.d = f.getAttribute("d")
            }
            if (B.length) {
                D = $(f).attr(B);
                $.each(D, function(Aa, Oa) {
                    D[Aa] = ta(Aa, Oa)
                })
            } else if (G) D = {
                x: $(G).attr("x") || 0,
                y: $(G).attr("y") || 0
            };
            if (z == null) {
                z = $.extend(true, {}, D);
                $.each(z, function(Aa, Oa) {
                    z[Aa] = ta(Aa, Oa)
                })
            }
            z.transform = Ra ? Ra : "";
            if (f.tagName == "g" && !G || f.tagName == "a") {
                A = svgedit.utilities.getBBox(f);
                var q = {
                        x: A.x + A.width / 2,
                        y: A.y + A.height / 2
                    },
                    u = N(A.x + A.width / 2, A.y + A.height / 2, X(h).matrix);
                B = d.createSVGMatrix();
                if (A = pa(f)) {
                    k = A * Math.PI / 180;
                    F = Math.abs(k) > 1.0E-10 ? Math.sin(k) / (1 - Math.cos(k)) : 2 / k;
                    for (k = 0; k < h.numberOfItems; ++k) {
                        B = h.getItem(k);
                        if (B.type == 4) {
                            B = B.matrix;
                            q.y = (F * B.e + B.f) / 2;
                            q.x = (B.e - F * B.f) / 2;
                            h.removeItem(k);
                            break
                        }
                    }
                }
                k = B = G = 0;
                var E = h.numberOfItems;
                if (E) var I = h.getItem(0).matrix;
                if (E >= 3 && h.getItem(E - 2).type == 3 && h.getItem(E - 3).type == 2 && h.getItem(E - 1).type == 2) {
                    k = 3;
                    var K = h.getItem(E - 3).matrix,
                        O = h.getItem(E - 2).matrix,
                        V = h.getItem(E - 1).matrix;
                    F = f.childNodes;
                    for (n = F.length; n--;) {
                        var aa = F.item(n);
                        B = G = 0;
                        if (aa.nodeType ==
                            1) {
                            var S = R(aa);
                            if (S) {
                                B = X(S).matrix;
                                G = pa(aa);
                                var ea = Ra,
                                    ga = [];
                                Ra = aa.getAttribute("transform");
                                if (G || la(S)) {
                                    var T = d.createSVGTransform();
                                    T.setMatrix(ca(K, O, V, B));
                                    S.clear();
                                    S.appendItem(T);
                                    ga.push(T)
                                } else {
                                    G = ca(B.inverse(), V, B);
                                    T = d.createSVGMatrix();
                                    T.e = -G.e;
                                    T.f = -G.f;
                                    B = ca(T.inverse(), B.inverse(), K, O, V, B, G.inverse());
                                    var qa = d.createSVGTransform(),
                                        va = d.createSVGTransform(),
                                        za = d.createSVGTransform();
                                    qa.setTranslate(G.e, G.f);
                                    va.setScale(B.a, B.d);
                                    za.setTranslate(T.e, T.f);
                                    S.appendItem(za);
                                    S.appendItem(va);
                                    S.appendItem(qa);
                                    ga.push(za);
                                    ga.push(va);
                                    ga.push(qa)
                                }
                                m.addSubCommand(Qa(aa));
                                Ra = ea
                            }
                        }
                    }
                    h.removeItem(E - 1);
                    h.removeItem(E - 2);
                    h.removeItem(E - 3)
                } else if (E >= 3 && h.getItem(E - 1).type == 1) {
                    k = 3;
                    B = X(h).matrix;
                    T = d.createSVGTransform();
                    T.setMatrix(B);
                    h.clear();
                    h.appendItem(T)
                } else if ((E == 1 || E > 1 && h.getItem(1).type != 3) && h.getItem(0).type == 2) {
                    k = 2;
                    G = X(h).matrix;
                    h.removeItem(0);
                    B = X(h).matrix.inverse();
                    B = ca(B, G);
                    G = B.e;
                    B = B.f;
                    if (G != 0 || B != 0) {
                        F = f.childNodes;
                        n = F.length;
                        for (E = []; n--;) {
                            aa = F.item(n);
                            if (aa.nodeType == 1) {
                                if (aa.getAttribute("clip-path")) {
                                    ea =
                                        aa.getAttribute("clip-path");
                                    if (E.indexOf(ea) === -1) {
                                        nb(ea, G, B);
                                        E.push(ea)
                                    }
                                }
                                ea = Ra;
                                Ra = aa.getAttribute("transform");
                                if (S = R(aa)) {
                                    K = d.createSVGTransform();
                                    K.setTranslate(G, B);
                                    S.numberOfItems ? S.insertItemBefore(K, 0) : S.appendItem(K);
                                    m.addSubCommand(Qa(aa));
                                    S = f.getElementsByTagNameNS(b, "use");
                                    aa = "#" + aa.id;
                                    for (K = S.length; K--;) {
                                        O = S.item(K);
                                        if (aa == ka(O)) {
                                            V = d.createSVGTransform();
                                            V.setTranslate(-G, -B);
                                            R(O).insertItemBefore(V, 0);
                                            m.addSubCommand(Qa(O))
                                        }
                                    }
                                    Ra = ea
                                }
                            }
                        }
                        E = [];
                        Ra = ea
                    }
                } else if (E == 1 && h.getItem(0).type == 1 && !A) {
                    k =
                        1;
                    B = h.getItem(0).matrix;
                    F = f.childNodes;
                    for (n = F.length; n--;) {
                        aa = F.item(n);
                        if (aa.nodeType == 1) {
                            ea = Ra;
                            Ra = aa.getAttribute("transform");
                            if (S = R(aa)) {
                                G = ca(B, X(S).matrix);
                                E = d.createSVGTransform();
                                E.setMatrix(G);
                                S.clear();
                                S.appendItem(E, 0);
                                m.addSubCommand(Qa(aa));
                                Ra = ea;
                                ea = aa.getAttribute("stroke-width");
                                aa.getAttribute("stroke") !== "none" && !isNaN(ea) && aa.setAttribute("stroke-width", ea * ((Math.abs(G.a) + Math.abs(G.d)) / 2))
                            }
                        }
                    }
                    h.clear()
                } else {
                    if (A) {
                        q = d.createSVGTransform();
                        q.setRotate(A, u.x, u.y);
                        h.numberOfItems ? h.insertItemBefore(q,
                            0) : h.appendItem(q)
                    }
                    h.numberOfItems == 0 && f.removeAttribute("transform");
                    return null
                }
                if (k == 2) {
                    if (A) {
                        u = {
                            x: q.x + I.e,
                            y: q.y + I.f
                        };
                        q = d.createSVGTransform();
                        q.setRotate(A, u.x, u.y);
                        h.numberOfItems ? h.insertItemBefore(q, 0) : h.appendItem(q)
                    }
                } else if (k == 3) {
                    B = X(h).matrix;
                    I = d.createSVGTransform();
                    I.setRotate(A, q.x, q.y);
                    I = I.matrix;
                    q = d.createSVGTransform();
                    q.setRotate(A, u.x, u.y);
                    u = q.matrix.inverse();
                    ea = B.inverse();
                    u = ca(ea, u, I, B);
                    G = u.e;
                    B = u.f;
                    if (G != 0 || B != 0) {
                        F = f.childNodes;
                        for (n = F.length; n--;) {
                            aa = F.item(n);
                            if (aa.nodeType ==
                                1) {
                                ea = Ra;
                                Ra = aa.getAttribute("transform");
                                S = R(aa);
                                K = d.createSVGTransform();
                                K.setTranslate(G, B);
                                S.numberOfItems ? S.insertItemBefore(K, 0) : S.appendItem(K);
                                m.addSubCommand(Qa(aa));
                                Ra = ea
                            }
                        }
                    }
                    if (A) h.numberOfItems ? h.insertItemBefore(q, 0) : h.appendItem(q)
                }
            } else {
                A = svgedit.utilities.getBBox(f);
                if (!A && f.tagName != "path") return null;
                B = d.createSVGMatrix();
                if (G = pa(f)) {
                    q = {
                        x: A.x + A.width / 2,
                        y: A.y + A.height / 2
                    };
                    u = N(A.x + A.width / 2, A.y + A.height / 2, X(h).matrix);
                    k = G * Math.PI / 180;
                    F = Math.abs(k) > 1.0E-10 ? Math.sin(k) / (1 - Math.cos(k)) : 2 /
                        k;
                    for (k = 0; k < h.numberOfItems; ++k) {
                        B = h.getItem(k);
                        if (B.type == 4) {
                            B = B.matrix;
                            q.y = (F * B.e + B.f) / 2;
                            q.x = (B.e - F * B.f) / 2;
                            h.removeItem(k);
                            break
                        }
                    }
                }
                k = 0;
                E = h.numberOfItems;
                if (!svgedit.browser.isWebkit())
                    if ((I = f.getAttribute("fill")) && I.indexOf("url(") === 0) {
                        I = P(I);
                        ea = "pattern";
                        if (I.tagName !== ea) ea = "gradient";
                        if (I.getAttribute(ea + "Units") === "userSpaceOnUse") {
                            B = X(h).matrix;
                            A = R(I);
                            A = X(A).matrix;
                            B = ca(B, A);
                            A = "matrix(" + [B.a, B.b, B.c, B.d, B.e, B.f].join(",") + ")";
                            I.setAttribute(ea + "Transform", A)
                        }
                    }
                if (E >= 3 && h.getItem(E - 2).type ==
                    3 && h.getItem(E - 3).type == 2 && h.getItem(E - 1).type == 2) {
                    k = 3;
                    B = X(h, E - 3, E - 1).matrix;
                    h.removeItem(E - 1);
                    h.removeItem(E - 2);
                    h.removeItem(E - 3)
                } else if (E == 4 && h.getItem(E - 1).type == 1) {
                    k = 3;
                    B = X(h).matrix;
                    T = d.createSVGTransform();
                    T.setMatrix(B);
                    h.clear();
                    h.appendItem(T);
                    B = d.createSVGMatrix()
                } else if ((E == 1 || E > 1 && h.getItem(1).type != 3) && h.getItem(0).type == 2) {
                    k = 2;
                    I = h.getItem(0).matrix;
                    ea = X(h, 1).matrix;
                    A = ea.inverse();
                    B = ca(A, I, ea);
                    h.removeItem(0)
                } else if (E == 1 && h.getItem(0).type == 1 && !G) {
                    B = X(h).matrix;
                    switch (f.tagName) {
                        case "line":
                            D =
                                $(f).attr(["x1", "y1", "x2", "y2"]);
                        case "polyline":
                        case "polygon":
                            D.points = f.getAttribute("points");
                            if (D.points) {
                                A = f.points;
                                F = A.numberOfItems;
                                D.points = Array(F);
                                for (k = 0; k < F; ++k) {
                                    n = A.getItem(k);
                                    D.points[k] = {
                                        x: n.x,
                                        y: n.y
                                    }
                                }
                            }
                        case "path":
                            D.d = f.getAttribute("d");
                            k = 1;
                            h.clear()
                    }
                } else {
                    k = 4;
                    if (G) {
                        q = d.createSVGTransform();
                        q.setRotate(G, u.x, u.y);
                        h.numberOfItems ? h.insertItemBefore(q, 0) : h.appendItem(q)
                    }
                    h.numberOfItems == 0 && f.removeAttribute("transform");
                    return null
                }
                if (k == 1 || k == 2 || k == 3) Za(f, D, B);
                if (k == 2) {
                    if (G) {
                        la(h) ||
                            (u = {
                                x: q.x + B.e,
                                y: q.y + B.f
                            });
                        q = d.createSVGTransform();
                        q.setRotate(G, u.x, u.y);
                        h.numberOfItems ? h.insertItemBefore(q, 0) : h.appendItem(q)
                    }
                } else if (k == 3 && G) {
                    B = X(h).matrix;
                    I = d.createSVGTransform();
                    I.setRotate(G, q.x, q.y);
                    I = I.matrix;
                    q = d.createSVGTransform();
                    q.setRotate(G, u.x, u.y);
                    u = q.matrix.inverse();
                    ea = B.inverse();
                    u = ca(ea, u, I, B);
                    Za(f, D, u);
                    if (G) h.numberOfItems ? h.insertItemBefore(q, 0) : h.appendItem(q)
                }
            }
            h.numberOfItems == 0 && f.removeAttribute("transform");
            m.addSubCommand(new Ka(f, z));
            return m
        },
        mb = null,
        ya = this.clearSelection =
        function(f) {
            if (H[0] != null)
                for (var h = H.length, m = 0; m < h; ++m) {
                    var B = H[m];
                    if (B == null) break;
                    ra.releaseSelector(B);
                    H[m] = null
                }
            f || M("selected", H)
        },
        qb = this.addToSelection = function(f, h) {
            if (f.length != 0) {
                for (var m = 0; m < H.length;) {
                    if (H[m] == null) break;
                    ++m
                }
                for (var B = f.length; B--;) {
                    var A = f[B];
                    if (A && svgedit.utilities.getBBox(A)) {
                        if (A.tagName === "a" && A.childNodes.length === 1) A = A.firstChild;
                        if (H.indexOf(A) == -1) {
                            H[m] = A;
                            m++;
                            A = ra.requestSelector(A);
                            H.length > 1 && A.showGrips(false)
                        }
                    }
                }
                M("selected", H);
                h || H.length == 1 ? ra.requestSelector(H[0]).showGrips(true) :
                    ra.requestSelector(H[0]).showGrips(false);
                for (H.sort(function(G, D) {
                        if (G && D && G.compareDocumentPosition) return 3 - (D.compareDocumentPosition(G) & 6);
                        else if (G == null) return 1
                    }); H[0] == null;) H.shift(0)
            }
        },
        rb = this.selectOnly = function(f, h) {
            ya(true);
            qb(f, h)
        };
    this.removeFromSelection = function(f) {
        if (H[0] != null)
            if (f.length != 0) {
                var h = Array(H.length);
                j = 0;
                len = H.length;
                for (var m = 0; m < len; ++m) {
                    var B = H[m];
                    if (B)
                        if (f.indexOf(B) == -1) {
                            h[j] = B;
                            j++
                        } else ra.releaseSelector(B)
                }
                H = h
            }
    };
    this.selectAllInCurrentLayer = function() {
        var f =
            C().getCurrentLayer();
        if (f) {
            Ea = "select";
            rb($(L || f).children())
        }
    };
    var Bb = this.getMouseTarget = function(f) {
        if (f == null || f.target == null) return null;
        f = f.target;
        if (f.correspondingUseElement) f = f.correspondingUseElement;
        if (["http://www.w3.org/1998/Math/MathML", "http://www.w3.org/1999/xhtml"].indexOf(f.namespaceURI) >= 0 && f.id != "svgcanvas")
            for (; f.nodeName != "foreignObject";) {
                f = f.parentNode;
                if (!f) return d
            }
        var h = C().getCurrentLayer();
        if ([d, a, p, h].indexOf(f) >= 0) return d;
        if ($(f).closest("#selectorParentGroup").length) return ra.selectorParentGroup;
        for (; f.parentNode && f.parentNode !== (L || h);) f = f.parentNode;
        return f
    };
    (function() {
        var f = null,
            h = null,
            m = null,
            B = null,
            A = null,
            G = {},
            D = {
                minx: null,
                miny: null,
                maxx: null,
                maxy: null
            };
        $(a).mousedown(function(z) {
            if (!c.spaceKey) {
                var F = z.button === 2;
                mb = p.querySelector("g").getScreenCTM().inverse();
                var k = N(z.pageX, z.pageY, mb),
                    n = k.x * v;
                k = k.y * v;
                z.preventDefault();
                if (F) Ea = "select";
                n = n / v;
                k = k / v;
                var q = Bb(z);
                if (q.tagName === "a" && q.childNodes.length === 1) q = q.firstChild;
                var u = B = h = n,
                    E = A = m = k;
                if (l.gridSnapping) {
                    n = wa(n);
                    k = wa(k);
                    h = wa(h);
                    m = wa(m)
                }
                if (q == ra.selectorParentGroup && H[0] != null) {
                    q = z.target;
                    var I = cb(q, "type");
                    if (I == "rotate") {
                        Ea = "rotate";
                        current_rotate_mode = cb(q, "dir")
                    } else if (I == "resize") {
                        Ea = "resize";
                        db = cb(q, "dir")
                    }
                    q = H[0]
                }
                Ra = q.getAttribute("transform");
                I = R(q);
                switch (Ea) {
                    case "select":
                        Ga = true;
                        db = "none";
                        if (F) Ga = false;
                        if (q != d) {
                            if (H.indexOf(q) == -1) {
                                z.shiftKey || ya(true);
                                qb([q]);
                                wb = q;
                                Ha.clear()
                            }
                            if (!F)
                                for (F = 0; F < H.length; ++F)
                                    if (H[F] != null) {
                                        var K = R(H[F]);
                                        K.numberOfItems ? K.insertItemBefore(d.createSVGTransform(), 0) : K.appendItem(d.createSVGTransform())
                                    }
                        } else if (!F) {
                            ya();
                            Ea = "multiselect";
                            if (sa == null) sa = ra.getRubberBandBox();
                            B *= v;
                            A *= v;
                            ma(sa, {
                                x: B,
                                y: A,
                                width: 0,
                                height: 0,
                                display: "inline"
                            }, 100)
                        }
                        break;
                    case "zoom":
                        Ga = true;
                        if (sa == null) sa = ra.getRubberBandBox();
                        ma(sa, {
                            x: u * v,
                            y: u * v,
                            width: 0,
                            height: 0,
                            display: "inline"
                        }, 100);
                        break;
                    case "resize":
                        Ga = true;
                        h = n;
                        m = k;
                        G = svgedit.utilities.getBBox($("#selectedBox0")[0]);
                        var O = {};
                        $.each(G, function(V, aa) {
                            O[V] = aa / v
                        });
                        G = O;
                        F = pa(q) ? 1 : 0;
                        if (la(I)) {
                            I.insertItemBefore(d.createSVGTransform(), F);
                            I.insertItemBefore(d.createSVGTransform(), F);
                            I.insertItemBefore(d.createSVGTransform(),
                                F)
                        } else {
                            I.appendItem(d.createSVGTransform());
                            I.appendItem(d.createSVGTransform());
                            I.appendItem(d.createSVGTransform());
                            if (svgedit.browser.supportsNonScalingStroke()) {
                                if (n = svgedit.browser.isWebkit()) K = function(V) {
                                    var aa = V.getAttributeNS(null, "stroke");
                                    V.removeAttributeNS(null, "stroke");
                                    setTimeout(function() {
                                        V.setAttributeNS(null, "stroke", aa)
                                    }, 0)
                                };
                                q.style.vectorEffect = "non-scaling-stroke";
                                n && K(q);
                                k = q.getElementsByTagName("*");
                                u = k.length;
                                for (F = 0; F < u; F++) {
                                    k[F].style.vectorEffect = "non-scaling-stroke";
                                    n && K(k[F])
                                }
                            }
                        }
                        break;
                    case "fhellipse":
                    case "fhrect":
                    case "fhpath":
                        Ga = true;
                        f = u + "," + E + " ";
                        K = J.stroke_width == 0 ? 1 : J.stroke_width;
                        U({
                            element: "polyline",
                            curStyles: true,
                            attr: {
                                points: f,
                                id: ja(),
                                fill: "none",
                                opacity: J.opacity / 2,
                                "stroke-linecap": "round",
                                style: "pointer-events:none"
                            }
                        });
                        D.minx = u;
                        D.maxx = u;
                        D.miny = E;
                        D.maxy = E;
                        break;
                    case "image":
                        Ga = true;
                        K = U({
                            element: "image",
                            attr: {
                                x: n,
                                y: k,
                                width: 0,
                                height: 0,
                                id: ja(),
                                opacity: J.opacity / 2,
                                style: "pointer-events:inherit"
                            }
                        });
                        Z(K, Da);
                        Fb(K);
                        break;
                    case "square":
                    case "rect":
                        Ga = true;
                        h = n;
                        m = k;
                        U({
                            element: "rect",
                            curStyles: true,
                            attr: {
                                x: n,
                                y: k,
                                width: 0,
                                height: 0,
                                id: ja(),
                                opacity: J.opacity / 2
                            }
                        });
                        break;
                    case "line":
                        Ga = true;
                        K = J.stroke_width == 0 ? 1 : J.stroke_width;
                        U({
                            element: "line",
                            curStyles: true,
                            attr: {
                                x1: n,
                                y1: k,
                                x2: n,
                                y2: k,
                                id: ja(),
                                stroke: J.stroke,
                                "stroke-width": K,
                                "stroke-dasharray": J.stroke_dasharray,
                                "stroke-linejoin": J.stroke_linejoin,
                                "stroke-linecap": J.stroke_linecap,
                                "stroke-opacity": J.stroke_opacity,
                                fill: "none",
                                opacity: J.opacity / 2,
                                style: "pointer-events:none"
                            }
                        });
                        break;
                    case "circle":
                        Ga = true;
                        U({
                            element: "circle",
                            curStyles: true,
                            attr: {
                                cx: n,
                                cy: k,
                                r: 0,
                                id: ja(),
                                opacity: J.opacity / 2
                            }
                        });
                        break;
                    case "ellipse":
                        Ga = true;
                        U({
                            element: "ellipse",
                            curStyles: true,
                            attr: {
                                cx: n,
                                cy: k,
                                rx: 0,
                                ry: 0,
                                id: ja(),
                                opacity: J.opacity / 2
                            }
                        });
                        break;
                    case "text":
                        Ga = true;
                        U({
                            element: "text",
                            curStyles: true,
                            attr: {
                                x: n,
                                y: k,
                                id: ja(),
                                fill: Ua.fill,
                                "stroke-width": Ua.stroke_width,
                                "font-size": Ua.font_size,
                                "font-family": Ua.font_family,
                                "text-anchor": "start",
                                "xml:space": "preserve",
                                opacity: J.opacity
                            }
                        });
                        break;
                    case "path":
                    case "pathedit":
                        h *= v;
                        m *= v;
                        Ha.mouseDown(z, q, h, m);
                        Ga =
                            true;
                        break;
                    case "textedit":
                        h *= v;
                        m *= v;
                        bb.mouseDown(z, q, h, m);
                        Ga = true;
                        break;
                    case "rotate":
                        Ga = true;
                        c.undoMgr.beginUndoableChange("transform", H);
                        document.getElementById("workarea").className = "rotate"
                }
                K = ib("mouseDown", {
                    event: z,
                    start_x: h,
                    start_y: m,
                    selectedElements: H
                }, true);
                $.each(K, function(V, aa) {
                    if (aa && aa.started) Ga = true
                });
                if (Ea) document.getElementById("workarea").className = Ea == "resize" ? z.target.style.cursor : Ea
            }
        }).mousemove(function(z) {
            if (!(z.originalEvent.touches && z.originalEvent.touches.length > 1))
                if (Ga)
                    if (!(z.button ===
                            1 || c.spaceKey)) {
                        var F = H[0],
                            k = N(z.pageX, z.pageY, mb),
                            n = k.x * v;
                        k = k.y * v;
                        var q = oa(Y()),
                            u = x = n / v,
                            E = y = k / v;
                        if (l.gridSnapping) {
                            x = wa(x);
                            y = wa(y)
                        }
                        z.preventDefault();
                        switch (Ea) {
                            case "select":
                                if (H[0] !== null) {
                                    u = x - h;
                                    var I = y - m;
                                    if (l.gridSnapping) {
                                        u = wa(u);
                                        I = wa(I)
                                    }
                                    if (z.shiftKey) {
                                        var K = W(h, m, x, y);
                                        x = K.x;
                                        y = K.y
                                    }
                                    if (u != 0 || I != 0) {
                                        E = H.length;
                                        for (var O = 0; O < E; ++O) {
                                            F = H[O];
                                            if (F == null) break;
                                            var V = d.createSVGTransform();
                                            q = R(F);
                                            if (K) {
                                                u = K.x - h;
                                                I = K.y - m
                                            }
                                            V.setTranslate(u, I);
                                            q.numberOfItems ? q.replaceItem(V, 0) : q.appendItem(V);
                                            ra.requestSelector(F).resize()
                                        }
                                        if (z.altKey)
                                            if (!c.addClones) {
                                                c.addClones =
                                                    c.cloneSelectedElements(0, 0, V);
                                                c.removeClones = function() {
                                                    c.addClones && c.addClones.forEach(function(va) {
                                                        va.parentNode && va.parentNode.removeChild(va);
                                                        c.addClones = false
                                                    })
                                                };
                                                window.addEventListener("keyup", c.removeClones)
                                            }
                                        M("transition", H)
                                    }
                                }
                                break;
                            case "multiselect":
                                u *= v;
                                E *= v;
                                ma(sa, {
                                    x: Math.min(B, u),
                                    y: Math.min(A, E),
                                    width: Math.abs(u - B),
                                    height: Math.abs(E - A)
                                }, 100);
                                q = [];
                                u = [];
                                K = ob();
                                E = H.length;
                                for (O = 0; O < E; ++O) {
                                    I = K.indexOf(H[O]);
                                    if (I == -1) q.push(H[O]);
                                    else K[I] = null
                                }
                                E = K.length;
                                for (O = 0; O < E; ++O) K[O] && u.push(K[O]);
                                q.length > 0 && c.removeFromSelection(q);
                                u.length > 0 && qb(u);
                                break;
                            case "resize":
                                q = R(F);
                                u = (K = la(q)) ? G : svgedit.utilities.getBBox(F);
                                E = u.x;
                                O = u.y;
                                var aa = u.width,
                                    S = u.height;
                                u = x - h;
                                I = y - m;
                                if (l.gridSnapping) {
                                    u = wa(u);
                                    I = wa(I);
                                    S = wa(S);
                                    aa = wa(aa)
                                }
                                if (V = pa(F)) {
                                    var ea = Math.sqrt(u * u + I * I);
                                    I = Math.atan2(I, u) - V * Math.PI / 180;
                                    u = ea * Math.cos(I);
                                    I = ea * Math.sin(I)
                                }
                                if (db.indexOf("n") == -1 && db.indexOf("s") == -1) I = 0;
                                if (db.indexOf("e") == -1 && db.indexOf("w") == -1) u = 0;
                                var ga = ea = 0,
                                    T = S ? (S + I) / S : 1,
                                    qa = aa ? (aa + u) / aa : 1;
                                if (db.indexOf("n") >= 0) {
                                    T = S ? (S -
                                        I) / S : 1;
                                    ga = S
                                }
                                if (db.indexOf("w") >= 0) {
                                    qa = aa ? (aa - u) / aa : 1;
                                    ea = aa
                                }
                                u = d.createSVGTransform();
                                I = d.createSVGTransform();
                                aa = d.createSVGTransform();
                                if (l.gridSnapping) {
                                    E = wa(E);
                                    ea = wa(ea);
                                    O = wa(O);
                                    ga = wa(ga)
                                }
                                u.setTranslate(-(E + ea), -(O + ga));
                                if (z.shiftKey)
                                    if (qa == 1) qa = T;
                                    else T = qa;
                                I.setScale(qa, T);
                                aa.setTranslate(E + ea, O + ga);
                                if (K) {
                                    K = V ? 1 : 0;
                                    q.replaceItem(u, 2 + K);
                                    q.replaceItem(I, 1 + K);
                                    q.replaceItem(aa, 0 + K)
                                } else {
                                    K = q.numberOfItems;
                                    q.replaceItem(aa, K - 3);
                                    q.replaceItem(I, K - 2);
                                    q.replaceItem(u, K - 1)
                                }
                                ra.requestSelector(F).resize();
                                M("transition",
                                    H);
                                break;
                            case "zoom":
                                u *= v;
                                E *= v;
                                ma(sa, {
                                    x: Math.min(B * v, u),
                                    y: Math.min(A * v, E),
                                    width: Math.abs(u - B * v),
                                    height: Math.abs(E - A * v)
                                }, 100);
                                break;
                            case "text":
                                ma(q, {
                                    x: x,
                                    y: y
                                }, 1E3);
                                break;
                            case "line":
                                if (l.gridSnapping) {
                                    x = wa(x);
                                    y = wa(y)
                                }
                                u = x;
                                K = y;
                                if (z.shiftKey) {
                                    K = W(h, m, u, K);
                                    u = K.x;
                                    K = K.y
                                }
                                q.setAttributeNS(null, "x2", u);
                                q.setAttributeNS(null, "y2", K);
                                break;
                            case "foreignObject":
                            case "square":
                            case "rect":
                            case "image":
                                u = Math.abs(x - h);
                                K = Math.abs(y - m);
                                if (Ea == "square" || z.shiftKey) {
                                    u = K = Math.max(u, K);
                                    E = h < x ? h : h - u;
                                    O = m < y ? m : m - K
                                } else {
                                    E = Math.min(h,
                                        x);
                                    O = Math.min(m, y)
                                }
                                if (z.altKey) {
                                    u *= 2;
                                    K *= 2;
                                    E = h - u / 2;
                                    O = m - K / 2
                                }
                                if (l.gridSnapping) {
                                    u = wa(u);
                                    K = wa(K);
                                    E = wa(E);
                                    O = wa(O)
                                }
                                ma(q, {
                                    width: u,
                                    height: K,
                                    x: E,
                                    y: O
                                }, 1E3);
                                break;
                            case "circle":
                                u = $(q).attr(["cx", "cy"]);
                                K = u.cx;
                                E = u.cy;
                                u = Math.sqrt((x - K) * (x - K) + (y - E) * (y - E));
                                if (l.gridSnapping) u = wa(u);
                                q.setAttributeNS(null, "r", u);
                                break;
                            case "ellipse":
                                u = $(q).attr(["cx", "cy"]);
                                K = Math.abs(h + (x - h) / 2);
                                E = Math.abs(m + (y - m) / 2);
                                if (l.gridSnapping) {
                                    x = wa(x);
                                    K = wa(K);
                                    y = wa(y);
                                    E = wa(E)
                                }
                                u = Math.abs(h - K);
                                O = Math.abs(m - E);
                                if (z.shiftKey) {
                                    O = u;
                                    E = y > m ? m + u : m -
                                        u
                                }
                                if (z.altKey) {
                                    K = h;
                                    E = m;
                                    u = Math.abs(x - K);
                                    O = z.shiftKey ? u : Math.abs(y - E)
                                }
                                q.setAttributeNS(null, "rx", u);
                                q.setAttributeNS(null, "ry", O);
                                q.setAttributeNS(null, "cx", K);
                                q.setAttributeNS(null, "cy", E);
                                break;
                            case "fhellipse":
                            case "fhrect":
                                D.minx = Math.min(u, D.minx);
                                D.maxx = Math.max(u, D.maxx);
                                D.miny = Math.min(E, D.miny);
                                D.maxy = Math.max(E, D.maxy);
                            case "fhpath":
                                f += +u + "," + E + " ";
                                q.setAttributeNS(null, "points", f);
                                break;
                            case "path":
                            case "pathedit":
                                x *= v;
                                y *= v;
                                if (l.gridSnapping) {
                                    x = wa(x);
                                    y = wa(y);
                                    h = wa(h);
                                    m = wa(m)
                                }
                                if (z.shiftKey) {
                                    if (K =
                                        svgedit.path.path) {
                                        q = K.dragging ? K.dragging[0] : h;
                                        K = K.dragging ? K.dragging[1] : m
                                    } else {
                                        q = h;
                                        K = m
                                    }
                                    K = W(q, K, x, y);
                                    x = K.x;
                                    y = K.y
                                }
                                if (sa && sa.getAttribute("display") !== "none") {
                                    u *= v;
                                    E *= v;
                                    ma(sa, {
                                        x: Math.min(B * v, u),
                                        y: Math.min(A * v, E),
                                        width: Math.abs(u - B * v),
                                        height: Math.abs(E - A * v)
                                    }, 100)
                                }
                                Ha.mouseMove(z, x, y);
                                break;
                            case "textedit":
                                x *= v;
                                y *= v;
                                bb.mouseMove(n, k);
                                break;
                            case "rotate":
                                u = svgedit.utilities.getBBox(F);
                                K = u.x + u.width / 2;
                                E = u.y + u.height / 2;
                                q = fa(F);
                                q = N(K, E, q);
                                K = q.x;
                                E = q.y;
                                q = u.x;
                                O = u.y;
                                if (current_rotate_mode == "nw") q = u.x + u.width;
                                if (current_rotate_mode == "se") O = u.y + u.height;
                                if (current_rotate_mode == "sw") {
                                    q = u.x + u.width;
                                    O = u.y + u.height
                                }
                                compensation_angle = (Math.atan2(E - O, K - q) * (180 / Math.PI) - 90) % 360;
                                V = (Math.atan2(E - y, K - x) * (180 / Math.PI) - 90) % 360;
                                V += compensation_angle;
                                if (l.gridSnapping) V = wa(V);
                                if (z.shiftKey) V = Math.round(V / 45) * 45;
                                c.setRotationAngle(V < -180 ? 360 + V : V, true);
                                M("transition", H)
                        }
                        ib("mouseMove", {
                            event: z,
                            mouse_x: n,
                            mouse_y: k,
                            selected: F
                        })
                    }
        }).click(function(z) {
            z.preventDefault();
            return false
        }).dblclick(function(z) {
            var F = z.target.parentNode,
                k = Bb(z),
                n = k.tagName;
            if (F !== L) {
                if (n === "text" && Ea !== "textedit") {
                    z = N(z.pageX, z.pageY, mb);
                    bb.select(k, z.x, z.y)
                }
                if ((n === "g" || n === "a") && pa(k)) {
                    Db(k);
                    k = H[0];
                    ya(true)
                }
                L && Eb();
                F.tagName !== "g" && F.tagName !== "a" || F === C().getCurrentLayer() || k === ra.selectorParentGroup || Kb(k)
            }
        }).mouseup(function(z) {
            c.addClones = false;
            window.removeEventListener("keyup", c.removeClones);
            H = H.filter(Boolean);
            if (z.button !== 2) {
                var F = wb;
                wb = null;
                if (Ga) {
                    var k = N(z.pageX, z.pageY, mb),
                        n = k.x * v;
                    k = k.y * v;
                    var q = n / v,
                        u = k / v,
                        E = oa(Y()),
                        I = false;
                    Ga = false;
                    switch (Ea) {
                        case "resize":
                        case "multiselect":
                            if (sa != null) {
                                sa.setAttribute("display", "none");
                                hb = []
                            }
                            Ea = "select";
                        case "select":
                            if (H[0] != null) {
                                if (H.length == 1) {
                                    n = H[0];
                                    switch (n.tagName) {
                                        case "g":
                                        case "use":
                                        case "image":
                                        case "foreignObject":
                                            break;
                                        default:
                                            Xa.fill = n.getAttribute("fill");
                                            Xa.fill_opacity = n.getAttribute("fill-opacity");
                                            Xa.stroke = n.getAttribute("stroke");
                                            Xa.stroke_opacity = n.getAttribute("stroke-opacity");
                                            Xa.stroke_width = n.getAttribute("stroke-width");
                                            Xa.stroke_dasharray = n.getAttribute("stroke-dasharray");
                                            Xa.stroke_linejoin = n.getAttribute("stroke-linejoin");
                                            Xa.stroke_linecap = n.getAttribute("stroke-linecap")
                                    }
                                    if (n.tagName == "text") {
                                        Ua.font_size = n.getAttribute("font-size");
                                        Ua.font_family = n.getAttribute("font-family")
                                    }
                                    ra.requestSelector(n).showGrips(true)
                                }
                                Ca();
                                B = B;
                                A = A;
                                n = Math.abs(u - A);
                                if (n > 1 || n > 1) {
                                    z = H.length;
                                    for (n = 0; n < z; ++n) {
                                        if (H[n] == null) break;
                                        H[n].firstChild || ra.requestSelector(H[n]).resize()
                                    }
                                } else {
                                    n = z.target;
                                    if (H[0].nodeName === "path" && H[1] == null) Ha.select(H[0]);
                                    else z.shiftKey && F != n && c.removeFromSelection([n])
                                }
                                if (svgedit.browser.supportsNonScalingStroke())
                                    if (z =
                                        H[0]) {
                                        z.removeAttribute("style");
                                        svgedit.utilities.walkTree(z, function(V) {
                                            V.removeAttribute("style")
                                        })
                                    }
                            }
                            return;
                        case "zoom":
                            sa != null && sa.setAttribute("display", "none");
                            M("zoomed", {
                                x: Math.min(B, q),
                                y: Math.min(A, u),
                                width: Math.abs(q - B),
                                height: Math.abs(u - A),
                                factor: z.altKey ? 0.5 : 2
                            });
                            return;
                        case "fhpath":
                            F = E.getAttribute("points");
                            u = F.indexOf(",");
                            if (I = u >= 0 ? F.indexOf(",", u + 1) >= 0 : F.indexOf(" ", F.indexOf(" ") + 1) >= 0) E = Ha.smoothPolylineIntoPath(E);
                            break;
                        case "line":
                            F = $(E).attr(["x1", "x2", "y1", "y2"]);
                            I = F.x1 != F.x2 ||
                                F.y1 != F.y2;
                            break;
                        case "foreignObject":
                        case "square":
                        case "rect":
                        case "image":
                            F = $(E).attr(["width", "height"]);
                            I = F.width != 0 || F.height != 0 || Ea === "image";
                            break;
                        case "circle":
                            I = E.getAttribute("r") != 0;
                            break;
                        case "ellipse":
                            F = $(E).attr(["rx", "ry"]);
                            I = F.rx != null || F.ry != null;
                            break;
                        case "fhellipse":
                            if (D.maxx - D.minx > 0 && D.maxy - D.miny > 0) {
                                E = U({
                                    element: "ellipse",
                                    curStyles: true,
                                    attr: {
                                        cx: (D.minx + D.maxx) / 2,
                                        cy: (D.miny + D.maxy) / 2,
                                        rx: (D.maxx - D.minx) / 2,
                                        ry: (D.maxy - D.miny) / 2,
                                        id: Y()
                                    }
                                });
                                M("changed", [E]);
                                I = true
                            }
                            break;
                        case "fhrect":
                            if (D.maxx -
                                D.minx > 0 && D.maxy - D.miny > 0) {
                                E = U({
                                    element: "rect",
                                    curStyles: true,
                                    attr: {
                                        x: D.minx,
                                        y: D.miny,
                                        width: D.maxx - D.minx,
                                        height: D.maxy - D.miny,
                                        id: Y()
                                    }
                                });
                                M("changed", [E]);
                                I = true
                            }
                            break;
                        case "text":
                            I = true;
                            rb([E]);
                            bb.start(E);
                            break;
                        case "path":
                            E = null;
                            Ga = true;
                            F = Ha.mouseUp(z, E, n, k);
                            E = F.element;
                            I = F.keep;
                            break;
                        case "pathedit":
                            I = true;
                            E = null;
                            Ha.mouseUp(z);
                            break;
                        case "textedit":
                            I = false;
                            E = null;
                            bb.mouseUp(z, n, k);
                            break;
                        case "rotate":
                            I = true;
                            E = null;
                            Ea = "select";
                            F = c.undoMgr.finishUndoableChange();
                            F.isEmpty() || xa(F);
                            Ca();
                            M("changed",
                                H)
                    }
                    n = ib("mouseUp", {
                        event: z,
                        mouse_x: n,
                        mouse_y: k
                    }, true);
                    $.each(n, function(V, aa) {
                        if (aa) {
                            I = aa.keep || I;
                            E = aa.element;
                            Ga = aa.started || Ga
                        }
                    });
                    if (!I && E != null) {
                        C().releaseId(Y());
                        E.parentNode.removeChild(E);
                        E = null;
                        for (n = z.target; n.parentNode.parentNode.tagName == "g";) n = n.parentNode;
                        if ((Ea != "path" || !drawn_path) && n.parentNode.id != "selectorParentGroup" && n.id != "svgcanvas" && n.id != "svgroot") {
                            c.setMode("select");
                            rb([n], true)
                        }
                    } else if (E != null) {
                        c.addedNew = true;
                        z = 0.2;
                        var K;
                        if (false.beginElement && E.getAttribute("opacity") !=
                            J.opacity) {
                            K = $(false).clone().attr({
                                to: J.opacity,
                                dur: z
                            }).appendTo(E);
                            try {
                                K[0].beginElement()
                            } catch (O) {}
                        } else z = 0;
                        setTimeout(function() {
                            K && K.remove();
                            E.setAttribute("opacity", J.opacity);
                            E.setAttribute("style", "pointer-events:inherit");
                            na(E);
                            if (Ea === "path") Ha.toEditMode(E);
                            else l.selectNew && rb([E], true);
                            xa(new Sa(E));
                            M("changed", [E])
                        }, z * 1E3)
                    }
                    Ra = null
                }
            }
        });
        $(a).bind("mousewheel DOMMouseScroll", function(z) {
            if (z.shiftKey) {
                z.preventDefault();
                mb = p.getScreenCTM().inverse();
                var F = N(z.pageX, z.pageY, mb);
                F = {
                    x: F.x,
                    y: F.y,
                    width: 0,
                    height: 0
                };
                if (z.wheelDelta)
                    if (z.wheelDelta >= 120) F.factor = 2;
                    else {
                        if (z.wheelDelta <= -120) F.factor = 0.5
                    }
                else if (z.detail)
                    if (z.detail > 0) F.factor = 0.5;
                    else if (z.detail < 0) F.factor = 2;
                F.factor && M("zoomed", F)
            }
        })
    })();
    var Fb = function(f) {
            $(f).click(function(h) {
                h.preventDefault()
            })
        },
        bb = c.textActions = function() {
            function f(S) {
                var ea = k.value === "";
                $(k).focus();
                if (!arguments.length)
                    if (ea) S = 0;
                    else {
                        if (k.selectionEnd !== k.selectionStart) return;
                        S = k.selectionEnd
                    }
                var ga;
                ga = E[S];
                ea || k.setSelectionRange(S, S);
                n = oa("text_cursor");
                if (!n) {
                    n = document.createElementNS(b, "line");
                    ma(n, {
                        id: "text_cursor",
                        stroke: "#333",
                        "stroke-width": 1
                    });
                    n = oa("selectorParentGroup").appendChild(n)
                }
                u || (u = setInterval(function() {
                    var T = n.getAttribute("display") === "none";
                    n.setAttribute("display", T ? "inline" : "none")
                }, 600));
                ea = G(ga.x, I.y);
                ga = G(ga.x, I.y + I.height);
                ma(n, {
                    x1: ea.x,
                    y1: ea.y,
                    x2: ga.x,
                    y2: ga.y,
                    visibility: "visible",
                    display: "inline"
                });
                q && q.setAttribute("d", "M 0 0")
            }

            function h(S, ea, ga) {
                if (S === ea) f(ea);
                else {
                    ga || k.setSelectionRange(S, ea);
                    q = oa("text_selectblock");
                    if (!q) {
                        q = document.createElementNS(b, "path");
                        ma(q, {
                            id: "text_selectblock",
                            fill: "green",
                            opacity: 0.5,
                            style: "pointer-events:none"
                        });
                        oa("selectorParentGroup").appendChild(q)
                    }
                    S = E[S];
                    var T = E[ea];
                    n.setAttribute("visibility", "hidden");
                    ea = G(S.x, I.y);
                    ga = G(S.x + (T.x - S.x), I.y);
                    var qa = G(S.x, I.y + I.height);
                    S = G(S.x + (T.x - S.x), I.y + I.height);
                    ma(q, {
                        d: "M" + ea.x + "," + ea.y + " L" + ga.x + "," + ga.y + " " + S.x + "," + S.y + " " + qa.x + "," + qa.y + "z",
                        display: "inline"
                    })
                }
            }

            function m(S, ea) {
                var ga = d.createSVGPoint();
                ga.x = S;
                ga.y = ea;
                if (E.length == 1) return 0;
                ga = F.getCharNumAtPosition(ga);
                if (ga < 0) {
                    ga = E.length - 2;
                    if (S <= E[0].x) ga = 0
                } else if (ga >= E.length - 2) ga = E.length - 2;
                var T = E[ga];
                S > T.x + T.width / 2 && ga++;
                return ga
            }

            function B(S, ea, ga) {
                var T = k.selectionStart;
                S = m(S, ea);
                h(Math.min(T, S), Math.max(T, S), !ga)
            }

            function A(S, ea) {
                var ga = {
                    x: S,
                    y: ea
                };
                ga.x /= v;
                ga.y /= v;
                if (K) {
                    var T = N(ga.x, ga.y, K.inverse());
                    ga.x = T.x;
                    ga.y = T.y
                }
                return ga
            }

            function G(S, ea) {
                var ga = {
                    x: S,
                    y: ea
                };
                if (K) {
                    var T = N(ga.x, ga.y, K);
                    ga.x = T.x;
                    ga.y = T.y
                }
                ga.x *= v;
                ga.y *= v;
                return ga
            }

            function D(S) {
                h(0, F.textContent.length);
                $(this).unbind(S)
            }

            function z(S) {
                if (aa && F) {
                    var ea = N(S.pageX, S.pageY, mb);
                    ea = A(ea.x * v, ea.y * v);
                    ea = m(ea.x, ea.y);
                    var ga = F.textContent,
                        T = ga.substr(0, ea).replace(/[a-z0-9]+$/i, "").length;
                    ga = ga.substr(ea).match(/^[a-z0-9]+/i);
                    h(T, (ga ? ga[0].length : 0) + ea);
                    $(S.target).click(D);
                    setTimeout(function() {
                        $(S.target).unbind("click", D)
                    }, 300)
                }
            }
            var F, k, n, q, u, E = [],
                I, K, O, V, aa;
            return {
                select: function(S, ea, ga) {
                    F = S;
                    bb.toEditMode(ea, ga)
                },
                start: function(S) {
                    F = S;
                    bb.toEditMode()
                },
                mouseDown: function(S, ea, ga, T) {
                    S = A(ga, T);
                    k.focus();
                    f(m(S.x, S.y));
                    O = ga;
                    V = T
                },
                mouseMove: function(S, ea) {
                    var ga = A(S, ea);
                    B(ga.x, ga.y)
                },
                mouseUp: function(S, ea, ga) {
                    var T = A(ea, ga);
                    B(T.x, T.y, true);
                    S.target !== F && ea < O + 2 && ea > O - 2 && ga < V + 2 && ga > V - 2 && bb.toSelectMode(true)
                },
                setCursor: f,
                toEditMode: function(S, ea) {
                    rb([F], false);
                    aa = false;
                    Ea = "textedit";
                    ra.requestSelector(F).showGrips(false);
                    ra.requestSelector(F);
                    bb.init();
                    $(F).css("cursor", "text");
                    if (arguments.length) {
                        var ga = A(S, ea);
                        f(m(ga.x, ga.y))
                    } else f();
                    setTimeout(function() {
                        aa = true
                    }, 300)
                },
                toSelectMode: function(S) {
                    Ea =
                        "select";
                    clearInterval(u);
                    u = null;
                    q && $(q).attr("display", "none");
                    n && $(n).attr("visibility", "hidden");
                    $(F).css("cursor", "move");
                    if (S) {
                        ya();
                        $(F).css("cursor", "move");
                        M("selected", [F]);
                        qb([F], true)
                    }
                    F && !F.textContent.length && c.deleteSelectedElements();
                    $(k).blur();
                    F = false
                },
                setInputElem: function(S) {
                    k = S
                },
                clear: function() {
                    Ea == "textedit" && bb.toSelectMode()
                },
                init: function() {
                    if (F) {
                        if (!F.parentNode) {
                            F = H[0];
                            ra.requestSelector(F).showGrips(false)
                        }
                        var S = F.textContent.length,
                            ea = F.getAttribute("transform");
                        I = svgedit.utilities.getBBox(F);
                        K = ea ? fa(F) : null;
                        E = Array(S);
                        k.focus();
                        $(F).unbind("dblclick", z).dblclick(z);
                        if (!S) var ga = {
                            x: I.x + I.width / 2,
                            width: 0
                        };
                        for (ea = 0; ea < S; ea++) {
                            var T = F.getStartPositionOfChar(ea);
                            ga = F.getEndPositionOfChar(ea);
                            if (!svgedit.browser.supportsGoodTextCharPos()) {
                                var qa = c.contentW * v;
                                T.x -= qa;
                                ga.x -= qa;
                                T.x /= v;
                                ga.x /= v
                            }
                            E[ea] = {
                                x: T.x,
                                y: I.y,
                                width: ga.x - T.x,
                                height: I.height
                            }
                        }
                        E.push({
                            x: ga.x,
                            width: 0
                        });
                        h(k.selectionStart, k.selectionEnd, true)
                    }
                }
            }
        }(),
        Ha = c.pathActions = function() {
            var f = false,
                h, m, B;
            svgedit.path.Path.prototype.endChanges =
                function(D) {
                    if (svgedit.browser.isWebkit()) {
                        var z = this.elem;
                        z.setAttribute("d", Ha.convertPath(z))
                    }
                    D = new Ka(this.elem, {
                        d: this.last_d
                    }, D);
                    xa(D);
                    M("changed", [this.elem])
                };
            svgedit.path.Path.prototype.addPtsToSelection = function(D) {
                $.isArray(D) || (D = [D]);
                for (var z = 0; z < D.length; z++) {
                    var F = D[z],
                        k = this.segs[F];
                    k.ptgrip && this.selected_pts.indexOf(F) == -1 && F >= 0 && this.selected_pts.push(F)
                }
                this.selected_pts.sort();
                z = this.selected_pts.length;
                for (D = Array(z); z--;) {
                    k = this.segs[this.selected_pts[z]];
                    k.select(true);
                    D[z] =
                        k.ptgrip
                }
                Ha.canDeleteNodes = true;
                Ha.closed_subpath = this.subpathIsClosed(this.selected_pts[0]);
                M("selected", D)
            };
            var A = h = null,
                G = false;
            this.lastCtrlPoint = [0, 0];
            return {
                mouseDown: function(D, z, F, k) {
                    if (Ea === "path") {
                        mouse_x = F;
                        mouse_y = k;
                        F = mouse_x / v;
                        z = mouse_y / v;
                        k = oa("path_stretch_line");
                        m = [F, z];
                        if (l.gridSnapping) {
                            F = wa(F);
                            z = wa(z);
                            mouse_x = wa(mouse_x);
                            mouse_y = wa(mouse_y)
                        }
                        if (!k) {
                            k = document.createElementNS(b, "path");
                            ma(k, {
                                id: "path_stretch_line",
                                stroke: "#22C",
                                "stroke-width": "0.5",
                                fill: "none"
                            });
                            k = oa("selectorParentGroup").appendChild(k)
                        }
                        k.setAttribute("display",
                            "inline");
                        this.stretchy = k;
                        var n = null;
                        if (A) {
                            n = A.pathSegList;
                            for (var q = n.numberOfItems, u = 6 / v, E = false; q;) {
                                q--;
                                var I = n.getItem(q),
                                    K = I.x;
                                I = I.y;
                                if (F >= K - u && F <= K + u && z >= I - u && z <= I + u) {
                                    E = true;
                                    break
                                }
                            }
                            u = Y();
                            svgedit.path.removePath_(u);
                            u = oa(u);
                            K = n.numberOfItems;
                            if (E) {
                                if (q <= 1 && K >= 2) {
                                    F = n.getItem(0).x;
                                    z = n.getItem(0).y;
                                    q = svgedit.path.first_grip ? svgedit.path.first_grip[0] / v : n.getItem(0).x;
                                    E = svgedit.path.first_grip ? svgedit.path.first_grip[1] / v : n.getItem(0).y;
                                    D = k.pathSegList.getItem(1);
                                    D = D.pathSegType === 4 ? A.createSVGPathSegLinetoAbs(F,
                                        z) : A.createSVGPathSegCurvetoCubicAbs(F, z, D.x1 / v, D.y1 / v, q, E);
                                    F = A.createSVGPathSegClosePath();
                                    n.appendItem(D);
                                    n.appendItem(F)
                                } else if (K < 3) return n = false;
                                $(k).remove();
                                element = u;
                                A = null;
                                Ga = false;
                                if (f) {
                                    svgedit.path.path.matrix && Za(u, {}, svgedit.path.path.matrix.inverse());
                                    F = u.getAttribute("d");
                                    k = $(svgedit.path.path.elem).attr("d");
                                    $(svgedit.path.path.elem).attr("d", k + F);
                                    $(u).remove();
                                    svgedit.path.path.matrix && svgedit.path.recalcRotatedPath();
                                    svgedit.path.path.init();
                                    Ha.toEditMode(svgedit.path.path.elem);
                                    svgedit.path.path.selectPt();
                                    return false
                                }
                            } else {
                                if (!$.contains(a, Bb(D))) {
                                    console.log("Clicked outside canvas");
                                    return false
                                }
                                n = A.pathSegList.numberOfItems;
                                q = A.pathSegList.getItem(n - 1);
                                u = q.x;
                                q = q.y;
                                if (D.shiftKey) {
                                    z = W(u, q, F, z);
                                    F = z.x;
                                    z = z.y
                                }
                                D = k.pathSegList.getItem(1);
                                D = D.pathSegType === 4 ? A.createSVGPathSegLinetoAbs(ab(F), ab(z)) : A.createSVGPathSegCurvetoCubicAbs(ab(F), ab(z), D.x1 / v, D.y1 / v, D.x2 / v, D.y2 / v);
                                A.pathSegList.appendItem(D);
                                F *= v;
                                z *= v;
                                k.setAttribute("d", ["M", F, z, F, z].join(" "));
                                k = svgedit.path.addCtrlGrip("1c1");
                                D = svgedit.path.addCtrlGrip("0c2");
                                u = svgedit.path.getCtrlLine(1);
                                q = svgedit.path.getCtrlLine(2);
                                k.setAttribute("cx", F);
                                k.setAttribute("cy", z);
                                D.setAttribute("cx", F);
                                D.setAttribute("cy", z);
                                u.setAttribute("x1", F);
                                u.setAttribute("x2", F);
                                u.setAttribute("y1", z);
                                u.setAttribute("y2", z);
                                q.setAttribute("x1", F);
                                q.setAttribute("x2", F);
                                q.setAttribute("y1", z);
                                q.setAttribute("y2", z);
                                k = n;
                                if (f) k += svgedit.path.path.segs.length;
                                svgedit.path.addPointGrip(k, F, z)
                            }
                            n = true
                        } else {
                            d_attr = "M" + F + "," + z + " ";
                            A = U({
                                element: "path",
                                curStyles: true,
                                attr: {
                                    d: d_attr,
                                    id: ja(),
                                    opacity: J.opacity / 2
                                }
                            });
                            k.setAttribute("d", ["M", mouse_x, mouse_y, mouse_x, mouse_y].join(" "));
                            k = f ? svgedit.path.path.segs.length : 0;
                            svgedit.path.addPointGrip(k, mouse_x, mouse_y);
                            svgedit.path.first_grip = null
                        }
                    } else if (svgedit.path.path) {
                        svgedit.path.path.storeD();
                        u = D.target.id;
                        if (u.substr(0, 14) == "pathpointgrip_") {
                            z = svgedit.path.path.cur_pt = parseInt(u.substr(14));
                            svgedit.path.path.dragging = [F, k];
                            u = svgedit.path.path.segs[z];
                            if (D.shiftKey) u.selected ? svgedit.path.path.removePtFromSelection(z) :
                                svgedit.path.path.addPtsToSelection(z);
                            else {
                                if (svgedit.path.path.selected_pts.length <= 1 || !u.selected) svgedit.path.path.clearSelection();
                                svgedit.path.path.addPtsToSelection(z)
                            }
                        } else if (u.indexOf("ctrlpointgrip_") == 0) {
                            svgedit.path.path.dragging = [F, k];
                            D = u.split("_")[1].split("c");
                            z = D[0] - 0;
                            n = D = D[1] - 0;
                            q = svgedit.path.path.segs[z];
                            svgedit.path.path.selectPt(z, D);
                            if (n == 2) {
                                E = 1;
                                u = q.next
                            } else {
                                E = 2;
                                u = q.prev
                            }
                            if (!u) return;
                            D = function(O, V) {
                                return Math.sqrt(Math.pow(O.x - V.x, 2) + Math.pow(O.y - V.y, 2))
                            };
                            z = {
                                x: q.item["x" +
                                    n],
                                y: q.item["y" + n]
                            };
                            n = n == 2 ? {
                                x: q.item.x,
                                y: q.item.y
                            } : {
                                x: u.item.x,
                                y: u.item.y
                            };
                            q = {
                                x: u.item["x" + E],
                                y: u.item["y" + E]
                            };
                            u = D(z, n);
                            D = D(q, n);
                            z = Math.abs(Math.round(Math.atan2(z.y - n.y, z.x - n.x) * (180 / Math.PI), 0) - Math.round(Math.atan2(q.y - n.y, q.x - n.x) * (180 / Math.PI), 0)) == 180;
                            if (Math.abs(u - D) < 5 && z) {
                                svgedit.path.setLinkControlPoints(true);
                                svgedit.path.is_linked = true
                            } else {
                                svgedit.path.setLinkControlPoints(false);
                                svgedit.path.is_linked = false
                            }
                        }
                        if (!svgedit.path.path.dragging) {
                            if (sa == null) sa = ra.getRubberBandBox();
                            ma(sa, {
                                x: F *
                                    v,
                                y: k * v,
                                width: 0,
                                height: 0,
                                display: "inline"
                            }, 100)
                        }
                    }
                },
                mouseMove: function(D, z, F) {
                    G = true;
                    var k = !D.altKey;
                    if (Ea === "path") {
                        if (A) {
                            var n = A.pathSegList,
                                q = n.numberOfItems - 1,
                                u = svgedit.path.addCtrlGrip("1c1"),
                                E = svgedit.path.addCtrlGrip("0c2");
                            if (m) {
                                var I = E.getAttribute("cx") / v || 0,
                                    K = E.getAttribute("cy") / v || 0;
                                u.setAttribute("cx", z);
                                u.setAttribute("cy", F);
                                u.setAttribute("display", "inline");
                                D = m[0];
                                u = m[1];
                                n.getItem(q);
                                var O = z / v,
                                    V = F / v;
                                I = k ? D + (D - O) : I;
                                k = k ? u + (u - V) : K;
                                E.setAttribute("cx", I * v);
                                E.setAttribute("cy", k * v);
                                E.setAttribute("display",
                                    "inline");
                                E = svgedit.path.getCtrlLine(1);
                                K = svgedit.path.getCtrlLine(2);
                                ma(E, {
                                    x1: z,
                                    y1: F,
                                    x2: D * v,
                                    y2: u * v,
                                    display: "inline"
                                });
                                ma(K, {
                                    x1: I * v,
                                    y1: k * v,
                                    x2: D * v,
                                    y2: u * v,
                                    display: "inline"
                                });
                                if (q === 0) B = [z, F];
                                else {
                                    n = n.getItem(q - 1);
                                    z = n.x;
                                    F = n.y;
                                    if (n.pathSegType === 6) {
                                        z += z - n.x2;
                                        F += F - n.y2
                                    } else if (B) {
                                        z = B[0] / v;
                                        F = B[1] / v
                                    }
                                    svgedit.path.replacePathSeg(6, q, [D, u, this.lastCtrlPoint[0] / v, this.lastCtrlPoint[1] / v, I, k], A)
                                }
                            } else if (k = this.stretchy) {
                                q = n.getItem(q);
                                n = z;
                                u = F;
                                if (D.target.id === "pathpointgrip_0" && svgedit.path.first_grip) {
                                    n = svgedit.path.first_grip[0];
                                    u = svgedit.path.first_grip[1]
                                }
                                if (q.pathSegType === 6) svgedit.path.replacePathSeg(6, 1, [z, F, (this.lastCtrlPoint[0] / v || q.x + (q.x - q.x2)) * v, (this.lastCtrlPoint[1] / v || q.y + (q.y - q.y2)) * v, n, u], k);
                                else B ? svgedit.path.replacePathSeg(6, 1, [z, F, B[0], B[1], z, F], k) : svgedit.path.replacePathSeg(4, 1, [z, F], k)
                            }
                        }
                    } else if (svgedit.path.path.dragging) {
                        n = svgedit.path.getPointFromGrip({
                            x: svgedit.path.path.dragging[0],
                            y: svgedit.path.path.dragging[1]
                        }, svgedit.path.path);
                        D = svgedit.path.getPointFromGrip({
                            x: z,
                            y: F
                        }, svgedit.path.path);
                        q = D.x - n.x;
                        n = D.y - n.y;
                        svgedit.path.path.dragging = [z, F];
                        !k || !svgedit.path.is_linked ? svgedit.path.setLinkControlPoints(false) : svgedit.path.setLinkControlPoints(true);
                        svgedit.path.path.dragctrl ? svgedit.path.path.moveCtrl(q, n) : svgedit.path.path.movePts(q, n)
                    } else {
                        svgedit.path.path.selected_pts = [];
                        svgedit.path.path.eachSeg(function() {
                            if (this.next || this.prev) {
                                var aa = sa.getBBox(),
                                    S = svgedit.path.getGripPt(this);
                                aa = svgedit.math.rectsIntersect(aa, {
                                    x: S.x,
                                    y: S.y,
                                    width: 0,
                                    height: 0
                                });
                                this.select(aa);
                                aa && svgedit.path.path.selected_pts.push(this.index)
                            }
                        })
                    }
                },
                mouseUp: function(D, z, F, k) {
                    var n = oa("ctrlpointgrip_1c1"),
                        q = oa("ctrlpointgrip_0c2");
                    this.lastCtrlPoint = n ? [n.getAttribute("cx"), n.getAttribute("cy")] : [F, k];
                    if (!svgedit.path.first_grip) svgedit.path.first_grip = q ? [q.getAttribute("cx"), q.getAttribute("cy")] : [F, k];
                    if (Ea === "path") {
                        m = null;
                        if (!A) {
                            z = oa(Y());
                            Ga = false;
                            B = null
                        }
                        return {
                            keep: true,
                            element: z
                        }
                    }
                    if (svgedit.path.path.dragging) {
                        z = svgedit.path.path.cur_pt;
                        svgedit.path.path.dragging = false;
                        svgedit.path.path.dragctrl = false;
                        svgedit.path.path.update();
                        G && svgedit.path.path.endChanges("Move path point(s)");
                        !D.shiftKey && !G && svgedit.path.path.selectPt(z)
                    } else if (sa && sa.getAttribute("display") != "none") {
                        sa.setAttribute("display", "none");
                        sa.getAttribute("width") <= 2 && sa.getAttribute("height") <= 2 && Ha.toSelectMode(D.target)
                    } else Ha.toSelectMode(D.target);
                    G = false
                },
                toEditMode: function(D) {
                    svgedit.path.path = svgedit.path.getPath_(D);
                    Ea = "pathedit";
                    ya();
                    svgedit.path.path.show(true).update();
                    svgedit.path.path.oldbbox = svgedit.utilities.getBBox(svgedit.path.path.elem);
                    f = false
                },
                toSelectMode: function(D) {
                    var z = D == svgedit.path.path.elem;
                    Ea = "select";
                    svgedit.path.path.show(false);
                    h = false;
                    ya();
                    svgedit.path.path.matrix && svgedit.path.recalcRotatedPath();
                    if (z) {
                        M("selected", [D]);
                        qb([D], true)
                    }
                },
                addSubPath: function(D) {
                    if (D) {
                        Ea = "path";
                        f = true
                    } else {
                        Ha.clear(true);
                        Ha.toEditMode(svgedit.path.path.elem)
                    }
                },
                select: function(D) {
                    if (h === D) {
                        Ha.toEditMode(D);
                        Ea = "pathedit"
                    } else h = D
                },
                reorient: function() {
                    var D = H[0];
                    if (D)
                        if (pa(D) != 0) {
                            var z = new Ba("Reorient path"),
                                F = {
                                    d: D.getAttribute("d"),
                                    transform: D.getAttribute("transform")
                                };
                            z.addSubCommand(new Ka(D, F));
                            ya();
                            this.resetOrientation(D);
                            xa(z);
                            svgedit.path.getPath_(D).show(false).matrix = null;
                            this.clear();
                            qb([D], true);
                            M("changed", H)
                        }
                },
                clear: function(D) {
                    h = null;
                    if (A) {
                        var z = oa(Y());
                        $(oa("path_stretch_line")).remove();
                        D && $(z).remove();
                        $(oa("pathpointgrip_container")).find("*").attr("display", "none");
                        A = B = null;
                        Ga = false
                    } else Ea == "pathedit" && this.toSelectMode();
                    svgedit.path.path && svgedit.path.path.init().show(false)
                },
                resetOrientation: function(D) {
                    if (D == null || D.nodeName != "path") return false;
                    var z = R(D),
                        F = X(z).matrix;
                    z.clear();
                    D.removeAttribute("transform");
                    z = D.pathSegList;
                    for (var k = z.numberOfItems, n = 0; n < k; ++n) {
                        var q = z.getItem(n),
                            u = q.pathSegType;
                        if (u != 1) {
                            var E = [];
                            $.each(["", 1, 2], function(I, K) {
                                var O = q["x" + K],
                                    V = q["y" + K];
                                if (O !== undefined && V !== undefined) {
                                    O = N(O, V, F);
                                    E.splice(E.length, 0, O.x, O.y)
                                }
                            });
                            svgedit.path.replacePathSeg(u, n, E, D)
                        }
                    }
                    e(D, F)
                },
                zoomChange: function() {
                    Ea == "pathedit" && svgedit.path.path.update()
                },
                getNodePoint: function() {
                    if (svgedit.path.path) {
                        var D = svgedit.path.path.segs[svgedit.path.path.selected_pts.length ?
                            svgedit.path.path.selected_pts[0] : 1];
                        return {
                            x: D.item.x,
                            y: D.item.y,
                            type: D.type
                        }
                    }
                },
                linkControlPoints: function(D) {
                    svgedit.path.setLinkControlPoints(D)
                },
                clonePathNode: function() {
                    svgedit.path.path.storeD();
                    for (var D = svgedit.path.path.selected_pts, z = D.length, F = []; z--;) {
                        var k = D[z];
                        svgedit.path.path.addSeg(k);
                        F.push(k + z);
                        F.push(k + z + 1)
                    }
                    svgedit.path.path.init().addPtsToSelection(F);
                    svgedit.path.path.endChanges("Clone path node(s)")
                },
                opencloseSubPath: function() {
                    var D = svgedit.path.path.selected_pts;
                    if (D.length ===
                        1) {
                        var z = svgedit.path.path.elem,
                            F = z.pathSegList,
                            k = D[0],
                            n = null,
                            q = null;
                        svgedit.path.path.eachSeg(function(K) {
                            if (this.type === 2 && K <= k) q = this.item;
                            if (K <= k) return true;
                            if (this.type === 2) {
                                n = K;
                                return false
                            } else if (this.type === 1) return n = false
                        });
                        if (n == null) n = svgedit.path.path.segs.length - 1;
                        if (n !== false) {
                            var u = z.createSVGPathSegLinetoAbs(q.x, q.y),
                                E = z.createSVGPathSegClosePath();
                            if (n == svgedit.path.path.segs.length) {
                                F.appendItem(u);
                                F.appendItem(E)
                            } else {
                                svgedit.path.insertItemBefore(z, E, n);
                                svgedit.path.insertItemBefore(z,
                                    u, n)
                            }
                            svgedit.path.path.init().selectPt(n + 1)
                        } else if (svgedit.path.path.segs[k].mate) {
                            F.removeItem(k);
                            F.removeItem(k);
                            svgedit.path.path.init().selectPt(k - 1)
                        } else {
                            for (D = 0; D < F.numberOfItems; D++) {
                                var I = F.getItem(D);
                                if (I.pathSegType === 2) u = D;
                                else if (D === k) F.removeItem(u);
                                else if (I.pathSegType === 1 && k < D) {
                                    E = D - 1;
                                    F.removeItem(D);
                                    break
                                }
                            }
                            for (D = k - u - 1; D--;) svgedit.path.insertItemBefore(z, F.getItem(u), E);
                            z = F.getItem(u);
                            svgedit.path.replacePathSeg(2, u, [z.x, z.y]);
                            D = k;
                            svgedit.path.path.init().selectPt(0)
                        }
                    }
                },
                deletePathNode: function() {
                    if (Ha.canDeleteNodes) {
                        svgedit.path.path.storeD();
                        for (var D = svgedit.path.path.selected_pts, z = D.length; z--;) svgedit.path.path.deleteSeg(D[z]);
                        var F = function() {
                            var k = svgedit.path.path.elem.pathSegList,
                                n = k.numberOfItems,
                                q = function(I, K) {
                                    for (; K--;) k.removeItem(I)
                                };
                            if (n <= 1) return true;
                            for (; n--;) {
                                var u = k.getItem(n);
                                if (u.pathSegType === 1) {
                                    u = k.getItem(n - 1);
                                    var E = k.getItem(n - 2);
                                    if (u.pathSegType === 2) {
                                        q(n - 1, 2);
                                        F();
                                        break
                                    } else if (E.pathSegType === 2) {
                                        q(n - 2, 3);
                                        F();
                                        break
                                    }
                                } else if (u.pathSegType === 2)
                                    if (n > 0) {
                                        u = k.getItem(n - 1).pathSegType;
                                        if (u === 2) {
                                            q(n - 1, 1);
                                            F();
                                            break
                                        } else if (u ===
                                            1 && k.numberOfItems - 1 === n) {
                                            q(n, 1);
                                            F();
                                            break
                                        }
                                    }
                            }
                            return false
                        };
                        F();
                        if (svgedit.path.path.elem.pathSegList.numberOfItems <= 1) {
                            c.setMode("select");
                            c.deleteSelectedElements()
                        } else {
                            svgedit.path.path.init();
                            svgedit.path.path.clearSelection();
                            if (window.opera) {
                                D = $(svgedit.path.path.elem);
                                D.attr("d", D.attr("d"))
                            }
                            svgedit.path.path.endChanges("Delete path node(s)")
                        }
                    }
                },
                smoothPolylineIntoPath: function(D) {
                    var z = D.points,
                        F = z.numberOfItems;
                    if (F >= 4) {
                        var k = z.getItem(0),
                            n = null;
                        D = [];
                        D.push(["M", k.x, ",", k.y, " C"].join(""));
                        for (var q = 1; q <= F - 4; q += 3) {
                            var u = z.getItem(q),
                                E = z.getItem(q + 1),
                                I = z.getItem(q + 2);
                            if (n)
                                if ((k = svgedit.path.smoothControlPoints(n, u, k)) && k.length == 2) {
                                    u = D[D.length - 1].split(",");
                                    u[2] = k[0].x;
                                    u[3] = k[0].y;
                                    D[D.length - 1] = u.join(",");
                                    u = k[1]
                                }
                            D.push([u.x, u.y, E.x, E.y, I.x, I.y].join(","));
                            k = I;
                            n = E
                        }
                        for (D.push("L"); q < F; ++q) {
                            E = z.getItem(q);
                            D.push([E.x, E.y].join(","))
                        }
                        D = D.join(" ");
                        D = U({
                            element: "path",
                            curStyles: true,
                            attr: {
                                id: Y(),
                                d: D,
                                fill: "none"
                            }
                        })
                    }
                    return D
                },
                setSegType: function(D) {
                    svgedit.path.path.setSegType(D)
                },
                moveNode: function(D,
                    z) {
                    var F = svgedit.path.path.selected_pts;
                    if (F.length) {
                        svgedit.path.path.storeD();
                        F = svgedit.path.path.segs[F[0]];
                        var k = {
                            x: 0,
                            y: 0
                        };
                        k[D] = z - F.item[D];
                        F.move(k.x, k.y);
                        svgedit.path.path.endChanges("Move path point")
                    }
                },
                fixEnd: function(D) {
                    for (var z = D.pathSegList, F = z.numberOfItems, k, n = 0; n < F; ++n) {
                        var q = z.getItem(n);
                        if (q.pathSegType === 2) k = q;
                        if (q.pathSegType === 1) {
                            q = z.getItem(n - 1);
                            if (q.x != k.x || q.y != k.y) {
                                z = D.createSVGPathSegLinetoAbs(k.x, k.y);
                                svgedit.path.insertItemBefore(D, z, n);
                                Ha.fixEnd(D);
                                break
                            }
                        }
                    }
                    svgedit.browser.isWebkit() &&
                        D.setAttribute("d", Ha.convertPath(D))
                },
                convertPath: function(D, z) {
                    for (var F = D.pathSegList, k = F.numberOfItems, n = 0, q = 0, u = "", E = null, I = 0; I < k; ++I) {
                        var K = F.getItem(I),
                            O = K.x || 0,
                            V = K.y || 0,
                            aa = K.x1 || 0,
                            S = K.y1 || 0,
                            ea = K.x2 || 0,
                            ga = K.y2 || 0,
                            T = K.pathSegType,
                            qa = Ma[T]["to" + (z ? "Lower" : "Upper") + "Case"](),
                            va = function(za, Aa, Oa) {
                                Aa = Aa ? " " + Aa.join(" ") : "";
                                Oa = Oa ? " " + svgedit.units.shortFloat(Oa) : "";
                                $.each(za, function(Pa, La) {
                                    za[Pa] = svgedit.units.shortFloat(La)
                                });
                                u += qa + za.join(" ") + Aa + Oa
                            };
                        switch (T) {
                            case 1:
                                u += "z";
                                break;
                            case 12:
                                O -=
                                    n;
                            case 13:
                                if (z) {
                                    n += O;
                                    qa = "l"
                                } else {
                                    O += n;
                                    n = O;
                                    qa = "L"
                                }
                                va([
                                    [O, q]
                                ]);
                                break;
                            case 14:
                                V -= q;
                            case 15:
                                if (z) {
                                    q += V;
                                    qa = "l"
                                } else {
                                    V += q;
                                    q = V;
                                    qa = "L"
                                }
                                va([
                                    [n, V]
                                ]);
                                break;
                            case 2:
                            case 4:
                            case 18:
                                O -= n;
                                V -= q;
                            case 5:
                            case 3:
                                if (E && F.getItem(I - 1).pathSegType === 1 && !z) {
                                    n = E[0];
                                    q = E[1]
                                }
                            case 19:
                                if (z) {
                                    n += O;
                                    q += V
                                } else {
                                    O += n;
                                    V += q;
                                    n = O;
                                    q = V
                                }
                                if (T === 3) E = [n, q];
                                va([
                                    [O, V]
                                ]);
                                break;
                            case 6:
                                O -= n;
                                aa -= n;
                                ea -= n;
                                V -= q;
                                S -= q;
                                ga -= q;
                            case 7:
                                if (z) {
                                    n += O;
                                    q += V
                                } else {
                                    O += n;
                                    aa += n;
                                    ea += n;
                                    V += q;
                                    S += q;
                                    ga += q;
                                    n = O;
                                    q = V
                                }
                                va([
                                    [aa, S],
                                    [ea, ga],
                                    [O, V]
                                ]);
                                break;
                            case 8:
                                O -= n;
                                aa -= n;
                                V -= q;
                                S -= q;
                            case 9:
                                if (z) {
                                    n +=
                                        O;
                                    q += V
                                } else {
                                    O += n;
                                    aa += n;
                                    V += q;
                                    S += q;
                                    n = O;
                                    q = V
                                }
                                va([
                                    [aa, S],
                                    [O, V]
                                ]);
                                break;
                            case 10:
                                O -= n;
                                V -= q;
                            case 11:
                                if (z) {
                                    n += O;
                                    q += V
                                } else {
                                    O += n;
                                    V += q;
                                    n = O;
                                    q = V
                                }
                                va([
                                    [K.r1, K.r2]
                                ], [K.angle, K.largeArcFlag ? 1 : 0, K.sweepFlag ? 1 : 0], [O, V]);
                                break;
                            case 16:
                                O -= n;
                                ea -= n;
                                V -= q;
                                ga -= q;
                            case 17:
                                if (z) {
                                    n += O;
                                    q += V
                                } else {
                                    O += n;
                                    ea += n;
                                    V += q;
                                    ga += q;
                                    n = O;
                                    q = V
                                }
                                va([
                                    [ea, ga],
                                    [O, V]
                                ])
                        }
                    }
                    return u
                }
            }
        }(),
        yb = this.removeUnusedDefElems = function() {
            var f = p.getElementsByTagNameNS(b, "defs");
            if (!f || !f.length) return 0;
            for (var h = [], m = 0, B = ["fill", "stroke", "filter", "marker-start", "marker-mid",
                    "marker-end"
                ], A = B.length, G = p.getElementsByTagNameNS(b, "*"), D = G.length, z = 0; z < D; z++) {
                for (var F = G[z], k = 0; k < A; k++)
                    if (F) {
                        var n = ia(F.getAttribute(B[k]));
                        n && h.push(n.substr(1))
                    }(F = ka(F)) && F.indexOf("#") === 0 && h.push(F.substr(1))
            }
            f = $(f).find("linearGradient, radialGradient, filter, marker, svg, symbol");
            defelem_ids = [];
            for (z = f.length; z--;) {
                B = f[z];
                A = B.id;
                if (h.indexOf(A) < 0) {
                    sb[A] = B;
                    B.parentNode.removeChild(B);
                    m++
                }
            }
            return m
        };
    this.svgCanvasToString = function() {
        for (; yb() > 0;);
        Ha.clear(true);
        $.each(p.childNodes, function(m,
            B) {
            m && B.nodeType === 8 && B.data.indexOf("Created with") >= 0 && p.insertBefore(B, p.firstChild)
        });
        if (L) {
            Eb();
            rb([L])
        }
        $("#canvasGrid").attr("display", "none");
        var f = [];
        $(p).find("g:data(gsvg)").each(function() {
            for (var m = this.attributes, B = m.length, A = 0; A < B; A++)
                if (m[A].nodeName == "id" || m[A].nodeName == "style") B--;
            if (B <= 0) {
                m = this.firstChild;
                f.push(m);
                $(this).replaceWith(m)
            }
        });
        var h = this.svgToString(p, 0);
        f.length && $(f).each(function() {
            tb(this)
        });
        return h
    };
    this.svgToString = function(f, h) {
        var m = [],
            B = svgedit.utilities.toXml,
            A = l.baseUnit,
            G = RegExp("^-?[\\d\\.]+" + A + "$");
        if (f) {
            na(f);
            var D = f.attributes,
                z, F, k = f.childNodes;
            for (F = 0; F < h; F++) m.push(" ");
            m.push("<");
            m.push(f.nodeName);
            if (f.id === "svgcontent") {
                F = zb();
                if (A !== "px") {
                    F.w = svgedit.units.convertUnit(F.w, A) + A;
                    F.h = svgedit.units.convertUnit(F.h, A) + A
                }
                m.push(' width="' + F.w + '" height="' + F.h + '" xmlns="' + b + '"');
                var n = {};
                $(f).find("*").andSelf().each(function() {
                    $.each(this.attributes, function(I, K) {
                        var O = K.namespaceURI;
                        if (O && !n[O] && Ja[O] !== "xmlns" && Ja[O] !== "xml") {
                            n[O] = true;
                            m.push(" xmlns:" +
                                Ja[O] + '="' + O + '"')
                        }
                    })
                });
                F = D.length;
                for (A = ["width", "height", "xmlns", "x", "y", "viewBox", "id", "overflow"]; F--;) {
                    z = D.item(F);
                    var q = B(z.nodeValue);
                    if (z.nodeName.indexOf("xmlns:") !== 0)
                        if (q != "" && A.indexOf(z.localName) == -1)
                            if (!z.namespaceURI || Ja[z.namespaceURI]) {
                                m.push(" ");
                                m.push(z.nodeName);
                                m.push('="');
                                m.push(q);
                                m.push('"')
                            }
                }
            } else {
                if (f.nodeName === "defs" && !f.firstChild) return;
                var u = ["-moz-math-font-style", "_moz-math-font-style"];
                for (F = D.length - 1; F >= 0; F--) {
                    z = D.item(F);
                    q = B(z.nodeValue);
                    if (!(u.indexOf(z.localName) >=
                            0))
                        if (q != "")
                            if (q.indexOf("pointer-events") !== 0)
                                if (!(z.localName === "class" && q.indexOf("se_") === 0)) {
                                    m.push(" ");
                                    if (z.localName === "d") q = Ha.convertPath(f, true);
                                    if (isNaN(q)) {
                                        if (G.test(q)) q = svgedit.units.shortFloat(q) + A
                                    } else q = svgedit.units.shortFloat(q);
                                    if ($a.apply && f.nodeName === "image" && z.localName === "href" && $a.images && $a.images === "embed") {
                                        var E = Va[q];
                                        if (E) q = E
                                    }
                                    if (!z.namespaceURI || z.namespaceURI == b || Ja[z.namespaceURI]) {
                                        m.push(z.nodeName);
                                        m.push('="');
                                        m.push(q);
                                        m.push('"')
                                    }
                                }
                }
            }
            if (f.hasChildNodes()) {
                m.push(">");
                h++;
                D = false;
                for (F = 0; F < k.length; F++) {
                    A = k.item(F);
                    switch (A.nodeType) {
                        case 1:
                            m.push("\n");
                            m.push(this.svgToString(k.item(F), h));
                            break;
                        case 3:
                            A = A.nodeValue.replace(/^\s+|\s+$/g, "");
                            if (A != "") {
                                D = true;
                                m.push(B(A) + "")
                            }
                            break;
                        case 4:
                            m.push("\n");
                            m.push(Array(h + 1).join(" "));
                            m.push("<![CDATA[");
                            m.push(A.nodeValue);
                            m.push("]]\>");
                            break;
                        case 8:
                            m.push("\n");
                            m.push(Array(h + 1).join(" "));
                            m.push("<!--");
                            m.push(A.data);
                            m.push("--\>")
                    }
                }
                h--;
                if (!D) {
                    m.push("\n");
                    for (F = 0; F < h; F++) m.push(" ")
                }
                m.push("</");
                m.push(f.nodeName);
                m.push(">")
            } else m.push("/>")
        }
        return m.join("")
    };
    this.embedImage = function(f, h) {
        $(new Image).load(function() {
            var m = document.createElement("canvas");
            m.width = this.width;
            m.height = this.height;
            m.getContext("2d").drawImage(this, 0, 0);
            try {
                var B = ";svgedit_url=" + encodeURIComponent(f);
                B = m.toDataURL().replace(";base64", B + ";base64");
                Va[f] = B
            } catch (A) {
                Va[f] = false
            }
            Da = f;
            h && h(Va[f])
        }).attr("src", f)
    };
    this.setGoodImage = function(f) {
        Da = f
    };
    this.open = function() {};
    this.save = function(f) {
        ya();
        f && $.extend($a, f);
        $a.apply = true;
        f = this.svgCanvasToString();
        if (svgedit.browser.supportsBlobs()) {
            f = new Blob([f], {
                type: "image/svg+xml;charset=utf-8"
            });
            saveAs(f, "liveweave-image.svg", true)
        } else M("saved", f)
    };
    this.rasterExport = function() {
        ya();
        var f = [],
            h = {
                feGaussianBlur: kb.exportNoBlur,
                foreignObject: kb.exportNoforeignObject,
                "[stroke-dasharray]": kb.exportNoDashArray
            },
            m = $(p);
        if (!("font" in $("<canvas>")[0].getContext("2d"))) h.text = kb.exportNoText;
        $.each(h, function(B, A) {
            m.find(B).length && f.push(A)
        });
        h = this.svgCanvasToString();
        M("exported", {
            svg: h,
            issues: f
        })
    };
    this.getSvgString = function() {
        $a.apply = false;
        return this.svgCanvasToString()
    };
    this.randomizeIds = function() {
        arguments.length > 0 && arguments[0] == false ? svgedit.draw.randomizeIds(false, C()) : svgedit.draw.randomizeIds(true, C())
    };
    var Hb = this.uniquifyElems = function(f) {
            var h = {},
                m = ["filter", "linearGradient", "pattern", "radialGradient", "symbol", "textPath", "use"];
            svgedit.utilities.walkTree(f, function(z) {
                if (z.nodeType == 1) {
                    if (z.id) {
                        z.id in h || (h[z.id] = {
                            elem: null,
                            attrs: [],
                            hrefs: []
                        });
                        h[z.id].elem =
                            z
                    }
                    $.each(vb, function(k, n) {
                        var q = z.getAttributeNode(n);
                        if (q) {
                            var u = svgedit.utilities.getUrlFromAttr(q.value);
                            if (u = u ? u.substr(1) : null) {
                                u in h || (h[u] = {
                                    elem: null,
                                    attrs: [],
                                    hrefs: []
                                });
                                h[u].attrs.push(q)
                            }
                        }
                    });
                    var F = svgedit.utilities.getHref(z);
                    if (F && m.indexOf(z.nodeName) >= 0)
                        if (F = F.substr(1)) {
                            F in h || (h[F] = {
                                elem: null,
                                attrs: [],
                                hrefs: []
                            });
                            h[F].hrefs.push(z)
                        }
                }
            });
            for (var B in h)
                if (B) {
                    var A = h[B].elem;
                    if (A) {
                        f = ja();
                        A.id = f;
                        A = h[B].attrs;
                        for (var G = A.length; G--;) {
                            var D = A[G];
                            D.ownerElement.setAttribute(D.name, "url(#" +
                                f + ")")
                        }
                        A = h[B].hrefs;
                        for (G = A.length; G--;) svgedit.utilities.setHref(A[G], "#" + f)
                    }
                }
        },
        Gb = this.setUseData = function(f) {
            var h = $(f);
            if (f.tagName !== "use") h = h.find("use");
            h.each(function() {
                var m = ka(this).substr(1);
                if (m = oa(m)) {
                    $(this).data("ref", m);
                    if (m.tagName == "symbol" || m.tagName == "svg") $(this).data("symbol", m).data("ref", m)
                }
            })
        },
        Ib = this.convertGradients = function(f) {
            var h = $(f).find("linearGradient, radialGradient");
            if (!h.length && svgedit.browser.isWebkit()) h = $(f).find("*").filter(function() {
                return this.tagName.indexOf("Gradient") >=
                    0
            });
            h.each(function() {
                if ($(this).attr("gradientUnits") === "userSpaceOnUse") {
                    var m = $(p).find('[fill="url(#' + this.id + ')"],[stroke="url(#' + this.id + ')"]');
                    if (m.length)
                        if (m = svgedit.utilities.getBBox(m[0]))
                            if (this.tagName === "linearGradient") {
                                var B = $(this).attr(["x1", "y1", "x2", "y2"]),
                                    A = this.gradientTransform.baseVal;
                                if (A && A.numberOfItems > 0) {
                                    var G = X(A).matrix;
                                    A = N(B.x1, B.y1, G);
                                    G = N(B.x2, B.y2, G);
                                    B.x1 = A.x;
                                    B.y1 = A.y;
                                    B.x2 = G.x;
                                    B.y2 = G.y;
                                    this.removeAttribute("gradientTransform")
                                }
                                $(this).attr({
                                    x1: (B.x1 - m.x) / m.width,
                                    y1: (B.y1 - m.y) / m.height,
                                    x2: (B.x2 - m.x) / m.width,
                                    y2: (B.y2 - m.y) / m.height
                                });
                                this.removeAttribute("gradientUnits")
                            }
                }
            })
        },
        Lb = this.convertToGroup = function(f) {
            f || (f = H[0]);
            var h = $(f),
                m = new Ba,
                B;
            if (h.data("gsvg")) {
                m = $(f.firstChild).attr(["x", "y"]);
                $(f.firstChild.firstChild).unwrap();
                $(f).removeData("gsvg");
                B = R(f);
                var A = d.createSVGTransform();
                A.setTranslate(m.x, m.y);
                B.appendItem(A);
                Qa(f);
                M("selected", [f])
            } else if (h.data("symbol")) {
                f = h.data("symbol");
                B = h.attr("transform");
                A = h.attr(["x", "y"]);
                var G = f.getAttribute("viewBox");
                if (G) {
                    G = G.split(" ");
                    A.x -= +G[0];
                    A.y -= +G[1]
                }
                B += " translate(" + (A.x || 0) + "," + (A.y || 0) + ")";
                A = h.prev();
                m.addSubCommand(new Ia(h[0], h[0].nextSibling, h[0].parentNode));
                h.remove();
                G = $(p).find("use:data(symbol)").length;
                h = g.createElementNS(b, "g");
                for (var D = f.childNodes, z = 0; z < D.length; z++) h.appendChild(D[z].cloneNode(true));
                if (svgedit.browser.isGecko()) {
                    D = $(gb()).children("linearGradient,radialGradient,pattern").clone();
                    $(h).append(D)
                }
                B && h.setAttribute("transform", B);
                B = f.parentNode;
                Hb(h);
                svgedit.browser.isGecko() &&
                    $(gb()).append($(h).find("linearGradient,radialGradient,pattern"));
                h.id = ja();
                A.after(h);
                if (B) {
                    if (!G) {
                        A = f.nextSibling;
                        B.removeChild(f);
                        m.addSubCommand(new Ia(f, A, B))
                    }
                    m.addSubCommand(new Sa(h))
                }
                Gb(h);
                svgedit.browser.isGecko() ? Ib(gb()) : Ib(h);
                svgedit.utilities.walkTreePost(h, function(F) {
                    try {
                        Qa(F)
                    } catch (k) {
                        console.log(k)
                    }
                });
                $(h).find("a,circle,ellipse,foreignObject,g,image,line,path,polygon,polyline,rect,svg,text,tspan,use").each(function() {
                    if (!this.id) this.id = ja()
                });
                rb([h]);
                (f = Db(h, true)) && m.addSubCommand(f);
                xa(m)
            } else console.log("Unexpected element to ungroup:", f)
        };
    this.setSvgString = function(f) {
        try {
            var h = svgedit.utilities.text2xml(f);
            this.prepareSvg(h);
            var m = new Ba("Change Source"),
                B = p.nextSibling,
                A = d.removeChild(p);
            m.addSubCommand(new Ia(A, B, d));
            p = g.adoptNode ? g.adoptNode(h.documentElement) : g.importNode(h.documentElement, true);
            d.appendChild(p);
            var G = $(p);
            c.current_drawing_ = new svgedit.draw.Drawing(p, w);
            var D = C().getNonce();
            D ? M("setnonce", D) : M("unsetnonce");
            G.find("image").each(function() {
                var K = this;
                Fb(K);
                var O = ka(this);
                if (O.indexOf("data:") === 0) {
                    var V = O.match(/svgedit_url=(.*?);/);
                    if (V) {
                        var aa = decodeURIComponent(V[1]);
                        $(new Image).load(function() {
                            K.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", aa)
                        }).attr("src", aa)
                    }
                }
                c.embedImage(O)
            });
            G.find("svg").each(function() {
                if (!$(this).closest("defs").length) {
                    Hb(this);
                    var K = this.parentNode;
                    if (K.childNodes.length === 1 && K.nodeName === "g") {
                        $(K).data("gsvg", this);
                        K.id = K.id || ja()
                    } else tb(this)
                }
            });
            G.find("linearGradient, radialGradient, pattern").appendTo(gb());
            Gb(G);
            Ib(G[0]);
            svgedit.utilities.walkTreePost(p, function(K) {
                try {
                    Qa(K)
                } catch (O) {
                    console.log(O)
                }
            });
            var z = {
                    id: "svgcontent",
                    overflow: l.show_outside_canvas ? "visible" : "hidden"
                },
                F = false;
            if (G.attr("viewBox")) {
                var k = G.attr("viewBox").split(" ");
                z.width = k[2];
                z.height = k[3]
            } else $.each(["width", "height"], function(K, O) {
                var V = G.attr(O);
                V || (V = "100%");
                if ((V + "").substr(-1) === "%") F = true;
                else z[O] = ta(O, V)
            });
            xb();
            G.children().find("a,circle,ellipse,foreignObject,g,image,line,path,polygon,polyline,rect,svg,text,tspan,use").each(function() {
                if (!this.id) this.id =
                    ja()
            });
            if (F) {
                var n = getStrokedBBox();
                z.width = n.width + n.x;
                z.height = n.height + n.y
            }
            if (z.width <= 0) z.width = 200;
            if (z.height <= 0) z.height = 200;
            G.attr(z);
            this.contentW = z.width;
            this.contentH = z.height;
            $("#canvas_width").val(this.contentW);
            $("#canvas_height").val(this.contentH);
            var q = $("#canvas_background");
            if (q.length) {
                var u = q.attr("fill-opacity");
                u = u ? parseInt(u) * 100 : 100;
                fill = this.getPaint(q.attr("fill"), u, "canvas")
            } else fill = this.getPaint("none", 100, "canvas");
            methodDraw.paintBox.canvas.setPaint(fill);
            m.addSubCommand(new Sa(p));
            var E = G.attr(["width", "height"]);
            m.addSubCommand(new Ka(d, E));
            v = 1;
            svgedit.transformlist.resetListMap();
            ya();
            svgedit.path.clearData();
            d.appendChild(ra.selectorParentGroup);
            xa(m);
            M("changed", [p])
        } catch (I) {
            console.log(I);
            return false
        }
        return true
    };
    this.getPaint = function(f, h, m) {
        var B = null;
        if (f.indexOf("url(#") === 0) {
            f = (f = svgCanvas.getRefElem(f)) ? f.cloneNode(true) : $("#" + m + "_color defs *")[0];
            B = {
                alpha: h
            };
            B[f.tagName] = f
        } else B = f.indexOf("#") === 0 ? {
            alpha: h,
            solidColor: f.substr(1)
        } : {
            alpha: h,
            solidColor: "none"
        };
        return new $.jGraduate.Paint(B)
    };
    this.importSvgString = function(f) {
        try {
            var h = svgedit.utilities.encode64(f.length + f).substr(0, 32),
                m = false;
            if (lb[h])
                if ($(lb[h].symbol).parents("#svgroot").length) m = true;
            var B = new Ba("Import SVG");
            if (m) var A = lb[h].symbol,
                G = lb[h].xform;
            else {
                var D = svgedit.utilities.text2xml(f);
                this.prepareSvg(D);
                var z;
                z = g.adoptNode ? g.adoptNode(D.documentElement) : g.importNode(D.documentElement, true);
                Hb(z);
                var F = ta("width", z.getAttribute("width")),
                    k = ta("height", z.getAttribute("height")),
                    n =
                    z.getAttribute("viewBox"),
                    q = n ? n.split(" ") : [0, 0, F, k];
                for (f = 0; f < 4; ++f) q[f] = +q[f];
                p.getAttribute("width");
                var u = +p.getAttribute("height");
                G = k > F ? "scale(" + u / 3 / q[3] + ")" : "scale(" + u / 3 / q[2] + ")";
                G = "translate(0) " + G + " translate(0)";
                A = g.createElementNS(b, "symbol");
                var E = gb();
                for (svgedit.browser.isGecko() && $(z).find("linearGradient, radialGradient, pattern").appendTo(E); z.firstChild;) A.appendChild(z.firstChild);
                var I = z.attributes;
                for (z = 0; z < I.length; z++) {
                    var K = I[z];
                    A.setAttribute(K.nodeName, K.nodeValue)
                }
                A.id =
                    ja();
                lb[h] = {
                    symbol: A,
                    xform: G
                };
                gb().appendChild(A);
                B.addSubCommand(new Sa(A))
            }
            var O = g.createElementNS(b, "use");
            O.id = ja();
            Z(O, "#" + A.id);
            (L || C().getCurrentLayer()).appendChild(O);
            B.addSubCommand(new Sa(O));
            ya();
            O.setAttribute("transform", G);
            Qa(O);
            $(O).data("symbol", A).data("ref", A);
            qb([O]);
            xa(B);
            M("changed", [p])
        } catch (V) {
            console.log(V);
            return false
        }
        return true
    };
    var xb = c.identifyLayers = function() {
        Eb();
        C().identifyLayers()
    };
    this.createLayer = function(f) {
        var h = new Ba("Create Layer");
        f = C().createLayer(f);
        h.addSubCommand(new Sa(f));
        xa(h);
        ya();
        M("changed", [f])
    };
    this.cloneLayer = function(f) {
        var h = new Ba("Duplicate Layer"),
            m = g.createElementNS(b, "g"),
            B = g.createElementNS(b, "title");
        B.textContent = f;
        m.appendChild(B);
        B = C().getCurrentLayer();
        $(B).after(m);
        B = B.childNodes;
        for (var A = 0; A < B.length; A++) {
            var G = B[A];
            G.localName != "title" && m.appendChild(ha(G))
        }
        ya();
        xb();
        h.addSubCommand(new Sa(m));
        xa(h);
        c.setCurrentLayer(f);
        M("changed", [m])
    };
    this.deleteCurrentLayer = function() {
        var f = C().getCurrentLayer(),
            h = f.nextSibling,
            m = f.parentNode;
        if (f = C().deleteCurrentLayer()) {
            var B = new Ba("Delete Layer");
            B.addSubCommand(new Ia(f, h, m));
            xa(B);
            ya();
            M("changed", [m]);
            return true
        }
        return false
    };
    this.setCurrentLayer = function(f) {
        (f = C().setCurrentLayer(svgedit.utilities.toXml(f))) && ya();
        return f
    };
    this.renameCurrentLayer = function(f) {
        var h = C();
        if (h.current_layer) {
            var m = h.current_layer;
            if (!c.setCurrentLayer(f)) {
                for (var B = new Ba("Rename Layer"), A = 0; A < h.getNumLayers(); ++A)
                    if (h.all_layers[A][1] == m) break;
                var G = h.getLayerName(A);
                h.all_layers[A][0] =
                    svgedit.utilities.toXml(f);
                var D = m.childNodes.length;
                for (A = 0; A < D; ++A) {
                    var z = m.childNodes.item(A);
                    if (z && z.tagName == "title") {
                        for (; z.firstChild;) z.removeChild(z.firstChild);
                        z.textContent = f;
                        B.addSubCommand(new Ka(z, {
                            "#text": G
                        }));
                        xa(B);
                        M("changed", [m]);
                        return true
                    }
                }
            }
            h.current_layer = m
        }
        return false
    };
    this.setCurrentLayerPosition = function(f) {
        var h = C();
        if (h.current_layer && f >= 0 && f < h.getNumLayers()) {
            for (var m = 0; m < h.getNumLayers(); ++m)
                if (h.all_layers[m][1] == h.current_layer) break;
            if (m == h.getNumLayers()) return false;
            if (m != f) {
                var B = null,
                    A = h.current_layer.nextSibling;
                if (f > m) {
                    if (f < h.getNumLayers() - 1) B = h.all_layers[f + 1][1]
                } else B = h.all_layers[f][1];
                p.insertBefore(h.current_layer, B);
                xa(new Na(h.current_layer, A, p));
                xb();
                c.setCurrentLayer(h.getLayerName(f));
                return true
            }
        }
        return false
    };
    this.setLayerVisibility = function(f, h) {
        var m = C(),
            B = m.getLayerVisibility(f),
            A = m.setLayerVisibility(f, h);
        if (A) xa(new Ka(A, {
            display: B ? "inline" : "none"
        }, "Layer Visibility"));
        else return false;
        if (A == m.getCurrentLayer()) {
            ya();
            Ha.clear()
        }
        return true
    };
    this.moveSelectedToLayer = function(f) {
        for (var h = null, m = C(), B = 0; B < m.getNumLayers(); ++B)
            if (m.getLayerName(B) == f) {
                h = m.all_layers[B][1];
                break
            }
        if (!h) return false;
        f = new Ba("Move Elements to Layer");
        m = H;
        for (B = m.length; B--;) {
            var A = m[B];
            if (A) {
                var G = A.nextSibling,
                    D = A.parentNode;
                h.appendChild(A);
                f.addSubCommand(new Na(A, G, D))
            }
        }
        xa(f);
        return true
    };
    this.mergeLayer = function(f) {
        var h = new Ba("Merge Layer"),
            m = C(),
            B = $(m.current_layer).prev()[0];
        if (B) {
            for (h.addSubCommand(new Ia(m.current_layer, m.current_layer.nextSibling,
                    p)); m.current_layer.firstChild;) {
                var A = m.current_layer.firstChild;
                if (A.localName == "title") {
                    h.addSubCommand(new Ia(A, A.nextSibling, m.current_layer));
                    m.current_layer.removeChild(A)
                } else {
                    var G = A.nextSibling;
                    B.appendChild(A);
                    h.addSubCommand(new Na(A, G, m.current_layer))
                }
            }
            p.removeChild(m.current_layer);
            if (!f) {
                ya();
                xb();
                M("changed", [p]);
                xa(h)
            }
            m.current_layer = B;
            return h
        }
    };
    this.mergeAllLayers = function() {
        var f = new Ba("Merge all Layers"),
            h = C();
        for (h.current_layer = h.all_layers[h.getNumLayers() - 1][1]; $(p).children("g").length >
            1;) f.addSubCommand(c.mergeLayer(true));
        ya();
        xb();
        M("changed", [p]);
        xa(f)
    };
    var Eb = this.leaveContext = function() {
            var f = ua.length;
            if (f) {
                for (var h = 0; h < f; h++) {
                    var m = ua[h],
                        B = cb(m, "orig_opac");
                    B !== 1 ? m.setAttribute("opacity", B) : m.removeAttribute("opacity");
                    m.setAttribute("style", "pointer-events: inherit")
                }
                ua = [];
                ya(true);
                M("contextset", null)
            }
            L = null
        },
        Kb = this.setContext = function(f) {
            Eb();
            if (typeof f === "string") f = oa(f);
            L = f;
            $(f).parentsUntil("#svgcontent").andSelf().siblings().each(function() {
                var h = this.getAttribute("opacity") ||
                    1;
                cb(this, "orig_opac", h);
                this.setAttribute("opacity", h * 0.33);
                this.setAttribute("style", "pointer-events: none");
                ua.push(this)
            });
            ya();
            M("contextset", L)
        };
    this.clear = function() {
        Ha.clear();
        ya();
        c.clearSvgContentElement();
        c.current_drawing_ = new svgedit.draw.Drawing(p);
        c.createLayer("Layer 1");
        c.undoMgr.resetUndoStack();
        ra.initGroup();
        sa = ra.getRubberBandBox();
        M("cleared")
    };
    this.linkControlPoints = Ha.linkControlPoints;
    this.getContentElem = function() {
        return p
    };
    this.getRootElem = function() {
        return d
    };
    this.getSelectedElems =
        function() {
            return H
        };
    var zb = this.getResolution = function() {
        var f = p.getAttribute("width") / v,
            h = p.getAttribute("height") / v;
        return {
            w: f,
            h: h,
            zoom: v
        }
    };
    this.getZoom = function() {
        return v
    };
    this.getVersion = function() {
        return "svgcanvas.js ($Rev: 2082 $)"
    };
    this.setUiStrings = function(f) {
        $.extend(kb, f.notification)
    };
    this.setConfig = function(f) {
        $.extend(l, f)
    };
    this.getTitle = function(f) {
        if (f = f || H[0]) {
            f = $(f).data("gsvg") || $(f).data("symbol") || f;
            f = f.childNodes;
            for (var h = 0; h < f.length; h++)
                if (f[h].nodeName == "title") return f[h].textContent;
            return ""
        }
    };
    this.setGroupTitle = function(f) {
        var h = H[0];
        h = $(h).data("gsvg") || h;
        var m = $(h).children("title"),
            B = new Ba("Set Label");
        if (f.length)
            if (m.length) {
                m = m[0];
                B.addSubCommand(new Ka(m, {
                    "#text": m.textContent
                }));
                m.textContent = f
            } else {
                m = g.createElementNS(b, "title");
                m.textContent = f;
                $(h).prepend(m);
                B.addSubCommand(new Sa(m))
            }
        else {
            B.addSubCommand(new Ia(m[0], m.nextSibling, h));
            m.remove()
        }
        xa(B)
    };
    this.getDocumentTitle = function() {
        return c.getTitle(p)
    };
    this.setDocumentTitle = function(f) {
        for (var h = p.childNodes,
                m = false, B = "", A = new Ba("Change Image Title"), G = 0; G < h.length; G++)
            if (h[G].nodeName == "title") {
                m = h[G];
                B = m.textContent;
                break
            }
        if (!m) {
            m = g.createElementNS(b, "title");
            p.insertBefore(m, p.firstChild)
        }
        if (f.length) m.textContent = f;
        else m.parentNode.removeChild(m);
        A.addSubCommand(new Ka(m, {
            "#text": B
        }));
        xa(A)
    };
    this.getEditorNS = function(f) {
        f && p.setAttribute("xmlns:se", "http://svg-edit.googlecode.com");
        return "http://svg-edit.googlecode.com"
    };
    this.setResolution = function(f, h) {
        var m = zb(),
            B = m.w;
        m = m.h;
        var A;
        if (f == "fit") {
            var G =
                getStrokedBBox();
            if (G) {
                A = new Ba("Fit Canvas to Content");
                var D = pb();
                qb(D);
                var z = [],
                    F = [];
                $.each(D, function() {
                    z.push(G.x * -1);
                    F.push(G.y * -1)
                });
                D = c.moveSelectedElements(z, F, true);
                A.addSubCommand(D);
                ya();
                f = Math.round(G.width);
                h = Math.round(G.height)
            } else return false
        }
        if (f != B || h != m) {
            A || (A = new Ba("Change Image Dimensions"));
            f = ta("width", f);
            h = ta("height", h);
            p.setAttribute("width", f);
            p.setAttribute("height", h);
            this.contentW = f;
            this.contentH = h;
            A.addSubCommand(new Ka(p, {
                width: B,
                height: m
            }));
            p.setAttribute("viewBox", [0, 0, f / v, h / v].join(" "));
            A.addSubCommand(new Ka(p, {
                viewBox: ["0 0", B, m].join(" ")
            }));
            xa(A);
            if (background = document.getElementById("canvas_background")) {
                background.setAttribute("x", -1);
                background.setAttribute("y", -1);
                background.setAttribute("width", f + 2);
                background.setAttribute("height", h + 2)
            }
            M("changed", [p])
        }
        return [f, h]
    };
    this.getOffset = function() {
        return $(p).attr(["x", "y"])
    };
    this.setBBoxZoom = function(f, h, m) {
        var B = 0.85,
            A = function(G) {
                if (!G) return false;
                var D = Math.min(Math.round(h / G.width * 100 * B) / 100, Math.round(m /
                    G.height * 100 * B) / 100);
                c.setZoom(D);
                return {
                    zoom: D,
                    bbox: G
                }
            };
        if (typeof f == "object") {
            f = f;
            if (f.width == 0 || f.height == 0) {
                c.setZoom(f.zoom ? f.zoom : v * f.factor);
                return {
                    zoom: v,
                    bbox: f
                }
            }
            return A(f)
        }
        switch (f) {
            case "selection":
                if (!H[0]) return;
                f = $.map(H, function(G) {
                    if (G) return G
                });
                f = getStrokedBBox(f);
                break;
            case "canvas":
                f = zb();
                B = 0.95;
                f = {
                    width: f.w,
                    height: f.h,
                    x: 0,
                    y: 0
                };
                break;
            case "content":
                f = getStrokedBBox();
                break;
            case "layer":
                f = getStrokedBBox(pb(C().getCurrentLayer()));
                break;
            default:
                return
        }
        return A(f)
    };
    this.setZoom = function(f) {
        var h =
            zb();
        p.setAttribute("viewBox", "0 0 " + h.w / f + " " + h.h / f);
        v = f;
        $.each(H, function(m, B) {
            B && ra.requestSelector(B).resize()
        });
        Ha.zoomChange();
        ib("zoomChanged", f)
    };
    this.getMode = function() {
        return Ea
    };
    this.setMode = function(f) {
        Ha.clear();
        bb.clear();
        $("#workarea").attr("class", f);
        Xa = H[0] && H[0].nodeName == "text" ? Ua : J;
        Ea = f
    };
    this.getColor = function(f) {
        return Xa[f]
    };
    this.setColor = function(f, h, m) {
        J[f] = h;
        Xa[f + "_paint"] = {
            type: "solidColor"
        };
        for (var B = [], A = H.length; A--;) {
            var G = H[A];
            if (G)
                if (G.tagName == "g") svgedit.utilities.walkTree(G,
                    function(D) {
                        D.nodeName != "g" && B.push(D)
                    });
                else if (f == "fill") G.tagName != "polyline" && G.tagName != "line" && B.push(G);
            else B.push(G)
        }
        if (B.length > 0)
            if (m) Ab(f, h, B);
            else {
                Ya(f, h, B);
                M("changed", B)
            }
    };
    var gb = function() {
            var f = p.getElementsByTagNameNS(b, "defs");
            if (f.length > 0) f = f[0];
            else {
                f = g.createElementNS(b, "defs");
                p.firstChild ? p.insertBefore(f, p.firstChild.nextSibling) : p.appendChild(f)
            }
            return f
        },
        Nb = this.setGradient = function(f) {
            if (!(!Xa[f + "_paint"] || Xa[f + "_paint"].type == "solidColor")) {
                var h = c[f + "Grad"],
                    m = Mb(h),
                    B = gb();
                if (m) h = m;
                else {
                    h = B.appendChild(g.importNode(h, true));
                    h.id = ja()
                }
                c.setColor(f, "url(#" + h.id + ")");
                if (f == "canvas")(f = document.getElementById("canvas_background")) && f.setAttribute("fill", "url(#" + h.id + ")")
            }
        },
        Mb = function(f) {
            var h = gb();
            h = $(h).find("linearGradient, radialGradient");
            for (var m = h.length, B = ["r", "cx", "cy", "fx", "fy"]; m--;) {
                var A = h[m];
                if (f.tagName == "linearGradient") {
                    if (f.getAttribute("x1") != A.getAttribute("x1") || f.getAttribute("y1") != A.getAttribute("y1") || f.getAttribute("x2") != A.getAttribute("x2") ||
                        f.getAttribute("y2") != A.getAttribute("y2")) continue
                } else {
                    var G = $(f).attr(B),
                        D = $(A).attr(B),
                        z = false;
                    $.each(B, function(E, I) {
                        if (G[I] != D[I]) z = true
                    });
                    if (z) continue
                }
                var F = f.getElementsByTagNameNS(b, "stop"),
                    k = A.getElementsByTagNameNS(b, "stop");
                if (F.length == k.length) {
                    for (var n = F.length; n--;) {
                        var q = F[n],
                            u = k[n];
                        if (q.getAttribute("offset") != u.getAttribute("offset") || q.getAttribute("stop-opacity") != u.getAttribute("stop-opacity") || q.getAttribute("stop-color") != u.getAttribute("stop-color")) break
                    }
                    if (n == -1) return A
                }
            }
            return null
        };
    this.setPaint = function(f, h) {
        var m = new $.jGraduate.Paint(h);
        this.setPaintOpacity(f, m.alpha / 100, true);
        Xa[f + "_paint"] = m;
        switch (m.type) {
            case "solidColor":
                if (m.solidColor != "none" && m.solidColor != "#none") this.setColor(f, "#" + m.solidColor);
                else {
                    this.setColor(f, "none");
                    document.querySelector(f == "fill" ? "#fill_color rect" : "#stroke_color rect").setAttribute("fill", "none")
                }
                break;
            case "linearGradient":
            case "radialGradient":
                c[f + "Grad"] = m[m.type];
                Nb(f)
        }
    };
    this.getStrokeWidth = function() {
        return Xa.stroke_width
    };
    this.setStrokeWidth =
        function(f) {
            if (f == 0 && ["line", "path"].indexOf(Ea) >= 0) c.setStrokeWidth(1);
            else {
                Xa.stroke_width = f;
                for (var h = [], m = H.length; m--;) {
                    var B = H[m];
                    if (B) B.tagName == "g" ? svgedit.utilities.walkTree(B, function(A) {
                        A.nodeName != "g" && h.push(A)
                    }) : h.push(B)
                }
                if (h.length > 0) {
                    Ya("stroke-width", f, h);
                    M("changed", H)
                }
            }
        };
    this.setStrokeAttr = function(f, h) {
        J[f.replace("-", "_")] = h;
        for (var m = [], B = H.length; B--;) {
            var A = H[B];
            if (A) A.tagName == "g" ? svgedit.utilities.walkTree(A, function(G) {
                G.nodeName != "g" && m.push(G)
            }) : m.push(A)
        }
        if (m.length >
            0) {
            Ya(f, h, m);
            M("changed", H)
        }
    };
    this.getStyle = function() {
        return J
    };
    this.getOpacity = function() {
        return J.opacity
    };
    this.setOpacity = function(f) {
        J.opacity = f;
        Ya("opacity", f)
    };
    this.getFillOpacity = function() {
        return J.fill_opacity
    };
    this.getStrokeOpacity = function() {
        return J.stroke_opacity
    };
    this.setPaintOpacity = function(f, h, m) {
        J[f + "_opacity"] = h;
        m ? Ab(f + "-opacity", h) : Ya(f + "-opacity", h)
    };
    this.getBlur = function(f) {
        var h = 0;
        if (f)
            if (f.getAttribute("filter"))
                if (f = oa(f.id + "_blur")) h = f.firstChild.getAttribute("stdDeviation");
        return h
    };
    (function() {
        function f() {
            var A = c.undoMgr.finishUndoableChange();
            h.addSubCommand(A);
            xa(h);
            m = h = null
        }
        var h = null,
            m = null,
            B = false;
        c.setBlurNoUndo = function(A) {
            if (m)
                if (A === 0) {
                    Ab("filter", "");
                    B = true
                } else {
                    var G = H[0];
                    B && Ab("filter", "url(#" + G.id + "_blur)");
                    if (svgedit.browser.isWebkit()) {
                        G.removeAttribute("filter");
                        G.setAttribute("filter", "url(#" + G.id + "_blur)")
                    }
                    Ab("stdDeviation", A, [m.firstChild]);
                    c.setBlurOffsets(m, A)
                }
            else c.setBlur(A)
        };
        c.setBlurOffsets = function(A, G) {
            if (G > 3) ma(A, {
                x: "-50%",
                y: "-50%",
                width: "200%",
                height: "200%"
            }, 100);
            else if (!svgedit.browser.isWebkit()) {
                A.removeAttribute("x");
                A.removeAttribute("y");
                A.removeAttribute("width");
                A.removeAttribute("height")
            }
        };
        c.setBlur = function(A, G) {
            if (h) f();
            else {
                var D = H[0],
                    z = D.id;
                m = oa(z + "_blur");
                A -= 0;
                var F = new Ba;
                if (m) {
                    if (A === 0) m = null
                } else {
                    var k = U({
                        element: "feGaussianBlur",
                        attr: {
                            "in": "SourceGraphic",
                            stdDeviation: A
                        }
                    });
                    m = U({
                        element: "filter",
                        attr: {
                            id: z + "_blur"
                        }
                    });
                    m.appendChild(k);
                    gb().appendChild(m);
                    F.addSubCommand(new Sa(m))
                }
                k = {
                    filter: D.getAttribute("filter")
                };
                if (A ===
                    0) {
                    D.removeAttribute("filter");
                    F.addSubCommand(new Ka(D, k))
                } else {
                    Ya("filter", "url(#" + z + "_blur)");
                    F.addSubCommand(new Ka(D, k));
                    c.setBlurOffsets(m, A);
                    h = F;
                    c.undoMgr.beginUndoableChange("stdDeviation", [m ? m.firstChild : null]);
                    if (G) {
                        c.setBlurNoUndo(A);
                        f()
                    }
                }
            }
        }
    })();
    this.getBold = function() {
        var f = true;
        H.filter(Boolean).forEach(function(h) {
            if (h.getAttribute("font-weight") != "bold") f = false
        });
        return f
    };
    this.setBold = function(f) {
        var h = H.filter(Boolean);
        h.forEach(function(m) {
            if (m != null && m.tagName == "text") Ya("font-weight",
                f ? "bold" : "normal")
        });
        h[0].textContent || bb.setCursor()
    };
    this.getItalic = function() {
        var f = true;
        H.filter(Boolean).forEach(function(h) {
            if (h.getAttribute("font-style") != "italic") f = false
        });
        return f
    };
    this.setItalic = function(f) {
        var h = H.filter(Boolean);
        h.forEach(function(m) {
            if (m != null && m.tagName == "text") Ya("font-style", f ? "italic" : "normal")
        });
        h[0].textContent || bb.setCursor()
    };
    this.getFontFamily = function() {
        return Ua.font_family
    };
    this.setFontFamily = function(f) {
        Ua.font_family = f;
        Ya("font-family", f);
        H[0] && !H[0].textContent &&
            bb.setCursor()
    };
    this.setFontColor = function(f) {
        Ua.fill = f;
        Ya("fill", f)
    };
    this.getFontSize = function() {
        return Ua.fill
    };
    this.getFontSize = function() {
        return Ua.font_size
    };
    this.setFontSize = function(f) {
        Ua.font_size = f;
        Ya("font-size", f);
        H[0].textContent || bb.setCursor()
    };
    this.getText = function() {
        var f = H[0];
        if (f == null) return "";
        return f.textContent
    };
    this.setTextContent = function(f) {
        Ya("#text", f);
        bb.init(f);
        bb.setCursor()
    };
    this.setImageURL = function(f) {
        var h = H[0];
        if (h) {
            var m = $(h).attr(["width", "height"]);
            m = !m.width ||
                !m.height;
            var B = ka(h);
            if (B !== f) m = true;
            else if (!m) return;
            var A = new Ba("Change Image URL");
            Z(h, f);
            A.addSubCommand(new Ka(h, {
                "#href": B
            }));
            m ? $(new Image).load(function() {
                var G = $(h).attr(["width", "height"]);
                $(h).attr({
                    width: this.width,
                    height: this.height
                });
                ra.requestSelector(h).resize();
                A.addSubCommand(new Ka(h, G));
                xa(A);
                M("changed", [h])
            }).attr("src", f) : xa(A)
        }
    };
    this.setLinkURL = function(f) {
        var h = H[0];
        if (h) {
            if (h.tagName !== "a") {
                h = $(h).parents("a");
                if (h.length) h = h[0];
                else return
            }
            var m = ka(h);
            if (m !== f) {
                var B =
                    new Ba("Change Link URL");
                Z(h, f);
                B.addSubCommand(new Ka(h, {
                    "#href": m
                }));
                xa(B)
            }
        }
    };
    this.elementsAreSame = function(f) {
        return !f.length || f[0] == null ? null : H.every(function(h) {
            return h && H[0] ? h.nodeName == H[0].nodeName : null
        })
    };
    this.setRectRadius = function(f) {
        c.elementsAreSame(H) && H[0].tagName == "rect" && H.forEach(function(h) {
            var m = h.getAttribute("rx");
            if (m != f) {
                h.setAttribute("rx", f);
                h.setAttribute("ry", f);
                xa(new Ka(h, {
                    rx: m,
                    ry: m
                }, "Radius"));
                M("changed", [h])
            }
        })
    };
    this.makeHyperlink = function(f) {
        c.groupSelectedElements("a",
            f)
    };
    this.removeHyperlink = function() {
        c.ungroupSelectedElement()
    };
    this.setSegType = function(f) {
        Ha.setSegType(f)
    };
    this.convertToPath = function(f, h) {
        if (f == null) $.each(H, function(aa, S) {
            S && c.convertToPath(S)
        });
        else {
            if (!h) var m = new Ba("Convert element to Path");
            var B = h ? {} : {
                fill: J.fill,
                "fill-opacity": J.fill_opacity,
                stroke: J.stroke,
                "stroke-width": J.stroke_width,
                "stroke-dasharray": J.stroke_dasharray,
                "stroke-linejoin": J.stroke_linejoin,
                "stroke-linecap": J.stroke_linecap,
                "stroke-opacity": J.stroke_opacity,
                opacity: J.opacity,
                visibility: "hidden"
            };
            $.each(["marker-start", "marker-end", "marker-mid", "filter", "clip-path"], function() {
                if (f.getAttribute(this)) B[this] = f.getAttribute(this)
            });
            var A = U({
                    element: "path",
                    attr: B
                }),
                G = f.getAttribute("transform");
            G && A.setAttribute("transform", G);
            var D = f.id,
                z = f.parentNode;
            f.nextSibling ? z.insertBefore(A, f) : z.appendChild(A);
            var F = "",
                k = function(aa) {
                    $.each(aa, function(S, ea) {
                        var ga = ea[1];
                        F += ea[0];
                        for (var T = 0; T < ga.length; T += 2) F += ga[T] + "," + ga[T + 1] + " "
                    })
                },
                n = 1.81;
            switch (f.tagName) {
                case "ellipse":
                case "circle":
                    var q =
                        $(f).attr(["rx", "ry", "cx", "cy"]),
                        u = q.cx,
                        E = q.cy,
                        I = q.rx;
                    q = q.ry;
                    if (f.tagName == "circle") I = q = $(f).attr("r");
                    k([
                        ["M", [u - I, E]],
                        ["C", [u - I, E - q / n, u - I / n, E - q, u, E - q]],
                        ["C", [u + I / n, E - q, u + I, E - q / n, u + I, E]],
                        ["C", [u + I, E + q / n, u + I / n, E + q, u, E + q]],
                        ["C", [u - I / n, E + q, u - I, E + q / n, u - I, E]],
                        ["Z", []]
                    ]);
                    break;
                case "path":
                    F = f.getAttribute("d");
                    break;
                case "line":
                    q = $(f).attr(["x1", "y1", "x2", "y2"]);
                    F = "M" + q.x1 + "," + q.y1 + "L" + q.x2 + "," + q.y2;
                    break;
                case "polyline":
                case "polygon":
                    F = "M" + f.getAttribute("points");
                    break;
                case "rect":
                    q = $(f).attr(["rx",
                        "ry"
                    ]);
                    I = q.rx;
                    q = q.ry;
                    var K = f.getBBox();
                    u = K.x;
                    E = K.y;
                    var O = K.width;
                    K = K.height;
                    n = 4 - n;
                    if (!I && !q) k([
                        ["M", [u, E]],
                        ["L", [u + O, E]],
                        ["L", [u + O, E + K]],
                        ["L", [u, E + K]],
                        ["L", [u, E]],
                        ["Z", []]
                    ]);
                    else {
                        q || (q = I);
                        k([
                            ["M", [u, E + q]],
                            ["C", [u, E + q / n, u + I / n, E, u + I, E]],
                            ["L", [u + O - I, E]],
                            ["C", [u + O - I / n, E, u + O, E + q / n, u + O, E + q]],
                            ["L", [u + O, E + K - q]],
                            ["C", [u + O, E + K - q / n, u + O - I / n, E + K, u + O - I, E + K]],
                            ["L", [u + I, E + K]],
                            ["C", [u + I / n, E + K, u, E + K - q / n, u, E + K - q]],
                            ["L", [u, E + q]],
                            ["Z", []]
                        ])
                    }
                    break;
                default:
                    A.parentNode.removeChild(A)
            }
            F && A.setAttribute("d", F);
            if (h) {
                Ha.resetOrientation(A);
                m = false;
                try {
                    m = A.getBBox()
                } catch (V) {}
                A.parentNode.removeChild(A);
                return m
            } else {
                if (G) {
                    G = R(A);
                    la(G) && Ha.resetOrientation(A)
                }
                m.addSubCommand(new Ia(f, f.nextSibling, z));
                m.addSubCommand(new Sa(A));
                ya();
                f.parentNode.removeChild(f);
                A.setAttribute("id", D);
                A.removeAttribute("visibility");
                qb([A], true);
                xa(m)
            }
        }
    };
    var Ab = this.changeSelectedAttributeNoUndo = function(f, h, m) {
            Ea == "pathedit" && Ha.moveNode(f, h);
            m = m || H;
            for (var B = m.length, A = ["g", "polyline", "path"]; B--;) {
                var G = m[B];
                if (G != null) {
                    Ea === "textedit" && f !== "#text" &&
                        G.textContent.length && bb.toSelectMode(G);
                    if ((f === "x" || f === "y") && A.indexOf(G.tagName) >= 0) {
                        var D = getStrokedBBox([G]);
                        c.moveSelectedElements((f === "x" ? h - D.x : 0) * v, (f === "y" ? h - D.y : 0) * v, true)
                    } else {
                        D = f === "#text" ? G.textContent : G.getAttribute(f);
                        if (D == null) D = "";
                        if (D !== String(h)) {
                            if (f == "#text") {
                                svgedit.utilities.getBBox(G);
                                G.textContent = h
                            } else f == "#href" ? Z(G, h) : G.setAttribute(f, h);
                            H.indexOf(G) >= 0 && setTimeout(function() {
                                G.parentNode && ra.requestSelector(G).resize()
                            }, 0);
                            D = pa(G);
                            if (D != 0 && f != "transform")
                                for (var z =
                                        R(G), F = z.numberOfItems; F--;)
                                    if (z.getItem(F).type == 4) {
                                        z.removeItem(F);
                                        var k = svgedit.utilities.getBBox(G),
                                            n = N(k.x + k.width / 2, k.y + k.height / 2, X(z).matrix);
                                        k = n.x;
                                        n = n.y;
                                        var q = d.createSVGTransform();
                                        q.setRotate(D, k, n);
                                        z.insertItemBefore(q, F);
                                        break
                                    }
                        }
                    }
                }
            }
        },
        Ya = this.changeSelectedAttribute = function(f, h, m) {
            m = m || H;
            c.undoMgr.beginUndoableChange(f, m);
            Ab(f, h, m);
            f = c.undoMgr.finishUndoableChange();
            f.isEmpty() || xa(f)
        };
    this.deleteSelectedElements = function() {
        for (var f = new Ba("Delete Elements"), h = H.length, m = [], B = 0; B < h; ++B) {
            var A =
                H[B];
            if (A == null) break;
            var G = A.parentNode,
                D = A;
            ra.releaseSelector(D);
            svgedit.path.removePath_(D.id);
            if (G.tagName === "a" && G.childNodes.length === 1) {
                D = G;
                G = G.parentNode
            }
            var z = D.nextSibling;
            D = G.removeChild(D);
            m.push(A);
            H[B] = null;
            f.addSubCommand(new Ia(D, z, G))
        }
        f.isEmpty() || xa(f);
        M("changed", m);
        ya()
    };
    this.cutSelectedElements = function() {
        for (var f = new Ba("Cut Elements"), h = H.length, m = [], B = 0; B < h; ++B) {
            var A = H[B];
            if (A == null) break;
            var G = A.parentNode,
                D = A;
            ra.releaseSelector(D);
            svgedit.path.removePath_(D.id);
            var z = D.nextSibling;
            D = G.removeChild(D);
            m.push(A);
            H[B] = null;
            f.addSubCommand(new Ia(D, z, G))
        }
        f.isEmpty() || xa(f);
        M("changed", m);
        ya();
        c.clipBoard = m
    };
    this.copySelectedElements = function() {
        c.clipBoard = $.merge([], H)
    };
    this.pasteElements = function() {
        var f = c.clipBoard,
            h = f.length;
        if (h) {
            for (var m = [], B = new Ba("Paste elements"); h--;) {
                var A = f[h];
                if (A) {
                    var G = ha(A);
                    if (!oa(A.id)) G.id = A.id;
                    m.push(G);
                    (L || C().getCurrentLayer()).appendChild(G);
                    B.addSubCommand(new Sa(G))
                }
            }
            svgCanvas.clearSelection();
            setTimeout(function() {
                rb(m)
            }, 100);
            xa(B);
            M("changed",
                m)
        }
    };
    this.groupSelectedElements = function(f) {
        f || (f = "g");
        var h = "";
        switch (f) {
            case "a":
                h = "Make hyperlink";
                var m = "";
                if (arguments.length > 1) m = arguments[1];
                break;
            default:
                f = "g";
                h = "Group Elements"
        }
        h = new Ba(h);
        var B = U({
            element: f,
            attr: {
                id: ja()
            }
        });
        f === "a" && Z(B, m);
        h.addSubCommand(new Sa(B));
        for (m = H.length; m--;) {
            var A = H[m];
            if (A != null) {
                if (A.parentNode.tagName === "a" && A.parentNode.childNodes.length === 1) A = A.parentNode;
                var G = A.nextSibling,
                    D = A.parentNode;
                B.appendChild(A);
                h.addSubCommand(new Na(A, G, D))
            }
        }
        h.isEmpty() || xa(h);
        rb([B], true)
    };
    var Db = this.pushGroupProperties = function(f, h) {
        var m = f.childNodes,
            B = m.length,
            A = f.getAttribute("transform"),
            G = R(f),
            D = X(G).matrix,
            z = new Ba("Push group properties"),
            F = 0,
            k = pa(f),
            n = $(f).attr(["filter", "opacity"]),
            q, u;
        for (F = 0; F < B; F++) {
            var E = m[F];
            if (E.nodeType === 1) {
                if (n.opacity !== null && n.opacity !== 1) {
                    E.getAttribute("opacity");
                    var I = Math.round((E.getAttribute("opacity") || 1) * n.opacity * 100) / 100;
                    Ya("opacity", I, [E])
                }
                if (n.filter) {
                    var K = I = this.getBlur(E);
                    u || (u = this.getBlur(f));
                    if (I) I = u - 0 + (I - 0);
                    else if (I ===
                        0) I = u;
                    if (K) q = P(E.getAttribute("filter"));
                    else if (q) {
                        q = ha(q);
                        gb().appendChild(q)
                    } else q = P(n.filter);
                    q.id = E.id + "_" + (q.firstChild.tagName === "feGaussianBlur" ? "blur" : "filter");
                    Ya("filter", "url(#" + q.id + ")", [E]);
                    if (I) {
                        Ya("stdDeviation", I, [q.firstChild]);
                        c.setBlurOffsets(q, I)
                    }
                }
                I = R(E);
                if (~E.tagName.indexOf("Gradient")) I = null;
                if (I)
                    if (E.tagName !== "defs")
                        if (G.numberOfItems) {
                            if (k && G.numberOfItems == 1) {
                                var O = G.getItem(0).matrix,
                                    V = d.createSVGMatrix();
                                if (K = pa(E)) V = I.getItem(0).matrix;
                                var aa = svgedit.utilities.getBBox(E),
                                    S = X(I).matrix,
                                    ea = N(aa.x + aa.width / 2, aa.y + aa.height / 2, S);
                                aa = k + K;
                                S = d.createSVGTransform();
                                S.setRotate(aa, ea.x, ea.y);
                                O = ca(O, V, S.matrix.inverse());
                                K && I.removeItem(0);
                                if (aa) I.numberOfItems ? I.insertItemBefore(S, 0) : I.appendItem(S);
                                if (O.e || O.f) {
                                    K = d.createSVGTransform();
                                    K.setTranslate(O.e, O.f);
                                    I.numberOfItems ? I.insertItemBefore(K, 0) : I.appendItem(K)
                                }
                            } else {
                                K = E.getAttribute("transform");
                                O = {};
                                O.transform = K ? K : "";
                                K = d.createSVGTransform();
                                O = X(I).matrix;
                                V = O.inverse();
                                O = ca(V, D, O);
                                K.setMatrix(O);
                                I.appendItem(K)
                            }(E = Qa(E)) &&
                            z.addSubCommand(E)
                        }
            }
        }
        if (A) {
            O = {};
            O.transform = A;
            f.setAttribute("transform", "");
            f.removeAttribute("transform");
            z.addSubCommand(new Ka(f, O))
        }
        if (h && !z.isEmpty()) return z
    };
    this.ungroupSelectedElement = function() {
        var f = H[0];
        if ($(f).data("gsvg") || $(f).data("symbol")) Lb(f);
        else if (f.tagName === "use") {
            var h = oa(ka(f).substr(1));
            $(f).data("symbol", h).data("ref", h);
            Lb(f)
        } else {
            h = $(f).parents("a");
            if (h.length) f = h[0];
            if (f.tagName === "g" || f.tagName === "a") {
                h = new Ba("Ungroup Elements");
                var m = Db(f, true);
                m && h.addSubCommand(m);
                m = f.parentNode;
                for (var B = f.nextSibling, A = Array(f.childNodes.length), G = 0; f.firstChild;) {
                    var D = f.firstChild,
                        z = D.nextSibling,
                        F = D.parentNode;
                    if (D.tagName === "title") {
                        h.addSubCommand(new Ia(D, D.nextSibling, F));
                        F.removeChild(D)
                    } else {
                        A[G++] = D = m.insertBefore(D, B);
                        h.addSubCommand(new Na(D, z, F))
                    }
                }
                ya();
                B = f.nextSibling;
                f = m.removeChild(f);
                h.addSubCommand(new Ia(f, B, m));
                h.isEmpty() || xa(h);
                qb(A)
            }
        }
    };
    this.moveToTopSelectedElement = function() {
        var f = H.filter(Boolean).reverse(),
            h = new Ba("Move to top");
        f.forEach(function(m) {
            m =
                m;
            var B = m.parentNode,
                A = m.nextSibling;
            m = m.parentNode.appendChild(m);
            if (A != m.nextSibling) {
                h.addSubCommand(new Na(m, A, B, "top"));
                M("changed", [m])
            }
            h.isEmpty() || xa(h)
        })
    };
    this.moveToBottomSelectedElement = function() {
        var f = H.filter(Boolean).reverse(),
            h = new Ba("Move to top");
        f.forEach(function(m) {
            m = m;
            var B = m.parentNode,
                A = m.nextSibling,
                G = m.parentNode.firstChild;
            if (G.tagName == "title") G = G.nextSibling;
            if (G.tagName == "defs") G = G.nextSibling;
            m = m.parentNode.insertBefore(m, G);
            if (A != m.nextSibling) {
                h.addSubCommand(new Na(m,
                    A, B, "bottom"));
                M("changed", [m])
            }
        });
        h.isEmpty() || xa(h)
    };
    this.moveUpDownSelected = function(f) {
        var h = H.filter(Boolean);
        f == "Down" && h.reverse();
        var m = new Ba("Move " + f);
        h.forEach(function(B) {
            hb = [];
            var A, G, D = $(ob(getStrokedBBox([B]))).toArray();
            f == "Down" && D.reverse();
            $.each(D, function() {
                if (G) {
                    A = this;
                    return false
                } else if (this == B) G = true
            });
            if (A) {
                D = B.parentNode;
                var z = B.nextSibling;
                $(A)[f == "Down" ? "before" : "after"](B);
                if (z != B.nextSibling) {
                    m.addSubCommand(new Na(B, z, D, "Move " + f));
                    M("changed", [B])
                }
            }
        });
        m.isEmpty() ||
            xa(m)
    };
    this.moveSelectedElements = function(f, h, m) {
        if (f.constructor != Array) {
            f /= v;
            h /= v
        }
        m = m || true;
        for (var B = new Ba("position"), A = H.length; A--;) {
            var G = H[A];
            if (G != null) {
                var D = d.createSVGTransform(),
                    z = R(G);
                f.constructor == Array ? D.setTranslate(f[A], h[A]) : D.setTranslate(f, h);
                z.numberOfItems ? z.insertItemBefore(D, 0) : z.appendItem(D);
                (D = Qa(G)) && B.addSubCommand(D);
                ra.requestSelector(G).resize()
            }
        }
        if (!B.isEmpty()) {
            m && xa(B);
            M("changed", H);
            return B
        }
    };
    this.cloneSelectedElements = function(f, h, m) {
        for (var B = new Ba("Clone Elements"),
                A = H.length, G = 0; G < A; ++G) {
            var D = H[G];
            if (D == null) break
        }
        A = H.slice(0, G);
        this.clearSelection(true);
        G = A.length;
        for (clones = []; G--;) {
            D = A[G];
            var z = ha(A[G]),
                F = L || C().getCurrentLayer();
            if (m) {
                tlist = R(z);
                tlist.removeItem(m);
                Qa(z);
                F.insertBefore(z, D)
            } else F.appendChild(z);
            clones.push(z);
            B.addSubCommand(new Sa(z))
        }
        if (!B.isEmpty()) {
            qb(A.reverse());
            m || this.moveSelectedElements(f, h, false);
            xa(B)
        }
        return clones
    };
    this.alignSelectedElements = function(f, h) {
        var m = [],
            B = Number.MAX_VALUE,
            A = Number.MIN_VALUE,
            G = Number.MAX_VALUE,
            D = Number.MIN_VALUE,
            z = Number.MIN_VALUE,
            F = Number.MIN_VALUE,
            k = H.length;
        if (k) {
            for (var n = 0; n < k; ++n) {
                if (H[n] == null) break;
                m[n] = getStrokedBBox([H[n]]);
                switch (h) {
                    case "smallest":
                        if ((f == "l" || f == "c" || f == "r") && (z == Number.MIN_VALUE || z > m[n].width) || (f == "t" || f == "m" || f == "b") && (F == Number.MIN_VALUE || F > m[n].height)) {
                            B = m[n].x;
                            G = m[n].y;
                            A = m[n].x + m[n].width;
                            D = m[n].y + m[n].height;
                            z = m[n].width;
                            F = m[n].height
                        }
                        break;
                    case "largest":
                        if ((f == "l" || f == "c" || f == "r") && (z == Number.MIN_VALUE || z < m[n].width) || (f == "t" || f == "m" || f == "b") && (F ==
                                Number.MIN_VALUE || F < m[n].height)) {
                            B = m[n].x;
                            G = m[n].y;
                            A = m[n].x + m[n].width;
                            D = m[n].y + m[n].height;
                            z = m[n].width;
                            F = m[n].height
                        }
                        break;
                    default:
                        if (m[n].x < B) B = m[n].x;
                        if (m[n].y < G) G = m[n].y;
                        if (m[n].x + m[n].width > A) A = m[n].x + m[n].width;
                        if (m[n].y + m[n].height > D) D = m[n].y + m[n].height
                }
            }
            if (h == "page") {
                G = B = 0;
                A = c.contentW;
                D = c.contentH
            }
            z = Array(k);
            F = Array(k);
            for (n = 0; n < k; ++n) {
                if (H[n] == null) break;
                var q = m[n];
                z[n] = 0;
                F[n] = 0;
                switch (f) {
                    case "l":
                        z[n] = B - q.x;
                        break;
                    case "c":
                        z[n] = (B + A) / 2 - (q.x + q.width / 2);
                        break;
                    case "r":
                        z[n] = A - (q.x + q.width);
                        break;
                    case "t":
                        F[n] = G - q.y;
                        break;
                    case "m":
                        F[n] = (G + D) / 2 - (q.y + q.height / 2);
                        break;
                    case "b":
                        F[n] = D - (q.y + q.height)
                }
            }
            this.moveSelectedElements(z, F)
        }
    };
    this.contentW = zb().w;
    this.contentH = zb().h;
    this.updateCanvas = function(f, h) {
        d.setAttribute("width", f);
        d.setAttribute("height", h);
        var m = $("#canvasBackground")[0],
            B = p.getAttribute("x"),
            A = p.getAttribute("y"),
            G = f / 2 - this.contentW * v / 2,
            D = h / 2 - this.contentH * v / 2;
        ma(p, {
            width: this.contentW * v,
            height: this.contentH * v,
            x: G,
            y: D,
            viewBox: "0 0 " + this.contentW + " " + this.contentH
        });
        ma(m, {
            width: p.getAttribute("width"),
            height: p.getAttribute("height"),
            x: G,
            y: D
        });
        (m = oa("background_image")) && ma(m, {
            width: "100%",
            height: "100%"
        });
        ra.selectorParentGroup.setAttribute("transform", "translate(" + G + "," + D + ")");
        return {
            x: G,
            y: D,
            old_x: B,
            old_y: A,
            d_x: G - B,
            d_y: D - A
        }
    };
    this.setBackground = function(f, h) {
        var m = oa("canvasBackground"),
            B = $(m).find("rect")[0],
            A = oa("background_image");
        B.setAttribute("fill", f);
        if (h) {
            if (!A) {
                A = g.createElementNS(b, "image");
                ma(A, {
                    id: "background_image",
                    width: "100%",
                    height: "100%",
                    preserveAspectRatio: "xMinYMin",
                    style: "pointer-events:none"
                })
            }
            Z(A, h);
            m.appendChild(A)
        } else A && A.parentNode.removeChild(A)
    };
    this.cycleElement = function(f) {
        var h = H[0],
            m = false,
            B = pb(L || C().getCurrentLayer());
        if (B.length) {
            if (h == null) {
                f = f ? B.length - 1 : 0;
                m = B[f]
            } else
                for (var A = B.length; A--;)
                    if (B[A] == h) {
                        f = f ? A - 1 : A + 1;
                        if (f >= B.length) f = 0;
                        else if (f < 0) f = B.length - 1;
                        m = B[f];
                        break
                    }
            rb([m], true);
            M("selected", H)
        }
    };
    this.clear();
    this.getPrivateMethods = function() {
        return {
            addCommandToHistory: xa,
            setGradient: Nb,
            addSvgElementFromJson: U,
            assignAttributes: ma,
            BatchCommand: Ba,
            call: M,
            ChangeElementCommand: Ka,
            copyElem: ha,
            ffClone: ba,
            findDefs: gb,
            findDuplicateGradient: Mb,
            getElem: oa,
            getId: Y,
            getIntersectionList: ob,
            getMouseTarget: Bb,
            getNextId: ja,
            getPathBBox: da,
            getUrlFromAttr: ia,
            hasMatrixTransform: la,
            identifyLayers: xb,
            InsertElementCommand: Sa,
            isIdentity: svgedit.math.isIdentity,
            logMatrix: Wa,
            matrixMultiply: ca,
            MoveElementCommand: Na,
            preventClickDefault: Fb,
            recalculateAllSelectedDimensions: Ca,
            recalculateDimensions: Qa,
            remapElement: Za,
            RemoveElementCommand: Ia,
            removeUnusedDefElems: yb,
            round: ab,
            runExtensions: ib,
            sanitizeSvg: Fa,
            SVGEditTransformList: svgedit.transformlist.SVGTransformList,
            toString: toString,
            transformBox: svgedit.math.transformBox,
            transformListToTransform: X,
            transformPoint: N,
            walkTree: svgedit.utilities.walkTree
        }
    }
};
(function() {
    document.addEventListener("touchstart", touchHandler, true);
    document.addEventListener("touchmove", touchHandler, true);
    document.addEventListener("touchend", touchHandler, true);
    document.addEventListener("touchcancel", touchHandler, true);
    if (!window.methodDraw) window.methodDraw = function(a) {
        function o(d, p) {
            var w = e.setSvgString(d) !== false;
            p = p || a.noop;
            w ? p(true) : a.alert(uiStrings.notification.errorLoadingSVG, function() {
                p(false)
            })
        }
        var e, b = {},
            l = false;
        curConfig = {
            canvas_expansion: 1,
            dimensions: [580, 400],
            initFill: {
                color: "fff",
                opacity: 1
            },
            initStroke: {
                width: 1.5,
                color: "000",
                opacity: 1
            },
            initOpacity: 1,
            imgPath: "images/",
            extPath: "extensions/",
            jGraduatePath: "jgraduate/images/",
            extensions: [],
            initTool: "select",
            wireframe: false,
            colorPickerCSS: false,
            gridSnapping: false,
            gridColor: "#000",
            baseUnit: "px",
            snappingStep: 10,
            showRulers: svgedit.browser.isTouch() ? false : true,
            show_outside_canvas: false,
            no_save_warning: true,
            initFont: "Helvetica, Arial, sans-serif"
        };
        uiStrings = b.uiStrings = {
            common: {
                ok: "OK",
                cancel: "Cancel",
                key_up: "Up",
                key_down: "Down",
                key_backspace: "Backspace",
                key_del: "Del"
            },
            layers: {
                layer: "Layer"
            },
            notification: {
                invalidAttrValGiven: "Invalid value given",
                noContentToFitTo: "No content to fit to",
                dupeLayerName: "There is already a layer named that!",
                enterUniqueLayerName: "Please enter a unique layer name",
                enterNewLayerName: "Please enter the new layer name",
                layerHasThatName: "Layer already has that name",
                QmoveElemsToLayer: 'Move selected elements to layer "%s"?',
                QwantToClear: "<strong>Do you want to clear the drawing?</strong>\nThis will also erase your undo history",
                QwantToOpen: "Do you want to open a new file?\nThis will also erase your undo history",
                QerrorsRevertToSource: "There were parsing errors in your SVG source.\nRevert back to original SVG source?",
                QignoreSourceChanges: "Ignore changes made to SVG source?",
                featNotSupported: "Feature not supported",
                enterNewImgURL: "Enter the new image URL",
                defsFailOnSave: "NOTE: Due to a bug in your browser, this image may appear wrong (missing gradients or elements). It will however appear correct once actually saved.",
                loadingImage: "Loading image, please wait...",
                saveFromBrowser: 'Select "Save As..." in your browser to save this image as a %s file.',
                noteTheseIssues: "Also note the following issues: ",
                unsavedChanges: "There are unsaved changes.",
                enterNewLinkURL: "Enter the new hyperlink URL",
                errorLoadingSVG: "Error: Unable to load SVG data",
                URLloadFail: "Unable to load from URL",
                retrieving: 'Retrieving "%s" ...'
            }
        };
        var s = {},
            c = {};
        b.curConfig = curConfig;
        b.tool_scale = 1;
        b.setConfig = function(d) {
            a.extend(true, curConfig, d);
            if (d.extensions) curConfig.extensions = d.extensions
        };
        b.setCustomHandlers = function(d) {
            b.ready(function() {
                if (d.open) {
                    a('#tool_open > input[type="file"]').remove();
                    a("#tool_open").show();
                    e.open = d.open
                }
                if (d.save) {
                    b.show_save_warning = false;
                    e.bind("saved", d.save)
                }
                d.pngsave && e.bind("exported", d.pngsave);
                c = d
            })
        };
        b.randomizeIds = function() {
            e.randomizeIds(arguments)
        };
        b.init = function() {
            (function() {
                var k = window.opener;
                if (k) try {
                    var n = k.document.createEvent("Event");
                    n.initEvent("methodDrawReady", true, true);
                    k.document.documentElement.dispatchEvent(n)
                } catch (q) {}
            })();
            a("body").toggleClass("touch", svgedit.browser.isTouch());
            a("#canvas_width").val(curConfig.dimensions[0]);
            a("#canvas_height").val(curConfig.dimensions[1]);
            var d = function() {
                a.each(curConfig.extensions, function() {
                    var k = this;
                    a.getScript(curConfig.extPath + k, function(n) {
                        if (!n) {
                            n = document.createElement("script");
                            n.src = curConfig.extPath + k;
                            document.querySelector("head").appendChild(n)
                        }
                    })
                })
            };
            document.location.protocol === "file:" ? setTimeout(d, 100) : d();
            a.svgIcons(curConfig.imgPath + "svg_edit_icons.svg", {
                w: 27,
                h: 27,
                id_match: false,
                no_img: true,
                fallback_path: curConfig.imgPath,
                fallback: {
                    logo: "logo.png",
                    select: "select.png",
                    select_node: "select_node.png",
                    pencil: "pencil.png",
                    pen: "line.png",
                    rect: "square.png",
                    ellipse: "ellipse.png",
                    path: "path.png",
                    text: "text.png",
                    image: "image.png",
                    zoom: "zoom.png",
                    "delete": "delete.png",
                    spapelib: "shapelib.png",
                    node_delete: "node_delete.png",
                    align_left: "align-left.png",
                    align_center: "align-center.png",
                    align_right: "align-right.png",
                    align_top: "align-top.png",
                    align_middle: "align-middle.png",
                    align_bottom: "align-bottom.png",
                    arrow_right: "flyouth.png",
                    arrow_down: "dropdown.gif"
                },
                placement: {
                    "#logo": "logo",
                    "#tool_select": "select",
                    "#tool_fhpath": "pencil",
                    "#tool_line": "pen",
                    "#tool_rect,#tools_rect_show": "rect",
                    "#tool_ellipse,#tools_ellipse_show": "ellipse",
                    "#tool_path": "path",
                    "#tool_text,#layer_rename": "text",
                    "#tool_image": "image",
                    "#tool_zoom": "zoom",
                    "#tool_node_clone": "node_clone",
                    "#tool_node_delete": "node_delete",
                    "#tool_add_subpath": "add_subpath",
                    "#tool_openclose_path": "open_path",
                    "#tool_alignleft, #tool_posleft": "align_left",
                    "#tool_aligncenter, #tool_poscenter": "align_center",
                    "#tool_alignright, #tool_posright": "align_right",
                    "#tool_aligntop, #tool_postop": "align_top",
                    "#tool_alignmiddle, #tool_posmiddle": "align_middle",
                    "#tool_alignbottom, #tool_posbottom": "align_bottom",
                    "#cur_position": "align",
                    "#zoomLabel": "zoom"
                },
                resize: {
                    "#logo .svg_icon": 15,
                    ".flyout_arrow_horiz .svg_icon": 5,
                    "#fill_bg .svg_icon, #stroke_bg .svg_icon": svgedit.browser.isTouch() ? 24 : 24,
                    ".palette_item:first .svg_icon": svgedit.browser.isTouch() ? 30 : 16,
                    "#zoomLabel .svg_icon": 16,
                    "#zoom_dropdown .svg_icon": 7
                },
                callback: function() {
                    a(".toolbar_button button > svg, .toolbar_button button > img").each(function() {
                        a(this).parent().prepend(this)
                    });
                    a(".tool_button, .tool_button_current").addClass("loaded");
                    var k = a("#tools_left");
                    if (k.length != 0) {
                        k.offset();
                        k.outerHeight()
                    }
                    a(".tools_flyout").each(function() {
                        var n = a("#" + this.id + "_show"),
                            q = n.attr("data-curopt");
                        if (!n.children("svg, img").length) {
                            q = a(q).children().clone();
                            if (q.length) {
                                q[0].removeAttribute("style");
                                n.append(q)
                            }
                        }
                    });
                    methodDraw.runCallbacks();
                    setTimeout(function() {
                        a(".flyout_arrow_horiz:empty").each(function() {
                            a(this).append(a.getSvgIcon("arrow_right").width(5).height(5))
                        })
                    }, 1)
                }
            });
            a("#rulers").on("dblclick", function(k) {
                a("#base_unit_container").css({
                    top: k.pageY - 10,
                    left: k.pageX - 50,
                    display: "block"
                })
            });
            a("#base_unit_container").on("mouseleave mouseenter", function() {
                t = setTimeout(function() {
                    a("#base_unit_container").fadeOut(500)
                }, 200);
                event.type == "mouseover" && clearTimeout(t)
            });
            a("#base_unit").on("change", function() {
                savePreferences()
            });
            b.canvas =
                e = new a.SvgCanvas(document.getElementById("svgcanvas"), curConfig);
            b.show_save_warning = false;
            b.paintBox = {
                fill: null,
                stroke: null,
                canvas: null
            };
            d = navigator.platform.indexOf("Mac") >= 0;
            var p = navigator.userAgent.indexOf("AppleWebKit") >= 0,
                w = d ? "meta+" : "ctrl+",
                C = e.pathActions,
                v = e.undoMgr,
                L = svgedit.utilities,
                Q = curConfig.imgPath + "placeholder.svg",
                J = a("#workarea"),
                H = a("#cmenu_canvas"),
                U = null,
                R = 1,
                N = "toolbars",
                ca = "";
            d || a(".shortcut").each(function() {
                var k = a(this).text();
                a(this).text(k.split("\u2318").join("Ctrl+"))
            });
            (function() {
                a("#dialog_container").draggable({
                    cancel: "#dialog_content, #dialog_buttons *",
                    containment: "window"
                });
                var k = a("#dialog_box"),
                    n = a("#dialog_buttons"),
                    q = function(u, E, I, K) {
                        a("#dialog_content").html("<p>" + E.replace(/\n/g, "</p><p>") + "</p>").toggleClass("prompt", u == "prompt");
                        n.empty();
                        var O = a('<input type="button" value="' + uiStrings.common.ok + '">').appendTo(n);
                        u != "alert" && a('<input type="button" value="' + uiStrings.common.cancel + '">').appendTo(n).on("click touchstart", function() {
                            k.hide();
                            I(false)
                        });
                        if (u == "prompt") {
                            var V = a('<input type="text">').prependTo(n);
                            V.val(K || "");
                            V.bind("keydown", "return", function() {
                                O.trigger("click touchstart")
                            })
                        }
                        u == "process" && O.hide();
                        k.show();
                        O.on("click touchstart", function() {
                            k.hide();
                            var aa = u == "prompt" ? V.val() : true;
                            I && I(aa)
                        }).focus();
                        u == "prompt" && V.focus()
                    };
                a.alert = function(u, E) {
                    q("alert", u, E)
                };
                a.confirm = function(u, E) {
                    q("confirm", u, E)
                };
                a.process_cancel = function(u, E) {
                    q("process", u, E)
                };
                a.prompt = function(u, E, I) {
                    q("prompt", u, I, E)
                }
            })();
            var la = function() {
                    var k = a(".tool_button_current");
                    if (k.length && k[0].id !== "tool_select") {
                        k.removeClass("tool_button_current").addClass("tool_button");
                        a("#tool_select").addClass("tool_button_current").removeClass("tool_button")
                    }
                    e.setMode("select")
                },
                X = null,
                W = false,
                fa = false,
                ta = "",
                ia = function(k, n) {
                    var q = e.getResolution(),
                        u = J;
                    a("#svgcanvas").position();
                    if (u = e.setBBoxZoom(n, u.width() - 15, u.height() - 15)) {
                        var E = u.zoom;
                        u = u.bbox;
                        if (E < 0.001) xa({
                            value: 0.1
                        });
                        else {
                            typeof animatedZoom != "undefined" && k.cancelAnimationFrame(animatedZoom);
                            var I = Date.now(),
                                K = E - q.zoom;
                            a("#zoom");
                            var O = q.zoom,
                                V = function() {
                                    var aa = (Date.now() - I) / 500;
                                    aa = Math.pow(aa - 1, 3) + 1;
                                    e.setZoom(O + K * aa);
                                    G();
                                    if (aa < 1 && aa > -0.9) k.animatedZoom = requestAnimationFrame(V);
                                    else {
                                        a("#zoom").val(parseInt(E * 100));
                                        a("option", "#zoom_select").removeAttr("selected");
                                        a("option[value=" + parseInt(E * 100) + "]", "#zoom_select").attr("selected", "selected")
                                    }
                                };
                            V();
                            e.getMode() == "zoom" && u.width && la();
                            xb()
                        }
                    }
                };
            a("#cur_context_panel").delegate("a", "click", function() {
                var k = a(this);
                k.attr("data-root") ? e.leaveContext() : e.setContext(k.text());
                e.clearSelection();
                return false
            });
            var ka = function() {
                    b.paintBox.fill.prep();
                    b.paintBox.stroke.prep()
                },
                Z = {},
                da = function(k) {
                    a.each(k, function(n, q) {
                        var u = a(n).children(),
                            E = n + "_show",
                            I = a(E),
                            K = false;
                        u.addClass("tool_button").unbind("click mousedown mouseup").each(function(aa) {
                            var S = q[aa];
                            Z[S.sel] = S.fn;
                            if (S.isDefault) K = aa;
                            aa = function(ea) {
                                var ga = S;
                                if (ea.type === "keydown") {
                                    var T = a(ga.parent + "_show").hasClass("tool_button_current"),
                                        qa = a(ga.parent + "_show").attr("data-curopt");
                                    a.each(k[S.parent], function(za, Aa) {
                                        if (Aa.sel ==
                                            qa) ga = !ea.shiftKey || !T ? Aa : k[S.parent][za + 1] || k[S.parent][0]
                                    })
                                }
                                if (a(this).hasClass("disabled")) return false;
                                ra(E) && ga.fn();
                                var va = ga.icon ? a.getSvgIcon(ga.icon, true) : a(ga.sel).children().eq(0).clone();
                                va[0].setAttribute("width", I.width());
                                va[0].setAttribute("height", I.height());
                                I.children(":not(.flyout_arrow_horiz)").remove();
                                I.append(va).attr("data-curopt", ga.sel)
                            };
                            a(this).mouseup(aa);
                            S.key && a(document).bind("keydown", S.key[0] + " shift+" + S.key[0], aa)
                        });
                        if (K) I.attr("data-curopt", q[K].sel);
                        else I.attr("data-curopt") ||
                            I.attr("data-curopt", q[0].sel);
                        var O, V = a(E).position();
                        a(n).css({
                            left: V.left + 34,
                            top: V.top + 77
                        });
                        I.mousedown(function(aa) {
                            a("#workarea").one("mousedown", function() {
                                a("#tools_shapelib").hide()
                            });
                            a("#tools_shapelib").is(":visible") && ra(E, false);
                            if (I.hasClass("disabled")) return false;
                            var S = a(n),
                                ea = V.left + 34,
                                ga = S.width() * -1,
                                T = S.data("shown_popop") ? 200 : 0;
                            O = setTimeout(function() {
                                I.data("isLibrary") ? S.css("left", ea).show() : S.css("left", ga).show().animate({
                                    left: ea
                                }, 50);
                                S.data("shown_popop", true)
                            }, T);
                            aa.preventDefault()
                        }).mouseup(function() {
                            clearTimeout(O);
                            var aa = a(this).attr("data-curopt");
                            if (I.data("isLibrary") && a(E.replace("_show", "")).is(":visible")) ra(E, true);
                            else ra(E) && aa in Z && Z[aa]()
                        })
                    });
                    ma()
                },
                pa = function(k, n) {
                    return a("<div>", {
                        "class": "tools_flyout",
                        id: k
                    }).appendTo("#svg_editor").append(n)
                },
                oa = function() {
                    a(".tools_flyout").each(function() {
                        var k = a("#" + this.id + "_show"),
                            n = k.offset();
                        k = k.outerWidth();
                        a(this).css({
                            left: (n.left + k) * R,
                            top: n.top
                        })
                    })
                },
                ma = function() {
                    a(".tools_flyout").each(function() {
                        var k = a("#" + this.id + "_show");
                        if (!k.data("isLibrary")) {
                            var n = [];
                            a(this).children().each(function() {
                                n.push(this.title)
                            });
                            k[0].title = n.join(" / ")
                        }
                    })
                },
                na, Ja = function(k, n, q) {
                    var u = null;
                    if (k.indexOf("url(#") === 0) {
                        k = (k = e.getRefElem(k)) ? k.cloneNode(true) : a("#" + q + "_color defs *")[0];
                        u = {
                            alpha: n
                        };
                        u[k.tagName] = k
                    } else u = k.indexOf("#") === 0 ? {
                        alpha: n,
                        solidColor: k.substr(1)
                    } : {
                        alpha: n,
                        solidColor: "none"
                    };
                    return new a.jGraduate.Paint(u)
                },
                Fa = e.getResolution();
            if (curConfig.baseUnit !== "px") {
                Fa.w = svgedit.units.convertUnit(Fa.w) + curConfig.baseUnit;
                Fa.h = svgedit.units.convertUnit(Fa.h) +
                    curConfig.baseUnit
            }
            var Na = function(k) {
                e.createLayer("background");
                cur_shape = e.addSvgElementFromJson({
                    element: "rect",
                    attr: {
                        x: -1,
                        y: -1,
                        width: Fa.w + 2,
                        height: Fa.h + 2,
                        stroke: "none",
                        id: "canvas_background",
                        opacity: 1,
                        fill: k || "#fff",
                        style: "pointer-events:none"
                    }
                });
                e.setCurrentLayer("Layer 1");
                e.setCurrentLayerPosition("1")
            };
            document.getElementById("canvas_background") || Na();
            document.getElementById("canvas_background").getAttribute("fill");
            var Sa = b.setImageURL = function(k) {
                    k || (k = Q);
                    e.setImageURL(k);
                    a("#image_url").val(k)
                },
                Ia = function() {
                    var k = X;
                    if (k != null && !k.parentNode) k = null;
                    if (W && W[0] != null && !W[0].parentNode) W = false;
                    var n = e.getCurrentDrawing().getCurrentLayerName(),
                        q = e.getMode(),
                        u = curConfig.baseUnit !== "px" ? curConfig.baseUnit : null,
                        E = q == "pathedit";
                    if (E) {
                        a(".context_panel").hide();
                        a("#path_node_panel").show();
                        a("#stroke_panel").hide();
                        n = C.getNodePoint();
                        a("#tool_add_subpath").removeClass("push_button_pressed").addClass("tool_button");
                        a("#tool_node_delete").toggleClass("disabled", !C.canDeleteNodes);
                        zb("#tool_openclose_path",
                            C.closed_subpath ? "open_path" : "close_path");
                        if (n) {
                            E = a("#seg_type");
                            if (u) {
                                n.x = svgedit.units.convertUnit(n.x);
                                n.y = svgedit.units.convertUnit(n.y)
                            }
                            a("#path_node_x").val(Math.round(n.x));
                            a("#path_node_y").val(Math.round(n.y));
                            if (n.type) {
                                E.val(n.type).removeAttr("disabled");
                                a("#seg_type_label").html(n.type == 4 ? "Straight" : "Curve")
                            } else E.val(4).attr("disabled", "disabled")
                        }
                        a("#tools_top").removeClass("multiselected");
                        a("#stroke_panel").hide();
                        a("#canvas_panel").hide()
                    } else {
                        var I = a("#cmenu_canvas li");
                        a(".context_panel").hide();
                        a(".menu_item", "#edit_menu").addClass("disabled");
                        a(".menu_item", "#object_menu").addClass("disabled");
                        if (W) {
                            W = W.filter(Boolean);
                            (k = e.elementsAreSame(W) ? W[0] : null) && a("#tools_top").addClass("multiselected")
                        }
                        if (!k && !W) {
                            a("#tools_top").removeClass("multiselected");
                            a("#stroke_panel").hide();
                            a("#canvas_panel").show()
                        }
                        if (k != null) {
                            a("#stroke_panel").show();
                            var K = k.nodeName,
                                O = e.getRotationAngle(k);
                            a("#angle").val(Math.round(O));
                            O = e.getBlur(k);
                            a("#blur").val(O);
                            if (!E && q != "pathedit") {
                                a("#selected_panel").show();
                                a(".action_selected").removeClass("disabled");
                                var V, aa;
                                if (["g", "polyline", "path"].indexOf(K) >= 0)
                                    if (q = e.getStrokedBBox([k])) {
                                        V = q.x;
                                        aa = q.y
                                    }
                                if (u) {
                                    V = svgedit.units.convertUnit(V);
                                    aa = svgedit.units.convertUnit(aa)
                                }
                                a("#" + K + "_x").val(Math.round(V));
                                a("#" + K + "_y").val(Math.round(aa));
                                if (K === "polyline") {
                                    a("#path_x").val(Math.round(V));
                                    a("#path_y").val(Math.round(aa))
                                }["image", "text", "path", "g", "use"].indexOf(K) == -1 && a(".action_path_convert_selected").removeClass("disabled");
                                K === "path" && a(".action_path_selected").removeClass("disabled")
                            }
                            u =
                                null;
                            if (S === "a") {
                                u = e.getHref(k);
                                a("#g_panel").show()
                            }
                            if (k.parentNode.tagName === "a")
                                if (!a(k).siblings().length) {
                                    a("#a_panel").show();
                                    u = e.getHref(k.parentNode)
                                }
                            a("#tool_make_link, #tool_make_link").toggle(!u);
                            u && a("#link_url").val(u);
                            u = {
                                g: [],
                                a: [],
                                rect: ["rx", "width", "height", "x", "y"],
                                image: ["width", "height", "x", "y"],
                                circle: ["cx", "cy", "r"],
                                ellipse: ["cx", "cy", "rx", "ry"],
                                line: ["x1", "y1", "x2", "y2"],
                                text: ["x", "y"],
                                use: [],
                                path: []
                            };
                            var S = k.tagName;
                            a(k).data("gsvg") && a("#g_panel").show();
                            if (S == "path" || S == "polyline") a("#path_panel").show();
                            if (u[S]) {
                                u = u[S];
                                a("#" + S + "_panel").show();
                                S == "rect" ? a("#cornerRadiusLabel").show() : a("#cornerRadiusLabel").hide();
                                a.each(u, function(ea, ga) {
                                    var T = k.getAttribute(ga);
                                    if (curConfig.baseUnit !== "px" && k[ga]) T = svgedit.units.convertUnit(k[ga].baseVal.value);
                                    var qa = document.getElementById(S + "_" + ga);
                                    qa.value = Math.round(T) || 0;
                                    qa.getAttribute("data-cursor") === "true" && a.fn.dragInput.updateCursor(qa)
                                });
                                if (S == "text") {
                                    u = k.getAttribute("font-family");
                                    document.getElementById("font_family_dropdown").selectedIndex = 3;
                                    a("#text_panel").css("display",
                                        "inline");
                                    a("#tool_italic").toggleClass("active", e.getItalic());
                                    a("#tool_bold").toggleClass("active", e.getBold());
                                    a("#font_family").val(u);
                                    a("#font_size").val(k.getAttribute("font-size"));
                                    a("#text").val(k.textContent);
                                    a("#preview_font").text(u.split(",")[0].replace(/'/g, "")).css("font-family", u);
                                    e.addedNew && setTimeout(function() {
                                        a("#text").focus().select()
                                    }, 100)
                                } else if (S == "image") Sa(e.getHref(k));
                                else if (S === "g" || S === "use") {
                                    a("#container_panel").show();
                                    a(".action_group_selected").removeClass("disabled");
                                    e.getTitle()
                                }
                            }
                            I[(S === "g" ? "en" : "dis") + "ableContextMenuItems"]("#ungroup");
                            I[(S === "g" || !W ? "dis" : "en") + "ableContextMenuItems"]("#group")
                        }
                        if (W) {
                            a("#multiselected_panel").show();
                            a(".action_multi_selected").removeClass("disabled");
                            I.enableContextMenuItems("#group").disableContextMenuItems("#ungroup")
                        }
                        k || I.disableContextMenuItems("#delete,#cut,#copy,#group,#ungroup,#move_front,#move_up,#move_down,#move_back");
                        v.getUndoStackSize() > 0 ? a("#tool_undo").removeClass("disabled") : a("#tool_undo").addClass("disabled");
                        v.getRedoStackSize() > 0 ? a("#tool_redo").removeClass("disabled") : a("#tool_redo").addClass("disabled");
                        e.addedNew = false;
                        if (k && !E || W) {
                            a("#selLayerNames").removeAttr("disabled").val(n);
                            H.enableContextMenuItems("#delete,#cut,#copy,#move_front,#move_up,#move_down,#move_back")
                        }
                    }
                };
            a("#text").on("focus", function() {});
            a("#text").on("blur", function() {});
            e.bind("selected", function(k, n) {
                var q = e.getMode();
                q === "select" && la();
                if (q === "pathedit") return Ia();
                X = n.length == 1 || n[1] == null ? n[0] : null;
                n = n.filter(Boolean);
                W =
                    n.length >= 2 ? n : false;
                if (e.elementsAreSame(W)) X = W[0];
                if (X != null) {
                    a("#multiselected_panel").hide();
                    if (X != null) switch (X.tagName) {
                        case "use":
                            a(".context_panel").hide();
                            a("#use_panel").show();
                            break;
                        case "image":
                            a(".context_panel").hide();
                            a("#image_panel").show();
                            break;
                        case "foreignObject":
                            a(".context_panel").hide();
                            break;
                        case "g":
                        case "a":
                            q = null;
                            for (var u = X.getElementsByTagName("*"), E = 0, I = u.length; E < I; E++) {
                                var K = u[E].getAttribute("stroke-width");
                                if (E === 0) q = K;
                                else if (q !== K) q = null
                            }
                            a("#stroke_width").val(q ===
                                null ? "0" : q);
                            Ia();
                            break;
                        default:
                            a("#stroke_width").val(X.getAttribute("stroke-width") || 0);
                            q = X.getAttribute("stroke-dasharray") || "none";
                            a("option", "#stroke_style").removeAttr("selected");
                            a('#stroke_style option[value="' + q + '"]').attr("selected", "selected");
                            a("#stroke_style").trigger("change");
                            a.fn.dragInput.updateCursor(a("#stroke_width")[0]);
                            a.fn.dragInput.updateCursor(a("#blur")[0])
                    }
                    if (X != null) {
                        q = (X.getAttribute("opacity") || 1) * 100;
                        a("#group_opacity").val(q);
                        a.fn.dragInput.updateCursor(a("#group_opacity")[0])
                    }
                    W.length &&
                        a("#tools_top").addClass("multiselected")
                } else if (W.length) {
                    a(".context_panel").hide();
                    a("#tools_top").removeClass("multiselected");
                    a("#multiselected_panel").show()
                } else {
                    a(".context_panel").hide();
                    a("#canvas_panel").show();
                    a("#tools_top").removeClass("multiselected")
                }
                e.runExtensions("selectedChanged", {
                    elems: n,
                    selectedElement: X,
                    multiselected: W
                })
            });
            e.bind("transition", function(k, n) {
                var q = e.getMode(),
                    u = n[0];
                if (u) {
                    W = n.length >= 2 && n[1] != null ? n : null;
                    if (!W) switch (q) {
                        case "rotate":
                            q = e.getRotationAngle(u);
                            a("#angle").val(Math.round(q));
                            rotateCursor(q);
                            a("#tool_reorient").toggleClass("disabled", q == 0)
                    }
                    e.runExtensions("elementTransition", {
                        elems: n
                    })
                }
            });
            e.bind("changed", function(k, n) {
                var q = e.getMode();
                q === "select" && la();
                for (var u = 0; u < n.length; ++u) {
                    var E = n[u];
                    if (E && E.tagName === "svg") G();
                    else if (E && X && X.parentNode == null) X = E
                }
                b.show_save_warning = true;
                Ia();
                if (X && q === "select") {
                    b.paintBox.fill.update();
                    b.paintBox.stroke.update()
                }
                e.runExtensions("elementChanged", {
                    elems: n
                })
            });
            e.bind("saved", function(k, n) {
                b.show_save_warning =
                    false;
                n = '<?xml version="1.0"?>\n' + n;
                var q = navigator.userAgent;
                if (~q.indexOf("MSIE")) Eb(0, true);
                else {
                    var u = k.open("data:image/svg+xml;base64," + L.encode64(n)),
                        E = a.pref("save_notice_done");
                    if (E !== "all") {
                        var I = uiStrings.notification.saveFromBrowser.replace("%s", "SVG");
                        if (q.indexOf("Gecko/") !== -1)
                            if (n.indexOf("<defs") !== -1) {
                                I += "\n\n" + uiStrings.notification.defsFailOnSave;
                                a.pref("save_notice_done", "all");
                                E = "all"
                            } else a.pref("save_notice_done", "part");
                        else a.pref("save_notice_done", "all");
                        E !== "part" && u.alert(I)
                    }
                }
            });
            e.bind("exported", function(k, n) {
                var q = n.issues;
                a("#export_canvas").length || a("<canvas>", {
                    id: "export_canvas"
                }).hide().appendTo("body");
                var u = a("#export_canvas")[0];
                u.width = e.contentW;
                u.height = e.contentH;
                canvg(u, n.svg, {
                    renderCallback: function() {
                        var E = u.toDataURL("image/png");
                        U.location.href = E;
                        if (a.pref("export_notice_done") !== "all") {
                            E = uiStrings.notification.saveFromBrowser.replace("%s", "PNG");
                            if (q.length) E += "\n\n" + uiStrings.notification.noteTheseIssues + "\n \u2022 " + q.join("\n \u2022 ");
                            a.pref("export_notice_done",
                                "all");
                            U.alert(E)
                        }
                    }
                })
            });
            e.bind("zoomed", ia);
            e.bind("contextset", function(k, n) {
                var q = "";
                if (n) {
                    var u = "";
                    q = '<a href="#" data-root="y">' + e.getCurrentDrawing().getCurrentLayerName() + "</a>";
                    a(n).parentsUntil("#svgcontent > g").andSelf().each(function() {
                        if (this.id) {
                            u += " > " + this.id;
                            q += this !== n ? ' > <a href="#">' + this.id + "</a>" : " > " + this.id
                        }
                    });
                    ta = u
                } else ta = null;
                a("#cur_context_panel").toggle(!!n).html(q)
            });
            e.bind("extension_added", function(k, n) {
                function q() {
                    if (na) {
                        clearTimeout(na);
                        na = null
                    }
                    E || (na = setTimeout(function() {
                        E =
                            true;
                        Mb(s.iconsize)
                    }, 50))
                }
                var u = false,
                    E = false,
                    I = true,
                    K = function() {
                        if (n.callback && !u && I) {
                            u = true;
                            n.callback()
                        }
                    },
                    O = [];
                n.context_tools && a.each(n.context_tools, function(ga, T) {
                    var qa = T.container_id ? ' id="' + T.container_id + '"' : "",
                        va = a("#" + T.panel);
                    va.length || (va = a("<div>", {
                        id: T.panel
                    }).appendTo("#tools_top").hide());
                    switch (T.type) {
                        case "tool_button":
                            var za = '<div class="tool_button">' + T.id + "</div>",
                                Aa = a(za).appendTo(va);
                            T.events && a.each(T.events, function(La, jb) {
                                a(Aa).bind(La, jb)
                            });
                            break;
                        case "select":
                            za = "<label" +
                                qa + '><select id="' + T.id + '">';
                            a.each(T.options, function(La, jb) {
                                za += '<option value="' + La + '"' + (La == T.defval ? " selected" : "") + ">" + jb + "</option>"
                            });
                            za += "</select></label>";
                            var Oa = a(za).appendTo(va).find("select");
                            a.each(T.events, function(La, jb) {
                                a(Oa).bind(La, jb)
                            });
                            break;
                        case "button-select":
                            za = '<div id="' + T.id + '" class="dropdown toolset" title="' + T.title + '"><div id="cur_' + T.id + '" class="icon_label"></div><button></button></div>';
                            qa = a('<ul id="' + T.id + '_opts"></ul>').appendTo("#option_lists");
                            T.colnum && qa.addClass("optcols" +
                                T.colnum);
                            a(za).appendTo(va).children();
                            O.push({
                                elem: "#" + T.id,
                                list: "#" + T.id + "_opts",
                                title: T.title,
                                callback: T.events.change,
                                cur: "#cur_" + T.id
                            });
                            break;
                        case "input":
                            za = "<label" + qa + '><span id="' + T.id + '_label">' + T.label + ':</span><input id="' + T.id + '" title="' + T.title + '" size="' + (T.size || "4") + '" value="' + (T.defval || "") + '" type="text"/></label>';
                            var Pa = a(za).appendTo(va).find("input");
                            T.spindata && Pa.SpinButton(T.spindata);
                            T.events && a.each(T.events, function(La, jb) {
                                Pa.bind(La, jb)
                            })
                    }
                });
                if (n.buttons) {
                    var V = {},
                        aa = {},
                        S = n.svgicons,
                        ea = {};
                    a.each(n.buttons, function(ga, T) {
                        for (var qa, va = T.id, za = ga; a("#" + va).length;) va = T.id + "_" + ++za;
                        if (S) {
                            V[va] = T.icon;
                            za = T.svgicon ? T.svgicon : T.id;
                            if (T.type == "app_menu") aa["#" + va + " > div"] = za;
                            else aa["#" + va] = za
                        } else qa = T.type == "menu" ? "" : a('<img src="' + T.icon + '">');
                        var Aa, Oa;
                        switch (T.type) {
                            case "mode_flyout":
                            case "mode":
                                Aa = "tool_button";
                                if (T.cls) Aa += " " + T.cls;
                                Oa = "#tools_left";
                                break;
                            case "context":
                                Aa = "tool_button";
                                Oa = "#" + T.panel;
                                a(Oa).length || a("<div>", {
                                    id: T.panel
                                }).appendTo("#tools_top");
                                break;
                            case "menu":
                                Aa = "menu_item tool_button";
                                Oa = "#" + (T.after || T.panel);
                                break;
                            case "app_menu":
                                Aa = "";
                                Oa = T.parent || "#main_menu ul";
                                a(Oa).length || a("<div>", {
                                    id: T.panel
                                }).appendTo("#tools_top")
                        }
                        var Pa = a(T.list || T.type == "app_menu" ? "<li/>" : "<div/>").attr("id", va).attr("title", T.title).addClass(Aa);
                        if (!T.includeWith && !T.list) {
                            if ("position" in T) a(Oa).children().eq(T.position).before(Pa);
                            else T.type != "menu" || !T.after ? Pa.appendTo(Oa) : a(Oa).after(Pa);
                            if (T.type == "mode_flyout") {
                                za = a(Pa);
                                Aa = za.parent();
                                if (!za.parent().hasClass("tools_flyout")) {
                                    var La =
                                        za[0].id.replace("tool_", "tools_"),
                                        jb = za.clone().attr("id", La + "_show").append(a("<div>", {
                                            "class": "flyout_arrow_horiz"
                                        }));
                                    za.before(jb);
                                    Aa = pa(La, za);
                                    Aa.data("isLibrary", true);
                                    jb.data("isLibrary", true)
                                }
                                aa["#" + La + "_show"] = T.id;
                                va = ea["#" + Aa[0].id] = [{
                                    sel: "#" + va,
                                    fn: T.events.click,
                                    icon: T.id,
                                    isDefault: true
                                }, ub]
                            } else if (T.type == "app_menu" || T.type == "menu") Pa.append(T.title)
                        } else if (T.list) {
                            Pa.addClass("push_button");
                            a("#" + T.list + "_opts").append(Pa);
                            if (T.isDefault) {
                                a("#cur_" + T.list).append(Pa.children().clone());
                                za = T.svgicon ? T.svgicon : T.id;
                                aa["#cur_" + T.list] = za
                            }
                        } else if (T.includeWith) {
                            Oa = T.includeWith;
                            za = a(Oa.button);
                            Aa = za.parent();
                            if (!za.parent().hasClass("tools_flyout")) {
                                La = za[0].id.replace("tool_", "tools_");
                                jb = za.clone().attr("id", La + "_show").append(a("<div>", {
                                    "class": "flyout_arrow_horiz"
                                }));
                                za.before(jb);
                                Aa = pa(La, za)
                            }
                            var ub = B.getButtonData(Oa.button);
                            if (Oa.isDefault) aa["#" + La + "_show"] = T.id;
                            va = ea["#" + Aa[0].id] = [{
                                sel: "#" + va,
                                fn: T.events.click,
                                icon: T.id,
                                key: T.key,
                                isDefault: T.includeWith ? T.includeWith.isDefault : 0
                            }, ub];
                            La = "position" in Oa ? Oa.position : "last";
                            ub = Aa.children().length;
                            if (!isNaN(La) && La >= 0 && La < ub) Aa.children().eq(La).before(Pa);
                            else {
                                Aa.append(Pa);
                                va.reverse()
                            }
                        }
                        S || Pa.append(qa);
                        T.list || a.each(T.events, function(Cb, Jb) {
                            if (Cb == "click")
                                if (T.type == "mode") {
                                    T.includeWith ? Pa.bind(Cb, Jb) : Pa.bind(Cb, function() {
                                        ra(Pa) && Jb()
                                    });
                                    if (T.key) {
                                        a(document).bind("keydown", T.key, Jb);
                                        T.title && Pa.attr("title", T.title + " [" + T.key + "]")
                                    }
                                } else Pa.bind(Cb, Jb);
                            else Pa.bind(Cb, Jb)
                        });
                        da(ea)
                    });
                    a.each(O, function() {
                        vb(this.elem, this.list,
                            this.callback, {
                                seticon: true
                            })
                    });
                    if (S) I = false;
                    a.svgIcons(S, {
                        w: 27,
                        h: 27,
                        id_match: false,
                        no_img: !p,
                        fallback: V,
                        placement: aa,
                        callback: function() {
                            s.iconsize && s.iconsize != "m" && q();
                            I = true;
                            K()
                        }
                    })
                }
                K()
            });
            e.textActions.setInputElem(a("#text")[0]);
            var Ka = '<div class="palette_item transparent" data-rgb="none"></div>                <div class="palette_item black" data-rgb="#000000"></div>                <div class="palette_item white" data-rgb="#ffffff"></div>';
            ["#444444", "#482816", "#422C10", "#3B2F0E", "#32320F", "#293414",
                "#1F361B", "#153723", "#0C372C", "#083734", "#0E353B", "#1A333F", "#273141", "#332D40", "#3E2A3C", "#462735", "#4B252D", "#4D2425", "#4C261D", "#666666", "#845335", "#7B572D", "#6F5C2A", "#62612C", "#546433", "#46673D", "#396849", "#306856", "#2D6862", "#33666C", "#426373", "#535F75", "#645A73", "#74556D", "#805064", "#884D58", "#8B4D4B", "#894F3F", "#999999", "#C48157", "#B8874D", "#A98E49", "#97944B", "#849854", "#729C62", "#619E73", "#559E84", "#529D94", "#5B9BA2", "#6D97AB", "#8391AE", "#9A8AAB", "#AF84A3", "#BF7E96", "#C97A86", "#CE7975", "#CC7C65",
                "#BBBBBB", "#FFB27C", "#FABA6F", "#E6C36A", "#CFCA6D", "#B8D078", "#A0D58A", "#8CD79F", "#7DD8B5", "#7AD6CA", "#84D3DB", "#9ACEE6", "#B6C7EA", "#D3BEE7", "#EDB6DC", "#FFAFCC", "#FFAAB8", "#FFA9A2", "#FFAC8D", "#DDDDDD", "#FFE7A2", "#FFF093", "#FFFA8D", "#FFFF91", "#EEFF9F", "#D1FFB4", "#B9FFCE", "#A8FFE9", "#A4FFFF", "#B1FFFF", "#CBFFFF", "#EDFFFF", "#FFF5FF", "#FFEBFF", "#FFE2FF", "#FFDCEC", "#FFDBD2", "#FFDFB8"
            ].forEach(function(k) {
                Ka += '<div class="palette_item" style="background-color: ' + k + ';" data-rgb="' + k + '"></div>'
            });
            a("#palette").append(Ka);
            var Ba = a("#tool_angle_indicator");
            a("#tool_reorient");
            rotateCursor = function(k) {
                k = "rotate(" + k + "deg)";
                Ba.css({
                    "-webkit-transform": k,
                    "-moz-transform": k,
                    "-o-transform": k,
                    "-ms-transform": k,
                    transform: k
                })
            };
            var xa = function(k) {
                var n = k.value / 100;
                if (n < 0.001) k.value = 0.1;
                else {
                    k = e.getZoom();
                    var q = J;
                    ia(window, {
                        width: 0,
                        height: 0,
                        x: (q[0].scrollLeft + q.width() / 2) / k,
                        y: (q[0].scrollTop + q.height() / 2) / k,
                        zoom: n
                    }, true)
                }
            };
            a("#stroke_style").change(function() {
                e.setStrokeAttr("stroke-dasharray", a(this).val());
                a("#stroke_style_label").html(this.options[this.selectedIndex].text);
                window.opera && a("<p/>").hide().appendTo("body").remove()
            });
            a("#seg_type").change(function() {
                e.setSegType(a(this).val());
                a("#seg_type_label").html(this.options[this.selectedIndex].text)
            });
            a("select").change(function() {
                a(this).blur()
            });
            a("#font_family").change(function() {
                e.setFontFamily(this.value)
            });
            a("#text").keyup(function() {
                e.setTextContent(this.value)
            });
            changeAttribute = function(k) {
                var n = k.getAttribute("data-attr"),
                    q = k.getAttribute("data-multiplier") || 1;
                q = parseFloat(q);
                q = k.value * q;
                if (!svgedit.units.isValidUnit(n,
                        q, X)) {
                    a.alert(uiStrings.notification.invalidAttrValGiven);
                    k.value = X.getAttribute(n);
                    return false
                }
                e.changeSelectedAttributeNoUndo(n, q)
            };
            picking = false;
            a(document).on("mouseup", function() {
                picking = false
            });
            a("#palette").on("mousemove mousedown touchstart touchmove", ".palette_item", function(k) {
                k.preventDefault();
                if (k.type == "mousedown") picking = true;
                if (picking) {
                    var n = a("#tool_stroke").hasClass("active"),
                        q = n ? "stroke" : "fill",
                        u = a(this).attr("data-rgb"),
                        E = null,
                        I = true;
                    if (k.type == "mousedown") I = false;
                    if (u === "transparent" ||
                        u === "initial" || u === "#none") {
                        u = "none";
                        E = new a.jGraduate.Paint
                    } else E = new a.jGraduate.Paint({
                        alpha: 100,
                        solidColor: u.substr(1)
                    });
                    b.paintBox[q].setPaint(E);
                    if (n) {
                        e.setColor("stroke", u, I);
                        u != "none" && e.getStrokeOpacity() != 1 && e.setPaintOpacity("stroke", 1)
                    } else {
                        e.setColor("fill", u, I);
                        u != "none" && e.getFillOpacity() != 1 && e.setPaintOpacity("fill", 1)
                    }
                }
            }).bind("contextmenu", function(k) {
                k.preventDefault()
            });
            a("#toggle_stroke_tools").toggle(function() {
                a(".stroke_tool").css("display", "table-cell");
                a(this).addClass("expanded");
                Db()
            }, function() {
                a(".stroke_tool").css("display", "none");
                a(this).removeClass("expanded");
                Db()
            });
            var ra = function(k, n) {
                if (a(k).hasClass("disabled")) return false;
                if (a(k).parent().hasClass("tools_flyout")) return true;
                var q = q || "normal";
                n || a(".tools_flyout").fadeOut(q);
                a("#styleoverrides").text("");
                a(".tool_button_current").removeClass("tool_button_current").addClass("tool_button");
                a(k).addClass("tool_button_current").removeClass("tool_button");
                return true
            };
            (function() {
                var k = null,
                    n = null,
                    q = J[0],
                    u = false,
                    E = false;
                a("#svgcanvas").on("mousemove mouseup touchend", function(I) {
                    if (u !== false) {
                        q.scrollLeft -= I.clientX - k;
                        q.scrollTop -= I.clientY - n;
                        k = I.clientX;
                        n = I.clientY;
                        if (I.type === "mouseup" || I.type === "touchend") u = false;
                        return false
                    }
                }).on("mousedown touchmove", function(I) {
                    if (I.button === 1 || E === true || I.originalEvent.touches && I.originalEvent.touches.length >= 2) {
                        u = true;
                        k = I.clientX;
                        n = I.clientY;
                        return false
                    }
                });
                a(window).mouseup(function() {
                    u = false
                });
                a(document).bind("keydown", "space", function(I) {
                    I.preventDefault();
                    e.spaceKey =
                        E = true
                }).bind("keyup", "space", function(I) {
                    I.preventDefault();
                    e.spaceKey = E = false
                }).bind("keydown", "alt", function() {
                    e.getMode() === "zoom" && J.addClass("out")
                }).bind("keyup", "alt", function() {
                    e.getMode() === "zoom" && J.removeClass("out")
                })
            })();
            var wa = a(".menu"),
                kb = function(k) {
                    k.target.style.background = "#fff";
                    setTimeout(function() {
                        k.target.style.background = "#ddd"
                    }, 50);
                    setTimeout(function() {
                        k.target.style.background = "#fff"
                    }, 150);
                    setTimeout(function() {
                        k.target.style.background = "#ddd"
                    }, 200);
                    setTimeout(function() {
                        k.target.style.background =
                            ""
                    }, 200);
                    setTimeout(function() {
                        a("#menu_bar").removeClass("active")
                    }, 220);
                    return false
                };
            a(".menu_item").on("mousedown touchstart", function(k) {
                kb(k)
            });
            a("svg, body").on("mousedown  touchstart", function(k) {
                if (!(k.target.nodeName && k.target.nodeName.toLowerCase() === "input"))
                    if (!a(k.target).hasClass("menu_title") && !a(k.target).parent().hasClass("menu_title")) !a(k.target).hasClass("disabled") && a(k.target).hasClass("menu_item") ? kb(k) : a("#menu_bar").removeClass("active")
            });
            a("#workarea").on("mousewheel",
                function(k, n, q, u) {
                    if (k.altKey || k.ctrlKey) {
                        k.preventDefault();
                        zoom = parseInt(a("#zoom").val());
                        a("#zoom").val(parseInt(zoom + u * (k.altKey ? 10 : 5))).change()
                    }
                });
            a(".menu_title").on("mousedown", function() {
                a("#tools_shapelib").hide();
                a("#menu_bar").toggleClass("active");
                wa.removeClass("open");
                a(this).parent().addClass("open")
            }).on("mouseover", function() {
                wa.removeClass("open");
                a(this).parent().addClass("open")
            });
            b.addDropDown = function(k, n, q) {
                if (a(k).length != 0) {
                    var u = a(k).find("button"),
                        E = a(k).find("ul").attr("id",
                            a(k)[0].id + "-list");
                    q || a("#option_lists").append(E);
                    var I = false;
                    q && a(k).addClass("dropup");
                    E.find("li").bind("mouseup", n);
                    a(window).mouseup(function() {
                        if (!I) {
                            u.removeClass("down");
                            E.hide()
                        }
                        I = false
                    });
                    u.bind("mousedown", function() {
                        if (u.hasClass("down")) {
                            u.removeClass("down");
                            E.hide()
                        } else {
                            u.addClass("down");
                            if (!q) {
                                var K = a(k).offset();
                                E.css({
                                    top: K.top,
                                    left: K.left - 110
                                })
                            }
                            E.show();
                            I = true
                        }
                    }).hover(function() {
                        I = true
                    }).mouseout(function() {
                        I = false
                    })
                }
            };
            var vb = function(k, n, q, u) {
                var E = a(k);
                n = a(n);
                var I = false,
                    K = u.dropUp;
                K && a(k).addClass("dropup");
                n.find("li").bind("mouseup", function() {
                    if (u.seticon) {
                        zb("#cur_" + E[0].id, a(this).children());
                        a(this).addClass("current").siblings().removeClass("current")
                    }
                    q.apply(this, arguments)
                });
                a(window).mouseup(function() {
                    if (!I) {
                        E.removeClass("down");
                        n.hide();
                        n.css({
                            top: 0,
                            left: 0
                        })
                    }
                    I = false
                });
                n.height();
                a(k).bind("mousedown", function() {
                    var O = a(k).offset();
                    if (K) {
                        O.top -= n.height();
                        O.left += 8
                    } else O.top += a(k).height();
                    a(n).offset(O);
                    if (E.hasClass("down")) {
                        E.removeClass("down");
                        n.hide();
                        n.css({
                            top: 0,
                            left: 0
                        })
                    } else {
                        E.addClass("down");
                        n.show();
                        I = true;
                        return false
                    }
                }).hover(function() {
                    I = true
                }).mouseout(function() {
                    I = false
                });
                u.multiclick && n.mousedown(function() {
                    I = true
                })
            };
            a("#font_family_dropdown").change(function() {
                var k = this.options[this.selectedIndex].value,
                    n = this.options[this.selectedIndex].text;
                a("#preview_font").html(n).css("font-family", k);
                a("#font_family").val(k).change()
            });
            a("div", "#position_opts").each(function() {
                this.addEventListener("mouseup", function() {
                    var k = this.id.replace("tool_pos",
                        "").charAt(0);
                    e.alignSelectedElements(k, "page")
                })
            });
            (function() {
                var k, n = function() {
                    a(k).blur()
                };
                a("#svg_editor").find("button, select, input:not(#text)").focus(function() {
                    k = this;
                    N = "toolbars";
                    J.mousedown(n)
                }).blur(function() {
                    N = "canvas";
                    J.unbind("mousedown", n);
                    e.getMode() == "textedit" && a("#text").focus()
                })
            })();
            var cb = function() {
                    ra("#tool_select") && e.setMode("select")
                },
                Ta = function() {
                    ra("#tool_fhpath") && e.setMode("fhpath")
                },
                Va = function() {
                    ra("#tool_line") && e.setMode("line")
                },
                Da = function() {
                    ra("#tool_rect") &&
                        e.setMode("rect")
                },
                ua = function() {
                    ra("#tool_ellipse") && e.setMode("ellipse")
                },
                $a = function() {
                    ra("#tool_image") && e.setMode("image")
                },
                Ga = function() {
                    ra("#tool_zoom") && e.setMode("zoom")
                },
                Ra = function() {
                    if (ra("#tool_zoom")) {
                        yb();
                        la()
                    }
                },
                Ea = function() {
                    ra("#tool_text") && e.setMode("text")
                },
                db = function() {
                    ra("#tool_path") && e.setMode("path")
                },
                lb = function() {
                    if (X != null || W) e.deleteSelectedElements();
                    C.getNodePoint() && C.deletePathNode()
                },
                Ua = function() {
                    if (X != null || W) {
                        ya(a("#edit_menu"));
                        e.cutSelectedElements()
                    }
                },
                Xa = function() {
                    if (X !=
                        null || W) {
                        ya(a("#edit_menu"));
                        e.copySelectedElements()
                    }
                },
                wb = function() {
                    ya(a("#edit_menu"));
                    var k = e.getZoom(),
                        n = (J[0].scrollLeft + J.width() / 2) / k - e.contentW;
                    k = (J[0].scrollTop + J.height() / 2) / k - e.contentH;
                    e.pasteElements("point", n, k)
                },
                sa = function() {
                    if (X != null) {
                        ya(a("#object_menu"));
                        e.moveToTopSelectedElement()
                    }
                },
                hb = function() {
                    if (X != null) {
                        ya(a("#object_menu"));
                        e.moveToBottomSelectedElement()
                    }
                },
                eb = function() {
                    if (X != null) {
                        ya(a("#object_menu"));
                        e.moveUpDownSelected("Up")
                    }
                },
                sb = function() {
                    if (X != null) {
                        ya(a("#object_menu"));
                        e.moveUpDownSelected("Down")
                    }
                },
                ib = function(k) {
                    if (X != null) {
                        ya(a("#object_menu"));
                        e.moveUpDownSelected(k)
                    }
                },
                ab = function() {
                    if (X != null) {
                        e.convertToPath();
                        var k = e.getSelectedElems();
                        e.selectorManager.requestSelector(k[0]).reset(k[0]);
                        e.selectorManager.requestSelector(k[0]).selectorRect.setAttribute("display", "none");
                        e.setMode("pathedit");
                        C.toEditMode(k[0]);
                        e.clearSelection();
                        Ia()
                    }
                },
                ob = function() {
                    X != null && C.reorient()
                },
                pb = function() {
                    if (X != null || W) a.prompt(uiStrings.notification.enterNewLinkURL, "http://",
                        function(k) {
                            k && e.makeHyperlink(k)
                        })
                },
                fb = function(k, n) {
                    if (X != null || W) {
                        if (curConfig.gridSnapping) {
                            var q = e.getZoom() * curConfig.snappingStep;
                            k *= q;
                            n *= q
                        }
                        a("input").blur();
                        e.moveSelectedElements(k, n)
                    }
                },
                tb = function() {},
                ha = function() {
                    C.getNodePoint() && C.clonePathNode()
                },
                Y = function() {
                    C.getNodePoint() && C.deletePathNode()
                },
                ja = function() {
                    var k = a("#tool_add_subpath"),
                        n = !k.hasClass("push_button_pressed");
                    n ? k.addClass("push_button_pressed").removeClass("tool_button") : k.removeClass("push_button_pressed").addClass("tool_button");
                    C.addSubPath(n)
                },
                M = function() {
                    C.opencloseSubPath()
                },
                P = function() {
                    e.cycleElement(1)
                },
                ba = function() {
                    e.cycleElement(0)
                },
                Ca = function(k, n) {
                    if (!(X == null || W)) {
                        k || (n *= -1);
                        var q = a("#angle").val() * 1 + n;
                        e.setRotationAngle(q);
                        Ia()
                    }
                },
                Ma = function() {
                    var k = curConfig.dimensions;
                    a.confirm(uiStrings.notification.QwantToClear, function(n) {
                        if (n) {
                            la();
                            e.clear();
                            e.setResolution(k[0], k[1]);
                            G(true);
                            yb();
                            Ia();
                            ka();
                            e.runExtensions("onNewDocument")
                        }
                    })
                },
                Wa = function() {
                    e.setBold(!e.getBold());
                    Ia()
                },
                Za = function() {
                    e.setItalic(!e.getItalic());
                    Ia()
                },
                nb = function() {
                    if (!c.pngsave) {
                        var k = uiStrings.notification.loadingImage;
                        U = window.open("data:text/html;charset=utf-8,<title>" + k + "</title><h1>" + k + "</h1>")
                    }
                    window.canvg ? e.rasterExport() : a.getScript("canvg/rgbcolor.js", function() {
                        a.getScript("canvg/canvg.js", function() {
                            e.rasterExport()
                        })
                    })
                },
                Qa = function() {
                    e.open()
                },
                mb = function() {},
                ya = function(k) {
                    var n = k.prev();
                    n.css({
                        background: "white",
                        color: "black"
                    });
                    setTimeout(function() {
                        n.removeAttr("style")
                    }, 200)
                },
                qb = function() {
                    if (v.getUndoStackSize() > 0) {
                        ya(a("#edit_menu"));
                        v.undo()
                    }
                },
                rb = function() {
                    if (v.getRedoStackSize() > 0) {
                        ya(a("#edit_menu"));
                        v.redo()
                    }
                },
                Bb = function() {
                    if (W) {
                        ya(a("#object_menu"));
                        e.groupSelectedElements()
                    } else if (X) {
                        ya(a("#object_menu"));
                        e.ungroupSelectedElement()
                    }
                },
                Fb = function() {
                    ya(a("#edit_menu"));
                    e.cloneSelectedElements(20, 20)
                },
                bb = function() {
                    var k = this.id.replace("tool_align", "").charAt(0);
                    e.alignSelectedElements(k, a("#align_relative_to").val())
                },
                Ha = function() {
                    var k = document.querySelector("#tool_stroke rect");
                    a("#tool_stroke").toggleClass("active");
                    a("#tool_fill").toggleClass("active");
                    var n = document.querySelector("#tool_fill rect"),
                        q = n.getAttribute("fill"),
                        u = k.getAttribute("fill");
                    k = parseFloat(k.getAttribute("stroke-opacity"));
                    if (isNaN(k)) k = 100;
                    n = parseFloat(n.getAttribute("fill-opacity"));
                    if (isNaN(n)) n = 100;
                    u = Ja(u, k, "stroke");
                    q = Ja(q, n, "fill");
                    b.paintBox.fill.setPaint(u, true);
                    b.paintBox.stroke.setPaint(q, true)
                },
                yb = function(k) {
                    var n = e.getResolution();
                    k = k ? n.zoom * k : 1;
                    a("#zoom").val(k * 100);
                    e.setZoom(k);
                    xb();
                    G(true)
                },
                Hb = function() {
                    ya(a("#view_menu"));
                    !a("#tool_wireframe").hasClass("push_button_pressed") ? a("#tool_wireframe").addClass("push_button_pressed") : a("#tool_wireframe").removeClass("push_button_pressed");
                    J.toggleClass("wireframe");
                    if (!h) {
                        var k = a("#wireframe_rules");
                        k.length ? k.empty() : a('<style id="wireframe_rules"></style>').appendTo("head");
                        xb()
                    }
                },
                Gb = function() {
                    ya(a("#view_menu"));
                    var k = !a("#tool_snap").hasClass("push_button_pressed");
                    k ? a("#tool_snap").addClass("push_button_pressed") : a("#tool_snap").removeClass("push_button_pressed");
                    curConfig.gridSnapping =
                        k
                },
                Ib = function() {
                    window.self != window.top && top.exit_fullscreen()
                },
                Lb = function() {
                    ya(a("#view_menu"));
                    if (a("#tool_rulers").hasClass("push_button_pressed")) {
                        a("#tool_rulers").removeClass("push_button_pressed");
                        a("#show_rulers").attr("checked", false);
                        curConfig.showRulers = false
                    } else {
                        a("#tool_rulers").addClass("push_button_pressed");
                        a("#show_rulers").attr("checked", true);
                        curConfig.showRulers = true
                    }
                    a("#rulers").toggle(!!curConfig.showRulers)
                },
                xb = function() {
                    if (!h) {
                        var k = "#workarea.wireframe #svgcontent * { stroke-width: " +
                            1 / e.getZoom() + "px; }";
                        a("#wireframe_rules").text(J.hasClass("wireframe") ? k : "")
                    }
                },
                Eb = function(k, n) {
                    if (!fa) {
                        ya(a("#view_menu"));
                        fa = true;
                        a("#save_output_btns").toggle(!!n);
                        a("#tool_source_back").toggle(!n);
                        var q = ca = e.getSvgString();
                        a("#svg_source_textarea").val(q);
                        a("#svg_source_editor").fadeIn();
                        a("#svg_source_textarea").focus().select()
                    }
                },
                Kb = function() {
                    if (fa) {
                        if (e.setSvgString(a("#svg_source_textarea").val())) {
                            e.clearSelection();
                            Ya();
                            yb();
                            ka()
                        } else a.confirm(uiStrings.notification.QerrorsRevertToSource,
                            function(k) {
                                if (!k) return false;
                                e.clearSelection();
                                Ya();
                                yb();
                                ka()
                            });
                        la()
                    }
                },
                zb = b.setIcon = function(k, n) {
                    var q = typeof n === "string" ? a.getSvgIcon(n, true) : n.clone();
                    q ? a(k).find("img").replaceWith(q) : console.log("NOTE: Icon image missing: " + n)
                },
                gb;
            gb = function() {
                var k = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                    n = document.getElementsByTagName("script")[0],
                    q;
                for (q in n.style)
                    if (k.test(q)) return q.match(k)[0];
                if ("WebkitOpacity" in n.style) return "Webkit";
                if ("KhtmlOpacity" in n.style) return "Khtml";
                return ""
            }();
            var Nb =
                function(k, n) {
                    gb.toLowerCase();
                    var q = ["top", "left", "bottom", "right"];
                    k.each(function() {
                        for (var u = a(this), E = u.outerWidth() * (n - 1), I = u.outerHeight() * (n - 1), K = 0; K < 4; K++) {
                            var O = q[K],
                                V = u.data("orig_margin-" + O);
                            if (V == null) {
                                V = parseInt(u.css("margin-" + O));
                                u.data("orig_margin-" + O, V)
                            }
                            V = V * n;
                            if (O === "right") V += E;
                            else if (O === "bottom") V += I;
                            u.css("margin-" + O, V)
                        }
                    })
                },
                Mb = b.setIconSize = function(k, n) {
                    if (!(k == s.size && !n)) {
                        var q = a("#tools_top .toolset, #editor_panel > *, #history_panel > *,        #main_button, #tools_left > *, #path_node_panel > *, #multiselected_panel > *,        #g_panel > *, #tool_font_size > *, .tools_flyout"),
                            u = 1;
                        u = typeof k == "number" ? k : {
                            s: 0.75,
                            m: 1,
                            l: 1.25,
                            xl: 1.5
                        }[k];
                        b.tool_scale = R = u;
                        oa();
                        var E = q.parents(":hidden");
                        E.css("visibility", "hidden").show();
                        Nb(q, u);
                        E.css("visibility", "visible").hide();
                        q = a("#tool_size_rules");
                        if (q.length) q.empty();
                        else q = a('<style id="tool_size_rules"></style>').appendTo("head");
                        if (k != "m") {
                            var I = "";
                            a.each(cssResizeRules, function(K, O) {
                                K = "#svg_editor " + K.replace(/,/g, ", #svg_editor");
                                I += K + "{";
                                a.each(O, function(V, aa) {
                                    if (typeof aa === "number") var S = aa * u + "px";
                                    else if (aa[k] || aa.all) S =
                                        aa[k] || aa.all;
                                    I += V + ":" + S + ";"
                                });
                                I += "}"
                            });
                            E = "-" + gb.toLowerCase() + "-";
                            I += "#tools_top .toolset, #editor_panel > *, #history_panel > *,        #main_button, #tools_left > *, #path_node_panel > *, #multiselected_panel > *,        #g_panel > *, #tool_font_size > *, .tools_flyout{" + E + "transform: scale(" + u + ");} #svg_editor div.toolset .toolset {" + E + "transform: scale(1); margin: 1px !important;} #svg_editor .ui-slider {" + E + "transform: scale(" + 1 / u + ");}";
                            q.text(I)
                        }
                        oa()
                    }
                },
                Ab = function() {
                    a("#dialog_box").hide();
                    if (fa) {
                        if (fa) ca !== a("#svg_source_textarea").val() ? a.confirm(uiStrings.notification.QignoreSourceChanges, function(k) {
                            k && Ya()
                        }) : Ya();
                        Db()
                    } else ta && e.leaveContext()
                },
                Ya = function() {
                    a("#svg_source_editor").hide();
                    fa = false;
                    a("#svg_source_textarea").blur()
                };
            a(window).width();
            a(window).height();
            var Db = a.noop;
            a(window).resize(function() {
                G()
            });
            (function() {
                J.scroll(function() {
                    if (a("#ruler_x").length != 0) a("#ruler_x")[0].scrollLeft = J[0].scrollLeft;
                    if (a("#ruler_y").length != 0) a("#ruler_y")[0].scrollTop = J[0].scrollTop
                })
            })();
            a("#url_notice").click(function() {
                a.alert(this.title)
            });
            a("#change_image_url").click(function() {
                var k = e.getHref(X);
                k = k.indexOf("data:") === 0 ? "" : k;
                a.prompt(uiStrings.notification.enterNewImgURL, k, function(n) {
                    n && Sa(n)
                })
            });
            var f = function(k) {
                var n = k[0].id == "stroke_color" ? "stroke" : "fill",
                    q = k[0].id == "canvas_color";
                if (q) n = "canvas";
                var u = b.paintBox[n].paint;
                k = n == "stroke" ? "Pick a Stroke Paint and Opacity" : "Pick a Fill Paint and Opacity";
                q = q ? {
                    right: 175,
                    top: 50
                } : {
                    left: 50,
                    bottom: 50
                };
                a("#color_picker").draggable({
                    cancel: ".jGraduate_tabs, .jGraduate_colPick, .jGraduate_gradPick, .jPicker",
                    containment: "window"
                }).removeAttr("style").css(q).jGraduate({
                    paint: u,
                    window: {
                        pickerTitle: k
                    },
                    images: {
                        clientPath: curConfig.jGraduatePath
                    },
                    newstop: "inverse"
                }, function(E) {
                    u = new a.jGraduate.Paint(E);
                    b.paintBox[n].setPaint(u);
                    e.setPaint(n, u);
                    a("#color_picker").hide()
                }, function() {
                    a("#color_picker").hide()
                })
            };
            d = function(k, n) {
                var q = document.getElementById("canvas_background"),
                    u = {
                        color: "fff",
                        opacity: 1
                    };
                if (n == "stroke") u = curConfig.initStroke;
                if (n == "fill") u = curConfig.initFill;
                if (n == "canvas" && q)
                    if (q = q.getAttribute("fill").match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)) u = {
                        color: ("0" + parseInt(q[1], 10).toString(16)).slice(-2) + ("0" + parseInt(q[2], 10).toString(16)).slice(-2) + ("0" + parseInt(q[3], 10).toString(16)).slice(-2),
                        opacity: 1
                    };
                q = (new DOMParser).parseFromString('<svg xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%"          fill="#' + u.color + '" opacity="' + u.opacity + '"/>          <defs><linearGradient id="gradbox_"/></defs></svg>', "text/xml").documentElement;
                q = a(k)[0].appendChild(document.importNode(q, true));
                n === "canvas" ? q.setAttribute("width", 60.5) :
                    q.setAttribute("width", "100%");
                this.rect = q.firstChild;
                this.defs = q.getElementsByTagName("defs")[0];
                this.grad = this.defs.firstChild;
                this.paint = new a.jGraduate.Paint({
                    solidColor: u.color
                });
                this.type = n;
                this.setPaint = function(E, I) {
                    this.paint = E;
                    var K = "none",
                        O = E.type,
                        V = E.alpha / 100;
                    switch (O) {
                        case "solidColor":
                            K = E[O] == "none" || E[O] == "one" ? "none" : "#" + E[O];
                            break;
                        case "linearGradient":
                        case "radialGradient":
                            this.defs.removeChild(this.grad);
                            this.grad = this.defs.appendChild(E[O]);
                            K = "url(#" + (this.grad.id = "gradbox_" +
                                this.type) + ")"
                    }
                    this.rect.setAttribute("fill", K);
                    this.rect.setAttribute("opacity", V);
                    if (this.type == "canvas")
                        if (O = document.getElementById("canvas_background")) {
                            Fa = e.getResolution();
                            O.setAttribute("x", -1);
                            O.setAttribute("y", -1);
                            O.setAttribute("width", Fa.w + 2);
                            O.setAttribute("height", Fa.h + 2);
                            K.indexOf("url") == -1 && O.setAttribute("fill", K)
                        } else Na(K);
                    if (I) {
                        e.setColor(this.type, K, true);
                        e.setPaintOpacity(this.type, V, true)
                    }
                };
                this.update = function(E) {
                    if (X) {
                        var I = this.type;
                        switch (X.tagName) {
                            case "use":
                            case "image":
                            case "foreignObject":
                                return;
                            case "g":
                            case "a":
                                for (var K = null, O = X.getElementsByTagName("*"), V = 0, aa = O.length; V < aa; V++) {
                                    var S = O[V].getAttribute(I);
                                    if (V === 0) K = S;
                                    else if (K !== S) {
                                        K = null;
                                        break
                                    }
                                }
                                if (K === null) {
                                    O = null;
                                    return
                                }
                                O = K;
                                K = 1;
                                break;
                            default:
                                K = parseFloat(X.getAttribute(I + "-opacity"));
                                if (isNaN(K)) K = 1;
                                O = I === "fill" ? "black" : "none";
                                O = X.getAttribute(I) || O
                        }
                        if (E) {
                            e.setColor(I, O, true);
                            e.setPaintOpacity(I, K, true)
                        }
                        K *= 100;
                        this.setPaint(Ja(O, K, I))
                    }
                };
                this.prep = function() {
                    switch (this.paint.type) {
                        case "linearGradient":
                        case "radialGradient":
                            var E =
                                new a.jGraduate.Paint({
                                    copy: this.paint
                                });
                            e.setPaint(n, E)
                    }
                }
            };
            b.paintBox.fill = new d("#fill_color", "fill");
            b.paintBox.stroke = new d("#stroke_color", "stroke");
            b.paintBox.canvas = new d("#canvas_color", "canvas");
            a("#stroke_width").val(curConfig.initStroke.width);
            a("#group_opacity").val(curConfig.initOpacity * 100);
            d = b.paintBox.fill.rect.cloneNode(false);
            d.setAttribute("style", "vector-effect:non-scaling-stroke");
            var h = d.style.vectorEffect === "non-scaling-stroke";
            d.removeAttribute("style");
            d = b.paintBox.fill.rect.ownerDocument.createElementNS("http://www.w3.org/2000/svg",
                "feGaussianBlur");
            typeof d.stdDeviationX === "undefined" && a("#tool_blur").hide();
            a(d).remove();
            setTimeout(function() {
                e.embedImage("images/placeholder.svg", function(k) {
                    if (!k) {
                        a("#image_save_opts [value=embed]").attr("disabled", "disabled");
                        a("#image_save_opts input").val(["ref"]);
                        s.img_save = "ref";
                        a("#image_opt_embed").css("color", "#666").attr("title", uiStrings.notification.featNotSupported)
                    }
                })
            }, 1E3);
            a("#tool_fill").click(function() {
                if (a("#tool_fill").hasClass("active")) f(a("#fill_color"));
                else {
                    a("#tool_fill").addClass("active");
                    a("#tool_stroke").removeClass("active")
                }
            });
            a("#tool_stroke").on("click", function() {
                if (a("#tool_stroke").hasClass("active")) f(a("#stroke_color"));
                else {
                    a("#tool_stroke").addClass("active");
                    a("#tool_fill").removeClass("active")
                }
            });
            a("#tool_canvas").on("click touchstart", function() {
                f(a("#canvas_color"))
            });
            a("#tool_stroke").on("touchstart", function() {
                a("#tool_stroke").addClass("active");
                a("#tool_fill").removeClass("active");
                f(a("#stroke_color"))
            });
            a("#tool_fill").on("touchstart", function() {
                a("#tool_fill").addClass("active");
                a("#tool_stroke").removeClass("active");
                f(a("#fill_color"))
            });
            a("#zoom_select").on("change", function() {
                var k = this.options[this.selectedIndex].text;
                k = k.split("%")[0];
                a("#zoom").val(k).trigger("change")
            });
            a(".push_button").mousedown(function() {
                a(this).hasClass("disabled") || a(this).addClass("push_button_pressed").removeClass("push_button")
            }).mouseout(function() {
                a(this).removeClass("push_button_pressed").addClass("push_button")
            }).mouseup(function() {
                a(this).removeClass("push_button_pressed").addClass("push_button")
            });
            a(window).bind("load resize", function() {
                J.css("line-height", J.height() + "px")
            });
            var m = function() {
                var k = a("#canvas_width"),
                    n = a("#canvas_height"),
                    q = k.val(),
                    u = n.val();
                if (q != "fit" && !svgedit.units.isValidUnit("width", q)) {
                    a.alert(uiStrings.notification.invalidAttrValGiven);
                    k.parent().addClass("error");
                    return false
                }
                k.parent().removeClass("error");
                if (u != "fit" && !svgedit.units.isValidUnit("height", u)) {
                    a.alert(uiStrings.notification.invalidAttrValGiven);
                    n.parent().addClass("error");
                    return false
                }
                n.parent().removeClass("error");
                if (!e.setResolution(q, u)) {
                    a.alert(uiStrings.notification.noContentToFitTo);
                    q = e.getResolution();
                    k.val(q.w);
                    n.val(q.h);
                    return false
                }
                G()
            };
            a("#resolution").change(function() {
                var k = a("#canvas_width")[0],
                    n = a("#canvas_height")[0];
                if (this.selectedIndex)
                    if (this.value == "content") {
                        k.value = "fit";
                        n.value = "fit";
                        m();
                        var q = e.getResolution();
                        k.value = q.w;
                        n.value = q.h
                    } else {
                        var u = this.value.split("x");
                        u[0] = parseInt(u[0]);
                        u[1] = parseInt(u[1]);
                        var E = u[0] - k.value,
                            I = u[1] - n.value,
                            K = Date.now(),
                            O = function() {
                                var V = (Date.now() -
                                    K) / 1E3;
                                V = Math.pow(V - 1, 3) + 1;
                                k.value = (u[0] - E + V * E).toFixed(0);
                                n.value = (u[1] - I + V * I).toFixed(0);
                                m();
                                if (V >= 1) {
                                    V = e.getResolution();
                                    a("#canvas_width").val(V.w.toFixed());
                                    a("#canvas_height").val(V.h.toFixed());
                                    a("#resolution_label").html("<div class='pull'>" + V.w + "<span>\u00d7</span></br>" + V.h + "</div>")
                                } else requestAnimationFrame(O)
                            };
                        O()
                    }
                else {
                    a("#resolution_label").html("Custom");
                    k.removeAttribute("readonly");
                    k.focus();
                    k.select();
                    if (k.value == "fit") {
                        k.value = 100;
                        n.value = 100
                    }
                }
            });
            a("#zoom").change(function() {
                xa(this)
            });
            a("input,select").attr("autocomplete", "off");
            var B = function() {
                var k = [{
                            sel: "#tool_select",
                            fn: cb,
                            evt: "click",
                            key: ["V", true]
                        }, {
                            sel: "#tool_fhpath",
                            fn: Ta,
                            evt: "click",
                            key: ["Q", true]
                        }, {
                            sel: "#tool_line",
                            fn: Va,
                            evt: "click",
                            key: ["L", true]
                        }, {
                            sel: "#tool_rect",
                            fn: Da,
                            evt: "click",
                            key: ["R", true],
                            icon: "rect"
                        }, {
                            sel: "#tool_ellipse",
                            fn: ua,
                            evt: "mouseup",
                            key: ["C", true],
                            icon: "ellipse"
                        }, {
                            sel: "#tool_path",
                            fn: db,
                            evt: "click",
                            key: ["P", true]
                        }, {
                            sel: "#tool_text",
                            fn: Ea,
                            evt: "click",
                            key: ["T", true]
                        }, {
                            sel: "#tool_image",
                            fn: $a,
                            evt: "mouseup"
                        },
                        {
                            sel: "#tool_zoom",
                            fn: Ga,
                            evt: "mouseup",
                            key: ["Z", true]
                        }, {
                            sel: "#tool_clear",
                            fn: Ma,
                            evt: "mouseup",
                            key: [w + "N", true]
                        }, {
                            sel: "#tool_save",
                            fn: function() {
                                if (fa) Kb();
                                else {
                                    ya(a("#file_menu"));
                                    e.save({
                                        images: s.img_save,
                                        round_digits: 6
                                    })
                                }
                            },
                            evt: "mouseup",
                            key: [w + "S", true]
                        }, {
                            sel: "#tool_export",
                            fn: nb,
                            evt: "mouseup"
                        }, {
                            sel: "#tool_open",
                            fn: Qa,
                            evt: "mouseup"
                        }, {
                            sel: "#tool_import",
                            fn: mb,
                            evt: "mouseup"
                        }, {
                            sel: "#tool_source",
                            fn: Eb,
                            evt: "click",
                            key: [w + "U", true]
                        }, {
                            sel: "#tool_wireframe",
                            fn: Hb,
                            evt: "click"
                        }, {
                            sel: "#tool_snap",
                            fn: Gb,
                            evt: "click"
                        },
                        {
                            sel: "#tool_rulers",
                            fn: Lb,
                            evt: "click"
                        }, {
                            sel: "#tool_source_cancel,#svg_source_overlay,#tool_docprops_cancel,#tool_prefs_cancel",
                            fn: Ab,
                            evt: "click",
                            key: ["esc", false, false],
                            hidekey: true
                        }, {
                            sel: "#tool_source_save",
                            fn: Kb,
                            evt: "click"
                        }, {
                            sel: "#tool_delete,#tool_delete_multi",
                            fn: lb,
                            evt: "click",
                            key: ["del/backspace", true]
                        }, {
                            sel: "#tool_reorient",
                            fn: ob,
                            evt: "click"
                        }, {
                            sel: "#tool_node_link",
                            fn: tb,
                            evt: "change"
                        }, {
                            sel: "#tool_node_clone",
                            fn: ha,
                            evt: "click"
                        }, {
                            sel: "#tool_node_delete",
                            fn: Y,
                            evt: "click"
                        }, {
                            sel: "#tool_openclose_path",
                            fn: M,
                            evt: "click"
                        }, {
                            sel: "#tool_add_subpath",
                            fn: ja,
                            evt: "click"
                        }, {
                            sel: "#tool_move_top",
                            fn: sa,
                            evt: "click",
                            key: w + "shift+up"
                        }, {
                            sel: "#tool_move_bottom",
                            fn: hb,
                            evt: "click",
                            key: w + "shift+down"
                        }, {
                            sel: "#tool_move_up",
                            fn: eb,
                            evt: "click",
                            key: [w + "up", true]
                        }, {
                            sel: "#tool_move_down",
                            fn: sb,
                            evt: "click",
                            key: [w + "down", true]
                        }, {
                            sel: "#tool_topath",
                            fn: ab,
                            evt: "click"
                        }, {
                            sel: "#tool_make_link,#tool_make_link_multi",
                            fn: pb,
                            evt: "click"
                        }, {
                            sel: "#tool_clone,#tool_clone_multi",
                            fn: Fb,
                            evt: "click",
                            key: [w + "D", true]
                        }, {
                            sel: "#tool_group",
                            fn: Bb,
                            evt: "click",
                            key: [w + "G", true]
                        }, {
                            sel: "#tool_ungroup",
                            fn: Bb,
                            evt: "click",
                            key: w + "shift+G"
                        }, {
                            sel: "#tool_unlink_use",
                            fn: Bb,
                            evt: "click"
                        }, {
                            sel: "[id^=tool_align]",
                            fn: bb,
                            evt: "click"
                        }, {
                            sel: "#tool_undo",
                            fn: qb,
                            evt: "click",
                            key: w + "z"
                        }, {
                            sel: "#tool_redo",
                            fn: rb,
                            evt: "click",
                            key: ["y", true]
                        }, {
                            sel: "#tool_cut",
                            fn: Ua,
                            evt: "click",
                            key: [w + "x", true]
                        }, {
                            sel: "#tool_copy",
                            fn: Xa,
                            evt: "click",
                            key: w + "c"
                        }, {
                            sel: "#tool_paste",
                            fn: wb,
                            evt: "click",
                            key: w + "v"
                        }, {
                            sel: "#tool_switch",
                            fn: Ha,
                            evt: "click",
                            key: ["x", true]
                        }, {
                            sel: "#tool_bold",
                            fn: Wa,
                            evt: "mousedown",
                            key: [w + "B", true]
                        }, {
                            sel: "#tool_italic",
                            fn: Za,
                            evt: "mousedown",
                            key: [w + "I", true]
                        }, {
                            sel: "#copy_save_done",
                            fn: Ab,
                            evt: "click"
                        }, {
                            key: "ctrl+left",
                            fn: function() {
                                Ca(0, 1)
                            }
                        }, {
                            key: "ctrl+right",
                            fn: function() {
                                Ca(1, 1)
                            }
                        }, {
                            key: "ctrl+shift+left",
                            fn: function() {
                                Ca(0, 5)
                            }
                        }, {
                            key: "ctrl+shift+right",
                            fn: function() {
                                Ca(1, 5)
                            }
                        }, {
                            key: "shift+O",
                            fn: ba
                        }, {
                            key: "shift+P",
                            fn: P
                        }, {
                            key: [w + "+", true],
                            fn: function() {
                                yb(2)
                            }
                        }, {
                            key: [w + "-", true],
                            fn: function() {
                                yb(0.5)
                            }
                        }, {
                            key: ["up", true],
                            fn: function() {
                                fb(0, -1)
                            }
                        }, {
                            key: ["down", true],
                            fn: function() {
                                fb(0,
                                    1)
                            }
                        }, {
                            key: ["left", true],
                            fn: function() {
                                fb(-1, 0)
                            }
                        }, {
                            key: ["right", true],
                            fn: function() {
                                fb(1, 0)
                            }
                        }, {
                            key: "shift+up",
                            fn: function() {
                                fb(0, -10)
                            }
                        }, {
                            key: "shift+down",
                            fn: function() {
                                fb(0, 10)
                            }
                        }, {
                            key: "shift+left",
                            fn: function() {
                                fb(-10, 0)
                            }
                        }, {
                            key: "shift+right",
                            fn: function() {
                                fb(10, 0)
                            }
                        }, {
                            key: ["alt+up", true],
                            fn: function() {
                                e.cloneSelectedElements(0, -1)
                            }
                        }, {
                            key: ["alt+down", true],
                            fn: function() {
                                e.cloneSelectedElements(0, 1)
                            }
                        }, {
                            key: ["alt+left", true],
                            fn: function() {
                                e.cloneSelectedElements(-1, 0)
                            }
                        }, {
                            key: ["alt+right", true],
                            fn: function() {
                                e.cloneSelectedElements(1,
                                    0)
                            }
                        }, {
                            key: ["alt+shift+up", true],
                            fn: function() {
                                e.cloneSelectedElements(0, -10)
                            }
                        }, {
                            key: ["alt+shift+down", true],
                            fn: function() {
                                e.cloneSelectedElements(0, 10)
                            }
                        }, {
                            key: ["alt+shift+left", true],
                            fn: function() {
                                e.cloneSelectedElements(-10, 0)
                            }
                        }, {
                            key: ["alt+shift+right", true],
                            fn: function() {
                                e.cloneSelectedElements(10, 0)
                            }
                        }, {
                            key: w + "A",
                            fn: function() {
                                e.selectAllInCurrentLayer()
                            }
                        }, {
                            key: "I",
                            fn: function() {
                                var q = a(".tool_button_current");
                                if (q.length && q[0].id !== "tool_eyedropper") {
                                    q.removeClass("tool_button_current").addClass("tool_button");
                                    a("#tool_eyedropper").addClass("tool_button_current").removeClass("tool_button")
                                }
                                e.setMode("eyedropper")
                            }
                        }, {
                            key: w + "shift+z",
                            fn: rb
                        }, {
                            key: "esc",
                            fn: Ib
                        }
                    ],
                    n = {
                        "4/Shift+4": "#tools_rect_show",
                        "5/Shift+5": "#tools_ellipse_show"
                    };
                return {
                    setAll: function() {
                        var q = {};
                        a.each(k, function(u, E) {
                            if (E.sel) {
                                var I = a(E.sel);
                                if (I.length == 0) return true;
                                if (E.evt) {
                                    if (svgedit.browser.isTouch() && E.evt === "click") E.evt = "mousedown";
                                    I[E.evt](E.fn)
                                }
                                if (E.parent && a(E.parent + "_show").length != 0) {
                                    var K = a(E.parent);
                                    K.length || (K = pa(E.parent.substr(1)));
                                    K.append(I);
                                    a.isArray(q[E.parent]) || (q[E.parent] = []);
                                    q[E.parent].push(E)
                                }
                            }
                            if (E.key) {
                                var O = E.fn,
                                    V = false;
                                if (a.isArray(E.key)) {
                                    K = E.key[0];
                                    if (E.key.length > 1) V = E.key[1]
                                } else K = E.key;
                                K += "";
                                svgedit.browser.isMac && K.indexOf("+") != -1 && K.split("+")[0] == "ctrl" && K.replace("ctrl", "cmd");
                                a.each(K.split("/"), function(S, ea) {
                                    a(document).bind("keydown", ea, function(ga) {
                                        O();
                                        V && ga.preventDefault();
                                        return false
                                    })
                                });
                                if (E.sel && !E.hidekey && I.attr("title")) {
                                    var aa = I.attr("title").split("[")[0] + " (" + K + ")";
                                    n[K] = E.sel;
                                    I.parents("#main_menu").length ||
                                        I.attr("title", aa)
                                }
                            }
                        });
                        da(q);
                        a(window).bind("keydown", "tab", function(u) {
                            if (N === "canvas") {
                                u.preventDefault();
                                P()
                            }
                        }).bind("keydown", "shift+tab", function(u) {
                            if (N === "canvas") {
                                u.preventDefault();
                                ba()
                            }
                        });
                        a("#tool_zoom").dblclick(Ra)
                    },
                    setTitles: function() {
                        a.each(n, function(q, u) {
                            var E = a(u).parents("#main_menu").length;
                            a(u).each(function() {
                                var I = E ? a(this).text().split(" [")[0] : this.title.split(" [")[0],
                                    K = "";
                                a.each(q.split("/"), function(O, V) {
                                    var aa = V.split("+"),
                                        S = "";
                                    if (aa.length > 1) {
                                        S = aa[0] + "+";
                                        V = aa[1]
                                    }
                                    K += (O ?
                                        "/" : "") + S + (uiStrings["key_" + V] || V)
                                });
                                if (E) this.lastChild.textContent = I + " [" + K + "]";
                                else this.title = I + " [" + K + "]"
                            })
                        })
                    },
                    getButtonData: function(q) {
                        var u;
                        a.each(k, function(E, I) {
                            if (I.sel === q) u = I
                        });
                        return u
                    }
                }
            }();
            B.setAll();
            b.ready(function() {
                var k = curConfig.initTool,
                    n = a("#tools_left, #svg_editor .tools_flyout"),
                    q = n.find("#tool_" + k);
                k = n.find("#" + k);
                (q.length ? q : k.length ? k : a("#tool_select")).click().mouseup();
                curConfig.wireframe && a("#tool_wireframe").click();
                curConfig.showlayers && toggleSidePanel();
                a("#rulers").toggle(!!curConfig.showRulers)
            });
            a("#canvas_height").dragInput({
                min: 10,
                max: null,
                step: 10,
                callback: m,
                cursor: false,
                dragAdjust: 0.1
            });
            a("#canvas_width").dragInput({
                min: 10,
                max: null,
                step: 10,
                callback: m,
                cursor: false,
                dragAdjust: 0.1
            });
            a("#rect_width").dragInput({
                min: 1,
                max: null,
                step: 1,
                callback: changeAttribute,
                cursor: false
            });
            a("#rect_height").dragInput({
                min: 1,
                max: null,
                step: 1,
                callback: changeAttribute,
                cursor: false
            });
            a("#ellipse_cx").dragInput({
                min: 1,
                max: null,
                step: 1,
                callback: changeAttribute,
                cursor: false
            });
            a("#ellipse_cy").dragInput({
                min: 1,
                max: null,
                step: 1,
                callback: changeAttribute,
                cursor: false
            });
            a("#ellipse_rx").dragInput({
                min: 1,
                max: null,
                step: 1,
                callback: changeAttribute,
                cursor: false
            });
            a("#ellipse_ry").dragInput({
                min: 1,
                max: null,
                step: 1,
                callback: changeAttribute,
                cursor: false
            });
            a("#image_height").dragInput({
                min: 1,
                max: null,
                step: 1,
                callback: changeAttribute,
                cursor: false
            });
            a("#circle_cx").dragInput({
                min: 1,
                max: null,
                step: 1,
                callback: changeAttribute,
                cursor: false
            });
            a("#circle_cy").dragInput({
                min: 1,
                max: null,
                step: 1,
                callback: changeAttribute,
                cursor: false
            });
            a("#circle_r").dragInput({
                min: 1,
                max: null,
                step: 1,
                callback: changeAttribute,
                cursor: false
            });
            a("#image_height").dragInput({
                min: 0,
                max: null,
                step: 1,
                callback: changeAttribute,
                cursor: false
            });
            a("#selected_x").dragInput({
                min: null,
                max: null,
                step: 1,
                callback: changeAttribute,
                cursor: false
            });
            a("#selected_y").dragInput({
                min: null,
                max: null,
                step: 1,
                callback: changeAttribute,
                cursor: false
            });
            a("#path_node_x").dragInput({
                min: null,
                max: null,
                step: 1,
                callback: changeAttribute,
                cursor: false
            });
            a("#path_node_y").dragInput({
                min: null,
                max: null,
                step: 1,
                callback: changeAttribute,
                cursor: false
            });
            a("#image_width").dragInput({
                min: null,
                max: null,
                step: 1,
                callback: changeAttribute,
                cursor: false
            });
            a("#line_x1").dragInput({
                min: null,
                max: null,
                step: 1,
                callback: changeAttribute,
                cursor: false
            });
            a("#line_x2").dragInput({
                min: null,
                max: null,
                step: 1,
                callback: changeAttribute,
                cursor: false
            });
            a("#line_y1").dragInput({
                min: null,
                max: null,
                step: 1,
                callback: changeAttribute,
                cursor: false
            });
            a("#line_y2").dragInput({
                min: null,
                max: null,
                step: 1,
                callback: changeAttribute,
                cursor: false
            });
            a("#path_x").dragInput({
                min: null,
                max: null,
                step: 1,
                callback: changeAttribute,
                cursor: false
            });
            a("#path_y").dragInput({
                min: null,
                max: null,
                step: 1,
                callback: changeAttribute,
                cursor: false
            });
            a("#rect_x").dragInput({
                min: null,
                max: null,
                step: 1,
                callback: changeAttribute,
                cursor: false
            });
            a("#rect_y").dragInput({
                min: null,
                max: null,
                step: 1,
                callback: changeAttribute,
                cursor: false
            });
            a("#g_x").dragInput({
                min: null,
                max: null,
                step: 1,
                callback: changeAttribute,
                cursor: false
            });
            a("#g_y").dragInput({
                min: null,
                max: null,
                step: 1,
                callback: changeAttribute,
                cursor: false
            });
            a("#image_x").dragInput({
                min: null,
                max: null,
                step: 1,
                callback: changeAttribute,
                cursor: false
            });
            a("#text_y").dragInput({
                min: null,
                max: null,
                step: 1,
                callback: changeAttribute,
                cursor: false
            });
            a("#text_x").dragInput({
                min: null,
                max: null,
                step: 1,
                callback: changeAttribute,
                cursor: false
            });
            a("#image_y").dragInput({
                min: null,
                max: null,
                step: 1,
                callback: changeAttribute,
                cursor: false
            });
            a("#rect_rx").dragInput({
                min: 0,
                max: 100,
                step: 1,
                callback: changeAttribute,
                cursor: true
            });
            a("#stroke_width").dragInput({
                min: 0,
                max: 99,
                step: 1,
                callback: function(k) {
                    var n = k.value;
                    if (n == 0 &&
                        X && ["line", "polyline"].indexOf(X.nodeName) >= 0) n = k.value = 1;
                    e.setStrokeWidth(n)
                },
                cursor: true,
                smallStep: 0.1,
                start: 1.5
            });
            a("#angle").dragInput({
                min: -180,
                max: 180,
                step: 1,
                callback: function(k) {
                    e.setRotationAngle(k.value, true);
                    rotateCursor(k.value);
                    a("#tool_reorient").toggleClass("disabled", k.value == 0)
                },
                cursor: false,
                dragAdjust: 0.5
            });
            a("#font_size").dragInput({
                min: 1,
                max: 250,
                step: 1,
                callback: function(k) {
                    e.setFontSize(k.value)
                },
                cursor: true,
                stepfunc: function(k, n) {
                    var q = k.value - 0,
                        u = q + n,
                        E = u >= q;
                    if (n === 0) return q;
                    return q >= 24 ? E ? Math.round(q * 1.1) : Math.round(q / 1.1) : q <= 1 ? E ? q * 2 : q / 2 : u
                },
                dragAdjust: 0.15
            });
            a("#group_opacity").dragInput({
                min: 0,
                max: 100,
                step: 5,
                callback: changeAttribute,
                cursor: true,
                start: 100
            });
            a("#blur").dragInput({
                min: 0,
                max: 10,
                step: 0.1,
                callback: function(k, n) {
                    val = k.value;
                    a("#blur").val(val);
                    n ? e.setBlur(val, true) : e.setBlurNoUndo(val)
                },
                cursor: true,
                start: 0
            });
            a("#zoom").val(e.getZoom() * 100);
            a("#workarea").contextMenu({
                menu: "cmenu_canvas",
                inSpeed: 0
            }, function(k) {
                switch (k) {
                    case "delete":
                        lb();
                        break;
                    case "cut":
                        Ua();
                        break;
                    case "copy":
                        Xa();
                        break;
                    case "paste":
                        e.pasteElements();
                        break;
                    case "paste_in_place":
                        e.pasteElements("in_place");
                        break;
                    case "group":
                        e.groupSelectedElements();
                        break;
                    case "ungroup":
                        e.ungroupSelectedElement();
                        break;
                    case "move_front":
                        sa();
                        break;
                    case "move_up":
                        ib("Up");
                        break;
                    case "move_down":
                        ib("Down");
                        break;
                    case "move_back":
                        hb();
                        break;
                    default:
                        svgedit.contextmenu && svgedit.contextmenu.hasCustomHandler(k) && svgedit.contextmenu.getCustomHandler(k).call()
                }
            });
            a(".contextMenu li").mousedown(function(k) {
                k.preventDefault()
            });
            a("#cmenu_canvas li").disableContextMenu();
            H.enableContextMenuItems("#delete,#cut,#copy");
            window.onbeforeunload = function() {
                if (v.getUndoStackSize() === 0) b.show_save_warning = false;
                if (!curConfig.no_save_warning && b.show_save_warning) return uiStrings.notification.unsavedChanges
            };
            b.openPrep = function(k) {
                a("#main_menu").hide();
                v.getUndoStackSize() === 0 ? k(true) : a.confirm(uiStrings.notification.QwantToOpen, k)
            };
            if (window.FileReader) {
                d = function(k) {
                    k.stopPropagation();
                    k.preventDefault();
                    a("#workarea").removeAttr("style");
                    a("#main_menu").hide();
                    var n = null;
                    if (n = k.type == "drop" ? k.dataTransfer.files[0] : this.files[0])
                        if (n.type.indexOf("image") != -1)
                            if (n.type.indexOf("svg") != -1) {
                                k = new FileReader;
                                k.onloadend = function(q) {
                                    e.importSvgString(q.target.result, true);
                                    e.ungroupSelectedElement();
                                    e.ungroupSelectedElement();
                                    e.groupSelectedElements();
                                    e.alignSelectedElements("m", "page");
                                    e.alignSelectedElements("c", "page")
                                };
                                k.readAsText(n)
                            } else {
                                k = new FileReader;
                                k.onloadend = function(q) {
                                    insertNewImage = function(K, O) {
                                        var V = e.addSvgElementFromJson({
                                            element: "image",
                                            attr: {
                                                x: 0,
                                                y: 0,
                                                width: K,
                                                height: O,
                                                id: e.getNextId(),
                                                style: "pointer-events:inherit"
                                            }
                                        });
                                        e.setHref(V, q.target.result);
                                        e.selectOnly([V]);
                                        e.alignSelectedElements("m", "page");
                                        e.alignSelectedElements("c", "page");
                                        Ia()
                                    };
                                    var u = 100,
                                        E = 100,
                                        I = new Image;
                                    I.src = q.target.result;
                                    document.body.appendChild(I);
                                    I.onload = function() {
                                        u = I.offsetWidth;
                                        E = I.offsetHeight;
                                        insertNewImage(u, E);
                                        document.body.removeChild(I)
                                    }
                                };
                                k.readAsDataURL(n)
                            }
                };
                J = a("#workarea");
                J[0].addEventListener("dragenter", function(k) {
                    k.stopPropagation();
                    k.preventDefault();
                    J.css({
                        "-webkit-transform": "scale3d(1.1,1.1,1)",
                        "-moz-transform": "scale3d(1.1,1.1,1)",
                        "-o-transform": "scale(1.1)",
                        "-ms-transform": "scale3d(1.1,1.1,1)",
                        transform: "scale3d(1.1,1.1,1)"
                    })
                }, false);
                J[0].addEventListener("dragover", function(k) {
                    k.stopPropagation();
                    k.preventDefault()
                }, false);
                J[0].addEventListener("dragleave", function(k) {
                    J.removeAttr("style");
                    k.stopPropagation();
                    k.preventDefault()
                }, false);
                J[0].addEventListener("drop", d, false);
                var A = a('<input type="file">').change(function() {
                    var k = this;
                    b.openPrep(function(n) {
                        if (n) {
                            e.clear();
                            if (k.files.length == 1) {
                                n = new FileReader;
                                n.onloadend = function(q) {
                                    o(q.target.result);
                                    G()
                                };
                                n.readAsText(k.files[0])
                            }
                        }
                    })
                });
                a("#tool_open").show().prepend(A);
                d = a('<input type="file">').change(d);
                a("#tool_import").show().prepend(d)
            }
            var G = b.updateCanvas = function(k, n) {
                    var q = J.width(),
                        u = J.height(),
                        E = q,
                        I = u,
                        K = e.getZoom(),
                        O = J,
                        V = a("#svgcanvas"),
                        aa = {
                            x: O[0].scrollLeft + E / 2,
                            y: O[0].scrollTop + I / 2
                        },
                        S = curConfig.canvas_expansion;
                    q = Math.max(E, e.contentW * K * S);
                    u = Math.max(I, e.contentH * K * S);
                    q == E && u == I ? J.css("overflow", "hidden") :
                        J.css("overflow", "scroll");
                    S = V.height() / 2;
                    var ea = V.width() / 2;
                    V.width(q).height(u);
                    var ga = u / 2,
                        T = q / 2,
                        qa = e.updateCanvas(q, u),
                        va = T / ea;
                    q = q / 2 - E / 2;
                    u = u / 2 - I / 2;
                    if (n) {
                        n.x += qa.x;
                        n.y += qa.y
                    } else n = {
                        x: T + (aa.x - ea) * va,
                        y: ga + (aa.y - S) * va
                    };
                    if (k)
                        if (e.contentW > O.width()) {
                            J[0].scrollLeft = qa.x - 10;
                            J[0].scrollTop = qa.y - 10
                        } else {
                            O[0].scrollLeft = q;
                            O[0].scrollTop = u
                        }
                    else {
                        O[0].scrollLeft = n.x - E / 2;
                        O[0].scrollTop = n.y - I / 2
                    }
                    if (curConfig.showRulers) {
                        E = V;
                        K = K;
                        document.getElementById("workarea");
                        document.getElementById("title_show");
                        K || (K =
                            e.getZoom());
                        E || (E = a("#svgcanvas"));
                        I = e.getContentElem();
                        O = svgedit.units.getTypeMap()[curConfig.baseUnit];
                        for (V = 0; V < 2; V++) {
                            ea = (aa = V === 0) ? "x" : "y";
                            va = aa ? "width" : "height";
                            S = I.getAttribute(ea) - 0;
                            ea = a("#ruler_" + ea + " canvas:first");
                            $hcanv = ea.clone();
                            ea.replaceWith($hcanv);
                            q = $hcanv[0];
                            ga = ea = E[va]() * 2;
                            q.parentNode.style[va] = ga + "px";
                            T = 0;
                            var za;
                            qa = q.getContext("2d");
                            qa.fillStyle = "rgb(200,0,0)";
                            qa.fillRect(0, 0, q.width, q.height);
                            $hcanv.siblings().remove();
                            if (ea >= 3E4) {
                                var Aa = parseInt(ea / 3E4) + 1;
                                za = Array(Aa);
                                za[0] =
                                    qa;
                                for (u = 1; u < Aa; u++) {
                                    q[va] = 3E4;
                                    var Oa = q.cloneNode(true);
                                    q.parentNode.appendChild(Oa);
                                    za[u] = Oa.getContext("2d")
                                }
                                Oa[va] = ea % 3E4;
                                ea = 3E4
                            }
                            q[va] = ea;
                            va = O * K;
                            var Pa = 50 / va;
                            q = 1;
                            for (u = 0; u < D.length; u++) {
                                q = Aa = D[u];
                                if (Pa <= Aa) break
                            }
                            Pa = q * va;
                            qa.font = "normal 9px 'Lucida Grande', sans-serif";
                            qa.fillStyle = "#777";
                            for (var La = S / va % q * va, jb = La - Pa; La < ga; La += Pa) {
                                jb += Pa;
                                u = Math.round(La) + 0.5;
                                if (aa) {
                                    qa.moveTo(u, 15);
                                    qa.lineTo(u, 0)
                                } else {
                                    qa.moveTo(15, u);
                                    qa.lineTo(0, u)
                                }
                                Aa = (jb - S) / va;
                                if (q >= 1) u = Math.round(Aa);
                                else {
                                    u = (q + "").split(".")[1].length;
                                    u = Aa.toFixed(u) - 0
                                }
                                if (u !== 0 && u !== 1E3 && u % 1E3 === 0) u = u / 1E3 + "K";
                                if (aa) {
                                    qa.fillText(u, La + 2, 8);
                                    qa.fillStyle = "#777"
                                } else {
                                    Aa = (u + "").split("");
                                    for (u = 0; u < Aa.length; u++) {
                                        qa.fillText(Aa[u], 1, La + 9 + u * 9);
                                        qa.fillStyle = "#777"
                                    }
                                }
                                Aa = Pa / 10;
                                for (u = 1; u < 10; u++) {
                                    var ub = Math.round(La + Aa * u) + 0.5;
                                    if (za && ub > ea) {
                                        T++;
                                        qa.stroke();
                                        if (T >= za.length) {
                                            u = 10;
                                            La = ga;
                                            continue
                                        }
                                        qa = za[T];
                                        La -= 3E4;
                                        ub = Math.round(La + Aa * u) + 0.5
                                    }
                                    var Cb = u % 2 ? 12 : 10;
                                    if (aa) {
                                        qa.moveTo(ub, 15);
                                        qa.lineTo(ub, Cb)
                                    } else {
                                        qa.moveTo(15, ub);
                                        qa.lineTo(Cb, ub)
                                    }
                                }
                            }
                            qa.strokeStyle = "#666";
                            qa.stroke()
                        }
                        J.scroll()
                    }
                },
                D = [];
            for (d = 0.1; d < 1E5; d *= 10) {
                D.push(1 * d);
                D.push(2 * d);
                D.push(5 * d)
            }
            G(true);
            try {
                var z = function(k) {
                    if (window.JSON && JSON.stringify) return JSON.stringify(k);
                    var n = arguments.callee;
                    if (typeof k == "boolean" || typeof k == "number") return k + "";
                    else if (typeof k == "string") return '"' + k.replace(/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, function(E) {
                        return "\\u" + ("0000" + E.charCodeAt(0).toString(16)).slice(-4)
                    }) + '"';
                    else if (k.length) {
                        for (var q =
                                0; q < k.length; q++) k[q] = n(k[q]);
                        return "[" + k.join(",") + "]"
                    } else {
                        q = [];
                        for (var u in k) q.push(n(u) + ":" + n(k[u]));
                        return "{" + q.join(",") + "}"
                    }
                };
                window.addEventListener("message", function(k) {
                    var n = parseInt(k.data.substr(0, k.data.indexOf(";")));
                    try {
                        k.source.postMessage("SVGe" + n + ";" + z(eval(k.data)), "*")
                    } catch (q) {
                        k.source.postMessage("SVGe" + n + ";error:" + q.message, "*")
                    }
                }, false)
            } catch (F) {
                window.embed_error = F
            }
            a(function() {
                window.svgCanvas = e;
                e.ready = methodDraw.ready
            });
            b.setLang = function(k, n) {
                a.pref("lang", k);
                a("#lang_select").val(k);
                if (n) {
                    e.runExtensions("langChanged", k);
                    ma();
                    a.each({
                        "#stroke_color": "#tool_stroke .icon_label, #tool_stroke .color_block",
                        "#fill_color": "#tool_fill label, #tool_fill .color_block",
                        "#linejoin_miter": "#cur_linejoin",
                        "#linecap_butt": "#cur_linecap"
                    }, function(q, u) {
                        a(u).attr("title", a(q)[0].title)
                    });
                    a("#multiselected_panel div[id^=tool_align]").each(function() {
                        a("#tool_pos" + this.id.substr(10))[0].title = this.title
                    })
                }
            }
        };
        var g = [];
        b.ready = function(d) {
            l ? d() : g.push(d)
        };
        b.runCallbacks = function() {
            a.each(g, function() {
                this()
            });
            l = true
        };
        b.loadFromString = function(d) {
            b.ready(function() {
                o(d)
            })
        };
        b.loadFromURL = function(d, p) {
            p || (p = {});
            var w = p.cache,
                C = p.callback;
            b.ready(function() {
                a.ajax({
                    url: d,
                    dataType: "text",
                    cache: !!w,
                    success: function(v) {
                        o(v, C)
                    },
                    error: function(v, L, Q) {
                        v.status != 404 && v.responseText ? o(v.responseText, C) : a.alert(uiStrings.notification.URLloadFail + ": \n" + Q + "", C)
                    }
                })
            })
        };
        b.loadFromDataURI = function(d) {
            b.ready(function() {
                var p = d.substring(26);
                o(svgedit.utilities.decode64(p))
            })
        };
        b.addExtension = function() {
            var d = arguments;
            a(function() {
                e && e.addExtension.apply(this, d)
            })
        };
        return b
    }(jQuery);
    $(methodDraw.init)
})();
$.fn.dragInput = function(a) {
    return this.each(function() {
        this.repeating = false;
        this.dragCfg = {
            min: a && !isNaN(parseFloat(a.min)) ? Number(a.min) : null,
            max: a && !isNaN(parseFloat(a.max)) ? Number(a.max) : null,
            step: a && Number(a.step) ? a.step : 1,
            stepfunc: a && a.stepfunc ? a.stepfunc : false,
            dragAdjust: a && a.dragAdjust ? a.dragAdjust : 1,
            height: 70,
            cursor: a && a.cursor ? Boolean(a.cursor) : false,
            start: a && a.start ? Number(a.start) : 0,
            _btn_width: 20,
            _direction: null,
            _delay: null,
            _repeat: null,
            callback: a && a.callback ? a.callback : null
        };
        this.dragCfg.smallStep =
            a && a.smallStep ? a.smallStep : this.dragCfg.step / 2;
        var o = this.dragCfg.dragAdjust,
            e = $(this).parent(),
            b = $(this),
            l = this.dragCfg.height,
            s = this.dragCfg.min,
            c = this.dragCfg.max,
            g = this.dragCfg.step,
            d = c - s > 0 ? (c - s) / g : 200,
            p = d / l * g,
            w = 0,
            C = this.getAttribute("data-attr"),
            v = methodDraw.canvas,
            L = svgedit.browser.isTouch(),
            Q = true,
            J = d && this.dragCfg.cursor ? $("<div class='draginput_cursor' />").appendTo(e) : false;
        b.attr("readonly", "readonly");
        J && !isNaN(this.dragCfg.start) && J.css("top", this.dragCfg.start * -1 / p + l);
        this.adjustValue =
            function(H, U) {
                var R;
                H = parseFloat(H);
                R = isNaN(this.value) ? this.dragCfg.reset : $.isFunction(this.dragCfg.stepfunc) ? this.dragCfg.stepfunc(this, H) : Number((Number(this.value) + Number(H)).toFixed(5));
                if (c !== null) R = Math.min(R, c);
                if (s !== null) R = Math.max(R, s);
                J && this.updateCursor(R);
                this.value = R;
                e.attr("data-value", R);
                $.isFunction(this.dragCfg.callback) && this.dragCfg.callback(this, U)
            };
        e.toggleClass("draginput", e.is("label"));
        this.move = function(H, U, R) {
            if (L) H = H.originalEvent.touches[0];
            if (w === 0) w = U;
            U = (H.pageY - w) *
                -1;
            w = H.pageY;
            R = U * p * o;
            this.adjustValue(R.toFixed(g < 1 ? 1 : 0))
        };
        this.stop = function() {
            var H = v.getSelectedElems();
            $("body").removeClass("dragging");
            e.removeClass("active");
            Q = true;
            $(window).unbind("mousemove.draginput touchmove.draginput mouseup.draginput touchend.draginput");
            w = 0;
            if (H[0]) {
                H = v.undoMgr.finishUndoableChange();
                H.isEmpty() || v.undoMgr.addCommandToHistory(H)
            }
            this.adjustValue(0, Q)
        };
        this.updateCursor = function() {
            var H = parseFloat(this.value) * -1 / p + l;
            J.css("top", H)
        };
        this.launch = function(H) {
            var U = v.getSelectedElems();
            if (L) H = H.originalEvent.touches[0];
            var R = H.pageY,
                N = this.value,
                ca = this;
            v.undoMgr.beginUndoableChange(C, U);
            $("body").addClass("dragging");
            e.addClass("active");
            $(window).bind("mousemove.draginput touchmove.draginput", function(la) {
                ca.move(la, R, parseFloat(N))
            });
            $(window).bind("mouseup.draginput touchend.draginput", function() {
                ca.stop()
            })
        };
        $(this).attr("readonly", "readonly").attr("data-scale", p).attr("data-domain", l).attr("data-cursor", J != false).bind("mousedown touchstart", function(H) {
            this.blur();
            this.launch(H)
        }).bind("dblclick taphold",
            function() {
                this.removeAttribute("readonly", "readonly");
                this.focus();
                this.select()
            }).keydown(function(H) {
            switch (H.keyCode) {
                case 13:
                    this.adjustValue(0);
                    this.blur()
            }
        }).focus(function() {
            this.getAttribute("readonly") === "readonly" && this.blur()
        }).blur(function() {
            this.setAttribute("readonly", "readonly")
        }).bind("mousewheel", function(H, U, R, N) {
            U = v.getSelectedElems();
            Q && v.undoMgr.beginUndoableChange(C, U);
            Q = false;
            clearTimeout(window.undoTimeout);
            window.undoTimeout = setTimeout(function() {
                ca.stop()
            }, 200);
            var ca =
                this;
            if (N > 0) this.adjustValue(this.dragCfg.step);
            else N < 0 && this.adjustValue(-this.dragCfg.step);
            H.preventDefault()
        })
    })
};
$.fn.dragInput.updateCursor = function(a) {
    var o = parseFloat(a.value),
        e = parseFloat(a.getAttribute("data-scale")),
        b = parseFloat(a.getAttribute("data-domain"));
    o = o * -1 / e + b + "px";
    a = a.parentNode.lastChild;
    if (a.className == "draginput_cursor") a.style.top = o
};
svgedit = svgedit || {};
(function() {
    var a = this;
    if (!svgedit.contextmenu) svgedit.contextmenu = {};
    a.contextMenuExtensions = {};
    methodDraw.ready(function() {
        for (menuItem in contextMenuExtensions) {
            var o = contextMenuExtensions[menuItem];
            Object.keys(a.contextMenuExtensions).length == 0 && $("#cmenu_canvas").append("<li class='separator'>");
            var e = o.shortcut || "";
            $("#cmenu_canvas").append("<li class='disabled'><a href='#" + o.id + "'>" + o.label + "<span class='shortcut'>" + e + "</span></a></li>")
        }
    });
    svgedit.contextmenu.resetCustomMenus = function() {
        a.contextMenuExtensions = {}
    };
    svgedit.contextmenu.add = function(o) {
        if (o && o.id && o.label && o.action && typeof o.action == "function")
            if (o.id in a.contextMenuExtensions) console.error('Cannot add extension "' + o.id + '", an extension by that name already exists"');
            else {
                console.log("Registed contextmenu item: {id:" + o.id + ", label:" + o.label + "}");
                a.contextMenuExtensions[o.id] = o
            }
        else console.error("Menu items must be defined and have at least properties: id, label, action, where action must be a function")
    };
    svgedit.contextmenu.hasCustomHandler =
        function(o) {
            return a.contextMenuExtensions[o] && true
        };
    svgedit.contextmenu.getCustomHandler = function(o) {
        return a.contextMenuExtensions[o].action
    }
})();
(function(a, o) {
    function e(l) {
        return !a(l).parents().andSelf().filter(function() {
            return a.curCSS(this, "visibility") === "hidden" || a.expr.filters.hidden(this)
        }).length
    }

    function b(l, s) {
        var c = l.nodeName.toLowerCase();
        if ("area" === c) {
            c = l.parentNode;
            var g = c.name;
            if (!l.href || !g || c.nodeName.toLowerCase() !== "map") return false;
            c = a("img[usemap=#" + g + "]")[0];
            return !!c && e(c)
        }
        return (/input|select|textarea|button|object/.test(c) ? !l.disabled : "a" == c ? l.href || s : s) && e(l)
    }
    a.ui = a.ui || {};
    a.ui.version || (a.extend(a.ui, {
        version: "1.8.17",
        keyCode: {
            ALT: 18,
            BACKSPACE: 8,
            CAPS_LOCK: 20,
            COMMA: 188,
            COMMAND: 91,
            COMMAND_LEFT: 91,
            COMMAND_RIGHT: 93,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            MENU: 93,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            WINDOWS: 91
        }
    }), a.fn.extend({
        propAttr: a.fn.prop || a.fn.attr,
        _focus: a.fn.focus,
        focus: function(l, s) {
            return typeof l == "number" ? this.each(function() {
                var c =
                    this;
                setTimeout(function() {
                    a(c).focus();
                    s && s.call(c)
                }, l)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function() {
            var l;
            a.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? l = this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(a.curCSS(this, "position", 1)) && /(auto|scroll)/.test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1))
            }).eq(0) : l = this.parents().filter(function() {
                return /(auto|scroll)/.test(a.curCSS(this,
                    "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1))
            }).eq(0);
            return /fixed/.test(this.css("position")) || !l.length ? a(document) : l
        },
        zIndex: function(l) {
            if (l !== o) return this.css("zIndex", l);
            if (this.length) {
                l = a(this[0]);
                for (var s; l.length && l[0] !== document;) {
                    s = l.css("position");
                    if (s === "absolute" || s === "relative" || s === "fixed") {
                        s = parseInt(l.css("zIndex"), 10);
                        if (!isNaN(s) && s !== 0) return s
                    }
                    l = l.parent()
                }
            }
            return 0
        },
        disableSelection: function() {
            return this.bind((a.support.selectstart ? "selectstart" :
                "mousedown") + ".ui-disableSelection", function(l) {
                l.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), a.each(["Width", "Height"], function(l, s) {
        function c(w, C, v, L) {
            a.each(g, function() {
                C -= parseFloat(a.curCSS(w, "padding" + this, true)) || 0;
                v && (C -= parseFloat(a.curCSS(w, "border" + this + "Width", true)) || 0);
                L && (C -= parseFloat(a.curCSS(w, "margin" + this, true)) || 0)
            });
            return C
        }
        var g = s === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
            d = s.toLowerCase(),
            p = {
                innerWidth: a.fn.innerWidth,
                innerHeight: a.fn.innerHeight,
                outerWidth: a.fn.outerWidth,
                outerHeight: a.fn.outerHeight
            };
        a.fn["inner" + s] = function(w) {
            if (w === o) return p["inner" + s].call(this);
            return this.each(function() {
                a(this).css(d, c(this, w) + "px")
            })
        };
        a.fn["outer" + s] = function(w, C) {
            if (typeof w != "number") return p["outer" + s].call(this, w);
            return this.each(function() {
                a(this).css(d, c(this, w, true, C) + "px")
            })
        }
    }), a.extend(a.expr[":"], {
        data: function(l, s, c) {
            return !!a.data(l, c[3])
        },
        focusable: function(l) {
            return b(l, !isNaN(a.attr(l, "tabindex")))
        },
        tabbable: function(l) {
            var s = a.attr(l,
                    "tabindex"),
                c = isNaN(s);
            return (c || s >= 0) && b(l, !c)
        }
    }), a(function() {
        var l = document.body,
            s = l.appendChild(s = document.createElement("div"));
        a.extend(s.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        });
        a.support.minHeight = s.offsetHeight === 100;
        a.support.selectstart = "onselectstart" in s;
        l.removeChild(s).style.display = "none"
    }), a.extend(a.ui, {
        plugin: {
            add: function(l, s, c) {
                l = a.ui[l].prototype;
                for (var g in c) {
                    l.plugins[g] = l.plugins[g] || [];
                    l.plugins[g].push([s, c[g]])
                }
            },
            call: function(l, s, c) {
                if ((s = l.plugins[s]) &&
                    l.element[0].parentNode)
                    for (var g = 0; g < s.length; g++) l.options[s[g][0]] && s[g][1].apply(l.element, c)
            }
        },
        contains: function(l, s) {
            return document.compareDocumentPosition ? l.compareDocumentPosition(s) & 16 : l !== s && l.contains(s)
        },
        hasScroll: function(l, s) {
            if (a(l).css("overflow") === "hidden") return false;
            var c = s && s === "left" ? "scrollLeft" : "scrollTop",
                g = false;
            if (l[c] > 0) return true;
            l[c] = 1;
            g = l[c] > 0;
            l[c] = 0;
            return g
        },
        isOverAxis: function(l, s, c) {
            return l > s && l < s + c
        },
        isOver: function(l, s, c, g, d, p) {
            return a.ui.isOverAxis(l, c, d) &&
                a.ui.isOverAxis(s, g, p)
        }
    }))
})(jQuery);
(function(a, o) {
    if (a.cleanData) {
        var e = a.cleanData;
        a.cleanData = function(l) {
            for (var s = 0, c;
                (c = l[s]) != null; s++) try {
                a(c).triggerHandler("remove")
            } catch (g) {}
            e(l)
        }
    } else {
        var b = a.fn.remove;
        a.fn.remove = function(l, s) {
            return this.each(function() {
                s || (!l || a.filter(l, [this]).length) && a("*", this).add([this]).each(function() {
                    try {
                        a(this).triggerHandler("remove")
                    } catch (c) {}
                });
                return b.call(a(this), l, s)
            })
        }
    }
    a.widget = function(l, s, c) {
        var g = l.split(".")[0],
            d;
        l = l.split(".")[1];
        d = g + "-" + l;
        c || (c = s, s = a.Widget);
        a.expr[":"][d] =
            function(p) {
                return !!a.data(p, l)
            };
        a[g] = a[g] || {};
        a[g][l] = function(p, w) {
            arguments.length && this._createWidget(p, w)
        };
        s = new s;
        s.options = a.extend(true, {}, s.options);
        a[g][l].prototype = a.extend(true, s, {
            namespace: g,
            widgetName: l,
            widgetEventPrefix: a[g][l].prototype.widgetEventPrefix || l,
            widgetBaseClass: d
        }, c);
        a.widget.bridge(l, a[g][l])
    };
    a.widget.bridge = function(l, s) {
        a.fn[l] = function(c) {
            var g = typeof c == "string",
                d = Array.prototype.slice.call(arguments, 1),
                p = this;
            c = !g && d.length ? a.extend.apply(null, [true, c].concat(d)) :
                c;
            if (g && c.charAt(0) === "_") return p;
            g ? this.each(function() {
                var w = a.data(this, l),
                    C = w && a.isFunction(w[c]) ? w[c].apply(w, d) : w;
                if (C !== w && C !== o) {
                    p = C;
                    return false
                }
            }) : this.each(function() {
                var w = a.data(this, l);
                w ? w.option(c || {})._init() : a.data(this, l, new s(c, this))
            });
            return p
        }
    };
    a.Widget = function(l, s) {
        arguments.length && this._createWidget(l, s)
    };
    a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: {
            disabled: false
        },
        _createWidget: function(l, s) {
            a.data(s, this.widgetName, this);
            this.element = a(s);
            this.options =
                a.extend(true, {}, this.options, this._getCreateOptions(), l);
            var c = this;
            this.element.bind("remove." + this.widgetName, function() {
                c.destroy()
            });
            this._create();
            this._trigger("create");
            this._init()
        },
        _getCreateOptions: function() {
            return a.metadata && a.metadata.get(this.element[0])[this.widgetName]
        },
        _create: function() {},
        _init: function() {},
        destroy: function() {
            this.element.unbind("." + this.widgetName).removeData(this.widgetName);
            this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass +
                "-disabled ui-state-disabled")
        },
        widget: function() {
            return this.element
        },
        option: function(l, s) {
            var c = l;
            if (arguments.length === 0) return a.extend({}, this.options);
            if (typeof l == "string") {
                if (s === o) return this.options[l];
                c = {};
                c[l] = s
            }
            this._setOptions(c);
            return this
        },
        _setOptions: function(l) {
            var s = this;
            a.each(l, function(c, g) {
                s._setOption(c, g)
            });
            return this
        },
        _setOption: function(l, s) {
            this.options[l] = s;
            l === "disabled" && this.widget()[s ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled",
                s);
            return this
        },
        enable: function() {
            return this._setOption("disabled", false)
        },
        disable: function() {
            return this._setOption("disabled", true)
        },
        _trigger: function(l, s, c) {
            var g, d = this.options[l];
            c = c || {};
            s = a.Event(s);
            s.type = (l === this.widgetEventPrefix ? l : this.widgetEventPrefix + l).toLowerCase();
            s.target = this.element[0];
            if (l = s.originalEvent)
                for (g in l) g in s || (s[g] = l[g]);
            this.element.trigger(s, c);
            return !(a.isFunction(d) && d.call(this.element[0], s, c) === false || s.isDefaultPrevented())
        }
    }
})(jQuery);
(function(a) {
    var o = false;
    a(document).mouseup(function() {
        o = false
    });
    a.widget("ui.mouse", {
        options: {
            cancel: ":input,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.bind("mousedown." + this.widgetName, function(b) {
                return e._mouseDown(b)
            }).bind("click." + this.widgetName, function(b) {
                if (true === a.data(b.target, e.widgetName + ".preventClickEvent")) {
                    a.removeData(b.target, e.widgetName + ".preventClickEvent");
                    b.stopImmediatePropagation();
                    return false
                }
            });
            this.started = false
        },
        _mouseDestroy: function() {
            this.element.unbind("." +
                this.widgetName)
        },
        _mouseDown: function(e) {
            if (!o) {
                this._mouseStarted && this._mouseUp(e);
                this._mouseDownEvent = e;
                var b = this,
                    l = e.which == 1,
                    s = typeof this.options.cancel == "string" && e.target.nodeName ? a(e.target).closest(this.options.cancel).length : false;
                if (!l || s || !this._mouseCapture(e)) return true;
                (this.mouseDelayMet = !this.options.delay) || (this._mouseDelayTimer = setTimeout(function() {
                    b.mouseDelayMet = true
                }, this.options.delay));
                if (this._mouseDistanceMet(e) && this._mouseDelayMet(e)) {
                    this._mouseStarted = this._mouseStart(e) !==
                        false;
                    if (!this._mouseStarted) {
                        e.preventDefault();
                        return true
                    }
                }
                true === a.data(e.target, this.widgetName + ".preventClickEvent") && a.removeData(e.target, this.widgetName + ".preventClickEvent");
                this._mouseMoveDelegate = function(c) {
                    return b._mouseMove(c)
                };
                this._mouseUpDelegate = function(c) {
                    return b._mouseUp(c)
                };
                a(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
                e.preventDefault();
                return o = true
            }
        },
        _mouseMove: function(e) {
            if (a.browser.msie &&
                !(document.documentMode >= 9) && !e.button) return this._mouseUp(e);
            if (this._mouseStarted) {
                this._mouseDrag(e);
                return e.preventDefault()
            }
            this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== false, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e));
            return !this._mouseStarted
        },
        _mouseUp: function(e) {
            a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
            this._mouseStarted &&
                (this._mouseStarted = false, e.target == this._mouseDownEvent.target && a.data(e.target, this.widgetName + ".preventClickEvent", true), this._mouseStop(e));
            return false
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return true
        }
    })
})(jQuery);
(function(a) {
    a.widget("ui.draggable", a.ui.mouse, {
        widgetEventPrefix: "drag",
        options: {
            addClasses: true,
            appendTo: "parent",
            axis: false,
            connectToSortable: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            grid: false,
            handle: false,
            helper: "original",
            iframeFix: false,
            opacity: false,
            refreshPositions: false,
            revert: false,
            revertDuration: 500,
            scope: "default",
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: false,
            snapMode: "both",
            snapTolerance: 20,
            stack: false,
            zIndex: false
        },
        _create: function() {
            this.options.helper == "original" &&
                !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative");
            this.options.addClasses && this.element.addClass("ui-draggable");
            this.options.disabled && this.element.addClass("ui-draggable-disabled");
            this._mouseInit()
        },
        destroy: function() {
            if (this.element.data("draggable")) {
                this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
                this._mouseDestroy();
                return this
            }
        },
        _mouseCapture: function(o) {
            var e = this.options;
            if (this.helper || e.disabled || a(o.target).is(".ui-resizable-handle")) return false;
            this.handle = this._getHandle(o);
            if (!this.handle) return false;
            e.iframeFix && a(e.iframeFix === true ? "iframe" : e.iframeFix).each(function() {
                a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1E3
                }).css(a(this).offset()).appendTo("body")
            });
            return true
        },
        _mouseStart: function(o) {
            var e = this.options;
            this.helper =
                this._createHelper(o);
            this._cacheHelperProportions();
            a.ui.ddmanager && (a.ui.ddmanager.current = this);
            this._cacheMargins();
            this.cssPosition = this.helper.css("position");
            this.scrollParent = this.helper.scrollParent();
            this.offset = this.positionAbs = this.element.offset();
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            };
            a.extend(this.offset, {
                click: {
                    left: o.pageX - this.offset.left,
                    top: o.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            });
            this.originalPosition = this.position = this._generatePosition(o);
            this.originalPageX = o.pageX;
            this.originalPageY = o.pageY;
            e.cursorAt && this._adjustOffsetFromHelper(e.cursorAt);
            e.containment && this._setContainment();
            if (this._trigger("start", o) === false) {
                this._clear();
                return false
            }
            this._cacheHelperProportions();
            a.ui.ddmanager && !e.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, o);
            this.helper.addClass("ui-draggable-dragging");
            this._mouseDrag(o, true);
            a.ui.ddmanager && a.ui.ddmanager.dragStart(this, o);
            return true
        },
        _mouseDrag: function(o, e) {
            this.position = this._generatePosition(o);
            this.positionAbs = this._convertPositionTo("absolute");
            if (!e) {
                var b = this._uiHash();
                if (this._trigger("drag", o, b) === false) {
                    this._mouseUp({});
                    return false
                }
                this.position = b.position
            }
            if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px";
            if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px";
            a.ui.ddmanager && a.ui.ddmanager.drag(this, o);
            return false
        },
        _mouseStop: function(o) {
            var e =
                false;
            a.ui.ddmanager && !this.options.dropBehaviour && (e = a.ui.ddmanager.drop(this, o));
            this.dropped && (e = this.dropped, this.dropped = false);
            if ((!this.element[0] || !this.element[0].parentNode) && this.options.helper == "original") return false;
            if (this.options.revert == "invalid" && !e || this.options.revert == "valid" && e || this.options.revert === true || a.isFunction(this.options.revert) && this.options.revert.call(this.element, e)) {
                var b = this;
                a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10),
                    function() {
                        b._trigger("stop", o) !== false && b._clear()
                    })
            } else this._trigger("stop", o) !== false && this._clear();
            return false
        },
        _mouseUp: function(o) {
            this.options.iframeFix === true && a("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            });
            a.ui.ddmanager && a.ui.ddmanager.dragStop(this, o);
            return a.ui.mouse.prototype._mouseUp.call(this, o)
        },
        cancel: function() {
            this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear();
            return this
        },
        _getHandle: function(o) {
            var e = !this.options.handle ||
                !a(this.options.handle, this.element).length ? true : false;
            a(this.options.handle, this.element).find("*").andSelf().each(function() {
                this == o.target && (e = true)
            });
            return e
        },
        _createHelper: function(o) {
            var e = this.options;
            o = a.isFunction(e.helper) ? a(e.helper.apply(this.element[0], [o])) : e.helper == "clone" ? this.element.clone().removeAttr("id") : this.element;
            o.parents("body").length || o.appendTo(e.appendTo == "parent" ? this.element[0].parentNode : e.appendTo);
            o[0] != this.element[0] && !/(fixed|absolute)/.test(o.css("position")) &&
                o.css("position", "absolute");
            return o
        },
        _adjustOffsetFromHelper: function(o) {
            typeof o == "string" && (o = o.split(" "));
            a.isArray(o) && (o = {
                left: +o[0],
                top: +o[1] || 0
            });
            "left" in o && (this.offset.click.left = o.left + this.margins.left);
            "right" in o && (this.offset.click.left = this.helperProportions.width - o.right + this.margins.left);
            "top" in o && (this.offset.click.top = o.top + this.margins.top);
            "bottom" in o && (this.offset.click.top = this.helperProportions.height - o.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent =
                this.helper.offsetParent();
            var o = this.offsetParent.offset();
            this.cssPosition == "absolute" && this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (o.left += this.scrollParent.scrollLeft(), o.top += this.scrollParent.scrollTop());
            if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && a.browser.msie) o = {
                top: 0,
                left: 0
            };
            return {
                top: o.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: o.left + (parseInt(this.offsetParent.css("borderLeftWidth"),
                    10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition == "relative") {
                var o = this.element.position();
                return {
                    top: o.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: o.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"),
                    10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var o = this.options;
            o.containment == "parent" && (o.containment = this.helper[0].parentNode);
            if (o.containment == "document" || o.containment == "window") this.containment = [o.containment == "document" ? 0 : a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, o.containment == "document" ? 0 : a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top,
                (o.containment == "document" ? 0 : a(window).scrollLeft()) + a(o.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (o.containment == "document" ? 0 : a(window).scrollTop()) + (a(o.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
            ];
            if (!/^(document|window|parent)$/.test(o.containment) && o.containment.constructor != Array) {
                o = a(o.containment);
                var e = o[0];
                if (e) {
                    o.offset();
                    var b = a(e).css("overflow") !=
                        "hidden";
                    this.containment = [(parseInt(a(e).css("borderLeftWidth"), 10) || 0) + (parseInt(a(e).css("paddingLeft"), 10) || 0), (parseInt(a(e).css("borderTopWidth"), 10) || 0) + (parseInt(a(e).css("paddingTop"), 10) || 0), (b ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(a(e).css("borderLeftWidth"), 10) || 0) - (parseInt(a(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (b ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(a(e).css("borderTopWidth"),
                        10) || 0) - (parseInt(a(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom];
                    this.relative_container = o
                }
            } else o.containment.constructor == Array && (this.containment = o.containment)
        },
        _convertPositionTo: function(o, e) {
            e || (e = this.position);
            var b = o == "absolute" ? 1 : -1,
                l = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                s = /(html|body)/i.test(l[0].tagName);
            return {
                top: e.top +
                    this.offset.relative.top * b + this.offset.parent.top * b - (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : s ? 0 : l.scrollTop()) * b),
                left: e.left + this.offset.relative.left * b + this.offset.parent.left * b - (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : s ? 0 : l.scrollLeft()) * b)
            }
        },
        _generatePosition: function(o) {
            var e = this.options,
                b = this.cssPosition == "absolute" &&
                (this.scrollParent[0] == document || !a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                l = /(html|body)/i.test(b[0].tagName),
                s = o.pageX,
                c = o.pageY;
            if (this.originalPosition) {
                var g;
                if (this.containment) {
                    if (this.relative_container) {
                        g = this.relative_container.offset();
                        g = [this.containment[0] + g.left, this.containment[1] + g.top, this.containment[2] + g.left, this.containment[3] + g.top]
                    } else g = this.containment;
                    o.pageX - this.offset.click.left < g[0] && (s = g[0] + this.offset.click.left);
                    o.pageY - this.offset.click.top < g[1] && (c = g[1] + this.offset.click.top);
                    o.pageX - this.offset.click.left > g[2] && (s = g[2] + this.offset.click.left);
                    o.pageY - this.offset.click.top > g[3] && (c = g[3] + this.offset.click.top)
                }
                if (e.grid) {
                    c = e.grid[1] ? this.originalPageY + Math.round((c - this.originalPageY) / e.grid[1]) * e.grid[1] : this.originalPageY;
                    c = g ? c - this.offset.click.top < g[1] || c - this.offset.click.top > g[3] ? c - this.offset.click.top < g[1] ? c + e.grid[1] : c - e.grid[1] : c : c;
                    s = e.grid[0] ? this.originalPageX + Math.round((s - this.originalPageX) /
                        e.grid[0]) * e.grid[0] : this.originalPageX;
                    s = g ? s - this.offset.click.left < g[0] || s - this.offset.click.left > g[2] ? s - this.offset.click.left < g[0] ? s + e.grid[0] : s - e.grid[0] : s : s
                }
            }
            return {
                top: c - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : l ? 0 : b.scrollTop()),
                left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (a.browser.safari && a.browser.version <
                    526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : l ? 0 : b.scrollLeft())
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging");
            this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove();
            this.helper = null;
            this.cancelHelperRemoval = false
        },
        _trigger: function(o, e, b) {
            b = b || this._uiHash();
            a.ui.plugin.call(this, o, [e, b]);
            o == "drag" && (this.positionAbs = this._convertPositionTo("absolute"));
            return a.Widget.prototype._trigger.call(this, o, e,
                b)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    });
    a.extend(a.ui.draggable, {
        version: "1.8.17"
    });
    a.ui.plugin.add("draggable", "connectToSortable", {
        start: function(o, e) {
            var b = a(this).data("draggable"),
                l = b.options,
                s = a.extend({}, e, {
                    item: b.element
                });
            b.sortables = [];
            a(l.connectToSortable).each(function() {
                var c = a.data(this, "sortable");
                c && !c.options.disabled && (b.sortables.push({
                        instance: c,
                        shouldRevert: c.options.revert
                    }),
                    c.refreshPositions(), c._trigger("activate", o, s))
            })
        },
        stop: function(o, e) {
            var b = a(this).data("draggable"),
                l = a.extend({}, e, {
                    item: b.element
                });
            a.each(b.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0, b.cancelHelperRemoval = true, this.instance.cancelHelperRemoval = false, this.shouldRevert && (this.instance.options.revert = true), this.instance._mouseStop(o), this.instance.options.helper = this.instance.options._helper, b.options.helper == "original" && this.instance.currentItem.css({
                        top: "auto",
                        left: "auto"
                    })) :
                    (this.instance.cancelHelperRemoval = false, this.instance._trigger("deactivate", o, l))
            })
        },
        drag: function(o, e) {
            var b = a(this).data("draggable"),
                l = this;
            a.each(b.sortables, function() {
                this.instance.positionAbs = b.positionAbs;
                this.instance.helperProportions = b.helperProportions;
                this.instance.offset.click = b.offset.click;
                this.instance._intersectsWith(this.instance.containerCache) ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = a(l).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",
                        true), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                        return e.helper[0]
                    }, o.target = this.instance.currentItem[0], this.instance._mouseCapture(o, true), this.instance._mouseStart(o, true, true), this.instance.offset.click.top = b.offset.click.top, this.instance.offset.click.left = b.offset.click.left, this.instance.offset.parent.left -= b.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= b.offset.parent.top - this.instance.offset.parent.top,
                    b._trigger("toSortable", o), b.dropped = this.instance.element, b.currentItem = b.element, this.instance.fromOutside = b), this.instance.currentItem && this.instance._mouseDrag(o)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = true, this.instance.options.revert = false, this.instance._trigger("out", o, this.instance._uiHash(this.instance)), this.instance._mouseStop(o, true), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder &&
                    this.instance.placeholder.remove(), b._trigger("fromSortable", o), b.dropped = false)
            })
        }
    });
    a.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var o = a("body"),
                e = a(this).data("draggable").options;
            o.css("cursor") && (e._cursor = o.css("cursor"));
            o.css("cursor", e.cursor)
        },
        stop: function() {
            var o = a(this).data("draggable").options;
            o._cursor && a("body").css("cursor", o._cursor)
        }
    });
    a.ui.plugin.add("draggable", "opacity", {
        start: function(o, e) {
            var b = a(e.helper),
                l = a(this).data("draggable").options;
            b.css("opacity") && (l._opacity =
                b.css("opacity"));
            b.css("opacity", l.opacity)
        },
        stop: function(o, e) {
            var b = a(this).data("draggable").options;
            b._opacity && a(e.helper).css("opacity", b._opacity)
        }
    });
    a.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var o = a(this).data("draggable");
            o.scrollParent[0] != document && o.scrollParent[0].tagName != "HTML" && (o.overflowOffset = o.scrollParent.offset())
        },
        drag: function(o) {
            var e = a(this).data("draggable"),
                b = e.options,
                l = false;
            if (e.scrollParent[0] != document && e.scrollParent[0].tagName != "HTML") {
                if (!b.axis ||
                    b.axis != "x") e.overflowOffset.top + e.scrollParent[0].offsetHeight - o.pageY < b.scrollSensitivity ? e.scrollParent[0].scrollTop = l = e.scrollParent[0].scrollTop + b.scrollSpeed : o.pageY - e.overflowOffset.top < b.scrollSensitivity && (e.scrollParent[0].scrollTop = l = e.scrollParent[0].scrollTop - b.scrollSpeed);
                if (!b.axis || b.axis != "y") e.overflowOffset.left + e.scrollParent[0].offsetWidth - o.pageX < b.scrollSensitivity ? e.scrollParent[0].scrollLeft = l = e.scrollParent[0].scrollLeft + b.scrollSpeed : o.pageX - e.overflowOffset.left < b.scrollSensitivity &&
                    (e.scrollParent[0].scrollLeft = l = e.scrollParent[0].scrollLeft - b.scrollSpeed)
            } else {
                if (!b.axis || b.axis != "x") o.pageY - a(document).scrollTop() < b.scrollSensitivity ? l = a(document).scrollTop(a(document).scrollTop() - b.scrollSpeed) : a(window).height() - (o.pageY - a(document).scrollTop()) < b.scrollSensitivity && (l = a(document).scrollTop(a(document).scrollTop() + b.scrollSpeed));
                if (!b.axis || b.axis != "y") o.pageX - a(document).scrollLeft() < b.scrollSensitivity ? l = a(document).scrollLeft(a(document).scrollLeft() - b.scrollSpeed) :
                    a(window).width() - (o.pageX - a(document).scrollLeft()) < b.scrollSensitivity && (l = a(document).scrollLeft(a(document).scrollLeft() + b.scrollSpeed))
            }
            l !== false && a.ui.ddmanager && !b.dropBehaviour && a.ui.ddmanager.prepareOffsets(e, o)
        }
    });
    a.ui.plugin.add("draggable", "snap", {
        start: function() {
            var o = a(this).data("draggable"),
                e = o.options;
            o.snapElements = [];
            a(e.snap.constructor != String ? e.snap.items || ":data(draggable)" : e.snap).each(function() {
                var b = a(this),
                    l = b.offset();
                this != o.element[0] && o.snapElements.push({
                    item: this,
                    width: b.outerWidth(),
                    height: b.outerHeight(),
                    top: l.top,
                    left: l.left
                })
            })
        },
        drag: function(o, e) {
            for (var b = a(this).data("draggable"), l = b.options, s = l.snapTolerance, c = e.offset.left, g = c + b.helperProportions.width, d = e.offset.top, p = d + b.helperProportions.height, w = b.snapElements.length - 1; w >= 0; w--) {
                var C = b.snapElements[w].left,
                    v = C + b.snapElements[w].width,
                    L = b.snapElements[w].top,
                    Q = L + b.snapElements[w].height;
                if (C - s < c && c < v + s && L - s < d && d < Q + s || C - s < c && c < v + s && L - s < p && p < Q + s || C - s < g && g < v + s && L - s < d && d < Q + s || C - s < g && g < v + s && L - s < p &&
                    p < Q + s) {
                    if (l.snapMode != "inner") {
                        var J = Math.abs(L - p) <= s,
                            H = Math.abs(Q - d) <= s,
                            U = Math.abs(C - g) <= s,
                            R = Math.abs(v - c) <= s;
                        J && (e.position.top = b._convertPositionTo("relative", {
                            top: L - b.helperProportions.height,
                            left: 0
                        }).top - b.margins.top);
                        H && (e.position.top = b._convertPositionTo("relative", {
                            top: Q,
                            left: 0
                        }).top - b.margins.top);
                        U && (e.position.left = b._convertPositionTo("relative", {
                            top: 0,
                            left: C - b.helperProportions.width
                        }).left - b.margins.left);
                        R && (e.position.left = b._convertPositionTo("relative", {
                            top: 0,
                            left: v
                        }).left - b.margins.left)
                    }
                    var N =
                        J || H || U || R;
                    if (l.snapMode != "outer") {
                        J = Math.abs(L - d) <= s;
                        H = Math.abs(Q - p) <= s;
                        U = Math.abs(C - c) <= s;
                        R = Math.abs(v - g) <= s;
                        J && (e.position.top = b._convertPositionTo("relative", {
                            top: L,
                            left: 0
                        }).top - b.margins.top);
                        H && (e.position.top = b._convertPositionTo("relative", {
                            top: Q - b.helperProportions.height,
                            left: 0
                        }).top - b.margins.top);
                        U && (e.position.left = b._convertPositionTo("relative", {
                            top: 0,
                            left: C
                        }).left - b.margins.left);
                        R && (e.position.left = b._convertPositionTo("relative", {
                            top: 0,
                            left: v - b.helperProportions.width
                        }).left - b.margins.left)
                    }!b.snapElements[w].snapping &&
                        (J || H || U || R || N) && b.options.snap.snap && b.options.snap.snap.call(b.element, o, a.extend(b._uiHash(), {
                            snapItem: b.snapElements[w].item
                        }));
                    b.snapElements[w].snapping = J || H || U || R || N
                } else {
                    b.snapElements[w].snapping && b.options.snap.release && b.options.snap.release.call(b.element, o, a.extend(b._uiHash(), {
                        snapItem: b.snapElements[w].item
                    }));
                    b.snapElements[w].snapping = false
                }
            }
        }
    });
    a.ui.plugin.add("draggable", "stack", {
        start: function() {
            var o = a(this).data("draggable").options;
            o = a.makeArray(a(o.stack)).sort(function(b,
                l) {
                return (parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(l).css("zIndex"), 10) || 0)
            });
            if (o.length) {
                var e = parseInt(o[0].style.zIndex) || 0;
                a(o).each(function(b) {
                    this.style.zIndex = e + b
                });
                this[0].style.zIndex = e + o.length
            }
        }
    });
    a.ui.plugin.add("draggable", "zIndex", {
        start: function(o, e) {
            var b = a(e.helper),
                l = a(this).data("draggable").options;
            b.css("zIndex") && (l._zIndex = b.css("zIndex"));
            b.css("zIndex", l.zIndex)
        },
        stop: function(o, e) {
            var b = a(this).data("draggable").options;
            b._zIndex && a(e.helper).css("zIndex", b._zIndex)
        }
    })
})(jQuery);
(function(a) {
    a.widget("ui.slider", a.ui.mouse, {
        widgetEventPrefix: "slide",
        options: {
            animate: false,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: false,
            step: 1,
            value: 0,
            values: null
        },
        _create: function() {
            var o = this,
                e = this.options,
                b = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                l = e.values && e.values.length || 1,
                s = [];
            this._mouseSliding = this._keySliding = false;
            this._animateOff = true;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this.element.addClass("ui-slider ui-slider-" +
                this.orientation + " ui-widget ui-widget-content ui-corner-all" + (e.disabled ? " ui-slider-disabled ui-disabled" : ""));
            this.range = a([]);
            e.range && (e.range === true && (e.values || (e.values = [this._valueMin(), this._valueMin()]), e.values.length && e.values.length !== 2 && (e.values = [e.values[0], e.values[0]])), this.range = a("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + (e.range === "min" || e.range === "max" ? " ui-slider-range-" + e.range : "")));
            for (var c = b.length; c < l; c += 1) s.push("<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>");
            this.handles = b.add(a(s.join("")).appendTo(o.element));
            this.handle = this.handles.eq(0);
            this.handles.add(this.range).filter("a").click(function(g) {
                g.preventDefault()
            }).hover(function() {
                e.disabled || a(this).addClass("ui-state-hover")
            }, function() {
                a(this).removeClass("ui-state-hover")
            }).focus(function() {
                e.disabled ? a(this).blur() : (a(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), a(this).addClass("ui-state-focus"))
            }).blur(function() {
                a(this).removeClass("ui-state-focus")
            });
            this.handles.each(function(g) {
                a(this).data("index.ui-slider-handle",
                    g)
            });
            this.handles.keydown(function(g) {
                var d = true,
                    p = a(this).data("index.ui-slider-handle"),
                    w, C, v;
                if (!o.options.disabled) {
                    switch (g.keyCode) {
                        case a.ui.keyCode.HOME:
                        case a.ui.keyCode.END:
                        case a.ui.keyCode.PAGE_UP:
                        case a.ui.keyCode.PAGE_DOWN:
                        case a.ui.keyCode.UP:
                        case a.ui.keyCode.RIGHT:
                        case a.ui.keyCode.DOWN:
                        case a.ui.keyCode.LEFT:
                            d = false;
                            if (!o._keySliding) {
                                o._keySliding = true;
                                a(this).addClass("ui-state-active");
                                w = o._start(g, p);
                                if (w === false) return
                            }
                    }
                    w = o.options.step;
                    o.options.values && o.options.values.length ?
                        C = v = o.values(p) : C = v = o.value();
                    switch (g.keyCode) {
                        case a.ui.keyCode.HOME:
                            v = o._valueMin();
                            break;
                        case a.ui.keyCode.END:
                            v = o._valueMax();
                            break;
                        case a.ui.keyCode.PAGE_UP:
                            v = o._trimAlignValue(C + (o._valueMax() - o._valueMin()) / 5);
                            break;
                        case a.ui.keyCode.PAGE_DOWN:
                            v = o._trimAlignValue(C - (o._valueMax() - o._valueMin()) / 5);
                            break;
                        case a.ui.keyCode.UP:
                        case a.ui.keyCode.RIGHT:
                            if (C === o._valueMax()) return;
                            v = o._trimAlignValue(C + w);
                            break;
                        case a.ui.keyCode.DOWN:
                        case a.ui.keyCode.LEFT:
                            if (C === o._valueMin()) return;
                            v = o._trimAlignValue(C -
                                w)
                    }
                    o._slide(g, p, v);
                    return d
                }
            }).keyup(function(g) {
                var d = a(this).data("index.ui-slider-handle");
                o._keySliding && (o._keySliding = false, o._stop(g, d), o._change(g, d), a(this).removeClass("ui-state-active"))
            });
            this._refreshValue();
            this._animateOff = false
        },
        destroy: function() {
            this.handles.remove();
            this.range.remove();
            this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");
            this._mouseDestroy();
            return this
        },
        _mouseCapture: function(o) {
            var e = this.options,
                b, l, s, c, g;
            if (e.disabled) return false;
            this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            };
            this.elementOffset = this.element.offset();
            b = this._normValueFromMouse({
                x: o.pageX,
                y: o.pageY
            });
            l = this._valueMax() - this._valueMin() + 1;
            c = this;
            this.handles.each(function(d) {
                var p = Math.abs(b - c.values(d));
                l > p && (l = p, s = a(this), g = d)
            });
            e.range === true && this.values(1) === e.min && (g += 1, s = a(this.handles[g]));
            if (this._start(o, g) === false) return false;
            this._mouseSliding = true;
            c._handleIndex = g;
            s.addClass("ui-state-active").focus();
            e = s.offset();
            this._clickOffset = !a(o.target).parents().andSelf().is(".ui-slider-handle") ? {
                left: 0,
                top: 0
            } : {
                left: o.pageX - e.left - s.width() / 2,
                top: o.pageY - e.top - s.height() / 2 - (parseInt(s.css("borderTopWidth"), 10) || 0) - (parseInt(s.css("borderBottomWidth"), 10) || 0) + (parseInt(s.css("marginTop"), 10) || 0)
            };
            this.handles.hasClass("ui-state-hover") || this._slide(o, g, b);
            return this._animateOff = true
        },
        _mouseStart: function() {
            return true
        },
        _mouseDrag: function(o) {
            var e =
                this._normValueFromMouse({
                    x: o.pageX,
                    y: o.pageY
                });
            this._slide(o, this._handleIndex, e);
            return false
        },
        _mouseStop: function(o) {
            this.handles.removeClass("ui-state-active");
            this._mouseSliding = false;
            this._stop(o, this._handleIndex);
            this._change(o, this._handleIndex);
            this._clickOffset = this._handleIndex = null;
            return this._animateOff = false
        },
        _detectOrientation: function() {
            this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(o) {
            var e, b;
            this.orientation === "horizontal" ?
                (e = this.elementSize.width, b = o.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, b = o.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0));
            o = b / e;
            o > 1 && (o = 1);
            o < 0 && (o = 0);
            this.orientation === "vertical" && (o = 1 - o);
            e = this._valueMax() - this._valueMin();
            return this._trimAlignValue(this._valueMin() + o * e)
        },
        _start: function(o, e) {
            var b = {
                handle: this.handles[e],
                value: this.value()
            };
            this.options.values && this.options.values.length && (b.value = this.values(e),
                b.values = this.values());
            return this._trigger("start", o, b)
        },
        _slide: function(o, e, b) {
            var l, s, c;
            this.options.values && this.options.values.length ? (l = this.values(e ? 0 : 1), this.options.values.length === 2 && this.options.range === true && (e === 0 && b > l || e === 1 && b < l) && (b = l), b !== this.values(e) && (s = this.values(), s[e] = b, c = this._trigger("slide", o, {
                handle: this.handles[e],
                value: b,
                values: s
            }), this.values(e ? 0 : 1), c !== false && this.values(e, b, true))) : b !== this.value() && (c = this._trigger("slide", o, {
                    handle: this.handles[e],
                    value: b
                }), c !==
                false && this.value(b))
        },
        _stop: function(o, e) {
            var b = {
                handle: this.handles[e],
                value: this.value()
            };
            this.options.values && this.options.values.length && (b.value = this.values(e), b.values = this.values());
            this._trigger("stop", o, b)
        },
        _change: function(o, e) {
            if (!this._keySliding && !this._mouseSliding) {
                var b = {
                    handle: this.handles[e],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (b.value = this.values(e), b.values = this.values());
                this._trigger("change", o, b)
            }
        },
        value: function(o) {
            if (arguments.length) {
                this.options.value =
                    this._trimAlignValue(o);
                this._refreshValue();
                this._change(null, 0)
            } else return this._value()
        },
        values: function(o, e) {
            var b, l, s;
            if (arguments.length > 1) {
                this.options.values[o] = this._trimAlignValue(e);
                this._refreshValue();
                this._change(null, o)
            } else {
                if (!arguments.length) return this._values();
                if (!a.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(o) : this.value();
                b = this.options.values;
                l = arguments[0];
                for (s = 0; s < b.length; s += 1) {
                    b[s] = this._trimAlignValue(l[s]);
                    this._change(null,
                        s)
                }
                this._refreshValue()
            }
        },
        _setOption: function(o, e) {
            var b, l = 0;
            a.isArray(this.options.values) && (l = this.options.values.length);
            a.Widget.prototype._setOption.apply(this, arguments);
            switch (o) {
                case "disabled":
                    e ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.propAttr("disabled", true), this.element.addClass("ui-disabled")) : (this.handles.propAttr("disabled", false), this.element.removeClass("ui-disabled"));
                    break;
                case "orientation":
                    this._detectOrientation();
                    this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation);
                    this._refreshValue();
                    break;
                case "value":
                    this._animateOff = true;
                    this._refreshValue();
                    this._change(null, 0);
                    this._animateOff = false;
                    break;
                case "values":
                    this._animateOff = true;
                    this._refreshValue();
                    for (b = 0; b < l; b += 1) this._change(null, b);
                    this._animateOff = false
            }
        },
        _value: function() {
            var o = this.options.value;
            return o = this._trimAlignValue(o)
        },
        _values: function(o) {
            var e, b;
            if (arguments.length) {
                e = this.options.values[o];
                return e = this._trimAlignValue(e)
            }
            e = this.options.values.slice();
            for (b = 0; b < e.length; b += 1) e[b] = this._trimAlignValue(e[b]);
            return e
        },
        _trimAlignValue: function(o) {
            if (o <= this._valueMin()) return this._valueMin();
            if (o >= this._valueMax()) return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1,
                b = (o - this._valueMin()) % e;
            o = o - b;
            Math.abs(b) * 2 >= e && (o += b > 0 ? e : -e);
            return parseFloat(o.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var o =
                this.options.range,
                e = this.options,
                b = this,
                l = this._animateOff ? false : e.animate,
                s, c = {},
                g, d, p, w;
            this.options.values && this.options.values.length ? this.handles.each(function(C) {
                s = (b.values(C) - b._valueMin()) / (b._valueMax() - b._valueMin()) * 100;
                c[b.orientation === "horizontal" ? "left" : "bottom"] = s + "%";
                a(this).stop(1, 1)[l ? "animate" : "css"](c, e.animate);
                b.options.range === true && (b.orientation === "horizontal" ? (C === 0 && b.range.stop(1, 1)[l ? "animate" : "css"]({
                    left: s + "%"
                }, e.animate), C === 1 && b.range[l ? "animate" : "css"]({
                    width: s -
                        g + "%"
                }, {
                    queue: false,
                    duration: e.animate
                })) : (C === 0 && b.range.stop(1, 1)[l ? "animate" : "css"]({
                    bottom: s + "%"
                }, e.animate), C === 1 && b.range[l ? "animate" : "css"]({
                    height: s - g + "%"
                }, {
                    queue: false,
                    duration: e.animate
                })));
                g = s
            }) : (d = this.value(), p = this._valueMin(), w = this._valueMax(), s = w !== p ? (d - p) / (w - p) * 100 : 0, c[b.orientation === "horizontal" ? "left" : "bottom"] = s + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](c, e.animate), o === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[l ? "animate" : "css"]({
                    width: s + "%"
                }, e.animate),
                o === "max" && this.orientation === "horizontal" && this.range[l ? "animate" : "css"]({
                    width: 100 - s + "%"
                }, {
                    queue: false,
                    duration: e.animate
                }), o === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[l ? "animate" : "css"]({
                    height: s + "%"
                }, e.animate), o === "max" && this.orientation === "vertical" && this.range[l ? "animate" : "css"]({
                    height: 100 - s + "%"
                }, {
                    queue: false,
                    duration: e.animate
                }))
        }
    });
    a.extend(a.ui.slider, {
        version: "1.8.17"
    })
})(jQuery);
(function(a) {
    Math.precision = function(c, g) {
        if (g === undefined) g = 0;
        return Math.round(c * Math.pow(10, g)) / Math.pow(10, g)
    };
    var o = function(c, g) {
            var d = this,
                p = c.find("img:first"),
                w = 0,
                C = 100,
                v = 100,
                L = 0,
                Q = 100,
                J = 100,
                H = 0,
                U = 0,
                R, N, ca = [],
                la = function(Z) {
                    for (var da = 0; da < ca.length; da++) ca[da].call(d, d, Z)
                },
                X = function(Z) {
                    var da = c.offset();
                    R = {
                        l: da.left | 0,
                        t: da.top | 0
                    };
                    clearTimeout(N);
                    N = setTimeout(function() {
                        ta.call(d, Z)
                    }, 0);
                    a(document).bind("mousemove", W).bind("mouseup", fa);
                    Z.preventDefault()
                },
                W = function(Z) {
                    clearTimeout(N);
                    N = setTimeout(function() {
                        ta.call(d, Z)
                    }, 0);
                    Z.stopPropagation();
                    Z.preventDefault();
                    return false
                },
                fa = function(Z) {
                    a(document).unbind("mouseup", fa).unbind("mousemove", W);
                    Z.stopPropagation();
                    Z.preventDefault();
                    return false
                },
                ta = function(Z) {
                    var da = Z.pageX - R.l;
                    Z = Z.pageY - R.t;
                    var pa = c.w,
                        oa = c.h;
                    if (da < 0) da = 0;
                    else if (da > pa) da = pa;
                    if (Z < 0) Z = 0;
                    else if (Z > oa) Z = oa;
                    ia.call(d, "xy", {
                        x: da / pa * v + w,
                        y: Z / oa * J + L
                    })
                },
                ia = function(Z, da, pa) {
                    if (da === undefined) {
                        if (Z === undefined || Z == null) Z = "xy";
                        switch (Z.toLowerCase()) {
                            case "x":
                                return H;
                            case "y":
                                return U;
                            default:
                                return {
                                    x: H,
                                    y: U
                                }
                        }
                    }
                    if (!(pa != null && pa == d)) {
                        var oa = false,
                            ma, na;
                        if (Z == null) Z = "xy";
                        switch (Z.toLowerCase()) {
                            case "x":
                                ma = da && (da.x && da.x | 0 || da | 0) || 0;
                                break;
                            case "y":
                                na = da && (da.y && da.y | 0 || da | 0) || 0;
                                break;
                            default:
                                ma = da && da.x && da.x | 0 || 0;
                                na = da && da.y && da.y | 0 || 0
                        }
                        if (ma != null) {
                            if (ma < w) ma = w;
                            else if (ma > C) ma = C;
                            if (H != ma) {
                                H = ma;
                                oa = true
                            }
                        }
                        if (na != null) {
                            if (na < L) na = L;
                            else if (na > Q) na = Q;
                            if (U != na) {
                                U = na;
                                oa = true
                            }
                        }
                        oa && la.call(d, pa || d)
                    }
                },
                ka = function(Z) {
                    a.isFunction(Z) && ca.push(Z)
                };
            a.extend(true, d, {
                val: ia,
                range: function(Z,
                    da) {
                    if (da === undefined) {
                        if (Z === undefined || Z == null) Z = "all";
                        switch (Z.toLowerCase()) {
                            case "minx":
                                return w;
                            case "maxx":
                                return C;
                            case "rangex":
                                return {
                                    minX: w,
                                    maxX: C,
                                    rangeX: v
                                };
                            case "miny":
                                return L;
                            case "maxy":
                                return Q;
                            case "rangey":
                                return {
                                    minY: L,
                                    maxY: Q,
                                    rangeY: J
                                };
                            default:
                                return {
                                    minX: w,
                                    maxX: C,
                                    rangeX: v,
                                    minY: L,
                                    maxY: Q,
                                    rangeY: J
                                }
                        }
                    }
                    var pa, oa, ma, na;
                    if (Z == null) Z = "all";
                    switch (Z.toLowerCase()) {
                        case "minx":
                            pa = da && (da.minX && da.minX | 0 || da | 0) || 0;
                            break;
                        case "maxx":
                            oa = da && (da.maxX && da.maxX | 0 || da | 0) || 0;
                            break;
                        case "rangex":
                            pa =
                                da && da.minX && da.minX | 0 || 0;
                            oa = da && da.maxX && da.maxX | 0 || 0;
                            break;
                        case "miny":
                            ma = da && (da.minY && da.minY | 0 || da | 0) || 0;
                            break;
                        case "maxy":
                            na = da && (da.maxY && da.maxY | 0 || da | 0) || 0;
                            break;
                        case "rangey":
                            ma = da && da.minY && da.minY | 0 || 0;
                            na = da && da.maxY && da.maxY | 0 || 0;
                            break;
                        default:
                            pa = da && da.minX && da.minX | 0 || 0;
                            oa = da && da.maxX && da.maxX | 0 || 0;
                            ma = da && da.minY && da.minY | 0 || 0;
                            na = da && da.maxY && da.maxY | 0 || 0
                    }
                    if (pa != null && w != pa) {
                        w = pa;
                        v = C - w
                    }
                    if (oa != null && C != oa) {
                        C = oa;
                        v = C - w
                    }
                    if (ma != null && L != ma) {
                        L = ma;
                        J = Q - L
                    }
                    if (na != null && Q != na) {
                        Q = na;
                        J = Q - L
                    }
                },
                bind: ka,
                unbind: function(Z) {
                    if (a.isFunction(Z))
                        for (var da;
                            (da = a.inArray(Z, ca)) != -1;) ca.splice(da, 1)
                },
                destroy: function() {
                    a(document).unbind("mouseup", fa).unbind("mousemove", W);
                    c.unbind("mousedown", X);
                    ca = p = c = null
                }
            });
            p.src = g.arrow && g.arrow.image;
            p.w = g.arrow && g.arrow.width || p.width();
            p.h = g.arrow && g.arrow.height || p.height();
            c.w = g.map && g.map.width || c.width();
            c.h = g.map && g.map.height || c.height();
            c.bind("mousedown", X);
            ka.call(d, function() {
                var Z = 0,
                    da = 0,
                    pa = c.w,
                    oa = c.h,
                    ma = p.w,
                    na = p.h;
                setTimeout(function() {
                    if (v > 0) Z = H == C ?
                        pa : H / v * pa | 0;
                    if (J > 0) da = U == Q ? oa : U / J * oa | 0;
                    if (ma >= pa) Z = (pa >> 1) - (ma >> 1);
                    else Z -= ma >> 1;
                    if (na >= oa) da = (oa >> 1) - (na >> 1);
                    else da -= na >> 1;
                    p.css({
                        left: Z + "px",
                        top: da + "px"
                    })
                }, 0)
            })
        },
        e = function(c, g, d, p) {
            var w = this;
            c = c.find("td.Text input");
            var C = c.eq(3),
                v = c.eq(4),
                L = c.eq(5),
                Q = c.length > 7 ? c.eq(6) : null,
                J = c.eq(0),
                H = c.eq(1),
                U = c.eq(2),
                R = c.eq(c.length > 7 ? 7 : 6),
                N = c.length > 7 ? c.eq(8) : null,
                ca = function(ia) {
                    if (!(ia.target.value == "" && ia.target != R.get(0) && (d != null && ia.target != d.get(0) || d == null))) {
                        if (!W(ia)) return ia;
                        switch (ia.target) {
                            case C.get(0):
                                switch (ia.keyCode) {
                                    case 38:
                                        C.val(fa.call(w,
                                            (C.val() << 0) + 1, 0, 255));
                                        g.val("r", C.val(), ia.target);
                                        return false;
                                    case 40:
                                        C.val(fa.call(w, (C.val() << 0) - 1, 0, 255));
                                        g.val("r", C.val(), ia.target);
                                        return false
                                }
                                break;
                            case v.get(0):
                                switch (ia.keyCode) {
                                    case 38:
                                        v.val(fa.call(w, (v.val() << 0) + 1, 0, 255));
                                        g.val("g", v.val(), ia.target);
                                        return false;
                                    case 40:
                                        v.val(fa.call(w, (v.val() << 0) - 1, 0, 255));
                                        g.val("g", v.val(), ia.target);
                                        return false
                                }
                                break;
                            case L.get(0):
                                switch (ia.keyCode) {
                                    case 38:
                                        L.val(fa.call(w, (L.val() << 0) + 1, 0, 255));
                                        g.val("b", L.val(), ia.target);
                                        return false;
                                    case 40:
                                        L.val(fa.call(w,
                                            (L.val() << 0) - 1, 0, 255));
                                        g.val("b", L.val(), ia.target);
                                        return false
                                }
                                break;
                            case Q && Q.get(0):
                                switch (ia.keyCode) {
                                    case 38:
                                        Q.val(fa.call(w, parseFloat(Q.val()) + 1, 0, 100));
                                        g.val("a", Math.precision(Q.val() * 255 / 100, p), ia.target);
                                        return false;
                                    case 40:
                                        Q.val(fa.call(w, parseFloat(Q.val()) - 1, 0, 100));
                                        g.val("a", Math.precision(Q.val() * 255 / 100, p), ia.target);
                                        return false
                                }
                                break;
                            case J.get(0):
                                switch (ia.keyCode) {
                                    case 38:
                                        J.val(fa.call(w, (J.val() << 0) + 1, 0, 360));
                                        g.val("h", J.val(), ia.target);
                                        return false;
                                    case 40:
                                        J.val(fa.call(w,
                                            (J.val() << 0) - 1, 0, 360));
                                        g.val("h", J.val(), ia.target);
                                        return false
                                }
                                break;
                            case H.get(0):
                                switch (ia.keyCode) {
                                    case 38:
                                        H.val(fa.call(w, (H.val() << 0) + 1, 0, 100));
                                        g.val("s", H.val(), ia.target);
                                        return false;
                                    case 40:
                                        H.val(fa.call(w, (H.val() << 0) - 1, 0, 100));
                                        g.val("s", H.val(), ia.target);
                                        return false
                                }
                                break;
                            case U.get(0):
                                switch (ia.keyCode) {
                                    case 38:
                                        U.val(fa.call(w, (U.val() << 0) + 1, 0, 100));
                                        g.val("v", U.val(), ia.target);
                                        return false;
                                    case 40:
                                        U.val(fa.call(w, (U.val() << 0) - 1, 0, 100));
                                        g.val("v", U.val(), ia.target);
                                        return false
                                }
                        }
                    }
                },
                la = function(ia) {
                    if (!(ia.target.value == "" && ia.target != R.get(0) && (d != null && ia.target != d.get(0) || d == null))) {
                        if (!W(ia)) return ia;
                        switch (ia.target) {
                            case C.get(0):
                                C.val(fa.call(w, C.val(), 0, 255));
                                g.val("r", C.val(), ia.target);
                                break;
                            case v.get(0):
                                v.val(fa.call(w, v.val(), 0, 255));
                                g.val("g", v.val(), ia.target);
                                break;
                            case L.get(0):
                                L.val(fa.call(w, L.val(), 0, 255));
                                g.val("b", L.val(), ia.target);
                                break;
                            case Q && Q.get(0):
                                Q.val(fa.call(w, Q.val(), 0, 100));
                                g.val("a", Math.precision(Q.val() * 255 / 100, p), ia.target);
                                break;
                            case J.get(0):
                                J.val(fa.call(w,
                                    J.val(), 0, 360));
                                g.val("h", J.val(), ia.target);
                                break;
                            case H.get(0):
                                H.val(fa.call(w, H.val(), 0, 100));
                                g.val("s", H.val(), ia.target);
                                break;
                            case U.get(0):
                                U.val(fa.call(w, U.val(), 0, 100));
                                g.val("v", U.val(), ia.target);
                                break;
                            case R.get(0):
                                R.val(R.val().replace(/[^a-fA-F0-9]/g, "").toLowerCase().substring(0, 6));
                                d && d.val(R.val());
                                g.val("hex", R.val() != "" ? R.val() : null, ia.target);
                                break;
                            case d && d.get(0):
                                d.val(d.val().replace(/[^a-fA-F0-9]/g, "").toLowerCase().substring(0, 6));
                                R.val(d.val());
                                g.val("hex", d.val() != "" ? d.val() :
                                    null, ia.target);
                                break;
                            case N && N.get(0):
                                N.val(N.val().replace(/[^a-fA-F0-9]/g, "").toLowerCase().substring(0, 2));
                                g.val("a", N.val() != null ? parseInt(N.val(), 16) : null, ia.target)
                        }
                    }
                },
                X = function(ia) {
                    if (g.val() != null) switch (ia.target) {
                        case C.get(0):
                            C.val(g.val("r"));
                            break;
                        case v.get(0):
                            v.val(g.val("g"));
                            break;
                        case L.get(0):
                            L.val(g.val("b"));
                            break;
                        case Q && Q.get(0):
                            Q.val(Math.precision(g.val("a") * 100 / 255, p));
                            break;
                        case J.get(0):
                            J.val(g.val("h"));
                            break;
                        case H.get(0):
                            H.val(g.val("s"));
                            break;
                        case U.get(0):
                            U.val(g.val("v"));
                            break;
                        case R.get(0):
                        case d && d.get(0):
                            R.val(g.val("hex"));
                            d && d.val(g.val("hex"));
                            break;
                        case N && N.get(0):
                            N.val(g.val("ahex").substring(6))
                    }
                },
                W = function(ia) {
                    switch (ia.keyCode) {
                        case 9:
                        case 16:
                        case 29:
                        case 37:
                        case 39:
                            return false;
                        case "c".charCodeAt():
                        case "v".charCodeAt():
                            if (ia.ctrlKey) return false
                    }
                    return true
                },
                fa = function(ia, ka, Z) {
                    if (ia == "" || isNaN(ia)) return ka;
                    if (ia > Z) return Z;
                    if (ia < ka) return ka;
                    return ia
                },
                ta = function(ia, ka) {
                    var Z = ia.val("all");
                    if (ka != C.get(0)) C.val(Z != null ? Z.r : "");
                    if (ka != v.get(0)) v.val(Z !=
                        null ? Z.g : "");
                    if (ka != L.get(0)) L.val(Z != null ? Z.b : "");
                    if (Q && ka != Q.get(0)) Q.val(Z != null ? Math.precision(Z.a * 100 / 255, p) : "");
                    if (ka != J.get(0)) J.val(Z != null ? Z.h : "");
                    if (ka != H.get(0)) H.val(Z != null ? Z.s : "");
                    if (ka != U.get(0)) U.val(Z != null ? Z.v : "");
                    if (ka != R.get(0) && (d && ka != d.get(0) || !d)) R.val(Z != null ? Z.hex : "");
                    if (d && ka != d.get(0) && ka != R.get(0)) d.val(Z != null ? Z.hex : "");
                    if (N && ka != N.get(0)) N.val(Z != null ? Z.ahex.substring(6) : "")
                };
            a.extend(true, w, {
                destroy: function() {
                    C.add(v).add(L).add(Q).add(J).add(H).add(U).add(R).add(d).add(N).unbind("keyup",
                        la).unbind("blur", X);
                    C.add(v).add(L).add(Q).add(J).add(H).add(U).unbind("keydown", ca);
                    g.unbind(ta);
                    N = R = U = H = J = Q = L = v = C = null
                }
            });
            C.add(v).add(L).add(Q).add(J).add(H).add(U).add(R).add(d).add(N).bind("keyup", la).bind("blur", X);
            C.add(v).add(L).add(Q).add(J).add(H).add(U).bind("keydown", ca);
            g.bind(ta)
        };
    a.jPicker = {
        List: [],
        Color: function(c) {
            var g = this,
                d, p, w, C, v, L, Q, J = [],
                H = function(R) {
                    for (var N = 0; N < J.length; N++) J[N].call(g, g, R)
                },
                U = function(R, N, ca) {
                    if (N === undefined) {
                        if (R === undefined || R == null || R == "") R = "all";
                        if (d == null) return null;
                        switch (R.toLowerCase()) {
                            case "ahex":
                                return s.rgbaToHex({
                                    r: d,
                                    g: p,
                                    b: w,
                                    a: C
                                });
                            case "hex":
                                return U("ahex").substring(0, 6);
                            case "all":
                                return {
                                    r: d,
                                    g: p,
                                    b: w,
                                    a: C,
                                    h: v,
                                    s: L,
                                    v: Q,
                                    hex: U.call(g, "hex"),
                                    ahex: U.call(g, "ahex")
                                };
                            default:
                                N = {};
                                for (var la = 0; la < R.length; la++) switch (R.charAt(la)) {
                                    case "r":
                                        if (R.length == 1) N = d;
                                        else N.r = d;
                                        break;
                                    case "g":
                                        if (R.length == 1) N = p;
                                        else N.g = p;
                                        break;
                                    case "b":
                                        if (R.length == 1) N = w;
                                        else N.b = w;
                                        break;
                                    case "a":
                                        if (R.length == 1) N = C;
                                        else N.a = C;
                                        break;
                                    case "h":
                                        if (R.length == 1) N = v;
                                        else N.h = v;
                                        break;
                                    case "s":
                                        if (R.length == 1) N = L;
                                        else N.s = L;
                                        break;
                                    case "v":
                                        if (R.length == 1) N = Q;
                                        else N.v = Q
                                }
                                return N == {} ? U.call(g, "all") : N
                        }
                    }
                    if (!(ca != null && ca == g)) {
                        var X = false;
                        if (R == null) R = "";
                        if (N == null) {
                            if (d != null) {
                                d = null;
                                X = true
                            }
                            if (p != null) {
                                p = null;
                                X = true
                            }
                            if (w != null) {
                                w = null;
                                X = true
                            }
                            if (C != null) {
                                C = null;
                                X = true
                            }
                            if (v != null) {
                                v = null;
                                X = true
                            }
                            if (L != null) {
                                L = null;
                                X = true
                            }
                            if (Q != null) {
                                Q = null;
                                X = true
                            }
                            X && H.call(g, ca || g)
                        } else switch (R.toLowerCase()) {
                            case "ahex":
                            case "hex":
                                N = s.hexToRgba(N && (N.ahex || N.hex) || N || "00000000");
                                U.call(g,
                                    "rgba", {
                                        r: N.r,
                                        g: N.g,
                                        b: N.b,
                                        a: R == "ahex" ? N.a : C != null ? C : 255
                                    }, ca);
                                break;
                            default:
                                if (N && (N.ahex != null || N.hex != null)) {
                                    U.call(g, "ahex", N.ahex || N.hex || "00000000", ca);
                                    break
                                }
                                var W = {},
                                    fa = false,
                                    ta = false;
                                if (N.r !== undefined && !R.indexOf("r") == -1) R += "r";
                                if (N.g !== undefined && !R.indexOf("g") == -1) R += "g";
                                if (N.b !== undefined && !R.indexOf("b") == -1) R += "b";
                                if (N.a !== undefined && !R.indexOf("a") == -1) R += "a";
                                if (N.h !== undefined && !R.indexOf("h") == -1) R += "h";
                                if (N.s !== undefined && !R.indexOf("s") == -1) R += "s";
                                if (N.v !== undefined && !R.indexOf("v") ==
                                    -1) R += "v";
                                for (la = 0; la < R.length; la++) switch (R.charAt(la)) {
                                    case "r":
                                        if (ta) continue;
                                        fa = true;
                                        W.r = N && N.r && N.r | 0 || N && N | 0 || 0;
                                        if (W.r < 0) W.r = 0;
                                        else if (W.r > 255) W.r = 255;
                                        if (d != W.r) {
                                            d = W.r;
                                            X = true
                                        }
                                        break;
                                    case "g":
                                        if (ta) continue;
                                        fa = true;
                                        W.g = N && N.g && N.g | 0 || N && N | 0 || 0;
                                        if (W.g < 0) W.g = 0;
                                        else if (W.g > 255) W.g = 255;
                                        if (p != W.g) {
                                            p = W.g;
                                            X = true
                                        }
                                        break;
                                    case "b":
                                        if (ta) continue;
                                        fa = true;
                                        W.b = N && N.b && N.b | 0 || N && N | 0 || 0;
                                        if (W.b < 0) W.b = 0;
                                        else if (W.b > 255) W.b = 255;
                                        if (w != W.b) {
                                            w = W.b;
                                            X = true
                                        }
                                        break;
                                    case "a":
                                        W.a = N && N.a != null ? N.a | 0 : N != null ? N | 0 : 255;
                                        if (W.a <
                                            0) W.a = 0;
                                        else if (W.a > 255) W.a = 255;
                                        if (C != W.a) {
                                            C = W.a;
                                            X = true
                                        }
                                        break;
                                    case "h":
                                        if (fa) continue;
                                        ta = true;
                                        W.h = N && N.h && N.h | 0 || N && N | 0 || 0;
                                        if (W.h < 0) W.h = 0;
                                        else if (W.h > 360) W.h = 360;
                                        if (v != W.h) {
                                            v = W.h;
                                            X = true
                                        }
                                        break;
                                    case "s":
                                        if (fa) continue;
                                        ta = true;
                                        W.s = N && N.s != null ? N.s | 0 : N != null ? N | 0 : 100;
                                        if (W.s < 0) W.s = 0;
                                        else if (W.s > 100) W.s = 100;
                                        if (L != W.s) {
                                            L = W.s;
                                            X = true
                                        }
                                        break;
                                    case "v":
                                        if (fa) continue;
                                        ta = true;
                                        W.v = N && N.v != null ? N.v | 0 : N != null ? N | 0 : 100;
                                        if (W.v < 0) W.v = 0;
                                        else if (W.v > 100) W.v = 100;
                                        if (Q != W.v) {
                                            Q = W.v;
                                            X = true
                                        }
                                }
                                if (X) {
                                    if (fa) {
                                        d = d || 0;
                                        p = p || 0;
                                        w = w || 0;
                                        N = s.rgbToHsv({
                                            r: d,
                                            g: p,
                                            b: w
                                        });
                                        v = N.h;
                                        L = N.s;
                                        Q = N.v
                                    } else if (ta) {
                                        v = v || 0;
                                        L = L != null ? L : 100;
                                        Q = Q != null ? Q : 100;
                                        N = s.hsvToRgb({
                                            h: v,
                                            s: L,
                                            v: Q
                                        });
                                        d = N.r;
                                        p = N.g;
                                        w = N.b
                                    }
                                    C = C != null ? C : 255;
                                    H.call(g, ca || g)
                                }
                        }
                    }
                };
            a.extend(true, g, {
                val: U,
                bind: function(R) {
                    a.isFunction(R) && J.push(R)
                },
                unbind: function(R) {
                    if (a.isFunction(R))
                        for (var N;
                            (N = a.inArray(R, J)) != -1;) J.splice(N, 1)
                },
                destroy: function() {
                    J = null
                }
            });
            if (c)
                if (c.ahex != null) U("ahex", c);
                else if (c.hex != null) U((c.a != null ? "a" : "") + "hex", c.a != null ? {
                ahex: c.hex + s.intToHex(c.a)
            } : c);
            else if (c.r != null &&
                c.g != null && c.b != null) U("rgb" + (c.a != null ? "a" : ""), c);
            else if (c.h != null && c.s != null && c.v != null) U("hsv" + (c.a != null ? "a" : ""), c)
        },
        ColorMethods: {
            hexToRgba: function(c) {
                c = this.validateHex(c);
                if (c == "") return {
                    r: null,
                    g: null,
                    b: null,
                    a: null
                };
                var g = "00",
                    d = "00",
                    p = "00",
                    w = "255";
                if (c.length == 6) c += "ff";
                if (c.length > 6) {
                    g = c.substring(0, 2);
                    d = c.substring(2, 4);
                    p = c.substring(4, 6);
                    w = c.substring(6, c.length)
                } else {
                    if (c.length > 4) {
                        g = c.substring(4, c.length);
                        c = c.substring(0, 4)
                    }
                    if (c.length > 2) {
                        d = c.substring(2, c.length);
                        c = c.substring(0,
                            2)
                    }
                    if (c.length > 0) p = c.substring(0, c.length)
                }
                return {
                    r: this.hexToInt(g),
                    g: this.hexToInt(d),
                    b: this.hexToInt(p),
                    a: this.hexToInt(w)
                }
            },
            validateHex: function(c) {
                if (typeof c == "object") return "";
                c = c.toLowerCase().replace(/[^a-f0-9]/g, "");
                if (c.length > 8) c = c.substring(0, 8);
                return c
            },
            rgbaToHex: function(c) {
                return this.intToHex(c.r) + this.intToHex(c.g) + this.intToHex(c.b) + this.intToHex(c.a)
            },
            intToHex: function(c) {
                c = (c | 0).toString(16);
                if (c.length == 1) c = "0" + c;
                return c.toLowerCase()
            },
            hexToInt: function(c) {
                return parseInt(c,
                    16)
            },
            rgbToHsv: function(c) {
                var g = c.r / 255,
                    d = c.g / 255;
                c = c.b / 255;
                var p = {
                        h: 0,
                        s: 0,
                        v: 0
                    },
                    w = 0,
                    C = 0;
                if (g >= d && g >= c) {
                    C = g;
                    w = d > c ? c : d
                } else if (d >= c && d >= g) {
                    C = d;
                    w = g > c ? c : g
                } else {
                    C = c;
                    w = d > g ? g : d
                }
                p.v = C;
                p.s = C ? (C - w) / C : 0;
                if (p.s) {
                    w = C - w;
                    p.h = g == C ? (d - c) / w : d == C ? 2 + (c - g) / w : 4 + (g - d) / w;
                    p.h = parseInt(p.h * 60);
                    if (p.h < 0) p.h += 360
                } else p.h = 0;
                p.s = p.s * 100 | 0;
                p.v = p.v * 100 | 0;
                return p
            },
            hsvToRgb: function(c) {
                var g = {
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 100
                    },
                    d = c.h,
                    p = c.s;
                c = c.v;
                if (p == 0) g.r = c == 0 ? g.g = g.b = 0 : g.g = g.b = c * 255 / 100 | 0;
                else {
                    if (d == 360) d = 0;
                    d /= 60;
                    p /= 100;
                    c /= 100;
                    var w = d | 0,
                        C = d -
                        w;
                    d = c * (1 - p);
                    var v = c * (1 - p * C);
                    p = c * (1 - p * (1 - C));
                    switch (w) {
                        case 0:
                            g.r = c;
                            g.g = p;
                            g.b = d;
                            break;
                        case 1:
                            g.r = v;
                            g.g = c;
                            g.b = d;
                            break;
                        case 2:
                            g.r = d;
                            g.g = c;
                            g.b = p;
                            break;
                        case 3:
                            g.r = d;
                            g.g = v;
                            g.b = c;
                            break;
                        case 4:
                            g.r = p;
                            g.g = d;
                            g.b = c;
                            break;
                        case 5:
                            g.r = c;
                            g.g = d;
                            g.b = v
                    }
                    g.r = g.r * 255 | 0;
                    g.g = g.g * 255 | 0;
                    g.b = g.b * 255 | 0
                }
                return g
            }
        }
    };
    var b = a.jPicker.Color,
        l = a.jPicker.List,
        s = a.jPicker.ColorMethods;
    a.fn.jPicker = function(c) {
        var g = arguments;
        return this.each(function() {
            var d = this,
                p = a.extend(true, {}, a.fn.jPicker.defaults, c);
            if (a(d).get(0).nodeName.toLowerCase() ==
                "input") {
                a.extend(true, p, {
                    window: {
                        bindToInput: true,
                        expandable: true,
                        input: a(d)
                    }
                });
                if (a(d).val() == "") {
                    p.color.active = new b({
                        hex: null
                    });
                    p.color.current = new b({
                        hex: null
                    })
                } else if (s.validateHex(a(d).val())) {
                    p.color.active = new b({
                        hex: a(d).val(),
                        a: p.color.active.val("a")
                    });
                    p.color.current = new b({
                        hex: a(d).val(),
                        a: p.color.active.val("a")
                    })
                }
            }
            if (p.window.expandable) a(d).after('<span class="jPicker"><span class="Icon"><span class="Color">&nbsp;</span><span class="Alpha">&nbsp;</span><span class="Image" title="Click To Open Color Picker">&nbsp;</span><span class="Container">&nbsp;</span></span></span>');
            else p.window.liveUpdate = false;
            var w = parseFloat(navigator.appVersion.split("MSIE")[1]) < 7 && document.body.filters,
                C = null,
                v = null,
                L = null,
                Q = null,
                J = null,
                H = null,
                U = null,
                R = null,
                N = null,
                ca = null,
                la = null,
                X = null,
                W = null,
                fa = null,
                ta = null,
                ia = null,
                ka = null,
                Z = null,
                da = null,
                pa = null,
                oa = null,
                ma = null,
                na = null,
                Ja = null,
                Fa = null,
                Na = null,
                Sa = null,
                Ia = null,
                Ka = function(M) {
                    var P = ja.active,
                        ba = P.val("hex"),
                        Ca, Ma;
                    p.color.mode = M;
                    switch (M) {
                        case "h":
                            setTimeout(function() {
                                Ta.call(d, v, "transparent");
                                Da.call(d, Q, 0);
                                ua.call(d, Q, 100);
                                Da.call(d,
                                    J, 260);
                                ua.call(d, J, 100);
                                Ta.call(d, L, "transparent");
                                Da.call(d, U, 0);
                                ua.call(d, U, 100);
                                Da.call(d, R, 260);
                                ua.call(d, R, 100);
                                Da.call(d, N, 260);
                                ua.call(d, N, 100);
                                Da.call(d, ca, 260);
                                ua.call(d, ca, 100);
                                Da.call(d, X, 260);
                                ua.call(d, X, 100)
                            }, 0);
                            W.range("all", {
                                minX: 0,
                                maxX: 100,
                                minY: 0,
                                maxY: 100
                            });
                            fa.range("rangeY", {
                                minY: 0,
                                maxY: 360
                            });
                            if (P.val("ahex") == null) break;
                            W.val("xy", {
                                x: P.val("s"),
                                y: 100 - P.val("v")
                            }, W);
                            fa.val("y", 360 - P.val("h"), fa);
                            break;
                        case "s":
                            setTimeout(function() {
                                Ta.call(d, v, "transparent");
                                Da.call(d, Q, -260);
                                Da.call(d,
                                    J, -520);
                                Da.call(d, U, -260);
                                Da.call(d, R, -520);
                                Da.call(d, X, 260);
                                ua.call(d, X, 100)
                            }, 0);
                            W.range("all", {
                                minX: 0,
                                maxX: 360,
                                minY: 0,
                                maxY: 100
                            });
                            fa.range("rangeY", {
                                minY: 0,
                                maxY: 100
                            });
                            if (P.val("ahex") == null) break;
                            W.val("xy", {
                                x: P.val("h"),
                                y: 100 - P.val("v")
                            }, W);
                            fa.val("y", 100 - P.val("s"), fa);
                            break;
                        case "v":
                            setTimeout(function() {
                                Ta.call(d, v, "000000");
                                Da.call(d, Q, -780);
                                Da.call(d, J, 260);
                                Ta.call(d, L, ba);
                                Da.call(d, U, -520);
                                Da.call(d, R, 260);
                                ua.call(d, R, 100);
                                Da.call(d, X, 260);
                                ua.call(d, X, 100)
                            }, 0);
                            W.range("all", {
                                minX: 0,
                                maxX: 360,
                                minY: 0,
                                maxY: 100
                            });
                            fa.range("rangeY", {
                                minY: 0,
                                maxY: 100
                            });
                            if (P.val("ahex") == null) break;
                            W.val("xy", {
                                x: P.val("h"),
                                y: 100 - P.val("s")
                            }, W);
                            fa.val("y", 100 - P.val("v"), fa);
                            break;
                        case "r":
                            Ca = -1040;
                            Ma = -780;
                            W.range("all", {
                                minX: 0,
                                maxX: 255,
                                minY: 0,
                                maxY: 255
                            });
                            fa.range("rangeY", {
                                minY: 0,
                                maxY: 255
                            });
                            if (P.val("ahex") == null) break;
                            W.val("xy", {
                                x: P.val("b"),
                                y: 255 - P.val("g")
                            }, W);
                            fa.val("y", 255 - P.val("r"), fa);
                            break;
                        case "g":
                            Ca = -1560;
                            Ma = -1820;
                            W.range("all", {
                                minX: 0,
                                maxX: 255,
                                minY: 0,
                                maxY: 255
                            });
                            fa.range("rangeY", {
                                minY: 0,
                                maxY: 255
                            });
                            if (P.val("ahex") == null) break;
                            W.val("xy", {
                                x: P.val("b"),
                                y: 255 - P.val("r")
                            }, W);
                            fa.val("y", 255 - P.val("g"), fa);
                            break;
                        case "b":
                            Ca = -2080;
                            Ma = -2860;
                            W.range("all", {
                                minX: 0,
                                maxX: 255,
                                minY: 0,
                                maxY: 255
                            });
                            fa.range("rangeY", {
                                minY: 0,
                                maxY: 255
                            });
                            if (P.val("ahex") == null) break;
                            W.val("xy", {
                                x: P.val("r"),
                                y: 255 - P.val("g")
                            }, W);
                            fa.val("y", 255 - P.val("b"), fa);
                            break;
                        case "a":
                            setTimeout(function() {
                                Ta.call(d, v, "transparent");
                                Da.call(d, Q, -260);
                                Da.call(d, J, -520);
                                Da.call(d, U, 260);
                                Da.call(d, R, 260);
                                ua.call(d, R, 100);
                                Da.call(d, X, 0);
                                ua.call(d,
                                    X, 100)
                            }, 0);
                            W.range("all", {
                                minX: 0,
                                maxX: 360,
                                minY: 0,
                                maxY: 100
                            });
                            fa.range("rangeY", {
                                minY: 0,
                                maxY: 255
                            });
                            if (P.val("ahex") == null) break;
                            W.val("xy", {
                                x: P.val("h"),
                                y: 100 - P.val("v")
                            }, W);
                            fa.val("y", 255 - P.val("a"), fa);
                            break;
                        default:
                            throw "Invalid Mode";
                    }
                    switch (M) {
                        case "s":
                        case "v":
                        case "a":
                            setTimeout(function() {
                                ua.call(d, Q, 100);
                                ua.call(d, U, 100);
                                Da.call(d, N, 260);
                                ua.call(d, N, 100);
                                Da.call(d, ca, 260);
                                ua.call(d, ca, 100)
                            }, 0);
                            break;
                        case "r":
                        case "g":
                        case "b":
                            setTimeout(function() {
                                Ta.call(d, v, "transparent");
                                Ta.call(d, L, "transparent");
                                ua.call(d, U, 100);
                                ua.call(d, Q, 100);
                                Da.call(d, Q, Ca);
                                Da.call(d, J, Ca - 260);
                                Da.call(d, U, Ma - 780);
                                Da.call(d, R, Ma - 520);
                                Da.call(d, N, Ma);
                                Da.call(d, ca, Ma - 260);
                                Da.call(d, X, 260);
                                ua.call(d, X, 100)
                            }, 0)
                    }
                    P.val("ahex") != null && Ba.call(d, P)
                },
                Ba = function(M, P) {
                    if (P == null || P != fa && P != W) wa.call(d, M, P);
                    setTimeout(function() {
                        kb.call(d, M);
                        vb.call(d, M);
                        cb.call(d, M)
                    }, 0)
                },
                xa = function(M, P) {
                    var ba = ja.active;
                    if (!(P != W && ba.val() == null)) {
                        var Ca = M.val("all");
                        switch (p.color.mode) {
                            case "h":
                                ba.val("sv", {
                                    s: Ca.x,
                                    v: 100 - Ca.y
                                }, P);
                                break;
                            case "s":
                            case "a":
                                ba.val("hv", {
                                    h: Ca.x,
                                    v: 100 - Ca.y
                                }, P);
                                break;
                            case "v":
                                ba.val("hs", {
                                    h: Ca.x,
                                    s: 100 - Ca.y
                                }, P);
                                break;
                            case "r":
                                ba.val("gb", {
                                    g: 255 - Ca.y,
                                    b: Ca.x
                                }, P);
                                break;
                            case "g":
                                ba.val("rb", {
                                    r: 255 - Ca.y,
                                    b: Ca.x
                                }, P);
                                break;
                            case "b":
                                ba.val("rg", {
                                    r: Ca.x,
                                    g: 255 - Ca.y
                                }, P)
                        }
                    }
                },
                ra = function(M, P) {
                    var ba = ja.active;
                    if (!(P != fa && ba.val() == null)) switch (p.color.mode) {
                        case "h":
                            ba.val("h", {
                                h: 360 - M.val("y")
                            }, P);
                            break;
                        case "s":
                            ba.val("s", {
                                s: 100 - M.val("y")
                            }, P);
                            break;
                        case "v":
                            ba.val("v", {
                                v: 100 - M.val("y")
                            }, P);
                            break;
                        case "r":
                            ba.val("r", {
                                r: 255 - M.val("y")
                            }, P);
                            break;
                        case "g":
                            ba.val("g", {
                                g: 255 - M.val("y")
                            }, P);
                            break;
                        case "b":
                            ba.val("b", {
                                b: 255 - M.val("y")
                            }, P);
                            break;
                        case "a":
                            ba.val("a", 255 - M.val("y"), P)
                    }
                },
                wa = function(M, P) {
                    if (P != W) switch (p.color.mode) {
                        case "h":
                            var ba = M.val("sv");
                            W.val("xy", {
                                x: ba != null ? ba.s : 100,
                                y: 100 - (ba != null ? ba.v : 100)
                            }, P);
                            break;
                        case "s":
                        case "a":
                            ba = M.val("hv");
                            W.val("xy", {
                                x: ba && ba.h || 0,
                                y: 100 - (ba != null ? ba.v : 100)
                            }, P);
                            break;
                        case "v":
                            ba = M.val("hs");
                            W.val("xy", {
                                x: ba && ba.h || 0,
                                y: 100 - (ba != null ? ba.s : 100)
                            }, P);
                            break;
                        case "r":
                            ba = M.val("bg");
                            W.val("xy", {
                                x: ba &&
                                    ba.b || 0,
                                y: 255 - (ba && ba.g || 0)
                            }, P);
                            break;
                        case "g":
                            ba = M.val("br");
                            W.val("xy", {
                                x: ba && ba.b || 0,
                                y: 255 - (ba && ba.r || 0)
                            }, P);
                            break;
                        case "b":
                            ba = M.val("rg");
                            W.val("xy", {
                                x: ba && ba.r || 0,
                                y: 255 - (ba && ba.g || 0)
                            }, P)
                    }
                    if (P != fa) switch (p.color.mode) {
                        case "h":
                            fa.val("y", 360 - (M.val("h") || 0), P);
                            break;
                        case "s":
                            ba = M.val("s");
                            fa.val("y", 100 - (ba != null ? ba : 100), P);
                            break;
                        case "v":
                            ba = M.val("v");
                            fa.val("y", 100 - (ba != null ? ba : 100), P);
                            break;
                        case "r":
                            fa.val("y", 255 - (M.val("r") || 0), P);
                            break;
                        case "g":
                            fa.val("y", 255 - (M.val("g") || 0), P);
                            break;
                        case "b":
                            fa.val("y",
                                255 - (M.val("b") || 0), P);
                            break;
                        case "a":
                            ba = M.val("a");
                            fa.val("y", 255 - (ba != null ? ba : 255), P)
                    }
                },
                kb = function(M) {
                    try {
                        var P = M.val("all");
                        pa.css({
                            backgroundColor: P && "#" + P.hex || "transparent"
                        });
                        ua.call(d, pa, P && Math.precision(P.a * 100 / 255, 4) || 0)
                    } catch (ba) {}
                },
                vb = function(M) {
                    switch (p.color.mode) {
                        case "h":
                            Ta.call(d, v, (new b({
                                h: M.val("h") || 0,
                                s: 100,
                                v: 100
                            })).val("hex"));
                            break;
                        case "s":
                        case "a":
                            var P = M.val("s");
                            ua.call(d, J, 100 - (P != null ? P : 100));
                            break;
                        case "v":
                            P = M.val("v");
                            ua.call(d, Q, P != null ? P : 100);
                            break;
                        case "r":
                            ua.call(d,
                                J, Math.precision((M.val("r") || 0) / 255 * 100, 4));
                            break;
                        case "g":
                            ua.call(d, J, Math.precision((M.val("g") || 0) / 255 * 100, 4));
                            break;
                        case "b":
                            ua.call(d, J, Math.precision((M.val("b") || 0) / 255 * 100))
                    }
                    M = M.val("a");
                    ua.call(d, H, Math.precision((255 - (M || 0)) * 100 / 255, 4))
                },
                cb = function(M) {
                    switch (p.color.mode) {
                        case "h":
                            var P = M.val("a");
                            ua.call(d, la, Math.precision((255 - (P || 0)) * 100 / 255, 4));
                            break;
                        case "s":
                            P = M.val("hva");
                            var ba = new b({
                                h: P && P.h || 0,
                                s: 100,
                                v: P != null ? P.v : 100
                            });
                            Ta.call(d, L, ba.val("hex"));
                            ua.call(d, R, 100 - (P != null ? P.v :
                                100));
                            ua.call(d, la, Math.precision((255 - (P && P.a || 0)) * 100 / 255, 4));
                            break;
                        case "v":
                            P = M.val("hsa");
                            ba = new b({
                                h: P && P.h || 0,
                                s: P != null ? P.s : 100,
                                v: 100
                            });
                            Ta.call(d, L, ba.val("hex"));
                            ua.call(d, la, Math.precision((255 - (P && P.a || 0)) * 100 / 255, 4));
                            break;
                        case "r":
                        case "g":
                        case "b":
                            ba = P = 0;
                            M = M.val("rgba");
                            if (p.color.mode == "r") {
                                P = M && M.b || 0;
                                ba = M && M.g || 0
                            } else if (p.color.mode == "g") {
                                P = M && M.b || 0;
                                ba = M && M.r || 0
                            } else if (p.color.mode == "b") {
                                P = M && M.r || 0;
                                ba = M && M.g || 0
                            }
                            var Ca = ba > P ? P : ba;
                            ua.call(d, R, P > ba ? Math.precision((P - ba) / (255 - ba) * 100,
                                4) : 0);
                            ua.call(d, N, ba > P ? Math.precision((ba - P) / (255 - P) * 100, 4) : 0);
                            ua.call(d, ca, Math.precision(Ca / 255 * 100, 4));
                            ua.call(d, la, Math.precision((255 - (M && M.a || 0)) * 100 / 255, 4));
                            break;
                        case "a":
                            P = M.val("a");
                            Ta.call(d, L, M.val("hex") || "000000");
                            ua.call(d, la, P != null ? 0 : 100);
                            ua.call(d, X, P != null ? 100 : 0)
                    }
                },
                Ta = function(M, P) {
                    M.css({
                        backgroundColor: P && P.length == 6 && "#" + P || "transparent"
                    })
                },
                Va = function(M, P) {
                    if (w && (P.indexOf("AlphaBar.png") != -1 || P.indexOf("Bars.png") != -1 || P.indexOf("Maps.png") != -1)) {
                        M.attr("pngSrc", P);
                        M.css({
                            backgroundImage: "none",
                            filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + P + "', sizingMethod='scale')"
                        })
                    } else M.css({
                        backgroundImage: "url('" + P + "')"
                    })
                },
                Da = function(M, P) {
                    M.css({
                        top: P + "px"
                    })
                },
                ua = function(M, P) {
                    M.css({
                        visibility: P > 0 ? "visible" : "hidden"
                    });
                    if (P > 0 && P < 100)
                        if (w) {
                            var ba = M.attr("pngSrc");
                            ba != null && (ba.indexOf("AlphaBar.png") != -1 || ba.indexOf("Bars.png") != -1 || ba.indexOf("Maps.png") != -1) ? M.css({
                                filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + ba + "', sizingMethod='scale') progid:DXImageTransform.Microsoft.Alpha(opacity=" +
                                    P + ")"
                            }) : M.css({
                                opacity: Math.precision(P / 100, 4)
                            })
                        } else M.css({
                            opacity: Math.precision(P / 100, 4)
                        });
                    else if (P == 0 || P == 100)
                        if (w) {
                            ba = M.attr("pngSrc");
                            ba != null && (ba.indexOf("AlphaBar.png") != -1 || ba.indexOf("Bars.png") != -1 || ba.indexOf("Maps.png") != -1) ? M.css({
                                filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + ba + "', sizingMethod='scale')"
                            }) : M.css({
                                opacity: ""
                            })
                        } else M.css({
                            opacity: ""
                        })
                },
                $a = function() {
                    ja.active.val("ahex", ja.current.val("ahex"))
                },
                Ga = function() {
                    ja.current.val("ahex", ja.active.val("ahex"))
                },
                Ra = function(M) {
                    a(this).parents("tbody:first").find('input:radio[value!="' + M.target.value + '"]').removeAttr("checked");
                    Ka.call(d, M.target.value)
                },
                Ea = function() {
                    $a.call(d)
                },
                db = function() {
                    $a.call(d);
                    p.window.expandable && fb.call(d);
                    a.isFunction(ob) && ob.call(d, ja.active, na)
                },
                lb = function() {
                    Ga.call(d);
                    p.window.expandable && fb.call(d);
                    a.isFunction(ib) && ib.call(d, ja.active, ma)
                },
                Ua = function() {
                    pb.call(d)
                },
                Xa = function(M) {
                    var P = M.val("hex");
                    oa.css({
                        backgroundColor: P && "#" + P || "transparent"
                    });
                    ua.call(d, oa, Math.precision((M.val("a") ||
                        0) * 100 / 255, 4))
                },
                wb = function(M) {
                    var P = M.val("hex");
                    M = M.val("va");
                    Fa.css({
                        backgroundColor: P && "#" + P || "transparent"
                    });
                    ua.call(d, Na, Math.precision((255 - (M && M.a || 0)) * 100 / 255, 4));
                    if (p.window.bindToInput && p.window.updateInputColor) p.window.input.css({
                        backgroundColor: P && "#" + P || "transparent",
                        color: M == null || M.v > 75 ? "#000000" : "#ffffff"
                    })
                },
                sa = function(M) {
                    ia = parseInt(C.css("left"));
                    ka = parseInt(C.css("top"));
                    Z = M.pageX;
                    da = M.pageY;
                    a(document).bind("mousemove", hb).bind("mouseup", eb);
                    M.preventDefault()
                },
                hb = function(M) {
                    C.css({
                        left: ia -
                            (Z - M.pageX) + "px",
                        top: ka - (da - M.pageY) + "px"
                    });
                    p.window.expandable && !a.support.boxModel && C.prev().css({
                        left: C.css("left"),
                        top: C.css("top")
                    });
                    M.stopPropagation();
                    M.preventDefault();
                    return false
                },
                eb = function(M) {
                    a(document).unbind("mousemove", hb).unbind("mouseup", eb);
                    M.stopPropagation();
                    M.preventDefault();
                    return false
                },
                sb = function(M) {
                    M.preventDefault();
                    M.stopPropagation();
                    ja.active.val("ahex", a(this).attr("title") || null, M.target);
                    return false
                },
                ib = a.isFunction(g[1]) && g[1] || null,
                ab = a.isFunction(g[2]) && g[2] ||
                null,
                ob = a.isFunction(g[3]) && g[3] || null,
                pb = function() {
                    ja.current.val("ahex", ja.active.val("ahex"));
                    var M = function() {
                        if (!(!p.window.expandable || a.support.boxModel)) {
                            var P = C.find("table:first");
                            C.before("<iframe/>");
                            C.prev().css({
                                width: P.width(),
                                height: C.height(),
                                opacity: 0,
                                position: "absolute",
                                left: C.css("left"),
                                top: C.css("top")
                            })
                        }
                    };
                    if (p.window.expandable) {
                        a(document.body).children("div.jPicker.Container").css({
                            zIndex: 10
                        });
                        C.css({
                            zIndex: 20
                        })
                    }
                    switch (p.window.effects.type) {
                        case "fade":
                            C.fadeIn(p.window.effects.speed.show,
                                M);
                            break;
                        case "slide":
                            C.slideDown(p.window.effects.speed.show, M);
                            break;
                        default:
                            C.show(p.window.effects.speed.show, M)
                    }
                },
                fb = function() {
                    var M = function() {
                        p.window.expandable && C.css({
                            zIndex: 10
                        });
                        !p.window.expandable || a.support.boxModel || C.prev().remove()
                    };
                    switch (p.window.effects.type) {
                        case "fade":
                            C.fadeOut(p.window.effects.speed.hide, M);
                            break;
                        case "slide":
                            C.slideUp(p.window.effects.speed.hide, M);
                            break;
                        default:
                            C.hide(p.window.effects.speed.hide, M)
                    }
                },
                tb = function() {
                    var M = p.window,
                        P = M.expandable ? a(d).next().find(".Container:first") :
                        null;
                    C = M.expandable ? a("<div/>") : a(d);
                    C.addClass("jPicker Container");
                    M.expandable && C.hide();
                    C.get(0).onselectstart = function(ya) {
                        if (ya.target.nodeName.toLowerCase() !== "input") return false
                    };
                    var ba = ja.active.val("all");
                    if (M.alphaPrecision < 0) M.alphaPrecision = 0;
                    else if (M.alphaPrecision > 2) M.alphaPrecision = 2;
                    var Ca = '<table class="jPicker" cellpadding="0" cellspacing="0"><tbody>' + (M.expandable ? '<tr><td class="Move" colspan="5">&nbsp;</td></tr>' : "") + '<tr><td rowspan="9"><h2 class="Title">' + (M.title || Y.text.title) +
                        '</h2><div class="Map"><span class="Map1">&nbsp;</span><span class="Map2">&nbsp;</span><span class="Map3">&nbsp;</span><img src="' + ha.clientPath + ha.colorMap.arrow.file + '" class="Arrow"/></div></td><td rowspan="9"><div class="Bar"><span class="Map1">&nbsp;</span><span class="Map2">&nbsp;</span><span class="Map3">&nbsp;</span><span class="Map4">&nbsp;</span><span class="Map5">&nbsp;</span><span class="Map6">&nbsp;</span><img src="' + ha.clientPath + ha.colorBar.arrow.file + '" class="Arrow"/></div></td><td colspan="2" class="Preview"><div class="prev_div">' +
                        Y.text.newColor + '<div class="color_preview"><span class="Active" title="' + Y.tooltips.colors.newColor + '">&nbsp;</span><span class="Current" title="' + Y.tooltips.colors.currentColor + '">&nbsp;</span></div></div>' + Y.text.currentColor + '</td><td rowspan="9" class="Button"><input type="button" class="Ok" value="' + Y.text.ok + '" title="' + Y.tooltips.buttons.ok + '"/><input type="button" class="Cancel" value="' + Y.text.cancel + '" title="' + Y.tooltips.buttons.cancel + '"/><div class="Grid">&nbsp;</div></td></tr><tr class="Hue"><td class="Radio"><label title="' +
                        Y.tooltips.hue.radio + '"><input type="radio" value="h"' + (p.color.mode == "h" ? ' checked="checked"' : "") + '/>H:</label></td><td class="Text"><input type="text" maxlength="3" value="' + (ba != null ? ba.h : "") + '" title="' + Y.tooltips.hue.textbox + '"/>&nbsp;\u00ba</td></tr><tr class="Saturation"><td class="Radio"><label title="' + Y.tooltips.saturation.radio + '"><input type="radio" value="s"' + (p.color.mode == "s" ? ' checked="checked"' : "") + '/>S:</label></td><td class="Text"><input type="text" maxlength="3" value="' + (ba !=
                            null ? ba.s : "") + '" title="' + Y.tooltips.saturation.textbox + '"/>&nbsp;%</td></tr><tr class="Value"><td class="Radio"><label title="' + Y.tooltips.value.radio + '"><input type="radio" value="v"' + (p.color.mode == "v" ? ' checked="checked"' : "") + '/>V:</label></td><td class="Text"><input type="text" maxlength="3" value="' + (ba != null ? ba.v : "") + '" title="' + Y.tooltips.value.textbox + '"/>&nbsp;%<br/><br/></td></tr><tr class="Red"><td class="Radio"><label title="' + Y.tooltips.red.radio + '"><input type="radio" value="r"' + (p.color.mode ==
                            "r" ? ' checked="checked"' : "") + '/>R:</label></td><td class="Text"><input type="text" maxlength="3" value="' + (ba != null ? ba.r : "") + '" title="' + Y.tooltips.red.textbox + '"/></td></tr><tr class="Green"><td class="Radio"><label title="' + Y.tooltips.green.radio + '"><input type="radio" value="g"' + (p.color.mode == "g" ? ' checked="checked"' : "") + '/>G:</label></td><td class="Text"><input type="text" maxlength="3" value="' + (ba != null ? ba.g : "") + '" title="' + Y.tooltips.green.textbox + '"/></td></tr><tr class="Blue"><td class="Radio"><label title="' +
                        Y.tooltips.blue.radio + '"><input type="radio" value="b"' + (p.color.mode == "b" ? ' checked="checked"' : "") + '/>B:</label></td><td class="Text"><input type="text" maxlength="3" value="' + (ba != null ? ba.b : "") + '" title="' + Y.tooltips.blue.textbox + '"/></td></tr><tr class="Alpha"><td class="Radio">' + (M.alphaSupport ? '<label title="' + Y.tooltips.alpha.radio + '"><input type="radio" value="a"' + (p.color.mode == "a" ? ' checked="checked"' : "") + "/>A:</label>" : "&nbsp;") + '</td><td class="Text">' + (M.alphaSupport ? '<input type="text" maxlength="' +
                            (3 + M.alphaPrecision) + '" value="' + (ba != null ? Math.precision(ba.a * 100 / 255, M.alphaPrecision) : "") + '" title="' + Y.tooltips.alpha.textbox + '"/>&nbsp;%' : "&nbsp;") + '</td></tr><tr class="Hex"><td colspan="2" class="Text"><label title="' + Y.tooltips.hex.textbox + '">#:<input type="text" maxlength="6" class="Hex" value="' + (ba != null ? ba.hex : "") + '"/></label>' + (M.alphaSupport ? '<input type="text" maxlength="2" class="AHex" value="' + (ba != null ? ba.ahex.substring(6) : "") + '" title="' + Y.tooltips.hex.alpha + '"/></td>' : "&nbsp;") +
                        "</tr></tbody></table>";
                    if (M.expandable) {
                        C.html(Ca);
                        a(document.body).children("div.jPicker.Container").length == 0 ? a(document.body).prepend(C) : a(document.body).children("div.jPicker.Container:last").after(C);
                        C.mousedown(function() {
                            a(document.body).children("div.jPicker.Container").css({
                                zIndex: 10
                            });
                            C.css({
                                zIndex: 20
                            })
                        });
                        C.css({
                            left: M.position.x == "left" ? P.offset().left - 530 - (M.position.y == "center" ? 25 : 0) + "px" : M.position.x == "center" ? P.offset().left - 260 + "px" : M.position.x == "right" ? P.offset().left - 10 + (M.position.y ==
                                "center" ? 25 : 0) + "px" : M.position.x == "screenCenter" ? (a(document).width() >> 1) - 260 + "px" : P.offset().left + parseInt(M.position.x) + "px",
                            position: "absolute",
                            top: M.position.y == "top" ? P.offset().top - 312 + "px" : M.position.y == "center" ? P.offset().top - 156 + "px" : M.position.y == "bottom" ? P.offset().top + 25 + "px" : P.offset().top + parseInt(M.position.y) + "px"
                        })
                    } else {
                        C = a(d);
                        C.html(Ca)
                    }
                    Ca = C.find("tbody:first");
                    v = Ca.find("div.Map:first");
                    L = Ca.find("div.Bar:first");
                    var Ma = v.find("span"),
                        Wa = L.find("span");
                    Q = Ma.filter(".Map1:first");
                    J = Ma.filter(".Map2:first");
                    H = Ma.filter(".Map3:first");
                    U = Wa.filter(".Map1:first");
                    R = Wa.filter(".Map2:first");
                    N = Wa.filter(".Map3:first");
                    ca = Wa.filter(".Map4:first");
                    la = Wa.filter(".Map5:first");
                    X = Wa.filter(".Map6:first");
                    W = new o(v, {
                        map: {
                            width: ha.colorMap.width,
                            height: ha.colorMap.height
                        },
                        arrow: {
                            image: ha.clientPath + ha.colorMap.arrow.file,
                            width: ha.colorMap.arrow.width,
                            height: ha.colorMap.arrow.height
                        }
                    });
                    W.bind(xa);
                    fa = new o(L, {
                        map: {
                            width: ha.colorBar.width,
                            height: ha.colorBar.height
                        },
                        arrow: {
                            image: ha.clientPath +
                                ha.colorBar.arrow.file,
                            width: ha.colorBar.arrow.width,
                            height: ha.colorBar.arrow.height
                        }
                    });
                    fa.bind(ra);
                    ta = new e(Ca, ja.active, M.expandable && M.bindToInput ? M.input : null, M.alphaPrecision);
                    Ma = ba != null ? ba.hex : null;
                    var Za = Ca.find(".Preview");
                    Wa = Ca.find(".Button");
                    pa = Za.find(".Active:first").css({
                        backgroundColor: Ma && "#" + Ma || "transparent"
                    });
                    oa = Za.find(".Current:first").css({
                        backgroundColor: Ma && "#" + Ma || "transparent"
                    }).bind("click", Ea);
                    ua.call(d, oa, Math.precision(ja.current.val("a") * 100) / 255, 4);
                    ma = Wa.find(".Ok:first").bind("click touchstart",
                        lb);
                    na = Wa.find(".Cancel:first").bind("click touchstart", db);
                    Ja = Wa.find(".Grid:first");
                    setTimeout(function() {
                        Va.call(d, Q, ha.clientPath + "Maps.png");
                        Va.call(d, J, ha.clientPath + "Maps.png");
                        Va.call(d, H, ha.clientPath + "map-opacity.png");
                        Va.call(d, U, ha.clientPath + "Bars.png");
                        Va.call(d, R, ha.clientPath + "Bars.png");
                        Va.call(d, N, ha.clientPath + "Bars.png");
                        Va.call(d, ca, ha.clientPath + "Bars.png");
                        Va.call(d, la, ha.clientPath + "bar-opacity.png");
                        Va.call(d, X, ha.clientPath + "AlphaBar.png");
                        Va.call(d, Za.find("div:last"), ha.clientPath +
                            "preview-opacity.png")
                    }, 0);
                    Ca.find("td.Radio input").bind("click  touchstart", Ra);
                    if (ja.quickList && ja.quickList.length > 0) {
                        Wa = "";
                        for (i = 0; i < ja.quickList.length; i++) {
                            if ((typeof ja.quickList[i]).toString().toLowerCase() == "string") ja.quickList[i] = new b({
                                hex: ja.quickList[i]
                            });
                            var nb = ja.quickList[i].val("a"),
                                Qa = ja.quickList[i].val("ahex");
                            if (!M.alphaSupport && Qa) Qa = Qa.substring(0, 6) + "ff";
                            var mb = ja.quickList[i].val("hex");
                            Wa += '<span class="QuickColor"' + (Qa && ' title="#' + Qa + '"' || "") + ' style="background-color:' +
                                (mb && "#" + mb || "") + ";" + (mb ? "" : "background-image:url(" + ha.clientPath + "NoColor.png)") + (M.alphaSupport && nb && nb < 255 ? ";opacity:" + Math.precision(nb / 255, 4) + ";filter:Alpha(opacity=" + Math.precision(nb / 2.55, 4) + ")" : "") + '">&nbsp;</span>'
                        }
                        Va.call(d, Ja, ha.clientPath + "bar-opacity.png");
                        Ja.html(Wa);
                        Ja.find(".QuickColor").click(sb)
                    }
                    Ka.call(d, p.color.mode);
                    ja.active.bind(Ba);
                    a.isFunction(ab) && ja.active.bind(ab);
                    ja.current.bind(Xa);
                    if (M.expandable) {
                        d.icon = P.parents(".Icon:first");
                        Fa = d.icon.find(".Color:first").css({
                            backgroundColor: Ma &&
                                "#" + Ma || "transparent"
                        });
                        Na = d.icon.find(".Alpha:first");
                        Va.call(d, Na, ha.clientPath + "bar-opacity.png");
                        ua.call(d, Na, Math.precision((255 - (ba != null ? ba.a : 0)) * 100 / 255, 4));
                        Sa = d.icon.find(".Image:first").css({
                            backgroundImage: "url('" + ha.clientPath + ha.picker.file + "')"
                        }).bind("click", Ua);
                        if (M.bindToInput && M.updateInputColor) M.input.css({
                            backgroundColor: Ma && "#" + Ma || "transparent",
                            color: ba == null || ba.v > 75 ? "#000000" : "#ffffff"
                        });
                        Ia = Ca.find(".Move:first").bind("mousedown", sa);
                        ja.active.bind(wb)
                    } else pb.call(d)
                },
                ha =
                p.images,
                Y = p.localization,
                ja = {
                    active: (typeof p.color.active).toString().toLowerCase() == "string" ? new b({
                        ahex: !p.window.alphaSupport && p.color.active ? p.color.active.substring(0, 6) + "ff" : p.color.active
                    }) : new b({
                        ahex: !p.window.alphaSupport && p.color.active.val("ahex") ? p.color.active.val("ahex").substring(0, 6) + "ff" : p.color.active.val("ahex")
                    }),
                    current: (typeof p.color.active).toString().toLowerCase() == "string" ? new b({
                        ahex: !p.window.alphaSupport && p.color.active ? p.color.active.substring(0, 6) + "ff" : p.color.active
                    }) : new b({
                        ahex: !p.window.alphaSupport && p.color.active.val("ahex") ? p.color.active.val("ahex").substring(0, 6) + "ff" : p.color.active.val("ahex")
                    }),
                    quickList: p.color.quickList
                };
            a.extend(true, d, {
                commitCallback: ib,
                liveCallback: ab,
                cancelCallback: ob,
                color: ja,
                show: pb,
                hide: fb,
                destroy: function() {
                    C.find("td.Radio input  touchstart").unbind("click", Ra);
                    oa.unbind("click  touchstart", Ea);
                    na.unbind("click  touchstart", db);
                    ma.unbind("click  touchstart", lb);
                    if (p.window.expandable) {
                        Sa.unbind("click", Ua);
                        Ia.unbind("mousedown",
                            sa);
                        d.icon = null
                    }
                    C.find(".QuickColor").unbind("click", sb);
                    X = la = ca = N = R = U = H = J = Q = L = v = null;
                    W.destroy();
                    W = null;
                    fa.destroy();
                    fa = null;
                    ta.destroy();
                    ab = ob = ib = Ja = na = ma = oa = pa = ta = null;
                    C.html("");
                    for (i = 0; i < l.length; i++) l[i] == d && l.splice(i, 1)
                }
            });
            l.push(d);
            setTimeout(function() {
                tb.call(d)
            }, 0)
        })
    };
    a.fn.jPicker.defaults = {
        window: {
            title: null,
            effects: {
                type: "slide",
                speed: {
                    show: "slow",
                    hide: "fast"
                }
            },
            position: {
                x: "screenCenter",
                y: "top"
            },
            expandable: false,
            liveUpdate: true,
            alphaSupport: false,
            alphaPrecision: 0,
            updateInputColor: true
        },
        color: {
            mode: "h",
            active: new b({
                ahex: "#ffcc00ff"
            }),
            quickList: [new b({
                    h: 360,
                    s: 33,
                    v: 100
                }), new b({
                    h: 360,
                    s: 66,
                    v: 100
                }), new b({
                    h: 360,
                    s: 100,
                    v: 100
                }), new b({
                    h: 360,
                    s: 100,
                    v: 75
                }), new b({
                    h: 360,
                    s: 100,
                    v: 50
                }), new b({
                    h: 180,
                    s: 0,
                    v: 100
                }), new b({
                    h: 30,
                    s: 33,
                    v: 100
                }), new b({
                    h: 30,
                    s: 66,
                    v: 100
                }), new b({
                    h: 30,
                    s: 100,
                    v: 100
                }), new b({
                    h: 30,
                    s: 100,
                    v: 75
                }), new b({
                    h: 30,
                    s: 100,
                    v: 50
                }), new b({
                    h: 180,
                    s: 0,
                    v: 90
                }), new b({
                    h: 60,
                    s: 33,
                    v: 100
                }), new b({
                    h: 60,
                    s: 66,
                    v: 100
                }), new b({
                    h: 60,
                    s: 100,
                    v: 100
                }), new b({
                    h: 60,
                    s: 100,
                    v: 75
                }), new b({
                    h: 60,
                    s: 100,
                    v: 50
                }), new b({
                    h: 180,
                    s: 0,
                    v: 80
                }), new b({
                    h: 90,
                    s: 33,
                    v: 100
                }), new b({
                    h: 90,
                    s: 66,
                    v: 100
                }), new b({
                    h: 90,
                    s: 100,
                    v: 100
                }), new b({
                    h: 90,
                    s: 100,
                    v: 75
                }), new b({
                    h: 90,
                    s: 100,
                    v: 50
                }), new b({
                    h: 180,
                    s: 0,
                    v: 70
                }), new b({
                    h: 120,
                    s: 33,
                    v: 100
                }), new b({
                    h: 120,
                    s: 66,
                    v: 100
                }), new b({
                    h: 120,
                    s: 100,
                    v: 100
                }), new b({
                    h: 120,
                    s: 100,
                    v: 75
                }), new b({
                    h: 120,
                    s: 100,
                    v: 50
                }), new b({
                    h: 180,
                    s: 0,
                    v: 60
                }), new b({
                    h: 150,
                    s: 33,
                    v: 100
                }), new b({
                    h: 150,
                    s: 66,
                    v: 100
                }), new b({
                    h: 150,
                    s: 100,
                    v: 100
                }), new b({
                    h: 150,
                    s: 100,
                    v: 75
                }), new b({
                    h: 150,
                    s: 100,
                    v: 50
                }), new b({
                    h: 180,
                    s: 0,
                    v: 50
                }), new b({
                    h: 180,
                    s: 33,
                    v: 100
                }), new b({
                    h: 180,
                    s: 66,
                    v: 100
                }), new b({
                    h: 180,
                    s: 100,
                    v: 100
                }), new b({
                    h: 180,
                    s: 100,
                    v: 75
                }), new b({
                    h: 180,
                    s: 100,
                    v: 50
                }), new b({
                    h: 180,
                    s: 0,
                    v: 40
                }), new b({
                    h: 210,
                    s: 33,
                    v: 100
                }), new b({
                    h: 210,
                    s: 66,
                    v: 100
                }), new b({
                    h: 210,
                    s: 100,
                    v: 100
                }), new b({
                    h: 210,
                    s: 100,
                    v: 75
                }), new b({
                    h: 210,
                    s: 100,
                    v: 50
                }), new b({
                    h: 180,
                    s: 0,
                    v: 30
                }), new b({
                    h: 240,
                    s: 33,
                    v: 100
                }), new b({
                    h: 240,
                    s: 66,
                    v: 100
                }), new b({
                    h: 240,
                    s: 100,
                    v: 100
                }), new b({
                    h: 240,
                    s: 100,
                    v: 75
                }), new b({
                    h: 240,
                    s: 100,
                    v: 50
                }), new b({
                    h: 180,
                    s: 0,
                    v: 20
                }), new b({
                    h: 270,
                    s: 33,
                    v: 100
                }), new b({
                    h: 270,
                    s: 66,
                    v: 100
                }), new b({
                    h: 270,
                    s: 100,
                    v: 100
                }),
                new b({
                    h: 270,
                    s: 100,
                    v: 75
                }), new b({
                    h: 270,
                    s: 100,
                    v: 50
                }), new b({
                    h: 180,
                    s: 0,
                    v: 10
                }), new b({
                    h: 300,
                    s: 33,
                    v: 100
                }), new b({
                    h: 300,
                    s: 66,
                    v: 100
                }), new b({
                    h: 300,
                    s: 100,
                    v: 100
                }), new b({
                    h: 300,
                    s: 100,
                    v: 75
                }), new b({
                    h: 300,
                    s: 100,
                    v: 50
                }), new b({
                    h: 180,
                    s: 0,
                    v: 0
                }), new b({
                    h: 330,
                    s: 33,
                    v: 100
                }), new b({
                    h: 330,
                    s: 66,
                    v: 100
                }), new b({
                    h: 330,
                    s: 100,
                    v: 100
                }), new b({
                    h: 330,
                    s: 100,
                    v: 75
                }), new b({
                    h: 330,
                    s: 100,
                    v: 50
                }), new b
            ]
        },
        images: {
            clientPath: "/jPicker/images/",
            colorMap: {
                width: 256,
                height: 256,
                arrow: {
                    file: "mappoint.gif",
                    width: 15,
                    height: 15
                }
            },
            colorBar: {
                width: 20,
                height: 256,
                arrow: {
                    file: "rangearrows.gif",
                    width: 20,
                    height: 7
                }
            },
            picker: {
                file: "picker.gif",
                width: 25,
                height: 24
            }
        },
        localization: {
            text: {
                title: "Drag Markers To Pick A Color",
                newColor: "new",
                currentColor: "current",
                ok: "OK",
                cancel: "Cancel"
            },
            tooltips: {
                colors: {
                    newColor: "New Color - Press &ldquo;OK&rdquo; To Commit",
                    currentColor: "Click To Revert To Original Color"
                },
                buttons: {
                    ok: "Commit To This Color Selection",
                    cancel: "Cancel And Revert To Original Color"
                },
                hue: {
                    radio: "Set To &ldquo;Hue&rdquo; Color Mode",
                    textbox: "Enter A &ldquo;Hue&rdquo; Value (0-360&deg;)"
                },
                saturation: {
                    radio: "Set To &ldquo;Saturation&rdquo; Color Mode",
                    textbox: "Enter A &ldquo;Saturation&rdquo; Value (0-100%)"
                },
                value: {
                    radio: "Set To &ldquo;Value&rdquo; Color Mode",
                    textbox: "Enter A &ldquo;Value&rdquo; Value (0-100%)"
                },
                red: {
                    radio: "Set To &ldquo;Red&rdquo; Color Mode",
                    textbox: "Enter A &ldquo;Red&rdquo; Value (0-255)"
                },
                green: {
                    radio: "Set To &ldquo;Green&rdquo; Color Mode",
                    textbox: "Enter A &ldquo;Green&rdquo; Value (0-255)"
                },
                blue: {
                    radio: "Set To &ldquo;Blue&rdquo; Color Mode",
                    textbox: "Enter A &ldquo;Blue&rdquo; Value (0-255)"
                },
                alpha: {
                    radio: "Set To &ldquo;Alpha&rdquo; Color Mode",
                    textbox: "Enter A &ldquo;Alpha&rdquo; Value (0-100)"
                },
                hex: {
                    textbox: "Enter A &ldquo;Hex&rdquo; Color Value (#000000-#ffffff)",
                    alpha: "Enter A &ldquo;Alpha&rdquo; Value (#00-#ff)"
                }
            }
        }
    }
})(jQuery, "1.1.6");
(function(a) {
    function o(l) {
        var s = l || window.event,
            c = [].slice.call(arguments, 1),
            g = 0,
            d = 0,
            p = 0;
        l = a.event.fix(s);
        l.type = "mousewheel";
        if (s.wheelDelta) g = s.wheelDelta / 120;
        if (s.detail) g = -s.detail / 3;
        p = g;
        if (s.axis !== undefined && s.axis === s.HORIZONTAL_AXIS) {
            p = 0;
            d = -1 * g
        }
        if (s.wheelDeltaY !== undefined) p = s.wheelDeltaY / 120;
        if (s.wheelDeltaX !== undefined) d = -1 * s.wheelDeltaX / 120;
        c.unshift(l, g, d, p);
        return (a.event.dispatch || a.event.handle).apply(this, c)
    }
    var e = ["DOMMouseScroll", "mousewheel"];
    if (a.event.fixHooks)
        for (var b = e.length; b;) a.event.fixHooks[e[--b]] =
            a.event.mouseHooks;
    a.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener)
                for (var l = e.length; l;) this.addEventListener(e[--l], o, false);
            else this.onmousewheel = o
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var l = e.length; l;) this.removeEventListener(e[--l], o, false);
            else this.onmousewheel = null
        }
    };
    a.fn.extend({
        mousewheel: function(l) {
            return l ? this.bind("mousewheel", l) : this.trigger("mousewheel")
        },
        unmousewheel: function(l) {
            return this.unbind("mousewheel", l)
        }
    })
})(jQuery);
methodDraw.addExtension("eyedropper", function(a) {
    var o = methodDraw.canvas,
        e = svgedit.history.ChangeElementCommand,
        b = {
            fillPaint: "red",
            fillOpacity: 1,
            strokePaint: "black",
            strokeOpacity: 1,
            strokeWidth: 5,
            strokeDashArray: null,
            opacity: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter"
        },
        l = function(s, c, g) {
            var d = null;
            if (s.indexOf("url(#") === 0) {
                s = (s = o.getRefElem(s)) ? s.cloneNode(true) : $("#" + g + "_color defs *")[0];
                d = {
                    alpha: c
                };
                d[s.tagName] = s
            } else d = s.indexOf("#") === 0 ? {
                alpha: c,
                solidColor: s.substr(1)
            } : {
                alpha: c,
                solidColor: "none"
            };
            return new $.jGraduate.Paint(d)
        };
    return {
        name: "eyedropper",
        svgicons: "extensions/eyedropper-icon.xml",
        buttons: [{
            id: "tool_eyedropper",
            type: "mode",
            title: "Eye Dropper Tool",
            position: 8,
            key: "I",
            icon: "extensions/eyedropper.png",
            events: {
                click: function() {
                    o.setMode("eyedropper")
                }
            }
        }],
        mouseDown: function(s) {
            var c = o.getMode(),
                g = s.event;
            g = g.target.id === "svgroot" ? document.getElementById("canvas_background") : g.target;
            if (c == "eyedropper" && g) {
                b.fillPaint = g.getAttribute("fill") || "white";
                b.fillOpacity = g.getAttribute("fill-opacity") ||
                    1;
                b.strokePaint = g.getAttribute("stroke") || "none";
                b.strokeOpacity = g.getAttribute("stroke-opacity") || 1;
                b.strokeWidth = g.getAttribute("stroke-width");
                b.strokeDashArray = g.getAttribute("stroke-dasharray");
                b.strokeLinecap = g.getAttribute("stroke-linecap");
                b.strokeLinejoin = g.getAttribute("stroke-linejoin");
                b.opacity = g.getAttribute("opacity") || 1;
                s.selectedElements = s.selectedElements.filter(Boolean);
                if (s.selectedElements.length) {
                    if ($.inArray(s.selectedElements.nodeName, ["g", "use"]) == -1) {
                        var d = {},
                            p = function(C,
                                v, L) {
                                d[v] = C.getAttribute(v);
                                C.setAttribute(v, L)
                            },
                            w = new a.BatchCommand;
                        s.selectedElements.forEach(function(C) {
                            b.fillPaint && p(C, "fill", b.fillPaint);
                            b.fillOpacity && p(C, "fill-opacity", b.fillOpacity);
                            b.strokePaint && p(C, "stroke", b.strokePaint);
                            b.strokeOpacity && p(C, "stroke-opacity", b.strokeOpacity);
                            b.strokeWidth && p(C, "stroke-width", b.strokeWidth);
                            b.strokeDashArray && p(C, "stroke-dasharray", b.strokeDashArray);
                            b.opacity && p(C, "opacity", b.opacity);
                            b.strokeLinecap && p(C, "stroke-linecap", b.strokeLinecap);
                            b.strokeLinejoin &&
                                p(C, "stroke-linejoin", b.strokeLinejoin);
                            w.addSubCommand(new e(C, d));
                            d = {}
                        });
                        s = l(b.fillPaint, b.fillOpacity * 100, "fill");
                        c = l(b.strokePaint, b.strokeOpacity * 100, "stroke");
                        methodDraw.paintBox.fill.update(true);
                        methodDraw.paintBox.stroke.update(true);
                        o.undoMgr.addCommandToHistory(w)
                    }
                } else {
                    s = l(b.fillPaint, b.fillOpacity * 100, "fill");
                    c = l(b.strokePaint, b.strokeOpacity * 100, "stroke");
                    methodDraw.paintBox.fill.setPaint(s);
                    methodDraw.paintBox.stroke.setPaint(c)
                }
            }
        }
    }
});
methodDraw.addExtension("view_grid", function(a) {
    function o(p) {
        g.attr("width");
        g.attr("height");
        var w = svgedit.units.getTypeMap()[methodDraw.curConfig.baseUnit],
            C = [0.01, 0.1, 1, 10, 100, 1E3];
        b.getContentElem().getAttribute("x");
        var v = s;
        w = w * p;
        var L = 100 / w,
            Q = 1;
        for (p = 0; p < C.length; p++) {
            var J = C[p];
            Q = J;
            if (L <= J) break
        }
        C = Q * w;
        v.width = C;
        v.height = C;
        w = v.getContext("2d");
        L = C / 10;
        w.globalAlpha = 0.2;
        w.strokeStyle = "#000";
        for (p = 1; p < 10; p++) {
            Q = Math.round(L * p) + 0.5;
            w.moveTo(Q, C);
            w.lineTo(Q, 0);
            w.moveTo(C, Q);
            w.lineTo(0, Q)
        }
        w.stroke();
        w.beginPath();
        w.globalAlpha = 0.5;
        w.moveTo(0.5, C);
        w.lineTo(0.5, 0);
        w.moveTo(C, 0.5);
        w.lineTo(0, 0.5);
        w.stroke();
        v = v.toDataURL("image/png");
        d.setAttribute("width", C);
        d.setAttribute("height", C);
        d.parentNode.setAttribute("width", C);
        d.parentNode.setAttribute("height", C);
        b.setHref(d, v)
    }
    if (!document.getElementById("canvasGrid")) {
        var e = document.getElementById("svgcanvas").ownerDocument,
            b = methodDraw.canvas,
            l = false;
        a = a.assignAttributes;
        var s = document.createElement("canvas");
        $(s).hide().appendTo("body");
        var c = e.createElementNS("http://www.w3.org/2000/svg",
            "g");
        a(c, {
            id: "canvasGrid",
            width: "100%",
            height: "100%",
            x: 0,
            y: 0,
            overflow: "visible",
            display: "none"
        });
        var g = $("#canvas_background");
        g.after(c);
        c = e.createElementNS("http://www.w3.org/2000/svg", "pattern");
        a(c, {
            id: "gridpattern",
            patternUnits: "userSpaceOnUse",
            x: 0,
            y: 0,
            width: 100,
            height: 100
        });
        var d = e.createElementNS("http://www.w3.org/2000/svg", "image");
        a(d, {
            x: 0,
            y: 0,
            width: 100,
            height: 100
        });
        c.appendChild(d);
        $("#svgroot defs").append(c);
        e = e.createElementNS("http://www.w3.org/2000/svg", "rect");
        a(e, {
            width: "100%",
            height: "100%",
            x: 0,
            y: 0,
            "stroke-width": 0,
            stroke: "none",
            fill: "url(#gridpattern)",
            style: "pointer-events: none; display:visible;"
        });
        $("#canvasGrid").append(e)
    }
    return {
        name: "view_grid",
        zoomChanged: function(p) {
            l && o(p)
        },
        buttons: [{
            id: "view_grid",
            type: "menu",
            after: "tool_wireframe",
            panel: "view_menu",
            title: "View Grid",
            events: {
                click: function() {
                    if ($("#view_grid").hasClass("push_button_pressed")) {
                        methodDraw.curConfig.showGrid = l = false;
                        $("#view_grid").removeClass("push_button_pressed");
                        $("#canvasGrid").attr("display", "none")
                    } else {
                        methodDraw.curConfig.showGrid =
                            l = true;
                        $("#view_grid").addClass("push_button_pressed");
                        $("#canvasGrid").attr("display", "inline");
                        o(b.getZoom())
                    }
                }
            }
        }]
    }
});
methodDraw.addExtension("shapes", function() {
    function a() {
        $("#shape_buttons").empty();
        $("#shape_buttons").append(L.buttons)
    }

    function o(J) {
        var H = v[J];
        if (H) {
            L = H;
            H.buttons.length || e(J, H);
            a()
        } else {
            $("#shape_buttons").html("Loading...");
            $.getJSON("extensions/shapelib/" + J + ".json", function(U) {
                L = v[J] = {
                    data: U.data,
                    size: U.size,
                    fill: U.fill
                };
                e(J, U);
                a()
            })
        }
    }

    function e(J, H) {
        var U = L.size || 300,
            R = L.fill || false,
            N = U * 0.05;
        N = [-N, -N, U + N * 2, U + N * 2].join(" ");
        U = R ? 0 : U / 30;
        U = (new DOMParser).parseFromString('<svg xmlns="http://www.w3.org/2000/svg"><svg viewBox="' +
            N + '"><path fill="#333" stroke="transparent" stroke-width="' + U + '" /></svg></svg>', "text/xml");
        U.documentElement.setAttribute("width", 40);
        U.documentElement.setAttribute("height", 40);
        U = $(document.importNode(U.documentElement, true));
        R = H.data;
        L.buttons = [];
        for (var ca in R) {
            N = R[ca];
            var la = U.clone();
            la.find("path").attr("d", N);
            N = la.wrap('<div class="tool_button">').parent().attr({
                id: Q + "_" + ca,
                title: ca
            });
            L.buttons.push(N[0])
        }
    }
    var b, l, s = methodDraw.canvas,
        c, g, d, p = s.getRootElem(),
        w = {},
        C = {
            basic: "Basic",
            object: "Objects",
            symbol: "Symbols",
            arrow: "Arrows",
            flowchart: "Flowchart",
            nature: "Nature",
            game: "Cards & Chess",
            dialog_balloon: "Dialog balloons",
            music: "Music",
            weather: "Weather &amp; Time",
            ui: "User Interface",
            social: "Social Web"
        },
        v = {
            basic: {
                data: {
                    star_points_5: "m1,116.58409l113.82668,0l35.17332,-108.13487l35.17334,108.13487l113.82666,0l-92.08755,66.83026l35.17514,108.13487l-92.08759,-66.83208l-92.08757,66.83208l35.17515,-108.13487l-92.08758,-66.83026z",
                    donut: "m1,150l0,0c0,-82.29042 66.70958,-149 149,-149l0,0c39.51724,0 77.41599,15.69816 105.35889,43.64108c27.94293,27.94293 43.64111,65.84165 43.64111,105.35892l0,0c0,82.29041 -66.70958,149 -149,149l0,0c-82.29041,0 -149,-66.70959 -149,-149zm74.5,0l0,0c0,41.1452 33.35481,74.5 74.5,74.5c41.14522,0 74.5,-33.3548 74.5,-74.5c0,-41.1452 -33.3548,-74.5 -74.5,-74.5l0,0c-41.14519,0 -74.5,33.35481 -74.5,74.5z",
                    triangle: "m1,280.375l149,-260.75l149,260.75z",
                    right_triangle: "m1,299l0,-298l298,298z",
                    diamond: "m1,150l149,-149l149,149l-149,149l-149,-149z",
                    pentagon: "m1.00035,116.97758l148.99963,-108.4053l148.99998,108.4053l-56.91267,175.4042l-184.1741,0l-56.91284,-175.4042z",
                    hexagon: "m1,149.99944l63.85715,-127.71428l170.28572,0l63.85713,127.71428l-63.85713,127.71428l-170.28572,0l-63.85715,-127.71428z",
                    septagon1: "m0.99917,191.06511l29.51249,-127.7108l119.48833,-56.83673l119.48836,56.83673l29.51303,127.7108l-82.69087,102.41679l-132.62103,0l-82.69031,-102.41679z",
                    heptagon: "m1,88.28171l87.28172,-87.28171l123.43653,0l87.28172,87.28171l0,123.43654l-87.28172,87.28172l-123.43653,0l-87.28172,-87.28172l0,-123.43654z",
                    decagon: "m1,150.00093l28.45646,-88.40318l74.49956,-54.63682l92.08794,0l74.50002,54.63682l28.45599,88.40318l-28.45599,88.40318l-74.50002,54.63681l-92.08794,0l-74.49956,-54.63681l-28.45646,-88.40318z",
                    dodecagon: "m1,110.07421l39.92579,-69.14842l69.14842,-39.92579l79.85159,0l69.14842,39.92579l39.92578,69.14842l0,79.85159l-39.92578,69.14842l-69.14842,39.92578l-79.85159,0l-69.14842,-39.92578l-39.92579,-69.14842l0,-79.85159z",
                    trapezoid: "m1,299l55.875,-298l186.25001,0l55.87498,298z",
                    dialog_balloon_1: "m0.99786,35.96579l0,0c0,-19.31077 15.28761,-34.96524 34.14583,-34.96524l15.52084,0l0,0l74.50001,0l139.68748,0c9.05606,0 17.74118,3.68382 24.14478,10.24108c6.40356,6.55726 10.00107,15.45081 10.00107,24.72416l0,87.41311l0,0l0,52.44785l0,0c0,19.31078 -15.2876,34.96524 -34.14584,34.96524l-139.68748,0l-97.32507,88.90848l22.82506,-88.90848l-15.52084,0c-18.85822,0 -34.14583,-15.65446 -34.14583,-34.96524l0,0l0,-52.44785l0,0z",
                    heart: "m150,73c61,-175 300,0 0,225c-300,-225 -61,-400 0,-225z",
                    cylinder: "m299.0007,83.77844c0,18.28676 -66.70958,33.11111 -149.00002,33.11111m149.00002,-33.11111l0,0c0,18.28676 -66.70958,33.11111 -149.00002,33.11111c-82.29041,0 -148.99997,-14.82432 -148.99997,-33.11111m0,0l0,0c0,-18.28674 66.70956,-33.1111 148.99997,-33.1111c82.29044,0 149.00002,14.82436 149.00002,33.1111l0,132.44449c0,18.28674 -66.70958,33.11105 -149.00002,33.11105c-82.29041,0 -148.99997,-14.82431 -148.99997,-33.11105z",
                    arrow_up: "m1.49805,149.64304l148.50121,-148.00241l148.50121,148.00241l-74.25061,0l0,148.71457l-148.5012,0l0,-148.71457z",
                    arrow_u_turn: "m1.00059,299.00055l0,-167.62497l0,0c0,-72.00411 58.37087,-130.37499 130.375,-130.37499l0,0l0,0c34.57759,0 67.73898,13.7359 92.18906,38.18595c24.45006,24.45005 38.18593,57.61144 38.18593,92.18904l0,18.625l37.24997,0l-74.49995,74.50002l-74.50002,-74.50002l37.25,0l0,-18.625c0,-30.8589 -25.0161,-55.87498 -55.87498,-55.87498l0,0l0,0c-30.85892,0 -55.875,25.01608 -55.875,55.87498l0,167.62497z",
                    arrow_left_up: "m0.99865,224.5l74.50004,-74.5l0,37.25l111.74991,0l0,-111.75l-37.25,0l74.5,-74.5l74.5,74.5l-37.25,0l0,186.25l-186.24989,0l0,37.25l-74.50005,-74.5z",
                    plaque: "m-0.00197,49.94376l0,0c27.5829,0 49.94327,-22.36036 49.94327,-49.94327l199.76709,0l0,0c0,27.5829 22.36037,49.94327 49.94325,49.94327l0,199.7671l0,0c-27.58289,0 -49.94325,22.36034 -49.94325,49.94325l-199.76709,0c0,-27.58292 -22.36037,-49.94325 -49.94327,-49.94325z",
                    page: "m249.3298,298.99744l9.9335,-39.73413l39.73413,-9.93355l-49.66763,49.66768l-248.33237,0l0,-298.00001l298.00001,0l0,248.33234",
                    cross: "m0.99844,99.71339l98.71494,0l0,-98.71495l101.26279,0l0,98.71495l98.71495,0l0,101.2628l-98.71495,0l0,98.71494l-101.26279,0l0,-98.71494l-98.71494,0z",
                    divide: "m150,0.99785l0,0c25.17819,0 45.58916,20.41097 45.58916,45.58916c0,25.17821 -20.41096,45.58916 -45.58916,45.58916c-25.17822,0 -45.58916,-20.41093 -45.58916,-45.58916c0,-25.1782 20.41093,-45.58916 45.58916,-45.58916zm0,296.25203c-25.17822,0 -45.58916,-20.41095 -45.58916,-45.58917c0,-25.17819 20.41093,-45.58916 45.58916,-45.58916c25.17819,0 45.58916,20.41096 45.58916,45.58916c0,25.17822 -20.41096,45.58917 -45.58916,45.58917zm-134.06754,-193.71518l268.13507,0l0,91.17833l-268.13507,0z",
                    minus: "m0.99887,102.39503l297.49445,0l0,95.2112l-297.49445,0z",
                    times: "m1.00089,73.36786l72.36697,-72.36697l76.87431,76.87368l76.87431,-76.87368l72.36765,72.36697l-76.87433,76.87431l76.87433,76.87431l-72.36765,72.36765l-76.87431,-76.87433l-76.87431,76.87433l-72.36697,-72.36765l76.87368,-76.87431l-76.87368,-76.87431z"
                },
                buttons: []
            }
        },
        L = v.basic,
        Q = "shapelib";
    return {
        svgicons: "extensions/ext-shapes.xml",
        buttons: [{
            id: "tool_shapelib",
            type: "mode_flyout",
            position: 6,
            title: "Shape library",
            icon: "extensions/ext-shapes.png",
            events: {
                click: function() {
                    s.setMode(Q)
                }
            }
        }],
        callback: function() {
            var J =
                $('<div id="shape_buttons">');
            $("#tools_shapelib > *").wrapAll(J);
            var H = $("#tools_shapelib_show");
            o("basic");
            $("#shape_buttons").mouseup(function(R) {
                R = $(R.target).closest("div.tool_button");
                if (R.length) {
                    var N = R.children().clone().attr({
                        width: 24,
                        height: 24
                    });
                    H.children(":not(.flyout_arrow_horiz)").remove();
                    H.append(N).attr("data-curopt", "#" + R[0].id).mouseup();
                    s.setMode(Q);
                    l = R[0].id.substr((Q + "_").length);
                    b = L.data[l];
                    $(".tools_flyout").fadeOut()
                }
            });
            J = $('<div id="shape_cats">');
            var U = "";
            $.each(C, function(R,
                N) {
                U += "<div data-cat=" + R + ">" + N + "</div>"
            });
            J.html(U).children().bind("mouseup", function() {
                var R = $(this);
                R.siblings().removeClass("current");
                R.addClass("current");
                o(R.attr("data-cat"));
                return false
            });
            J.children().eq(0).addClass("current");
            $("#tools_shapelib").prepend(J);
            H.mouseup(function() {
                s.setMode(b ? Q : "select")
            });
            $("#tool_shapelib").remove();
            J = $("#tools_shapelib").height();
            $("#tools_shapelib").css({
                "margin-top": -(J / 2),
                "margin-left": 3
            })
        },
        mouseDown: function(J) {
            if (s.getMode() === Q) {
                var H = g = J.start_x;
                J = d = J.start_y;
                var U = s.getStyle();
                c = s.addSvgElementFromJson({
                    element: "path",
                    curStyles: true,
                    attr: {
                        d: b,
                        id: s.getNextId(),
                        opacity: U.opacity / 2,
                        style: "pointer-events:none"
                    }
                });
                c.setAttribute("d", b);
                if (/[a-z]/.test(b)) {
                    b = L.data[l] = s.pathActions.convertPath(c);
                    c.setAttribute("d", b);
                    s.pathActions.fixEnd(c)
                }
                c.setAttribute("transform", "translate(" + H + "," + J + ") scale(0.005) translate(" + -H + "," + -J + ")");
                s.recalculateDimensions(c);
                s.getTransformList(c);
                w = c.getBBox();
                totalScale = {
                    sx: 1,
                    sy: 1
                };
                return {
                    started: true
                }
            }
        },
        mouseMove: function(J) {
            if (s.getMode() ===
                Q) {
                var H = s.getZoom(),
                    U = J.event,
                    R = J.mouse_x / H,
                    N = J.mouse_y / H;
                J = s.getTransformList(c);
                var ca = c.getBBox();
                H = ca.x;
                var la = ca.y,
                    X = ca.width,
                    W = ca.height,
                    fa = R - g,
                    ta = N - d,
                    ia = {
                        x: Math.min(g, R),
                        y: Math.min(d, N),
                        width: Math.abs(R - g),
                        height: Math.abs(N - d)
                    },
                    ka = ca = 0;
                W = W ? (W + ta) / W : 1;
                X = X ? (X + fa) / X : 1;
                X = ia.width / w.width;
                W = ia.height / w.height;
                X = X || 1;
                W = W || 1;
                if (R < g) ca = w.width;
                if (N < d) ka = w.height;
                R = p.createSVGTransform();
                N = p.createSVGTransform();
                ia = p.createSVGTransform();
                R.setTranslate(-(H + ca), -(la + ka));
                if (U.shiftKey) {
                    replaced = true;
                    U = Math.min(Math.abs(X), Math.abs(W));
                    X = U * (X < 0 ? -1 : 1);
                    W = U * (W < 0 ? -1 : 1);
                    if (totalScale.sx != totalScale.sy) {
                        U = totalScale.sx > totalScale.sy ? 1 : totalScale.sx / totalScale.sy;
                        X *= totalScale.sy > totalScale.sx ? 1 : totalScale.sy / totalScale.sx;
                        W *= U
                    }
                }
                totalScale.sx *= X;
                totalScale.sy *= W;
                N.setScale(X, W);
                ia.setTranslate(H + ca, la + ka);
                J.appendItem(ia);
                J.appendItem(N);
                J.appendItem(R);
                s.recalculateDimensions(c);
                w = c.getBBox()
            }
        },
        mouseUp: function(J) {
            if (s.getMode() === Q) {
                if (J.mouse_x == g && J.mouse_y == d) return {
                    keep: false,
                    element: c,
                    started: false
                };
                s.setMode("select");
                return {
                    keep: true,
                    element: c,
                    started: false
                }
            }
        }
    }
});
(function() {
    for (var a = 0, o = ["ms", "moz", "webkit", "o"], e = 0; e < o.length && !window.requestAnimationFrame; ++e) {
        window.requestAnimationFrame = window[o[e] + "RequestAnimationFrame"];
        window.cancelAnimationFrame = window[o[e] + "CancelAnimationFrame"] || window[o[e] + "CancelRequestAnimationFrame"]
    }
    if (!window.requestAnimationFrame) window.requestAnimationFrame = function(b) {
        var l = (new Date).getTime(),
            s = Math.max(0, 16 - (l - a)),
            c = window.setTimeout(function() {
                b(l + s)
            }, s);
        a = l + s;
        return c
    };
    if (!window.cancelAnimationFrame) window.cancelAnimationFrame =
        function(b) {
            clearTimeout(b)
        }
})();
(function(a) {
    function o(v) {
        var L = v.originalEvent;
        if (!L.touches || L.targetTouches.length === 1 && L.touches.length === 1) {
            c.call(this, v);
            v = a(this);
            v.bind(w, e);
            v.bind(p, b)
        } else {
            clearTimeout(C);
            s.call(this)
        }
    }

    function e(v) {
        if (C != null) {
            var L = v.originalEvent;
            v = L.changedTouches ? L.changedTouches[0].pageX : L.pageX;
            L = L.changedTouches ? L.changedTouches[0].pageY : L.pageY;
            var Q = a(this).data("taphold.point");
            v = v - Q.x;
            L = L - Q.y;
            if (Math.sqrt(v * v + L * L) > d) {
                clearTimeout(C);
                s.call(this)
            }
        }
    }

    function b() {
        clearTimeout(C);
        s.call(this)
    }

    function l(v) {
        s.call(this);
        a(this).data("taphold.handler").call(this, v)
    }

    function s() {
        C = null;
        a(this).unbind(w, e);
        a(this).unbind(p, b)
    }

    function c(v) {
        if (C == null) {
            var L = this;
            C = setTimeout(function() {
                l.call(L, v)
            }, g);
            var Q = v.originalEvent,
                J = {};
            J.x = Q.changedTouches ? Q.changedTouches[0].pageX : Q.pageX;
            J.y = Q.changedTouches ? Q.changedTouches[0].pageY : Q.pageY;
            a(this).data("taphold.point", J)
        }
    }
    var g = 1E3,
        d = 5,
        p = "touchend",
        w = "touchmove",
        C = null;
    a.event.special.taphold = {
        setup: function() {},
        add: function(v) {
            a(this).data("taphold.handler",
                v.handler);
            v.data ? a(this).bind("touchstart", v.data, o) : a(this).bind("touchstart", o)
        },
        remove: function(v) {
            clearTimeout(C);
            s.call(this);
            v.data ? a(this).unbind("touchstart", v.data, o) : a(this).unbind("touchstart", o)
        },
        teardown: function() {}
    }
})(jQuery);
var saveAs = saveAs || function(a) {
    if (!(typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent))) {
        var o = a.document.createElementNS("http://www.w3.org/1999/xhtml", "a"),
            e = "download" in o,
            b = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
            l = a.webkitRequestFileSystem,
            s = a.requestFileSystem || l || a.mozRequestFileSystem,
            c = function(L) {
                (a.setImmediate || a.setTimeout)(function() {
                    throw L;
                }, 0)
            },
            g = 0,
            d = function(L) {
                var Q = function() {
                    typeof L === "string" ? (a.URL || a.webkitURL || a).revokeObjectURL(L) : L.remove()
                };
                a.chrome ? Q() : setTimeout(Q, 500)
            },
            p = function(L, Q, J) {
                Q = [].concat(Q);
                for (var H = Q.length; H--;) {
                    var U = L["on" + Q[H]];
                    if (typeof U === "function") try {
                        U.call(L, J || L)
                    } catch (R) {
                        c(R)
                    }
                }
            },
            w = function(L) {
                if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(L.type)) return new Blob(["\ufeff", L], {
                    type: L.type
                });
                return L
            },
            C = function(L, Q, J) {
                J || (L = w(L));
                var H = this;
                J = L.type;
                var U = false,
                    R, N, ca = function() {
                        p(H, "writestart progress write writeend".split(" "))
                    },
                    la = function() {
                        if (N && b && typeof FileReader !==
                            "undefined") {
                            var ta = new FileReader;
                            ta.onloadend = function() {
                                var ia = ta.result;
                                N.location.href = "data:attachment/file" + ia.slice(ia.search(/[,;]/));
                                H.readyState = H.DONE;
                                ca()
                            };
                            ta.readAsDataURL(L);
                            H.readyState = H.INIT
                        } else {
                            if (U || !R) R = (a.URL || a.webkitURL || a).createObjectURL(L);
                            if (N) N.location.href = R;
                            else if (a.open(R, "_blank") == undefined && b) a.location.href = R;
                            H.readyState = H.DONE;
                            ca();
                            d(R)
                        }
                    },
                    X = function(ta) {
                        return function() {
                            if (H.readyState !== H.DONE) return ta.apply(this, arguments)
                        }
                    },
                    W = {
                        create: true,
                        exclusive: false
                    },
                    fa;
                H.readyState = H.INIT;
                Q || (Q = "download");
                if (e) {
                    R = (a.URL || a.webkitURL || a).createObjectURL(L);
                    setTimeout(function() {
                        o.href = R;
                        o.download = Q;
                        var ta = new MouseEvent("click");
                        o.dispatchEvent(ta);
                        ca();
                        d(R);
                        H.readyState = H.DONE
                    })
                } else {
                    if (a.chrome && J && J !== "application/octet-stream") {
                        fa = L.slice || L.webkitSlice;
                        L = fa.call(L, 0, L.size, "application/octet-stream");
                        U = true
                    }
                    if (l && Q !== "download") Q += ".download";
                    if (J === "application/octet-stream" || l) N = a;
                    if (s) {
                        g += L.size;
                        s(a.TEMPORARY, g, X(function(ta) {
                            ta.root.getDirectory("saved",
                                W, X(function(ia) {
                                    var ka = function() {
                                        ia.getFile(Q, W, X(function(Z) {
                                            Z.createWriter(X(function(da) {
                                                da.onwriteend = function(pa) {
                                                    N.location.href = Z.toURL();
                                                    H.readyState = H.DONE;
                                                    p(H, "writeend", pa);
                                                    d(Z)
                                                };
                                                da.onerror = function() {
                                                    var pa = da.error;
                                                    pa.code !== pa.ABORT_ERR && la()
                                                };
                                                "writestart progress write abort".split(" ").forEach(function(pa) {
                                                    da["on" + pa] = H["on" + pa]
                                                });
                                                da.write(L);
                                                H.abort = function() {
                                                    da.abort();
                                                    H.readyState = H.DONE
                                                };
                                                H.readyState = H.WRITING
                                            }), la)
                                        }), la)
                                    };
                                    ia.getFile(Q, {
                                        create: false
                                    }, X(function(Z) {
                                        Z.remove();
                                        ka()
                                    }), X(function(Z) {
                                        Z.code === Z.NOT_FOUND_ERR ? ka() : la()
                                    }))
                                }), la)
                        }), la)
                    } else la()
                }
            },
            v = C.prototype;
        if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) return function(L, Q, J) {
            J || (L = w(L));
            return navigator.msSaveOrOpenBlob(L, Q || "download")
        };
        v.abort = function() {
            this.readyState = this.DONE;
            p(this, "abort")
        };
        v.readyState = v.INIT = 0;
        v.WRITING = 1;
        v.DONE = 2;
        v.error = v.onwritestart = v.onprogress = v.onwrite = v.onabort = v.onerror = v.onwriteend = null;
        return function(L, Q, J) {
            return new C(L, Q, J)
        }
    }
}(typeof self !== "undefined" &&
    self || typeof window !== "undefined" && window || this.content);
if (typeof module !== "undefined" && module.exports) module.exports.saveAs = saveAs;
else typeof define !== "undefined" && define !== null && define.amd != null && define([], function() {
    return saveAs
});