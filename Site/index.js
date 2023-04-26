const navEl = document.querySelector('.navbar');
const navBrand = document.querySelector('.navbar-brand');
const navBtn = document.querySelector('.bbtn');
const arrow = document.querySelector('.arrow');

window.addEventListener('scroll', () => {
if (window.scrollY >= 80) {
    navEl.classList.add('navbar-scrolled');
    navBrand.classList.add('text-white');
    navBtn.classList.add('text-white');
    arrow.style.color = "#008080";
} else if (window.scrollY < 80) {
    navEl.classList.remove('navbar-scrolled');
    navBrand.classList.remove('text-white');
    navBtn.classList.remove('text-white');
    arrow.style.color = "transparent";
}
})

// Parallax

var fpTilesLeft = document.getElementById('left');
var fpTilesRight = document.getElementById('right');

window.addEventListener('scroll', () => {
    var scrollValue = window.scrollY;
    var screenWidth = document.documentElement.clientWidth || window.innerWidth;
    var screenHeight = document.documentElement.clientHeight || window.innerHeight;
    
    if (screenWidth < 1400) {
        if (scrollValue > 400) {
                fpTilesLeft.classList.add('hovered');
                fpTilesRight.classList.add('hovered');
            } else {
                fpTilesLeft.classList.remove('hovered');
                fpTilesRight.classList.remove('hovered');
            }
    } 
    
})

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// FORM CALCULATOR

$(document).ready(function(){

    $('#select-price1').change(function() {
        var price = parseFloat(this.value.split('|')[0]);
        $('#price1').val('$' + price);
    })

    $('#select-price2').change(function() {
        var price = parseFloat(this.value.split('|')[0]);
        $('#price2').val('$' + price);
    })

    $('select.multiple1').change(function() {
        let subtotalMultipleSum1 = 1;
        $('select.multiple1').each(function() {
            subtotalMultipleSum1 *= parseFloat($(this).val());
        })
        $('#subtotal-multiple1').val(subtotalMultipleSum1).change();
    })
    
    $('#select-price3').change(function() {
        var price = parseFloat(this.value.split('|')[0]);
        $('#price3').val('$' + price);
    })

    $('select.multiple2').change(function() {
        let subtotalMultipleSum1 = 1;
        $('select.multiple2').each(function() {
            subtotalMultipleSum1 *= parseFloat($(this).val());
        })
        $('#subtotal-multiple2').val(subtotalMultipleSum1).change();
    })

    $('#select-price4').change(function() {
        var price = parseFloat(this.value.split('|')[0]);
        $('#price4').val('$' + price);
    })

    $('#select-price5').change(function() {
        var price = parseFloat(this.value.split('|')[0]);
        $('#price5').val('$' + price);
    })

    $('#select-price6').change(function() {
        var price = parseFloat(this.value.split('|')[0]);
        $('#price6').val('$' + price);
    })

    $('#select-price7').change(function() {
        var price = parseFloat(this.value.split('|')[0]);
        $('#price7').val('$' + price);
    })

    $('#select-price8').change(function() {
        var price = parseFloat(this.value.split('|')[0]);
        $('#price1').val('$' + price);
    })

    $('#select-price8').change(function() {
        var price = parseFloat(this.value.split('|')[0]);
        $('#price1').val('$' + price);
    })

    $('#select-price9').change(function() {
        var price = parseFloat(this.value.split('|')[0]);
        $('#price9').val('$' + price);
    })

    $('#select-price10').change(function() {
        var price = parseFloat(this.value.split('|')[0]);
        $('#price10').val('$' + price);
    })

    $('.price3-option').change(function() {
        let totalCheck1 = 0;
        $('.price3-option').each(function() {
            if( $(this).is(':checked') ) {
            totalCheck1 += parseFloat($(this).val());
            }
        })
        $('#price20').val(totalCheck1).change();
    })
    
    $('.price4-option').change(function() {
        let totalCheck1 = 0;
        $('.price4-option').each(function() {
            if( $(this).is(':checked') ) {
            totalCheck1 += parseFloat($(this).val());
            }
        })
        $('#price21').val(totalCheck1).change();
    })

    $('#select-price11').change(function() {
        var price = parseFloat(this.value.split('|')[0]);
        $('#price11').val('$' + price);
    })

    $('#select-price12').change(function() {
        var price = parseFloat(this.value.split('|')[0]);
        $('#price12').val('$' + price);
    })

    $('#select-price13').change(function() {
        var price = parseFloat(this.value.split('|')[0]);
        $('#price13').val('$' + price);
    })

    $('#select-price14').change(function() {
        var price = parseFloat(this.value.split('|')[0]);
        $('#price14').val('$' + price);
    })

    $('#select-price15').change(function() {
        var price = parseFloat(this.value.split('|')[0]);
        $('#price15').val('$' + price);
    })

    $('#select-price16').change(function() {
        var price = parseFloat(this.value.split('|')[0]);
        $('#price16').val('$' + price);
    })

    $('#select-price17').change(function() {
        var price = parseFloat(this.value.split('|')[0]);
        $('#price17').val('$' + price);
    })

    $('#select-price18').change(function() {
        var price = parseFloat(this.value.split('|')[0]);
        $('#price18').val('$' + price);
    })

    $('#select-price19').change(function() {
        var price = parseFloat(this.value.split('|')[0]);
        $('#price19').val('$' + price);
    })

    $('.price-check').change(function() {
        let totalCheck = 0;
        $('.price-check').each(function() {
            totalCheck += parseFloat($(this).val());
        })
        $('input.total-check').val(totalCheck).change();
    })
    
    $('select.add').change(function() {
        let totalSimpleSum = 0;
        $('select.add').each(function() {
            totalSimpleSum += parseFloat($(this).val());
        })
        $('input.total-simple').val(totalSimpleSum).change();
    })

    $('.subtotal-multiple').change(function() {
        let totalMultipleSum = 0;
        $('.subtotal-multiple').each(function() {
            totalMultipleSum += parseFloat($(this).val());
        })
        $('input.total-multiple').val(totalMultipleSum).change();
    })

    $('input#sum').change(function() {
        let totalSum = 0;
        $('input#sum').each(function() {
            totalSum += parseFloat($(this).val());
        })
        $('input.total-field').val("$" + totalSum);
    })


});

// Moonlight

// Forest
function changeMoonlightForestV1() {
    var moonlight = document.getElementById("moonlight");
    var moonlightFirstPage = moonlight.contentWindow.document.getElementsByClassName("first-page")[0];
    var moonlightSecondPage = moonlight.contentWindow.document.getElementsByClassName("second-page")[0];
    var moonlightThirdPage = moonlight.contentWindow.document.getElementsByClassName("third-page")[0];
    var moonlightThirdPageBrowse = moonlight.contentWindow.document.getElementsByClassName("browse")[0];
    moonlightFirstPage.style.backgroundColor = "#002c11";
    moonlightFirstPage.style.color = "white";
    moonlightSecondPage.style.backgroundColor = "#ffdfa3";
    moonlightSecondPage.style.color = "black";
    moonlightThirdPage.style.backgroundColor = "#002c11";
    moonlightThirdPage.style.color = "white";
    moonlightThirdPageBrowse.style.color = "white";
}

function changeMoonlightForestV2() {
    var moonlight = document.getElementById("moonlight");
    var moonlightFirstPage = moonlight.contentWindow.document.getElementsByClassName("first-page")[0];
    var moonlightSecondPage = moonlight.contentWindow.document.getElementsByClassName("second-page")[0];
    var moonlightThirdPage = moonlight.contentWindow.document.getElementsByClassName("third-page")[0];
    var moonlightThirdPageBrowse = moonlight.contentWindow.document.getElementsByClassName("browse")[0];
    moonlightFirstPage.style.backgroundColor = "#ffdfa3";
    moonlightFirstPage.style.color = "black";
    moonlightSecondPage.style.backgroundColor = "#002c11";
    moonlightSecondPage.style.color = "white";
    moonlightThirdPage.style.backgroundColor = "#ffdfa3";
    moonlightThirdPage.style.color = "black";
    moonlightThirdPageBrowse.style.color = "black";
}

function changeMoonlightForestV3() {
    var moonlight = document.getElementById("moonlight");
    var moonlightFirstPage = moonlight.contentWindow.document.getElementsByClassName("first-page")[0];
    var moonlightSecondPage = moonlight.contentWindow.document.getElementsByClassName("second-page")[0];
    var moonlightThirdPage = moonlight.contentWindow.document.getElementsByClassName("third-page")[0];
    var moonlightThirdPageBrowse = moonlight.contentWindow.document.getElementsByClassName("browse")[0];
    moonlightFirstPage.style.backgroundColor = "#002c11";
    moonlightFirstPage.style.color = "white";
    moonlightSecondPage.style.backgroundColor = "#fff";
    moonlightSecondPage.style.color = "black";
    moonlightThirdPage.style.backgroundColor = "#002c11";
    moonlightThirdPage.style.color = "white";
    moonlightThirdPageBrowse.style.color = "white";
}

function changeMoonlightForestV4() {
    var moonlight = document.getElementById("moonlight");
    var moonlightFirstPage = moonlight.contentWindow.document.getElementsByClassName("first-page")[0];
    var moonlightSecondPage = moonlight.contentWindow.document.getElementsByClassName("second-page")[0];
    var moonlightThirdPage = moonlight.contentWindow.document.getElementsByClassName("third-page")[0];
    var moonlightThirdPageBrowse = moonlight.contentWindow.document.getElementsByClassName("browse")[0];
    moonlightFirstPage.style.backgroundColor = "#fff";
    moonlightFirstPage.style.color = "black";
    moonlightSecondPage.style.backgroundColor = "#002c11";
    moonlightSecondPage.style.color = "white";
    moonlightThirdPage.style.backgroundColor = "#fff";
    moonlightThirdPage.style.color = "black";
    moonlightThirdPageBrowse.style.color = "black";
}

function changeMoonlightForestV5() {
    var moonlight = document.getElementById("moonlight");
    var moonlightFirstPage = moonlight.contentWindow.document.getElementsByClassName("first-page")[0];
    var moonlightSecondPage = moonlight.contentWindow.document.getElementsByClassName("second-page")[0];
    var moonlightThirdPage = moonlight.contentWindow.document.getElementsByClassName("third-page")[0];
    var moonlightThirdPageBrowse = moonlight.contentWindow.document.getElementsByClassName("browse")[0];
    moonlightFirstPage.style.backgroundColor = "#ffdfa3";
    moonlightFirstPage.style.color = "black";
    moonlightSecondPage.style.backgroundColor = "#fff";
    moonlightSecondPage.style.color = "black";
    moonlightThirdPage.style.backgroundColor = "#ffdfa3";
    moonlightThirdPage.style.color = "black";
    moonlightThirdPageBrowse.style.color = "black";
}

function changeMoonlightForestV6() {
    var moonlight = document.getElementById("moonlight");
    var moonlightFirstPage = moonlight.contentWindow.document.getElementsByClassName("first-page")[0];
    var moonlightSecondPage = moonlight.contentWindow.document.getElementsByClassName("second-page")[0];
    var moonlightThirdPage = moonlight.contentWindow.document.getElementsByClassName("third-page")[0];
    var moonlightThirdPageBrowse = moonlight.contentWindow.document.getElementsByClassName("browse")[0];
    moonlightFirstPage.style.backgroundColor = "#fff";
    moonlightFirstPage.style.color = "black";
    moonlightSecondPage.style.backgroundColor = "#ffdfa3";
    moonlightSecondPage.style.color = "black";
    moonlightThirdPage.style.backgroundColor = "#fff";
    moonlightThirdPage.style.color = "black";
    moonlightThirdPageBrowse.style.color = "black";
}

// Baby
function changeMoonlightBabyV1() {
    var moonlight = document.getElementById("moonlight");
    var moonlightFirstPage = moonlight.contentWindow.document.getElementsByClassName("first-page")[0];
    var moonlightSecondPage = moonlight.contentWindow.document.getElementsByClassName("second-page")[0];
    var moonlightThirdPage = moonlight.contentWindow.document.getElementsByClassName("third-page")[0];
    var moonlightThirdPageBrowse = moonlight.contentWindow.document.getElementsByClassName("browse")[0];
    moonlightFirstPage.style.backgroundColor = "#DFE5EB";
    moonlightFirstPage.style.color = "black";
    moonlightSecondPage.style.backgroundColor = "#EBDFE8";
    moonlightSecondPage.style.color = "black";
    moonlightThirdPage.style.backgroundColor = "#DFE5EB";
    moonlightThirdPage.style.color = "black";
    moonlightThirdPageBrowse.style.color = "black";
}

function changeMoonlightBabyV2() {
    var moonlight = document.getElementById("moonlight");
    var moonlightFirstPage = moonlight.contentWindow.document.getElementsByClassName("first-page")[0];
    var moonlightSecondPage = moonlight.contentWindow.document.getElementsByClassName("second-page")[0];
    var moonlightThirdPage = moonlight.contentWindow.document.getElementsByClassName("third-page")[0];
    var moonlightThirdPageBrowse = moonlight.contentWindow.document.getElementsByClassName("browse")[0];
    moonlightFirstPage.style.backgroundColor = "#EBDFE8";
    moonlightFirstPage.style.color = "black";
    moonlightSecondPage.style.backgroundColor = "#DFE5EB";
    moonlightSecondPage.style.color = "black";
    moonlightThirdPage.style.backgroundColor = "#EBDFE8";
    moonlightThirdPage.style.color = "black";
    moonlightThirdPageBrowse.style.color = "black";
}

function changeMoonlightBabyV3() {
    var moonlight = document.getElementById("moonlight");
    var moonlightFirstPage = moonlight.contentWindow.document.getElementsByClassName("first-page")[0];
    var moonlightSecondPage = moonlight.contentWindow.document.getElementsByClassName("second-page")[0];
    var moonlightThirdPage = moonlight.contentWindow.document.getElementsByClassName("third-page")[0];
    var moonlightThirdPageBrowse = moonlight.contentWindow.document.getElementsByClassName("browse")[0];
    moonlightFirstPage.style.backgroundColor = "#DFE5EB";
    moonlightFirstPage.style.color = "black";
    moonlightSecondPage.style.backgroundColor = "#fff";
    moonlightSecondPage.style.color = "black";
    moonlightThirdPage.style.backgroundColor = "#DFE5EB";
    moonlightThirdPage.style.color = "black";
    moonlightThirdPageBrowse.style.color = "black";
}

function changeMoonlightBabyV4() {
    var moonlight = document.getElementById("moonlight");
    var moonlightFirstPage = moonlight.contentWindow.document.getElementsByClassName("first-page")[0];
    var moonlightSecondPage = moonlight.contentWindow.document.getElementsByClassName("second-page")[0];
    var moonlightThirdPage = moonlight.contentWindow.document.getElementsByClassName("third-page")[0];
    var moonlightThirdPageBrowse = moonlight.contentWindow.document.getElementsByClassName("browse")[0];
    moonlightFirstPage.style.backgroundColor = "#fff";
    moonlightFirstPage.style.color = "black";
    moonlightSecondPage.style.backgroundColor = "#DFE5EB";
    moonlightSecondPage.style.color = "black";
    moonlightThirdPage.style.backgroundColor = "#fff";
    moonlightThirdPage.style.color = "black";
    moonlightThirdPageBrowse.style.color = "black";
}

function changeMoonlightBabyV5() {
    var moonlight = document.getElementById("moonlight");
    var moonlightFirstPage = moonlight.contentWindow.document.getElementsByClassName("first-page")[0];
    var moonlightSecondPage = moonlight.contentWindow.document.getElementsByClassName("second-page")[0];
    var moonlightThirdPage = moonlight.contentWindow.document.getElementsByClassName("third-page")[0];
    var moonlightThirdPageBrowse = moonlight.contentWindow.document.getElementsByClassName("browse")[0];
    moonlightFirstPage.style.backgroundColor = "#EBDFE8";
    moonlightFirstPage.style.color = "black";
    moonlightSecondPage.style.backgroundColor = "#fff";
    moonlightSecondPage.style.color = "black";
    moonlightThirdPage.style.backgroundColor = "#EBDFE8";
    moonlightThirdPage.style.color = "black";
    moonlightThirdPageBrowse.style.color = "black";
}

function changeMoonlightBabyV6() {
    var moonlight = document.getElementById("moonlight");
    var moonlightFirstPage = moonlight.contentWindow.document.getElementsByClassName("first-page")[0];
    var moonlightSecondPage = moonlight.contentWindow.document.getElementsByClassName("second-page")[0];
    var moonlightThirdPage = moonlight.contentWindow.document.getElementsByClassName("third-page")[0];
    var moonlightThirdPageBrowse = moonlight.contentWindow.document.getElementsByClassName("browse")[0];
    moonlightFirstPage.style.backgroundColor = "#fff";
    moonlightFirstPage.style.color = "black";
    moonlightSecondPage.style.backgroundColor = "#EBDFE8";
    moonlightSecondPage.style.color = "black";
    moonlightThirdPage.style.backgroundColor = "#fff";
    moonlightThirdPage.style.color = "black";
    moonlightThirdPageBrowse.style.color = "black";
}

// Bubblegum
function changeMoonlightBubblegumV1() {
    var moonlight = document.getElementById("moonlight");
    var moonlightFirstPage = moonlight.contentWindow.document.getElementsByClassName("first-page")[0];
    var moonlightSecondPage = moonlight.contentWindow.document.getElementsByClassName("second-page")[0];
    var moonlightThirdPage = moonlight.contentWindow.document.getElementsByClassName("third-page")[0];
    var moonlightThirdPageBrowse = moonlight.contentWindow.document.getElementsByClassName("browse")[0];
    moonlightFirstPage.style.backgroundColor = "#0D1942";
    moonlightFirstPage.style.color = "white";
    moonlightSecondPage.style.backgroundColor = "#F8DBFF";
    moonlightSecondPage.style.color = "black";
    moonlightThirdPage.style.backgroundColor = "#0D1942";
    moonlightThirdPage.style.color = "white";
    moonlightThirdPageBrowse.style.color = "white";
}

function changeMoonlightBubblegumV2() {
    var moonlight = document.getElementById("moonlight");
    var moonlightFirstPage = moonlight.contentWindow.document.getElementsByClassName("first-page")[0];
    var moonlightSecondPage = moonlight.contentWindow.document.getElementsByClassName("second-page")[0];
    var moonlightThirdPage = moonlight.contentWindow.document.getElementsByClassName("third-page")[0];
    var moonlightThirdPageBrowse = moonlight.contentWindow.document.getElementsByClassName("browse")[0];
    moonlightFirstPage.style.backgroundColor = "#F8DBFF";
    moonlightFirstPage.style.color = "black";
    moonlightSecondPage.style.backgroundColor = "#0D1942";
    moonlightSecondPage.style.color = "white";
    moonlightThirdPage.style.backgroundColor = "#F8DBFF";
    moonlightThirdPage.style.color = "black";
    moonlightThirdPageBrowse.style.color = "black";
}

function changeMoonlightBubblegumV3() {
    var moonlight = document.getElementById("moonlight");
    var moonlightFirstPage = moonlight.contentWindow.document.getElementsByClassName("first-page")[0];
    var moonlightSecondPage = moonlight.contentWindow.document.getElementsByClassName("second-page")[0];
    var moonlightThirdPage = moonlight.contentWindow.document.getElementsByClassName("third-page")[0];
    var moonlightThirdPageBrowse = moonlight.contentWindow.document.getElementsByClassName("browse")[0];
    moonlightFirstPage.style.backgroundColor = "#0D1942";
    moonlightFirstPage.style.color = "white";
    moonlightSecondPage.style.backgroundColor = "#fff";
    moonlightSecondPage.style.color = "black";
    moonlightThirdPage.style.backgroundColor = "#0D1942";
    moonlightThirdPage.style.color = "white";
    moonlightThirdPageBrowse.style.color = "white";
}

function changeMoonlightBubblegumV4() {
    var moonlight = document.getElementById("moonlight");
    var moonlightFirstPage = moonlight.contentWindow.document.getElementsByClassName("first-page")[0];
    var moonlightSecondPage = moonlight.contentWindow.document.getElementsByClassName("second-page")[0];
    var moonlightThirdPage = moonlight.contentWindow.document.getElementsByClassName("third-page")[0];
    var moonlightThirdPageBrowse = moonlight.contentWindow.document.getElementsByClassName("browse")[0];
    moonlightFirstPage.style.backgroundColor = "#fff";
    moonlightFirstPage.style.color = "black";
    moonlightSecondPage.style.backgroundColor = "#0D1942";
    moonlightSecondPage.style.color = "white";
    moonlightThirdPage.style.backgroundColor = "#fff";
    moonlightThirdPage.style.color = "black";
    moonlightThirdPageBrowse.style.color = "black";
}

function changeMoonlightBubblegumV5() {
    var moonlight = document.getElementById("moonlight");
    var moonlightFirstPage = moonlight.contentWindow.document.getElementsByClassName("first-page")[0];
    var moonlightSecondPage = moonlight.contentWindow.document.getElementsByClassName("second-page")[0];
    var moonlightThirdPage = moonlight.contentWindow.document.getElementsByClassName("third-page")[0];
    var moonlightThirdPageBrowse = moonlight.contentWindow.document.getElementsByClassName("browse")[0];
    moonlightFirstPage.style.backgroundColor = "#F8DBFF";
    moonlightFirstPage.style.color = "black";
    moonlightSecondPage.style.backgroundColor = "#fff";
    moonlightSecondPage.style.color = "black";
    moonlightThirdPage.style.backgroundColor = "#F8DBFF";
    moonlightThirdPage.style.color = "black";
    moonlightThirdPageBrowse.style.color = "black";
}

function changeMoonlightBubblegumV6() {
    var moonlight = document.getElementById("moonlight");
    var moonlightFirstPage = moonlight.contentWindow.document.getElementsByClassName("first-page")[0];
    var moonlightSecondPage = moonlight.contentWindow.document.getElementsByClassName("second-page")[0];
    var moonlightThirdPage = moonlight.contentWindow.document.getElementsByClassName("third-page")[0];
    var moonlightThirdPageBrowse = moonlight.contentWindow.document.getElementsByClassName("browse")[0];
    moonlightFirstPage.style.backgroundColor = "#fff";
    moonlightFirstPage.style.color = "black";
    moonlightSecondPage.style.backgroundColor = "#F8DBFF";
    moonlightSecondPage.style.color = "black";
    moonlightThirdPage.style.backgroundColor = "#fff";
    moonlightThirdPage.style.color = "black";
    moonlightThirdPageBrowse.style.color = "black";
}

// Pistachio
function changeMoonlightPistachioV1() {
    var moonlight = document.getElementById("moonlight");
    var moonlightFirstPage = moonlight.contentWindow.document.getElementsByClassName("first-page")[0];
    var moonlightSecondPage = moonlight.contentWindow.document.getElementsByClassName("second-page")[0];
    var moonlightThirdPage = moonlight.contentWindow.document.getElementsByClassName("third-page")[0];
    var moonlightThirdPageBrowse = moonlight.contentWindow.document.getElementsByClassName("browse")[0];
    moonlightFirstPage.style.backgroundColor = "#EFF3D8";
    moonlightFirstPage.style.color = "black";
    moonlightSecondPage.style.backgroundColor = "#FFE7D1";
    moonlightSecondPage.style.color = "black";
    moonlightThirdPage.style.backgroundColor = "#EFF3D8";
    moonlightThirdPage.style.color = "black";
    moonlightThirdPageBrowse.style.color = "black";
}

function changeMoonlightPistachioV2() {
    var moonlight = document.getElementById("moonlight");
    var moonlightFirstPage = moonlight.contentWindow.document.getElementsByClassName("first-page")[0];
    var moonlightSecondPage = moonlight.contentWindow.document.getElementsByClassName("second-page")[0];
    var moonlightThirdPage = moonlight.contentWindow.document.getElementsByClassName("third-page")[0];
    var moonlightThirdPageBrowse = moonlight.contentWindow.document.getElementsByClassName("browse")[0];
    moonlightFirstPage.style.backgroundColor = "#FFE7D1";
    moonlightFirstPage.style.color = "black";
    moonlightSecondPage.style.backgroundColor = "#EFF3D8";
    moonlightSecondPage.style.color = "black";
    moonlightThirdPage.style.backgroundColor = "#FFE7D1";
    moonlightThirdPage.style.color = "black";
    moonlightThirdPageBrowse.style.color = "black";
}

function changeMoonlightPistachioV3() {
    var moonlight = document.getElementById("moonlight");
    var moonlightFirstPage = moonlight.contentWindow.document.getElementsByClassName("first-page")[0];
    var moonlightSecondPage = moonlight.contentWindow.document.getElementsByClassName("second-page")[0];
    var moonlightThirdPage = moonlight.contentWindow.document.getElementsByClassName("third-page")[0];
    var moonlightThirdPageBrowse = moonlight.contentWindow.document.getElementsByClassName("browse")[0];
    moonlightFirstPage.style.backgroundColor = "#EFF3D8";
    moonlightFirstPage.style.color = "black";
    moonlightSecondPage.style.backgroundColor = "#fff";
    moonlightSecondPage.style.color = "black";
    moonlightThirdPage.style.backgroundColor = "#EFF3D8";
    moonlightThirdPage.style.color = "black";
    moonlightThirdPageBrowse.style.color = "black";
}

function changeMoonlightPistachioV4() {
    var moonlight = document.getElementById("moonlight");
    var moonlightFirstPage = moonlight.contentWindow.document.getElementsByClassName("first-page")[0];
    var moonlightSecondPage = moonlight.contentWindow.document.getElementsByClassName("second-page")[0];
    var moonlightThirdPage = moonlight.contentWindow.document.getElementsByClassName("third-page")[0];
    var moonlightThirdPageBrowse = moonlight.contentWindow.document.getElementsByClassName("browse")[0];
    moonlightFirstPage.style.backgroundColor = "#fff";
    moonlightFirstPage.style.color = "black";
    moonlightSecondPage.style.backgroundColor = "#EFF3D8";
    moonlightSecondPage.style.color = "black";
    moonlightThirdPage.style.backgroundColor = "#fff";
    moonlightThirdPage.style.color = "black";
    moonlightThirdPageBrowse.style.color = "black";
}

function changeMoonlightPistachioV5() {
    var moonlight = document.getElementById("moonlight");
    var moonlightFirstPage = moonlight.contentWindow.document.getElementsByClassName("first-page")[0];
    var moonlightSecondPage = moonlight.contentWindow.document.getElementsByClassName("second-page")[0];
    var moonlightThirdPage = moonlight.contentWindow.document.getElementsByClassName("third-page")[0];
    var moonlightThirdPageBrowse = moonlight.contentWindow.document.getElementsByClassName("browse")[0];
    moonlightFirstPage.style.backgroundColor = "#FFE7D1";
    moonlightFirstPage.style.color = "black";
    moonlightSecondPage.style.backgroundColor = "#fff";
    moonlightSecondPage.style.color = "black";
    moonlightThirdPage.style.backgroundColor = "#FFE7D1";
    moonlightThirdPage.style.color = "black";
    moonlightThirdPageBrowse.style.color = "black";
}

function changeMoonlightPistachioV6() {
    var moonlight = document.getElementById("moonlight");
    var moonlightFirstPage = moonlight.contentWindow.document.getElementsByClassName("first-page")[0];
    var moonlightSecondPage = moonlight.contentWindow.document.getElementsByClassName("second-page")[0];
    var moonlightThirdPage = moonlight.contentWindow.document.getElementsByClassName("third-page")[0];
    var moonlightThirdPageBrowse = moonlight.contentWindow.document.getElementsByClassName("browse")[0];
    moonlightFirstPage.style.backgroundColor = "#fff";
    moonlightFirstPage.style.color = "black";
    moonlightSecondPage.style.backgroundColor = "#FFE7D1";
    moonlightSecondPage.style.color = "black";
    moonlightThirdPage.style.backgroundColor = "#fff";
    moonlightThirdPage.style.color = "black";
    moonlightThirdPageBrowse.style.color = "black";
}

// Vanilla
function changeMoonlightVanillaV1() {
    var moonlight = document.getElementById("moonlight");
    var moonlightFirstPage = moonlight.contentWindow.document.getElementsByClassName("first-page")[0];
    var moonlightSecondPage = moonlight.contentWindow.document.getElementsByClassName("second-page")[0];
    var moonlightThirdPage = moonlight.contentWindow.document.getElementsByClassName("third-page")[0];
    var moonlightThirdPageBrowse = moonlight.contentWindow.document.getElementsByClassName("browse")[0];
    moonlightFirstPage.style.backgroundColor = "#EFDFB6";
    moonlightFirstPage.style.color = "black";
    moonlightSecondPage.style.backgroundColor = "#FFBF74";
    moonlightSecondPage.style.color = "black";
    moonlightThirdPage.style.backgroundColor = "#EFDFB6";
    moonlightThirdPage.style.color = "black";
    moonlightThirdPageBrowse.style.color = "black";
}

function changeMoonlightVanillaV2() {
    var moonlight = document.getElementById("moonlight");
    var moonlightFirstPage = moonlight.contentWindow.document.getElementsByClassName("first-page")[0];
    var moonlightSecondPage = moonlight.contentWindow.document.getElementsByClassName("second-page")[0];
    var moonlightThirdPage = moonlight.contentWindow.document.getElementsByClassName("third-page")[0];
    var moonlightThirdPageBrowse = moonlight.contentWindow.document.getElementsByClassName("browse")[0];
    moonlightFirstPage.style.backgroundColor = "#FFBF74";
    moonlightFirstPage.style.color = "black";
    moonlightSecondPage.style.backgroundColor = "#EFDFB6";
    moonlightSecondPage.style.color = "black";
    moonlightThirdPage.style.backgroundColor = "#FFBF74";
    moonlightThirdPage.style.color = "black";
    moonlightThirdPageBrowse.style.color = "black";
}

function changeMoonlightVanillaV3() {
    var moonlight = document.getElementById("moonlight");
    var moonlightFirstPage = moonlight.contentWindow.document.getElementsByClassName("first-page")[0];
    var moonlightSecondPage = moonlight.contentWindow.document.getElementsByClassName("second-page")[0];
    var moonlightThirdPage = moonlight.contentWindow.document.getElementsByClassName("third-page")[0];
    var moonlightThirdPageBrowse = moonlight.contentWindow.document.getElementsByClassName("browse")[0];
    moonlightFirstPage.style.backgroundColor = "#EFDFB6";
    moonlightFirstPage.style.color = "black";
    moonlightSecondPage.style.backgroundColor = "#fff";
    moonlightSecondPage.style.color = "black";
    moonlightThirdPage.style.backgroundColor = "#EFDFB6";
    moonlightThirdPage.style.color = "black";
    moonlightThirdPageBrowse.style.color = "black";
}

function changeMoonlightVanillaV4() {
    var moonlight = document.getElementById("moonlight");
    var moonlightFirstPage = moonlight.contentWindow.document.getElementsByClassName("first-page")[0];
    var moonlightSecondPage = moonlight.contentWindow.document.getElementsByClassName("second-page")[0];
    var moonlightThirdPage = moonlight.contentWindow.document.getElementsByClassName("third-page")[0];
    var moonlightThirdPageBrowse = moonlight.contentWindow.document.getElementsByClassName("browse")[0];
    moonlightFirstPage.style.backgroundColor = "#fff";
    moonlightFirstPage.style.color = "black";
    moonlightSecondPage.style.backgroundColor = "#EFDFB6";
    moonlightSecondPage.style.color = "black";
    moonlightThirdPage.style.backgroundColor = "#fff";
    moonlightThirdPage.style.color = "black";
    moonlightThirdPageBrowse.style.color = "black";
}

function changeMoonlightVanillaV5() {
    var moonlight = document.getElementById("moonlight");
    var moonlightFirstPage = moonlight.contentWindow.document.getElementsByClassName("first-page")[0];
    var moonlightSecondPage = moonlight.contentWindow.document.getElementsByClassName("second-page")[0];
    var moonlightThirdPage = moonlight.contentWindow.document.getElementsByClassName("third-page")[0];
    var moonlightThirdPageBrowse = moonlight.contentWindow.document.getElementsByClassName("browse")[0];
    moonlightFirstPage.style.backgroundColor = "#FFBF74";
    moonlightFirstPage.style.color = "black";
    moonlightSecondPage.style.backgroundColor = "#fff";
    moonlightSecondPage.style.color = "black";
    moonlightThirdPage.style.backgroundColor = "#FFBF74";
    moonlightThirdPage.style.color = "black";
    moonlightThirdPageBrowse.style.color = "black";
}

function changeMoonlightVanillaV6() {
    var moonlight = document.getElementById("moonlight");
    var moonlightFirstPage = moonlight.contentWindow.document.getElementsByClassName("first-page")[0];
    var moonlightSecondPage = moonlight.contentWindow.document.getElementsByClassName("second-page")[0];
    var moonlightThirdPage = moonlight.contentWindow.document.getElementsByClassName("third-page")[0];
    var moonlightThirdPageBrowse = moonlight.contentWindow.document.getElementsByClassName("browse")[0];
    moonlightFirstPage.style.backgroundColor = "#fff";
    moonlightFirstPage.style.color = "black";
    moonlightSecondPage.style.backgroundColor = "#FFBF74";
    moonlightSecondPage.style.color = "black";
    moonlightThirdPage.style.backgroundColor = "#fff";
    moonlightThirdPage.style.color = "black";
    moonlightThirdPageBrowse.style.color = "black";
}

// Mint
function changeMoonlightMintV1() {
    var moonlight = document.getElementById("moonlight");
    var moonlightFirstPage = moonlight.contentWindow.document.getElementsByClassName("first-page")[0];
    var moonlightSecondPage = moonlight.contentWindow.document.getElementsByClassName("second-page")[0];
    var moonlightThirdPage = moonlight.contentWindow.document.getElementsByClassName("third-page")[0];
    var moonlightThirdPageBrowse = moonlight.contentWindow.document.getElementsByClassName("browse")[0];
    moonlightFirstPage.style.backgroundColor = "#EFB6BA";
    moonlightFirstPage.style.color = "black";
    moonlightSecondPage.style.backgroundColor = "#D0FFF1";
    moonlightSecondPage.style.color = "black";
    moonlightThirdPage.style.backgroundColor = "#EFB6BA";
    moonlightThirdPage.style.color = "black";
    moonlightThirdPageBrowse.style.color = "black";
}

function changeMoonlightMintV2() {
    var moonlight = document.getElementById("moonlight");
    var moonlightFirstPage = moonlight.contentWindow.document.getElementsByClassName("first-page")[0];
    var moonlightSecondPage = moonlight.contentWindow.document.getElementsByClassName("second-page")[0];
    var moonlightThirdPage = moonlight.contentWindow.document.getElementsByClassName("third-page")[0];
    var moonlightThirdPageBrowse = moonlight.contentWindow.document.getElementsByClassName("browse")[0];
    moonlightFirstPage.style.backgroundColor = "#D0FFF1";
    moonlightFirstPage.style.color = "black";
    moonlightSecondPage.style.backgroundColor = "#EFB6BA";
    moonlightSecondPage.style.color = "black";
    moonlightThirdPage.style.backgroundColor = "#D0FFF1";
    moonlightThirdPage.style.color = "black";
    moonlightThirdPageBrowse.style.color = "black";
}

function changeMoonlightMintV3() {
    var moonlight = document.getElementById("moonlight");
    var moonlightFirstPage = moonlight.contentWindow.document.getElementsByClassName("first-page")[0];
    var moonlightSecondPage = moonlight.contentWindow.document.getElementsByClassName("second-page")[0];
    var moonlightThirdPage = moonlight.contentWindow.document.getElementsByClassName("third-page")[0];
    var moonlightThirdPageBrowse = moonlight.contentWindow.document.getElementsByClassName("browse")[0];
    moonlightFirstPage.style.backgroundColor = "#EFB6BA";
    moonlightFirstPage.style.color = "black";
    moonlightSecondPage.style.backgroundColor = "#fff";
    moonlightSecondPage.style.color = "black";
    moonlightThirdPage.style.backgroundColor = "#EFB6BA";
    moonlightThirdPage.style.color = "black";
    moonlightThirdPageBrowse.style.color = "black";
}

function changeMoonlightMintV4() {
    var moonlight = document.getElementById("moonlight");
    var moonlightFirstPage = moonlight.contentWindow.document.getElementsByClassName("first-page")[0];
    var moonlightSecondPage = moonlight.contentWindow.document.getElementsByClassName("second-page")[0];
    var moonlightThirdPage = moonlight.contentWindow.document.getElementsByClassName("third-page")[0];
    var moonlightThirdPageBrowse = moonlight.contentWindow.document.getElementsByClassName("browse")[0];
    moonlightFirstPage.style.backgroundColor = "#fff";
    moonlightFirstPage.style.color = "black";
    moonlightSecondPage.style.backgroundColor = "#EFB6BA";
    moonlightSecondPage.style.color = "black";
    moonlightThirdPage.style.backgroundColor = "#fff";
    moonlightThirdPage.style.color = "black";
    moonlightThirdPageBrowse.style.color = "black";
}

function changeMoonlightMintV5() {
    var moonlight = document.getElementById("moonlight");
    var moonlightFirstPage = moonlight.contentWindow.document.getElementsByClassName("first-page")[0];
    var moonlightSecondPage = moonlight.contentWindow.document.getElementsByClassName("second-page")[0];
    var moonlightThirdPage = moonlight.contentWindow.document.getElementsByClassName("third-page")[0];
    var moonlightThirdPageBrowse = moonlight.contentWindow.document.getElementsByClassName("browse")[0];
    moonlightFirstPage.style.backgroundColor = "#D0FFF1";
    moonlightFirstPage.style.color = "black";
    moonlightSecondPage.style.backgroundColor = "#fff";
    moonlightSecondPage.style.color = "black";
    moonlightThirdPage.style.backgroundColor = "#D0FFF1";
    moonlightThirdPage.style.color = "black";
    moonlightThirdPageBrowse.style.color = "black";
}

function changeMoonlightMintV6() {
    var moonlight = document.getElementById("moonlight");
    var moonlightFirstPage = moonlight.contentWindow.document.getElementsByClassName("first-page")[0];
    var moonlightSecondPage = moonlight.contentWindow.document.getElementsByClassName("second-page")[0];
    var moonlightThirdPage = moonlight.contentWindow.document.getElementsByClassName("third-page")[0];
    var moonlightThirdPageBrowse = moonlight.contentWindow.document.getElementsByClassName("browse")[0];
    moonlightFirstPage.style.backgroundColor = "#fff";
    moonlightFirstPage.style.color = "black";
    moonlightSecondPage.style.backgroundColor = "#D0FFF1";
    moonlightSecondPage.style.color = "black";
    moonlightThirdPage.style.backgroundColor = "#fff";
    moonlightThirdPage.style.color = "black";
    moonlightThirdPageBrowse.style.color = "black";
}