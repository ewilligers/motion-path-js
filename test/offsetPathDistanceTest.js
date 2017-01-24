/* global suite test internalScope */

(function () {
  suite('transforms', function () {
    test('offsetPathDistance', function () {
      var assertTransformInterpolation = internalScope.assertTransformInterpolation;

      assertTransformInterpolation([
                                    {'offsetPath': "path('m 0, 0 h 100 v 100 h -100')", 'offsetDistance': '0px'},
                                    {'offsetPath': "path('m 0, 0 h 100 v 100 h -100')", 'offsetDistance': '600px'}],
        [
                                    {at: 0, is: 'translate3d(0px, 0px, 0px) rotate(0deg)'},
                                    {at: 1/6, is: 'translate3d(100px, 0px, 0px) rotate(0deg)'},
                                    {at: 2/6, is: 'translate3d(100px, 100px, 0px) rotate(0deg)'},
                                    {at: 3/6, is: 'translate3d(0px, 100px, 0px) rotate(0deg)'},
                                    {at: 4/6, is: 'translate3d(0px, 100px, 0px) rotate(0deg)'},
                                    {at: 5/6, is: 'translate3d(0px, 100px, 0px) rotate(0deg)'},
                                    {at: 1, is: 'translate3d(0px, 100px, 0px) rotate(0deg)'}
        ]
      );

      assertTransformInterpolation([
                                    {'offsetPath': "path('m 0, 0 h 100 v 100 h -100 z')", 'offsetDistance': '0px'},
                                    {'offsetPath': "path('m 0, 0 h 100 v 100 h -100 z')", 'offsetDistance': '600px'}],
        [
                                    {at: 0, is: 'translate3d(0px, 0px, 0px) rotate(0deg)'},
                                    {at: 1/6, is: 'translate3d(100px, 0px, 0px) rotate(0deg)'},
                                    {at: 2/6, is: 'translate3d(100px, 100px, 0px) rotate(0deg)'},
                                    {at: 3/6, is: 'translate3d(0px, 100px, 0px) rotate(0deg)'},
                                    {at: 4/6, is: 'translate3d(0px, 0px, 0px) rotate(0deg)'},
                                    {at: 5/6, is: 'translate3d(100px, 0px, 0px) rotate(0deg)'},
                                    {at: 1, is: 'translate3d(100px, 100px, 0px) rotate(0deg)'}
        ]
      );

      assertTransformInterpolation([
                                    {'offsetPath': "path('m 0, 0 h 100 v 100 h -100 Z')", 'offsetDistance': '0px'},
                                    {'offsetPath': "path('m 0, 0 h 100 v 100 h -100 Z')", 'offsetDistance': '600px'}],
        [
                                    {at: 0, is: 'translate3d(0px, 0px, 0px) rotate(0deg)'},
                                    {at: 1/6, is: 'translate3d(100px, 0px, 0px) rotate(0deg)'},
                                    {at: 2/6, is: 'translate3d(100px, 100px, 0px) rotate(0deg)'},
                                    {at: 3/6, is: 'translate3d(0px, 100px, 0px) rotate(0deg)'},
                                    {at: 4/6, is: 'translate3d(0px, 0px, 0px) rotate(0deg)'},
                                    {at: 5/6, is: 'translate3d(100px, 0px, 0px) rotate(0deg)'},
                                    {at: 1, is: 'translate3d(100px, 100px, 0px) rotate(0deg)'}
        ]
      );

      assertTransformInterpolation([
                                    {'offsetPath': "path('m 0, 0 h 100 v 100 h -100 z  ')", 'offsetDistance': '0px'},
                                    {'offsetPath': "path('m 0, 0 h 100 v 100 h -100 z  ')", 'offsetDistance': '600px'}],
        [
                                    {at: 0, is: 'translate3d(0px, 0px, 0px) rotate(0deg)'},
                                    {at: 1/6, is: 'translate3d(100px, 0px, 0px) rotate(0deg)'},
                                    {at: 2/6, is: 'translate3d(100px, 100px, 0px) rotate(0deg)'},
                                    {at: 3/6, is: 'translate3d(0px, 100px, 0px) rotate(0deg)'},
                                    {at: 4/6, is: 'translate3d(0px, 0px, 0px) rotate(0deg)'},
                                    {at: 5/6, is: 'translate3d(100px, 0px, 0px) rotate(0deg)'},
                                    {at: 1, is: 'translate3d(100px, 100px, 0px) rotate(0deg)'}
        ]
      );

      assertTransformInterpolation([
                                    {'offsetPath': "path('m 0, 0 h 100 v 100 h -100 z,')", 'offsetDistance': '0px'},
                                    {'offsetPath': "path('m 0, 0 h 100 v 100 h -100 z,')", 'offsetDistance': '600px'}],
        [
                                    {at: 0, is: 'translate3d(0px, 0px, 0px) rotate(0deg)'},
                                    {at: 1/6, is: 'translate3d(100px, 0px, 0px) rotate(0deg)'},
                                    {at: 2/6, is: 'translate3d(100px, 100px, 0px) rotate(0deg)'},
                                    {at: 3/6, is: 'translate3d(0px, 100px, 0px) rotate(0deg)'},
                                    {at: 4/6, is: 'translate3d(0px, 0px, 0px) rotate(0deg)'},
                                    {at: 5/6, is: 'translate3d(100px, 0px, 0px) rotate(0deg)'},
                                    {at: 1, is: 'translate3d(100px, 100px, 0px) rotate(0deg)'}
        ]
      );

      assertTransformInterpolation([
                                    {'offsetPath': "path('m 0, 0 h 100 v 100 h -100 z , ')", 'offsetDistance': '0px'},
                                    {'offsetPath': "path('m 0, 0 h 100 v 100 h -100 z , ')", 'offsetDistance': '600px'}],
        [
                                    {at: 0, is: 'translate3d(0px, 0px, 0px) rotate(0deg)'},
                                    {at: 1/6, is: 'translate3d(100px, 0px, 0px) rotate(0deg)'},
                                    {at: 2/6, is: 'translate3d(100px, 100px, 0px) rotate(0deg)'},
                                    {at: 3/6, is: 'translate3d(0px, 100px, 0px) rotate(0deg)'},
                                    {at: 4/6, is: 'translate3d(0px, 0px, 0px) rotate(0deg)'},
                                    {at: 5/6, is: 'translate3d(100px, 0px, 0px) rotate(0deg)'},
                                    {at: 1, is: 'translate3d(100px, 100px, 0px) rotate(0deg)'}
        ]
      );

      assertTransformInterpolation([
                                    {'offsetPath': "path('m 0, 0 h 100 v 100 h -100 z')", 'offsetDistance': '0px'},
                                    {'offsetPath': "path('m 0, 0 h 100 v 100 h -100 z')", 'offsetDistance': '-600px'}],
        [
                                    {at: 0, is: 'translate3d(0px, 0px, 0px) rotate(0deg)'},
                                    {at: 1/6, is: 'translate3d(0px, 100px, 0px) rotate(0deg)'},
                                    {at: 2/6, is: 'translate3d(100px, 100px, 0px) rotate(0deg)'},
                                    {at: 3/6, is: 'translate3d(100px, 0px, 0px) rotate(0deg)'},
                                    {at: 4/6, is: 'translate3d(0px, 0px, 0px) rotate(0deg)'},
                                    {at: 5/6, is: 'translate3d(0px, 100px, 0px) rotate(0deg)'},
                                    {at: 1, is: 'translate3d(100px, 100px, 0px) rotate(0deg)'}
        ]
      );

      assertTransformInterpolation([
                                    {'offsetPath': "path('m 0, 0 h 100 v 100 h -100 z')", 'offsetDistance': '0px'},
                                    {'offsetPath': "path('m 0, 0 h 100 v 100 h -100 z')", 'offsetDistance': '400px'}],
        [
                                    {at: 0, is: 'translate3d(0px, 0px, 0px) rotate(0deg)'},
                                    {at: 0.25, is: 'translate3d(100px, 0px, 0px) rotate(0deg)'},
                                    {at: 0.5, is: 'translate3d(100px, 100px, 0px) rotate(0deg)'},
                                    {at: 0.75, is: 'translate3d(0px, 100px, 0px) rotate(0deg)'},
                                    {at: 1, is: 'translate3d(0px, 0px, 0px) rotate(0deg)'}
        ]
      );

      assertTransformInterpolation([{'offsetPath': "path('m 0, 0 h 100 v 100 h -100 z')", 'offsetDistance': '0%'},
                                    {'offsetPath': "path('m 0, 0 h 100 v 100 h -100 z')", 'offsetDistance': '100%'}],
        [
                                    {at: 0, is: 'translate3d(0px, 0px, 0px) rotate(0deg)'},
                                    {at: 0.25, is: 'translate3d(100px, 0px, 0px) rotate(0deg)'},
                                    {at: 0.5, is: 'translate3d(100px, 100px, 0px) rotate(0deg)'},
                                    {at: 0.75, is: 'translate3d(0px, 100px, 0px) rotate(0deg)'},
                                    {at: 1, is: 'translate3d(0px, 0px, 0px) rotate(0deg)'}
        ]
      );

      assertTransformInterpolation([{'offsetPath': "path('m 50, 50 h 100 v 100 h -100 z')"},
                                    {'offsetPath': "path('m 50, 50 h 100 v 100 h -100 z')"}],
        [
                                    {at: 0, is: 'translate3d(50px, 50px, 0px) rotate(0deg)'},
                                    {at: 0.25, is: 'translate3d(50px, 50px, 0px) rotate(0deg)'},
                                    {at: 0.5, is: 'translate3d(50px, 50px, 0px) rotate(0deg)'},
                                    {at: 0.75, is: 'translate3d(50px, 50px, 0px) rotate(0deg)'},
                                    {at: 1, is: 'translate3d(50px, 50px, 0px) rotate(0deg)'}
        ]
      );

      assertTransformInterpolation([{'offsetPath': "path('m 0, 0 h 100 v 100 h -100 z')", 'offsetDistance': undefined},
                                    {'offsetPath': "path('m 0, 0 h 100 v 100 h -100 z')", 'offsetDistance': '50%'}],
        [
                                    {at: 0, is: 'translate3d(0px, 0px, 0px) rotate(0deg)'},
                                    {at: 0.25, is: 'translate3d(0px, 0px, 0px) rotate(0deg)'},
                                    {at: 0.5, is: 'translate3d(100px, 100px, 0px) rotate(0deg)'},
                                    {at: 0.75, is: 'translate3d(100px, 100px, 0px) rotate(0deg)'},
                                    {at: 1, is: 'translate3d(100px, 100px, 0px) rotate(0deg)'}
        ]
      );
    });
  });
})();
