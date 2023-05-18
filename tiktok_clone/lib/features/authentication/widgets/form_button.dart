import 'package:flutter/material.dart';
import 'package:tictokclone/constants/sizes.dart';
import 'package:tictokclone/utils.dart';

class FormButton extends StatelessWidget {
  const FormButton({
    super.key,
    required this.disabled,
  });

  final bool disabled;

  @override
  Widget build(BuildContext context) {
    return FractionallySizedBox(
      widthFactor: 1,
      child: AnimatedContainer(
        duration: const Duration(
          milliseconds: 500,
        ),
        padding: const EdgeInsets.symmetric(
          vertical: Sizes.size16,
        ),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(Sizes.size5),
          color: disabled
              ? isDarkMode(context)
                  ? Colors.grey.shade500
                  : Colors.grey.shade300
              : Theme.of(context).primaryColor,
        ),
        child: AnimatedDefaultTextStyle(
          duration: const Duration(
            milliseconds: 500,
          ),
          style: TextStyle(
            color: disabled ? Colors.grey.shade400 : Colors.white,
            fontSize: Sizes.size16,
            fontWeight: FontWeight.w600,
          ),
          child: const Text(
            'Next',
            textAlign: TextAlign.center,
          ),
        ),
      ),
    );
  }
}
