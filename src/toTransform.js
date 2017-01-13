/* global internalScope */

(function () {
  function convertTranslate (input) {
    var valuesArray = internalScope.translateParse(input);

    if (valuesArray === null || valuesArray === undefined) {
      return null;
    }

    var result = valuesArray.map(function (x) {
      return x + 'px';
    });

    return 'translate3d(' + result.join(', ') + ')';
  }

  function convertRotate (input) {
    var valuesArray = internalScope.rotateParse(input);
    if (valuesArray === null || valuesArray === undefined) {
      return null;
    }

    if (valuesArray.length > 1) {
      return 'rotate3d(' + valuesArray.join(', ') + 'deg)';
    }
    return 'rotate(' + valuesArray.join(', ') + 'deg)';
  }

  function convertScale (input) {
    var valuesArray = internalScope.scaleParse(input);
    if (valuesArray === null || valuesArray === undefined) {
      return null;
    }
    return 'scale3d(' + valuesArray.join(', ') + ')';
  }

  function convertOffsetAnchorPosition (properties, element) {
    /* According to spec: https://drafts.fxtf.org/motion-1/#offset-anchor-property
       If offset-anchor is set to auto then it will compute to the value of offset-position. */
    var position = 'auto';
    if ('offset-position' in properties) {
      position = internalScope.offsetPositionAnchorParse(properties['offset-position']);
    }

    if (position === 'auto' || position === undefined || position === null) {
      return null;
    }

    var anchor = 'auto';
    if ('offset-anchor' in properties) {
      anchor = internalScope.offsetPositionAnchorParse(properties['offset-anchor']);
    }

    if (anchor === 'auto' || anchor === undefined || anchor === null) {
      anchor = position;
    }

    // TODO: find a way of doing this that doesn't involve _style
    var savedTransform = element.style._style.transform;
    // clear the transform so we can access the starting position of the element.
    element.style._style.transform = 'none';

    var offsetLeft = element.offsetLeft;
    var offsetTop = element.offsetTop;

    var elementProperties = element.getBoundingClientRect();
    var parentProperties = element.offsetParent ? element.offsetParent.getBoundingClientRect() : null;
    element.style._style.transform = savedTransform;

    if (!parentProperties) {
      return null;
    }

    var anchorPosX = (anchor[0] / 100) * elementProperties.width;
    var anchorPosY = (anchor[1] / 100) * elementProperties.height;

    var offsetPosX = (position[0] / 100) * parentProperties.width;
    var offsetPosY = (position[1] / 100) * parentProperties.height;

    var desiredPosX = (offsetPosX - anchorPosX) - offsetLeft;
    var desiredPosY = (offsetPosY - anchorPosY) - offsetTop;

    return 'translate3d(' + desiredPosX + 'px, ' + desiredPosY + 'px, ' + '0px)';
  }

  function toTransform (properties, element) {
    return [
      convertTranslate(properties.translate),
      convertRotate(properties.rotate),
      convertScale(properties.scale),
      convertOffsetAnchorPosition(properties, element)
    ].filter(function (result) {
      return result !== null;
    }).join(' ') || 'none';
  }
  internalScope.toTransform = toTransform;
})();
